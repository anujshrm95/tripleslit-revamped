import { motion } from 'framer-motion';
import { Send, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Contact = () => {
    return (
        <section id="contact" className="py-28 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left — Info (Dark Theme) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <div className="section-label">Get in Touch</div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                            Let&apos;s make<br />
                            something <span className="text-primary-cyan">great</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed font-mono">
                            Whether you have a project in mind or just want to explore
                            possibilities — we&apos;d love to hear from you.
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href="mailto:contact@tripleslited.com" className="flex items-center gap-4 group text-white/60 hover:text-white transition-colors no-underline">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white font-mono">Email</div>
                                    <div className="text-sm text-white/50 font-mono">contact@tripleslited.com</div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>

                            <div className="flex items-center gap-4 text-white/60">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/5">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white font-mono">Location</div>
                                    <div className="text-sm text-white/50 font-mono">Remote-first · Worldwide</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Form (Spotlight Tech Card) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                    >
                        <SpotlightCard className="p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-xl">
                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                <Send className="w-12 h-12 text-white/5" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse"></span>
                                INITIALIZE_UPLINK
                            </h3>

                            <form className="flex flex-col gap-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-mono font-bold text-primary-cyan uppercase tracking-wider">Identity</label>
                                        <input type="text" placeholder="NAME" className="form-input bg-black/50 border-white/10 focus:border-primary-cyan/50" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-mono font-bold text-primary-cyan uppercase tracking-wider">Coordinates</label>
                                        <input type="email" placeholder="EMAIL" className="form-input bg-black/50 border-white/10 focus:border-primary-cyan/50" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-mono font-bold text-primary-cyan uppercase tracking-wider">Directive</label>
                                    <select className="form-input bg-black/50 border-white/10 focus:border-primary-cyan/50">
                                        <option value="" className="bg-[#0a0a0a]">SELECT_PROTOCOL</option>
                                        <option value="web" className="bg-[#0a0a0a]">Web Architecture</option>
                                        <option value="ai" className="bg-[#0a0a0a]">AI Systems</option>
                                        <option value="cloud" className="bg-[#0a0a0a]">Cloud Infrastructure</option>
                                        <option value="consulting" className="bg-[#0a0a0a]">Strategic Consulting</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-mono font-bold text-primary-cyan uppercase tracking-wider">Transmission</label>
                                    <textarea
                                        rows={4}
                                        placeholder="ENTER_MESSAGE_DATA..."
                                        className="form-input bg-black/50 border-white/10 focus:border-primary-cyan/50 resize-none"
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-primary w-full mt-4 group relative overflow-hidden">
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        TRANSMIT_DATA <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                                <p className="text-[10px] text-white/30 text-center font-mono uppercase tracking-widest mt-2">
                                    Secure Connection Established
                                </p>
                            </form>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
