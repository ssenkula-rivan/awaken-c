# 3D Cube Scroll Effect

## Overview
Your website now features a stunning 3D cube rotation effect when scrolling between pages. Each section is like a face of a cube that rotates into view.

## How It Works

### Navigation
- **Mouse Wheel**: Scroll up/down to rotate between pages
- **Keyboard**: Use Arrow Up/Down or Page Up/Down keys
- **Touch**: Swipe up/down on mobile devices
- **Page Indicators**: Click the dots on the right side to jump to any page
- **Scroll Indicator**: Animated arrow at the bottom shows you can scroll

### Pages
1. **Page 1**: Video background hero section
2. **Page 2**: "We Grow Brands Online" with animated image grid
3. **Page 3**: Services showcase with trending cards

### Features
- Smooth 3D cube rotation animation
- Fixed navigation bar stays visible
- Page indicators on the right
- Scroll indicator at the bottom
- Fully responsive (works on mobile, tablet, desktop)
- Touch-friendly for mobile devices
- Keyboard navigation support

### Files Added
- `cube-scroll.css` - 3D cube styling and animations
- `cube-scroll.js` - Scroll detection and cube rotation logic

### Customization
To add more pages, edit `cube-scroll.js`:
1. Change `this.totalPages = 3` to your desired number
2. Add more `.cube-face-4`, `.cube-face-5` sections in HTML
3. Add corresponding CSS transforms in `cube-scroll.css`

## Browser Support
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

Enjoy your new 3D cube scroll experience!
