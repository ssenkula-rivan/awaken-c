// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    setupEventListeners();
    setupSidebarToggle();
    setupSplineNavigation();
});

function setupSplineNavigation() {
    const mobileToggle = document.getElementById('splineMobileToggle');
    const mobileMenu = document.getElementById('splineMobileMenu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Update aria-expanded
            const isExpanded = mobileMenu.classList.contains('active');
            mobileToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('.spline-mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

function setupEventListeners() {
    // Sidebar item interactions
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Sidebar Toggle
function setupSidebarToggle() {
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    const sidebar = document.getElementById('sidebar');
    const contentArea = document.getElementById('contentArea');
    const toggleContainer = document.getElementById('sidebarToggleContainer');
    
    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', () => {
            sidebar.classList.toggle('closed');
            contentArea.classList.toggle('sidebar-closed');
            
            // Update button state
            const isClosed = sidebar.classList.contains('closed');
            sidebarCloseBtn.setAttribute('aria-pressed', !isClosed);
            sidebarCloseBtn.setAttribute('data-state', isClosed ? 'closed' : 'open');
            sidebarCloseBtn.setAttribute('aria-label', isClosed ? 'Open sidebar' : 'Close sidebar');
        });
        
        // Drag functionality
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        
        sidebarCloseBtn.addEventListener('mousedown', (e) => {
            isDragging = true;
            initialX = e.clientX - toggleContainer.offsetLeft;
            initialY = e.clientY - toggleContainer.offsetTop;
            sidebarCloseBtn.style.cursor = 'grabbing';
            toggleContainer.style.transition = 'none';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
                
                toggleContainer.style.left = currentX + 'px';
                toggleContainer.style.top = currentY + 'px';
            }
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
            sidebarCloseBtn.style.cursor = 'pointer';
            toggleContainer.style.transition = '';
        });
        
        sidebarCloseBtn.addEventListener('mouseenter', () => {
            if (!isDragging) {
                sidebarCloseBtn.style.cursor = 'grab';
            }
        });
        
        sidebarCloseBtn.addEventListener('mouseleave', () => {
            if (!isDragging) {
                sidebarCloseBtn.style.cursor = 'pointer';
            }
        });
    }
}

// Tab Management
// (Removed)

// Theme Management
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function changeTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    }
}


// Slide Carousel for Ad Cards
class SlideCarousel {
    constructor(container, interval = 5000) {
        this.container = container;
        this.slides = container.querySelectorAll('.slide-item');
        this.currentSlide = 0;
        this.interval = interval;
        this.startAutoSlide();
    }

    nextSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }

    prevSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => this.nextSlide(), this.interval);
    }

    stopAutoSlide() {
        clearInterval(this.autoSlideInterval);
    }
}

// Initialize carousels
document.addEventListener('DOMContentLoaded', () => {
    const adCardContainer = document.querySelector('.ad-card .slide-container');
    const sideCardContainer = document.querySelector('.side-card .slide-container');

    if (adCardContainer) {
        new SlideCarousel(adCardContainer, 5000);
    }

    if (sideCardContainer) {
        new SlideCarousel(sideCardContainer, 6000);
    }
});

// Video Carousel
class VideoCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dots = document.querySelectorAll('.carousel-dot');
        this.videos = document.querySelectorAll('.carousel-slide video');
        this.currentSlide = 0;
        this.videoSources = [
            'assets/videos/nature-gold.mp4',
            'assets/videos/original-5064de74920cbe1efa0338cb6d6d010e.mp4'
        ];
        
        if (this.slides.length > 0) {
            this.init();
        }
    }

    init() {
        // Set video sources
        this.videos.forEach((video, index) => {
            if (this.videoSources[index]) {
                video.src = this.videoSources[index];
            }
        });

        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Listen for video end events
        this.videos.forEach((video, index) => {
            video.addEventListener('ended', () => {
                if (index === this.currentSlide) {
                    this.nextSlide();
                }
            });
        });

        // Start first video
        if (this.videos[0]) {
            this.videos[0].play();
        }
    }

    goToSlide(index) {
        // Pause all videos
        this.videos.forEach(video => video.pause());

        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');

        // Play current video
        if (this.videos[this.currentSlide]) {
            this.videos[this.currentSlide].currentTime = 0;
            this.videos[this.currentSlide].play();
        }
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
}

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', () => {
    new VideoCarousel();
});


// Real-time Stats Update from API
async function fetchStats() {
    try {
        const response = await fetch('/api/stats');
        if (!response.ok) throw new Error('Failed to fetch stats');
        
        const data = await response.json();
        
        const usersElement = document.getElementById('users-count');
        const visitorsElement = document.getElementById('visitors-count');
        const satisfactionElement = document.getElementById('satisfaction-count');

        if (usersElement && data.activeUsers) {
            usersElement.textContent = data.activeUsers >= 1000 ? (data.activeUsers / 1000).toFixed(1) + 'K' : data.activeUsers;
        }
        if (visitorsElement && data.visitors) {
            visitorsElement.textContent = data.visitors >= 1000 ? (data.visitors / 1000).toFixed(1) + 'K' : data.visitors;
        }
        if (satisfactionElement && data.satisfaction) {
            satisfactionElement.textContent = data.satisfaction + '%';
        }
    } catch (error) {
        console.error('Stats fetch error:', error);
    }
}

// Fetch stats on page load and update every 5 seconds
document.addEventListener('DOMContentLoaded', () => {
    fetchStats();
    setInterval(fetchStats, 5000);
});


// Stats Card Auto-Flex
document.addEventListener('DOMContentLoaded', () => {
    const statsCard = document.querySelector('.stats-card');
    const statItems = document.querySelectorAll('.stat-item');
    let currentIndex = 0;

    function expandCard(index) {
        statsCard.classList.add('expanded');
        
        const titles = ['Active Users', 'Visitors', 'Satisfaction'];
        
        document.getElementById('expanded-title').textContent = titles[index];
        
        const number = statItems[index].querySelector('.stat-number').textContent;
        document.getElementById('expanded-number').textContent = number;
        
        // Update progress bars with random values
        const peakPercent = Math.floor(Math.random() * 100);
        const avgPercent = Math.floor(Math.random() * 100);
        const growthPercent = Math.floor(Math.random() * 100);
        
        document.getElementById('expanded-peak-bar').style.width = peakPercent + '%';
        document.getElementById('expanded-avg-bar').style.width = avgPercent + '%';
        document.getElementById('expanded-growth-bar').style.width = growthPercent + '%';
        
        document.getElementById('expanded-peak').textContent = peakPercent + '%';
        document.getElementById('expanded-avg').textContent = avgPercent + '%';
        document.getElementById('expanded-growth').textContent = growthPercent + '%';
    }

    function collapseCard() {
        statsCard.classList.remove('expanded');
    }

    function autoFlexCycle() {
        // Expand current stat
        expandCard(currentIndex);
        
        // After 8 seconds, collapse and move to next
        setTimeout(() => {
            collapseCard();
            currentIndex = (currentIndex + 1) % 3;
            
            // After 30 seconds pause, expand next stat
            setTimeout(() => {
                autoFlexCycle();
            }, 30000);
        }, 8000);
    }

    // Start continuous auto-flex
    autoFlexCycle();
});
