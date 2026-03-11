'use client';

import { motion } from 'framer-motion';
import { LucideIcon, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ComingSoonProps {
    productName: string;
    description: string;
    Icon: LucideIcon;
    color: 'blue' | 'indigo' | 'purple' | 'emerald';
}

const fadeInUp = {
    initial: { opacity: 0, y: 40, filter: 'blur(5px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
};

export default function ComingSoon({ productName, description, Icon, color }: ComingSoonProps) {
    const colorMap = {
        blue: 'from-blue-500/20 to-transparent text-blue-500 border-blue-500/20',
        indigo: 'from-indigo-500/20 to-transparent text-indigo-500 border-indigo-500/20',
        purple: 'from-purple-500/20 to-transparent text-purple-500 border-purple-500/20',
        emerald: 'from-emerald-500/20 to-transparent text-emerald-500 border-emerald-500/20',
    };

    const gradientMap = {
        blue: 'bg-blue-600',
        indigo: 'bg-indigo-600',
        purple: 'bg-purple-600',
        emerald: 'bg-emerald-600',
    };

    return (
        <main className="min-h-screen bg-white dark:bg-black overflow-hidden flex flex-col">

            <div className="flex-1 relative flex items-center justify-center pt-20">
                {/* Abstract Background Shapes */}
                <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] ${color === 'blue' ? 'bg-blue-400' : color === 'indigo' ? 'bg-indigo-400' : color === 'purple' ? 'bg-purple-400' : 'bg-emerald-400'}/10 rounded-full blur-[120px] animate-pulse`} />
                <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] ${color === 'blue' ? 'bg-blue-600' : color === 'indigo' ? 'bg-indigo-600' : color === 'purple' ? 'bg-purple-600' : 'bg-emerald-600'}/5 rounded-full blur-[100px]`} />

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        {...fadeInUp}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 mb-12"
                    >
                        <span className="text-sm font-bold tracking-widest uppercase text-neutral-500 dark:text-white/60">Coming Soon</span>
                    </motion.div>

                    <motion.div
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.1 }}
                        className="mb-12"
                    >
                        <div className={`w-24 h-24 rounded-[2rem] bg-gradient-to-b ${colorMap[color]} flex items-center justify-center mx-auto mb-10 border shadow-2xl group`}>
                            <Icon className="w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h1 className="text-6xl sm:text-8xl font-display font-bold text-neutral-900 dark:text-white mb-8 tracking-tight">
                            Buva <span className={colorMap[color].split(' ')[2]}>{productName}</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-neutral-600 dark:text-white/60 leading-relaxed max-w-2xl mx-auto">
                            {description}
                        </p>
                    </motion.div>

                    <motion.div
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <div className="relative group">
                            <div className={`absolute -inset-1 ${gradientMap[color]} rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
                            <button className="relative px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold flex items-center gap-3 hover:scale-[1.02] transition-all">
                                Get Early Access
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <Link
                            href="/"
                            className="px-8 py-4 rounded-2xl border border-neutral-200 dark:border-white/10 font-bold text-neutral-600 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/5 transition-all"
                        >
                            Back to Home
                        </Link>
                    </motion.div>

                    <motion.div
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.4 }}
                        className="mt-32 pt-20 border-t border-neutral-200 dark:border-white/10"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left opacity-60">
                            <div>
                                <div className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-4">ETA</div>
                                <div className="text-lg font-bold text-neutral-900 dark:text-white">Q3 2026</div>
                            </div>
                            <div>
                                <div className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-4">Status</div>
                                <div className="text-lg font-bold text-neutral-900 dark:text-white">Internal Beta</div>
                            </div>
                            <div>
                                <div className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-4">Build</div>
                                <div className="text-lg font-bold text-neutral-900 dark:text-white">v0.4.2-alpha</div>
                            </div>
                            <div>
                                <div className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-4">Focus</div>
                                <div className="text-lg font-bold text-neutral-900 dark:text-white">Agent Integration</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
