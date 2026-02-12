import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const services = [
    {
        id: '01',
        title: "Web Architecture",
        desc: "Scalable React/Next.js platforms built for millions of users.",
        tags: ["React", "Performance", "SEO"]
    },
    {
        id: '02',
        title: "AI Solutions",
        desc: "Integration of LLMs and autonomous agents into business logic.",
        tags: ["OpenAI", "Python", "Vector DB"]
    },
    {
        id: '03',
        title: "Product Design",
        desc: "UI/UX that converts. Design systems that scale with your team.",
        tags: ["Figma", "Motion", "System"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 relative border-t border-white/5">
            <div className="layout-grid">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <div className="font-mono text-primary-cyan mb-4 text-sm tracking-widest">/// SERVICES_MANIFEST</div>
                        <h2 className="text-5xl md:text-6xl uppercase leading-[0.9]">
                            Engineered <br />
                            <span className="text-gray-500">Excellence.</span>
                        </h2>
                    </div>
                    <div className="hidden md:block w-32 h-[1px] bg-white/20"></div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {services.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group tech-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:bg-white/5 transition-colors"
                        >
                            {/* Number */}
                            <div className="font-mono text-2xl text-white/20 group-hover:text-primary-cyan transition-colors">
                                {item.id}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:tracking-wide transition-all duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 font-mono text-sm max-w-xl">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex gap-3">
                                {item.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-gray-500 uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Action */}
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
