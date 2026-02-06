// 3D Cube Scroll Effect
class CubeScroll {
    constructor() {
        this.currentPage = 1;
        this.totalPages = 3;
        this.isAnimating = false;
        this.cubeWrapper = document.getElementById('cubeWrapper');
        this.touchStartY = 0;
        this.touchEndY = 0;
        
        this.init();
    }
    
    init() {
        // Set initial state
        this.updateCube();
        this.createIndicators();
        this.createScrollIndicator();
        
        // Event listeners
        window.addEventListener('wheel', this.handleWheel.bind(this), { passive: false });
        window.addEventListener('keydown', this.handleKeyboard.bind(this));
        window.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
        window.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
        
        // Prevent default scroll
        document.body.style.overflow = 'hidden';
    }
    
    handleWheel(e) {
        if (this.isAnimating) {
            e.preventDefault();
            return;
        }
        
        e.preventDefault();
        
        // Increase threshold to prevent accidental scrolling
        if (Math.abs(e.deltaY) > 30) {
            if (e.deltaY > 0) {
                // Scroll down
                this.nextPage();
            } else {
                // Scroll up
                this.prevPage();
            }
        }
    }
    
    handleKeyboard(e) {
        if (this.isAnimating) return;
        
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            this.nextPage();
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            this.prevPage();
        }
    }
    
    handleTouchStart(e) {
        this.touchStartY = e.touches[0].clientY;
    }
    
    handleTouchEnd(e) {
        if (this.isAnimating) return;
        
        this.touchEndY = e.changedTouches[0].clientY;
        const diff = this.touchStartY - this.touchEndY;
        
        // Increase threshold to prevent accidental page changes
        if (Math.abs(diff) > 80) {
            if (diff > 0) {
                this.nextPage();
            } else {
                this.prevPage();
            }
        }
    }
    
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.updateCube();
        }
    }
    
    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updateCube();
        }
    }
    
    goToPage(page) {
        if (page >= 1 && page <= this.totalPages && page !== this.currentPage && !this.isAnimating) {
            this.currentPage = page;
            this.updateCube();
        }
    }
    
    updateCube() {
        this.isAnimating = true;
        this.cubeWrapper.setAttribute('data-current', this.currentPage);
        
        // Update indicators
        this.updateIndicators();
        
        // Hide scroll indicator on last page
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.style.opacity = this.currentPage === this.totalPages ? '0' : '0.7';
        }
        
        // Reset animation lock after transition
        setTimeout(() => {
            this.isAnimating = false;
        }, 1500);
    }
    
    createIndicators() {
        const container = document.createElement('div');
        container.className = 'page-indicators';
        
        for (let i = 1; i <= this.totalPages; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'page-indicator';
            if (i === 1) indicator.classList.add('active');
            indicator.addEventListener('click', () => this.goToPage(i));
            container.appendChild(indicator);
        }
        
        document.body.appendChild(container);
    }
    
    updateIndicators() {
        const indicators = document.querySelectorAll('.page-indicator');
        indicators.forEach((indicator, index) => {
            if (index + 1 === this.currentPage) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    createScrollIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.innerHTML = `
            <div class="scroll-arrow"></div>
            <div class="scroll-text">Scroll</div>
        `;
        document.body.appendChild(indicator);
    }
}

// Initialize cube scroll when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CubeScroll();
});
