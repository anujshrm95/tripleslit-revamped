import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import AuroraBackground from './AuroraBackground';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20">
            <AuroraBackground />

            <div className="layout-grid relative z-10 w-full">
                <div className="flex flex-col items-start max-w-5xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="section-label"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary-cyan animate-pulse"></span>
                        Available for Q1 2026
                    </motion.div>

                    {/* Heading - Fluid Typography handled in index.css */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="font-bold tracking-tighter mb-8"
                    >
                        Build products that <br className="hidden md:block" />
                        <span className="text-gradient-color">define the future.</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/60 max-w-2xl mb-12 font-light text-lg md:text-xl leading-relaxed"
                    >
                        We are a premium digital product studio. We partner with ambitious
                        brands to design, build, and ship world-class software at
                        breakneck speeds.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                    >
                        <a href="#contact" className="btn-hot group decoration-none">
                            Start Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button className="btn-secondary flex items-center justify-center gap-3 group">
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="w-3 h-3 fill-black ml-0.5" />
                            </div>
                            Showreel
                        </button>
                    </motion.div>
                </div>

                {/* Floating Stats / Elements for Desktop Parallax */}
                <motion.div
                    style={{ y: y2 }}
                    className="hidden lg:block absolute right-0 top-1/4 w-64 glass-panel p-6 rotate-3 hover:rotate-0 transition-transform"
                >
                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-cyan to-primary-purple mb-2">
                        99.9%
                    </div>
                    <div className="text-sm text-white/60">Uptime Guarantee across all deployed infrastructure</div>
                </motion.div>

                <motion.div
                    style={{ y: y1 }}
                    className="hidden lg:block absolute right-20 bottom-20 w-72 glass-panel p-6 -rotate-2 hover:rotate-0 transition-transform"
                >
                    <div className="flex -space-x-3 mb-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 backdrop-blur-md flex items-center justify-center text-xs">
                                U{i}
                            </div>
                        ))}
                    </div>
                    <div className="text-sm font-medium">Trusted by 40+ engineering teams worldwide</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
