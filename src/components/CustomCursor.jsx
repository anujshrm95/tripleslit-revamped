import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Inner Diamond - Instant Response */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-primary-cyan pointer-events-none z-[11000] mix-blend-difference shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                style={{
                    rotate: 45,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    scale: isHovering ? 0.5 : 1, // Shrink slightly when hovering to let outer bracket focus
                }}
                transition={{
                    duration: 0 // Instant movement
                }}
            />

            {/* Outer Tech Square - Follows with slight lag */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-primary-cyan/50 pointer-events-none z-[10999]"
                style={{
                    translateX: '-50%',
                    translateY: '-50%'
                }}
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    scale: isHovering ? 1.4 : 1,
                    rotate: isHovering ? 135 : 0, // Dramatic rotation on hover
                    borderColor: isHovering ? 'var(--color-primary-cyan)' : 'rgba(0, 240, 255, 0.3)',
                    borderWidth: isHovering ? '2px' : '1px'
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 0.2
                }}
            />
        </>
    );
};

export default CustomCursor;
