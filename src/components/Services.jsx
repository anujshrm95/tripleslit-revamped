import { ArrowUpRight, Code2, Cpu, Layout } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const services = [
    {
        id: '01',
        icon: Layout,
        title: "Web Architecture",
        desc: "Scalable React/Next.js platforms built for millions of users.",
        tags: ["React", "Performance", "SEO"]
    },
    {
        id: '02',
        icon: Code2,
        title: "AI Solutions",
        desc: "Integration of LLMs and autonomous agents into business logic.",
        tags: ["OpenAI", "Python", "Vector DB"]
    },
    {
        id: '03',
        icon: Cpu,
        title: "Product Design",
        desc: "UI/UX that converts. Design systems that scale with your team.",
        tags: ["Figma", "Motion", "System"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 relative">
            <div className="layout-grid">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <div className="section-label">/// SERVICES_MANIFEST</div>
                        <h2 className="text-white text-5xl md:text-6xl uppercase leading-[0.9] font-black">
                            Engineered <br />
                            <span className="text-white/40">Excellence.</span>
                        </h2>
                    </div>
                </div>

                {/* Grid of Spotlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <SpotlightCard
                                key={i}
                                className="p-10 flex flex-col h-full justify-between group"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-primary-cyan/50 group-hover:bg-primary-cyan/10 transition-colors">
                                            <Icon className="w-6 h-6 text-white group-hover:text-primary-cyan transition-colors" />
                                        </div>
                                        <span className="font-mono text-2xl text-white/10 group-hover:text-primary-cyan transition-colors font-bold">{item.id}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary-cyan transition-all">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs font-mono text-gray-500 uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </SpotlightCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
