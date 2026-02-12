import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Wait a bit before unmounting
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 100);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[10000] bg-[#030014] flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                <motion.div
                    className="h-full bg-primary-cyan"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                />
            </div>
            <div className="text-white/40 font-mono text-xs">
                INITIALIZING SYSTEM... {Math.min(100, Math.round(progress))}%
            </div>
        </motion.div>
    );
};

export default Preloader;
