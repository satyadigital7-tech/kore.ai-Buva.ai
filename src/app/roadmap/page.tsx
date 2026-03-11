'use client';

import { motion } from 'framer-motion';
import { Server, Brain, Rocket } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 40, filter: 'blur(5px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
};

export default function RoadmapPage() {
    const steps = [
        {
            week: "Week 1-3",
            category: "BACKEND",
            title: "Foundation & API Integration",
            description: "PostgreSQL setup, Stripe integration, and connection to Meta, Google, and TikTok APIs. Establishing the AWS infrastructure.",
            icon: <Server className="w-5 h-5" />,
            active: true
        },
        {
            week: "Week 4-5",
            category: "AI PIPELINE",
            title: "DeepSeek & Video Gen",
            description: "Integration of DeepSeek-R1 for ad logic analysis and HunyuanVideo for generating creative assets automatically.",
            icon: <Brain className="w-5 h-5" />,
            active: true,
            delay: 0.1
        },
        {
            week: "Month 2+",
            category: "LAUNCH",
            title: "Beta Launch & Growth",
            description: "Recruiting 50 US & Ethiopian beta users, Product Hunt launch, and scaling paid acquisition channels.",
            icon: <Rocket className="w-5 h-5" />,
            active: false,
            delay: 0.2
        }
    ];

    return (
        <section className="pt-12 pb-20 px-6 max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.h1 {...fadeInUp} className="text-5xl sm:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">Execution Plan</motion.h1>
                <motion.p {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="text-xl text-neutral-600 dark:text-white/60">Our step-by-step journey to revolutionizing Ethiopian advertising.</motion.p>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-300 dark:before:via-neutral-700 before:to-transparent">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: step.delay || 0 }}
                        className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${step.active ? 'is-active' : ''}`}
                    >
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 dark:border-white/20 bg-white dark:bg-neutral-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-shadow ${step.active ? 'bg-emerald-500 dark:bg-emerald-500 border-emerald-500 shadow-[0_0_0_8px_rgba(16,185,129,0.1)]' : ''}`}>
                            <div className={step.active ? 'text-white' : 'text-neutral-500'}>{step.icon}</div>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-emerald-500/50 transition-colors shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                                <span className={`font-bold ${step.active ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-500'}`}>{step.week}</span>
                                <span className="text-xs font-mono text-neutral-400 uppercase">{step.category}</span>
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{step.title}</h3>
                            <p className="text-neutral-500 dark:text-white/50 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
