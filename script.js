// Add to your existing script.js file

// Security section interactions
document.addEventListener('DOMContentLoaded', () => {
  // Animate security cards on scroll
  const securityCards = document.querySelectorAll('.security-card');
  securityCards.forEach(card => {
    observer.observe(card);
  });
  
  // Animate tool cards
  const toolCards = document.querySelectorAll('.tool-card');
  toolCards.forEach(card => {
    observer.observe(card);
  });
  
  // Animate achievement badges
  const badges = document.querySelectorAll('.badge');
  badges.forEach(badge => {
    observer.observe(badge);
  });
  
  // Add hover effects to security cards
  securityCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Add pulse animation to active dots
  setInterval(() => {
    document.querySelectorAll('.dot.active').forEach(dot => {
      dot.style.transform = 'scale(1.2)';
      setTimeout(() => {
        dot.style.transform = 'scale(1)';
      }, 300);
    });
  }, 3000);
  
  // Tool card click effects
  toolCards.forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });
});

// Add this CSS animation to your styles
const securityAnimations = `
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.security-card {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tool-card:hover .tool-icon {
  animation: bounce 0.5s;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.badge:hover .badge-icon {
  animation: rotate 0.5s;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

// Add animations to the document
const animationStyle = document.createElement('style');
animationStyle.textContent = securityAnimations;
document.head.appendChild(animationStyle);