import SpotlightCard from './SpotlightCard';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 relative">
            <div className="layout-grid">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-label">About Us</div>
                        <h2 className="mb-8 text-white text-5xl font-black tracking-tight">
                            Born in the cloud.<br />
                            <span className="text-gradient">Generated for speed.</span>
                        </h2>
                        <p className="text-lg text-white/60 mb-8 leading-relaxed font-mono">
                            We are a new breed of technology partner. We combine the strategic
                            rigor of a consultancy with the raw velocity of a startup.
                            No bloat, no middle-management, just senior engineers shipping value.
                        </p>
                        <div className="flex gap-12">
                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-mono">40+</div>
                                <div className="text-sm text-primary-cyan uppercase tracking-widest font-mono font-bold">Shipped</div>
                            </div>
                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-mono">24h</div>
                                <div className="text-sm text-primary-purple uppercase tracking-widest font-mono font-bold">Support</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Spotlight Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: "⚡", title: "Fast", desc: "Weeks, not months." },
                            { icon: "💎", title: "Premium", desc: "Pixel-perfect default." },
                            { icon: "🛡️", title: "Secure", desc: "Enterprise grade." },
                            { icon: "🤝", title: "Partner", desc: "We are your team." }
                        ].map((item, i) => (
                            <SpotlightCard
                                key={i}
                                className={`p-8 flex flex-col justify-center items-center text-center ${i % 2 !== 0 ? 'sm:mt-12' : ''}`}
                            >
                                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">{item.icon}</div>
                                <h4 className="font-bold mb-2 font-mono text-white text-lg">{item.title}</h4>
                                <p className="text-xs text-white/50 font-mono">{item.desc}</p>
                            </SpotlightCard>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
