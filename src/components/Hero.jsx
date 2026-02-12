import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Globe, Cpu } from 'lucide-react';
import AuroraBackground from './AuroraBackground';

const Ticker = () => (
    <div className="w-full bg-white/5 border-y border-white/10 overflow-hidden py-4 mt-20 relative z-20 backdrop-blur-sm">
        <div className="animate-ticker flex whitespace-nowrap gap-16 items-center">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="flex gap-16 text-white/40 font-mono text-sm uppercase tracking-widest">
                    <span>React / Next.js</span>
                    <span>✦</span>
                    <span>AWS Infrastructure</span>
                    <span>✦</span>
                    <span>AI Agents</span>
                    <span>✦</span>
                    <span>Design Systems</span>
                    <span>✦</span>
                </div>
            ))}
        </div>
    </div>
);

const Hero = () => {
    return (
        <section className="relative min-h-[110vh] flex flex-col pt-32 overflow-hidden">
            <AuroraBackground />

            <div className="layout-grid grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

                {/* Left Content (8 cols) */}
                <div className="lg:col-span-8 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 mb-8"
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-mono text-xs text-green-500 uppercase tracking-widest">System Operational</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9]"
                    >
                        FUTURE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">PROOF</span> <br />
                        SOFTWARE.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-400 max-w-2xl mb-12 font-mono"
                    >
                        TripleSlited is a high-velocity engineering collective. We build pixel-perfect web platforms and AI infrastructure for the next generation of startups.
                    </motion.p>

                    <div className="flex flex-wrap gap-4">
                        <button className="btn-tech">
                            Initiate Project
                        </button>
                        <button className="px-8 py-4 border border-white/20 text-white font-mono text-sm uppercase hover:bg-white/5 transition-colors">
                            View Documentation
                        </button>
                    </div>
                </div>

                {/* Right Content / Density (4 cols) */}
                <div className="lg:col-span-4 hidden lg:flex flex-col gap-4 mt-20">
                    {/* Card 1: Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="tech-card p-6"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <Cpu className="w-6 h-6 text-primary-cyan" />
                            <span className="font-mono text-xs text-white/50">CPU_01</span>
                        </div>
                        <div className="text-4xl font-bold font-mono mb-1">98.2%</div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest">Efficiency Rating</div>
                    </motion.div>

                    {/* Card 2: Code Snippet */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="tech-card p-6 flex-1 min-h-[200px]"
                    >
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="font-mono text-xs text-gray-500 space-y-2">
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">ship</span> = <span className="text-purple-400">async</span> () ={'>'} {'{'}</p>
                            <p className="pl-4"><span className="text-purple-400">await</span> design.refine();</p>
                            <p className="pl-4"><span className="text-purple-400">await</span> code.optimize();</p>
                            <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">"Success"</span>;</p>
                            <p>{'}'}</p>
                        </div>
                    </motion.div>
                </div>

            </div>

            <Ticker />
        </section>
    );
};

export default Hero;
