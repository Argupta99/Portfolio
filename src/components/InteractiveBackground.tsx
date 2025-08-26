import { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const createRipple = (x: number, y: number) => {
      const ripple = document.createElement('div');
      ripple.className = 'absolute pointer-events-none rounded-full ripple-effect';
      ripple.style.left = `${x - 50}px`;
      ripple.style.top = `${y - 50}px`;
      ripple.style.width = '100px';
      ripple.style.height = '100px';
      ripple.style.background = 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 30%, transparent 70%)';
      ripple.style.filter = 'blur(2px)';
      
      container.appendChild(ripple);
      
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 1500);
    };

    const animate = () => {
      // Create subtle floating elements
      if (Math.random() < 0.02) {
        const floatingElement = document.createElement('div');
        floatingElement.className = 'absolute pointer-events-none rounded-full opacity-20 floating-particle';
        floatingElement.style.left = `${Math.random() * container.offsetWidth}px`;
        floatingElement.style.top = `${container.offsetHeight + 50}px`;
        floatingElement.style.width = `${Math.random() * 6 + 2}px`;
        floatingElement.style.height = floatingElement.style.width;
        floatingElement.style.background = Math.random() > 0.5 ? '#6366f1' : '#8b5cf6';
        floatingElement.style.filter = 'blur(1px)';
        
        container.appendChild(floatingElement);
        
        setTimeout(() => {
          if (floatingElement.parentNode) {
            floatingElement.parentNode.removeChild(floatingElement);
          }
        }, 8000);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createRipple(x, y);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);
    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    />
  );
};

export default InteractiveBackground;