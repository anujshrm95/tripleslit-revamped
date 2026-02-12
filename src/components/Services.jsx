import { motion } from 'framer-motion';
import { Globe, Cpu, Cloud, Smartphone, ArrowUpRight } from 'lucide-react';

const services = [
    { title: "Web Platforms", desc: "High-performance marketing sites and web apps.", icon: Globe },
    { title: "AI Integration", desc: "LLMs, agents, and computer vision pipelines.", icon: Cpu },
    { title: "Cloud Infra", desc: "Scalable AWS/GCP architecture and DevOps.", icon: Cloud },
    { title: "Mobile Apps", desc: "Native iOS & Android experiences.", icon: Smartphone },
];

const Services = () => {
    return (
        <section id="services" className="py-24 md:py-32 relative">
            <div className="layout-grid">
                <div className="mb-20 md:mb-32">
                    <div className="section-label">Expertise</div>
                    <h2 className="max-w-3xl">
                        We don't just write code.<br />
                        <span className="text-white/40">We engineer outcomes.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {services.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-panel group aspect-[4/5] md:aspect-auto md:h-[400px] flex flex-col justify-between relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-auto group-hover:bg-primary-cyan group-hover:text-black group-hover:border-transparent transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center ml-auto group-hover:bg-white group-hover:text-black transition-all">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
