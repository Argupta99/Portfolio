import { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      trail.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      trail.style.opacity = '0';
    };

    const animate = () => {
      const dx = mousePosition.current.x - currentPosition.current.x;
      const dy = mousePosition.current.y - currentPosition.current.y;
      
      currentPosition.current.x += dx * 0.1;
      currentPosition.current.y += dy * 0.1;

      // Update cursor position (fast follow)
      cursor.style.transform = `translate(${mousePosition.current.x - 10}px, ${mousePosition.current.y - 10}px)`;
      
      // Update trail position (smooth follow)
      trail.style.transform = `translate(${currentPosition.current.x - 20}px, ${currentPosition.current.y - 20}px)`;
      
      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 pointer-events-none z-50 transition-opacity duration-300 cursor-dot"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, #8b5cf6 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
          opacity: 0,
        }}
      />
      
      {/* Trailing effect */}
      <div
        ref={trailRef}
        className="fixed w-10 h-10 pointer-events-none z-40 transition-opacity duration-300 cursor-trail"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(8px)',
          opacity: 0,
        }}
      />
    </>
  );
};

export default CursorEffect;