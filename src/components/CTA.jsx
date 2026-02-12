import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section id="consulting" className="py-28 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                    {/* Background - Keep Dark for Contrast/Pop */}
                    <div className="absolute inset-0 bg-[#0a0a0a] border border-white/10 rounded-3xl"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary-cyan to-transparent opacity-40"></div>

                    <div className="relative z-10 text-center py-20 md:py-28 px-8">
                        <div className="section-label mx-auto w-fit mb-8 bg-white/10 border border-white/10 text-white">Let&apos;s Build Together</div>

                        {/* Force White Text for this Dark Section */}
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto text-white">
                            Your next chapter starts
                            <br />with a <span className="text-gradient">conversation</span>
                        </h2>

                        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed font-mono">
                            Book a free 30-minute strategy session. We&apos;ll explore your
                            challenges and outline a roadmap — no strings attached.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contact" className="btn-primary no-underline text-black hover:bg-white hover:scale-105">
                                Schedule a Call <ArrowRight className="w-4 h-4 ml-2 inline" />
                            </a>
                            <button className="btn-secondary text-white border-white/20 hover:bg-white/10">
                                View Past Work
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
