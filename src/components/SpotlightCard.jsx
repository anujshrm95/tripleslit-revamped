import { useRef, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(0, 240, 255, 0.35)" }) => {
    const divRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 40%)`;

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`tech-card relative overflow-hidden rounded-xl border border-white/10 bg-white/5 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Spotlight Effect Layer */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background,
                }}
            />

            {/* Content Layer */}
            <div className="relative h-full">
                {children}
            </div>
        </motion.div>
    );
};

export default SpotlightCard;
