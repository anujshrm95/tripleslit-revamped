import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    const links = {
        Services: ['Web Development', 'AI Solutions', 'Cloud Architecture', 'App Development', 'UI/UX Design', 'Consulting'],
        Company: ['About', 'Careers', 'Blog', 'Press'],
        Resources: ['Documentation', 'Case Studies', 'Open Source', 'Partners'],
    };

    return (
        // Revert to transparent/glass footer, not solid black
        <footer className="border-t border-white/5 pt-20 pb-10 relative bg-black/40 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-mono font-bold text-sm">
                                TS
                            </div>
                            <span className="text-white font-bold text-lg tracking-tight font-mono">
                                TripleSlited
                            </span>
                        </div>
                        <p className="text-sm text-white/40 max-w-xs mb-6 leading-relaxed font-mono">
                            A premium technology studio building products
                            that define industries. AI, Cloud, Web — delivered
                            with precision.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Twitter, href: '#' },
                                { icon: Linkedin, href: '#' },
                                { icon: Github, href: '#' },
                            ].map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all no-underline"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 mb-5">{title}</h4>
                            <ul className="flex flex-col gap-3 list-none p-0 m-0">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm font-mono text-white/30 hover:text-white transition-colors no-underline">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/20 font-mono">
                        © {new Date().getFullYear()} TripleSlited. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-white/20 font-mono">
                        <a href="#" className="hover:text-white/50 transition-colors no-underline">Privacy</a>
                        <a href="#" className="hover:text-white/50 transition-colors no-underline">Terms</a>
                        <a href="#" className="hover:text-white/50 transition-colors no-underline">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
