import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                // Use translate for 60fps hardware acceleration
                cursorRef.current.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
            }
        };

        // Only add listener on non-touch devices (desktops)
        if (window.matchMedia("(pointer: fine)").matches) {
            window.addEventListener('pointermove', handleMouseMove);
        }

        return () => window.removeEventListener('pointermove', handleMouseMove);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-screen shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-transform duration-100 ease-out will-change-transform"
        />
    );
};

export default CustomCursor;
