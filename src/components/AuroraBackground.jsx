import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const AuroraBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

    // Starfield logic
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Generate static stars to avoid hydration mismatch/jitter, 
        // but animate them with CSS/Framer
        const newStars = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5
        }));
        setStars(newStars);

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
            {/* Animated Starfield */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                        opacity: 0.3
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: star.delay
                    }}
                />
            ))}

            {/* Mouse Follower Glow */}
            <motion.div
                className="absolute rounded-full blur-[120px] opacity-40 mix-blend-screen"
                style={{
                    background: 'radial-gradient(circle, rgba(0,243,255,0.4) 0%, rgba(188,19,254,0.1) 40%, transparent 70%)',
                    left: springX,
                    top: springY,
                    width: 800,
                    height: 800,
                    x: -400,
                    y: -400
                }}
            />

            {/* Moving Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary-purple rounded-full blur-[120px] opacity-20 mix-blend-screen"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-primary-cyan rounded-full blur-[140px] opacity-20 mix-blend-screen"
            />

            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            ></div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505]/80"></div>
        </div>
    );
};

export default AuroraBackground;
