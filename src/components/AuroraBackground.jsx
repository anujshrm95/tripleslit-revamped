import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const AuroraBackground = () => {
    // Use motion values for high-performance updates without re-renders
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the glow delayed slightly behind cursor
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Deep Space Base */}
            <div className="absolute inset-0 bg-[#030014]"></div>

            {/* Mouse Follower Glow (Interactive) */}
            <motion.div
                className="absolute rounded-full blur-[120px] opacity-40 mix-blend-screen"
                style={{
                    background: 'radial-gradient(circle, rgba(0,243,255,0.4) 0%, rgba(188,19,254,0.1) 40%, transparent 70%)',
                    left: springX,
                    top: springY,
                    width: 800,
                    height: 800,
                    x: -400, // Center the glow (half width)
                    y: -400 // Center the glow (half height)
                }}
            />

            {/* Moving Blobs (Ambient) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary-purple rounded-full blur-[120px] opacity-20 mix-blend-screen"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary-cyan rounded-full blur-[140px] opacity-20 mix-blend-screen"
            />

            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            ></div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#030014]/90"></div>
        </div>
    );
};

export default AuroraBackground;
