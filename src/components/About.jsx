import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 relative border-t border-white/5">
            <div className="layout-grid">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                    <div>
                        <div className="section-label">About Us</div>
                        <h2 className="mb-8">
                            Born in the cloud.<br />
                            Generated for speed.
                        </h2>
                        <p className="text-lg text-white/60 mb-8 leading-relaxed">
                            We are a new breed of technology partner. We combine the strategic
                            rigor of a consultancy with the raw velocity of a startup.
                            No bloat, no middle-management, just senior engineers shipping value.
                        </p>
                        <div className="flex gap-12">
                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-gradient-color mb-2">40+</div>
                                <div className="text-sm text-white/40 uppercase tracking-widest">Shipped</div>
                            </div>
                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-gradient-color mb-2">24h</div>
                                <div className="text-sm text-white/40 uppercase tracking-widest">Support</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="glass-panel p-8 flex flex-col justify-center items-center text-center">
                            <div className="text-3xl mb-4">⚡</div>
                            <h4 className="font-bold mb-2">Fast</h4>
                            <p className="text-xs text-white/40">Weeks, not months.</p>
                        </div>
                        <div className="glass-panel p-8 flex flex-col justify-center items-center text-center mt-0 sm:mt-12">
                            <div className="text-3xl mb-4">💎</div>
                            <h4 className="font-bold mb-2">Premium</h4>
                            <p className="text-xs text-white/40">Pixel-perfect default.</p>
                        </div>
                        <div className="glass-panel p-8 flex flex-col justify-center items-center text-center">
                            <div className="text-3xl mb-4">🛡️</div>
                            <h4 className="font-bold mb-2">Secure</h4>
                            <p className="text-xs text-white/40">Enterprise grade.</p>
                        </div>
                        <div className="glass-panel p-8 flex flex-col justify-center items-center text-center mt-0 sm:mt-12">
                            <div className="text-3xl mb-4">🤝</div>
                            <h4 className="font-bold mb-2">Partner</h4>
                            <p className="text-xs text-white/40">We are your team.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
