import { motion } from 'framer-motion';
import { Send, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-28 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left — Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <div className="section-label">Get in Touch</div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Let&apos;s make<br />
                            something <span className="text-gradient">great</span>
                        </h2>
                        <p className="text-white/40 text-lg mb-12 max-w-md leading-relaxed">
                            Whether you have a project in mind or just want to explore
                            possibilities — we&apos;d love to hear from you.
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href="mailto:contact@tripleslited.com" className="flex items-center gap-4 group text-white/60 hover:text-white transition-colors no-underline">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    <Mail className="w-5 h-5 text-primary-cyan" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">Email</div>
                                    <div className="text-sm text-white/40">contact@tripleslited.com</div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>

                            <div className="flex items-center gap-4 text-white/60">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-primary-purple" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">Location</div>
                                    <div className="text-sm text-white/40">Remote-first · Worldwide</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel"
                    >
                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-medium text-white/40 uppercase tracking-wider">Name</label>
                                    <input type="text" placeholder="Your name" className="form-input" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-medium text-white/40 uppercase tracking-wider">Email</label>
                                    <input type="email" placeholder="you@company.com" className="form-input" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-white/40 uppercase tracking-wider">Project Type</label>
                                <select className="form-input">
                                    <option value="" className="bg-[#0a0a0a]">Select a service</option>
                                    <option value="web" className="bg-[#0a0a0a]">Web Development</option>
                                    <option value="ai" className="bg-[#0a0a0a]">AI Solutions</option>
                                    <option value="cloud" className="bg-[#0a0a0a]">Cloud Architecture</option>
                                    <option value="mobile" className="bg-[#0a0a0a]">App Development</option>
                                    <option value="consulting" className="bg-[#0a0a0a]">Consulting</option>
                                    <option value="other" className="bg-[#0a0a0a]">Other</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-white/40 uppercase tracking-wider">Tell us more</label>
                                <textarea
                                    rows={4}
                                    placeholder="Describe your project, timeline, and budget range..."
                                    className="form-input resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full mt-2">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                            <p className="text-xs text-white/20 text-center">We typically respond within 24 hours</p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
