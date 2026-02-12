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
                    className="relative rounded-3xl overflow-hidden"
                >
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#0a0e1a] to-[#0d0520] border border-white/5 rounded-3xl"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary-cyan to-transparent opacity-40"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-primary-purple to-transparent opacity-30"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-cyan rounded-full blur-[200px] opacity-[0.04]"></div>

                    <div className="relative z-10 text-center py-20 md:py-28 px-8">
                        <div className="section-label mx-auto w-fit">Let&apos;s Build Together</div>

                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
                            Your next chapter starts
                            <br />with a <span className="text-gradient">conversation</span>
                        </h2>

                        <p className="text-white/40 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                            Book a free 30-minute strategy session. We&apos;ll explore your
                            challenges and outline a roadmap — no strings attached.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contact" className="btn-primary no-underline">
                                Schedule a Call <ArrowRight className="w-4 h-4" />
                            </a>
                            <button className="btn-secondary">
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
