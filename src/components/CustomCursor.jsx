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
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[11000] mix-blend-difference"
            style={{
                translateX: '-50%',
                translateY: '-50%'
            }}
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
                scale: isHovering ? 1.5 : 1, // Subtle scale only
            }}
            transition={{
                duration: 0 // Instant tracking, no lag
            }}
        >
            {/* Simple Tech Diamond - No Spinning, No Lag */}
            <div className={`w-4 h-4 bg-primary-cyan rotate-45 ${isHovering ? 'border-2 border-primary-cyan bg-transparent' : ''} transition-colors duration-200 shadow-[0_0_15px_rgba(0,240,255,0.6)]`} />
        </motion.div>
    );
};

export default CustomCursor;
