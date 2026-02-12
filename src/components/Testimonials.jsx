import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const testimonials = [
    {
        quote: "TripleSlited transformed our entire digital infrastructure. Their AI integration saved us 200+ hours per month.",
        name: "Sarah Chen",
        role: "CTO, NexGen Labs",
        stars: 5
    },
    {
        quote: "Working with their team felt like having a world-class engineering department in-house. Outstanding delivery.",
        name: "Marcus Rivera",
        role: "Founder, Hyperion Ventures",
        stars: 5
    },
    {
        quote: "They took our vague idea and turned it into a product that attracted $2M in funding. True partners.",
        name: "Aisha Patel",
        role: "CEO, ClearPath Health",
        stars: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-28 relative">
            <div className="layout-grid">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="section-label">Client Stories</div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Trusted by leaders<br />
                        who <span className="text-gradient">demand the best</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <SpotlightCard
                            key={i}
                            className="p-8 flex flex-col justify-between"
                        >
                            <div>
                                <Quote className="w-8 h-8 text-primary-cyan opacity-50 mb-6" />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.stars)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-primary-cyan text-primary-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                                    ))}
                                </div>
                                <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                            </div>
                            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-cyan to-primary-purple flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white font-mono">{t.name}</div>
                                    <div className="text-xs text-primary-cyan font-mono">{t.role}</div>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
