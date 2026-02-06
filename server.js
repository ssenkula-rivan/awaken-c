const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const compression = require('compression');
const NodeCache = require('node-cache');

const app = express();
const PORT = process.env.PORT || 3000;
const cache = new NodeCache({ stdTTL: 600 });

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'HEAD', 'OPTIONS'],
    credentials: false
}));
app.use(compression());
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d',
    etag: false
}));
app.use(express.json());

// Cache headers middleware
app.use((req, res, next) => {
    res.set({
        'Cache-Control': 'public, max-age=3600',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN'
    });
    next();
});

// Video streaming with aggressive caching
app.get('/api/video/:filename', (req, res) => {
    const filename = req.params.filename;
    const videoPath = path.join(__dirname, 'assets', 'videos', filename);

    if (!videoPath.startsWith(path.join(__dirname, 'assets', 'videos'))) {
        return res.status(403).json({ error: 'Access denied' });
    }

    if (!fs.existsSync(videoPath)) {
        return res.status(404).json({ error: 'Video not found' });
    }

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    res.set({
        'Cache-Control': 'public, max-age=86400',
        'Accept-Ranges': 'bytes',
        'Content-Type': 'video/mp4'
    });

    if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        if (start >= fileSize) {
            res.status(416).send('Requested Range Not Satisfiable');
            return;
        }

        const chunksize = end - start + 1;
        res.status(206);
        res.set({
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Content-Length': chunksize
        });

        res.sendFile(videoPath, { start, end });
    } else {
        res.set('Content-Length', fileSize);
        res.sendFile(videoPath);
    }
});

// Image streaming with caching
app.get('/api/image/:filename', (req, res) => {
    const filename = req.params.filename;
    const imagePath = path.join(__dirname, 'assets', 'images', filename);

    if (!imagePath.startsWith(path.join(__dirname, 'assets', 'images'))) {
        return res.status(403).json({ error: 'Access denied' });
    }

    if (!fs.existsSync(imagePath)) {
        return res.status(404).json({ error: 'Image not found' });
    }

    res.set('Cache-Control', 'public, max-age=604800');
    res.sendFile(imagePath);
});

// Stats API with caching
app.get('/api/stats', (req, res) => {
    const cacheKey = 'stats';
    let stats = cache.get(cacheKey);

    if (!stats) {
        stats = {
            activeUsers: Math.floor(Math.random() * 5000) + 1000,
            visitors: Math.floor(Math.random() * 50000) + 10000,
            satisfaction: Math.floor(Math.random() * 10) + 90
        };
        cache.set(cacheKey, stats);
    }

    res.set('Cache-Control', 'public, max-age=30');
    res.json(stats);
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
