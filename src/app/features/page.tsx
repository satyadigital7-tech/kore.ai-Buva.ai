'use client';

import { motion } from 'framer-motion';
import { Receipt, Users, Briefcase, CreditCard, Zap, ShieldCheck, Globe, Cpu, BarChart3, Clock, Sparkles, Layout } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 40, filter: 'blur(5px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
};

export default function FeaturesPage() {
    const productFeatures = [
        {
            icon: <Receipt className="w-6 h-6" />,
            title: "Adaptive Invoicing",
            description: "Agentic AI that learns your project cycles to auto-generate and send professional, GST-ready invoices.",
            color: "blue",
            delay: 0.1
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Agentic HRMS",
            description: "From smart onboarding to holistic performance tracking, our AI agents handle your talent & team management.",
            color: "indigo",
            delay: 0.2
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Predictive CRM",
            description: "Automated leads follow-ups and predictive relationship scoring so you can focus on closing deals.",
            color: "purple",
            delay: 0.3
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Zero-Error Payroll",
            description: "Automated tax compliance and instant localized payments for your global team with zero processing errors.",
            color: "emerald",
            delay: 0.4
        },
    ];

    const platformCapabilities = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Agentic Automation",
            description: "Proactive AI agents that don't just notify you, they take action on repetitive business tasks.",
            color: "blue",
            delay: 0.5
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Universal Sync",
            description: "One-click connection to your bank, team apps, and customer data sources for a real-time business pulse.",
            color: "indigo",
            delay: 0.6
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Bank-Grade Security",
            description: "Enterprise-level AES-256 encryption and SOC2 compliance to keep your business data mission-critical safe.",
            color: "purple",
            delay: 0.7
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Unified OS",
            description: "Stop context-switching. Manage your whole business from a single, AI-orchestrated operating system.",
            color: "emerald",
            delay: 0.8
        },
    ];

    return (
        <section className="pt-24 pb-40 px-6 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-32">
                <motion.div {...fadeInUp} className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Core Capabilities</motion.div>
                <motion.h1 {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="text-5xl sm:text-7xl font-display font-bold text-neutral-900 dark:text-white mb-6">Designed for Growth.</motion.h1>
                <motion.p {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="text-xl text-neutral-600 dark:text-white/60 leading-relaxed">
                    Explore the specialized tools within Buva AI that empower your
                    business to move faster and scale smarter.
                </motion.p>
            </div>

            <div className="mb-32">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px flex-1 bg-neutral-200 dark:bg-white/10" />
                    <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-[0.3em]">Product Specifics</h2>
                    <div className="h-px flex-1 bg-neutral-200 dark:bg-white/10" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {productFeatures.map((feature, i) => (
                        <FeatureCard key={i} {...feature} />
                    ))}
                </div>
            </div>

            <div className="bg-neutral-900 rounded-[3rem] p-12 sm:p-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -ml-64 -mb-64" />

                <div className="relative z-10">
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Global Platform Powers</h2>
                        <p className="text-neutral-400 text-lg leading-relaxed">The unified intelligence layer that connects all your operations into one seamless flow.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {platformCapabilities.map((feature, i) => (
                            <FeatureCard key={i} {...feature} dark />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description, color, delay, dark }: any) {
    const colorMap: Record<string, string> = {
        blue: 'bg-blue-500/10 text-blue-500',
        indigo: 'bg-indigo-500/10 text-indigo-500',
        purple: 'bg-purple-500/10 text-purple-500',
        emerald: 'bg-emerald-500/10 text-emerald-500',
    };

    return (
        <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay }}
            className={`p-8 rounded-3xl border transition-all duration-300 group ${dark
                ? 'bg-white/5 border-white/10 hover:border-blue-500/50'
                : 'bg-neutral-50 dark:bg-white/5 border-neutral-100 dark:border-white/5 hover:border-blue-500/50 hover:bg-white dark:hover:bg-neutral-900 shadow-sm hover:shadow-xl hover:scale-[1.02]'
                }`}
        >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform ${colorMap[color]}`}>
                {icon}
            </div>
            <h3 className={`text-xl font-bold mb-3 tracking-tight ${dark ? 'text-white' : 'text-neutral-900 dark:text-white'}`}>{title}</h3>
            <p className={`text-sm leading-relaxed ${dark ? 'text-neutral-400' : 'text-neutral-500 dark:text-white/40'}`}>{description}</p>
        </motion.div>
    );
}
