import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "TripleSlited transformed our entire digital infrastructure. Their AI integration saved us 200+ hours per month in manual processes.",
        name: "Sarah Chen",
        role: "CTO, NexGen Labs",
        stars: 5
    },
    {
        quote: "Working with their team felt like having a world-class engineering department in-house. The quality of delivery was outstanding.",
        name: "Marcus Rivera",
        role: "Founder, Hyperion Ventures",
        stars: 5
    },
    {
        quote: "They took our vague idea and turned it into a product that attracted $2M in funding. True end-to-end partners.",
        name: "Aisha Patel",
        role: "CEO, ClearPath Health",
        stars: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-28 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="section-label">Client Stories</div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Trusted by leaders<br />
                        who <span className="text-gradient">demand the best</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel flex flex-col justify-between"
                        >
                            <div>
                                <Quote className="w-8 h-8 text-primary-cyan opacity-30 mb-4" />
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.stars)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-primary-cyan text-primary-cyan" />
                                    ))}
                                </div>
                                <p className="text-white/70 text-base leading-relaxed mb-8">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                            </div>
                            <div className="pt-6 border-t border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-cyan to-primary-purple flex items-center justify-center text-black font-bold text-sm shrink-0">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-white">{t.name}</div>
                                        <div className="text-xs text-white/40">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
