'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 40, filter: 'blur(5px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
};

export default function ContactPage() {
    return (
        <section className="pt-12 pb-20 px-6 relative">
            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <motion.span
                        {...fadeInUp}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6"
                    >
                        Beta Access
                    </motion.span>
                    <motion.h2
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-neutral-900 dark:text-white mb-4"
                    >
                        Join the Waitlist
                    </motion.h2>
                    <motion.p
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.2 }}
                        className="text-lg text-neutral-600 dark:text-white/60"
                    >
                        We are accepting 50 beta users for the initial launch.
                    </motion.p>
                </div>

                <motion.form
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.3 }}
                    className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl dark:shadow-none backdrop-blur-sm"
                >
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="col-span-1">
                            <label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Company Name</label>
                            <input type="text" className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition placeholder-neutral-400 dark:placeholder-white/20" placeholder="Acme Agency" />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Work Email</label>
                            <input type="email" className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition placeholder-neutral-400 dark:placeholder-white/20" placeholder="john@company.com" />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Monthly Ad Spend</label>
                            <div className="relative">
                                <select className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition appearance-none cursor-pointer">
                                    <option className="dark:bg-neutral-900">&lt; $1,000 / mo</option>
                                    <option className="dark:bg-neutral-900">$1,000 - $5,000 / mo</option>
                                    <option className="dark:bg-neutral-900">$5,000+ / mo</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-neutral-400" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Primary Platform</label>
                            <div className="relative">
                                <select className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition appearance-none cursor-pointer">
                                    <option className="dark:bg-neutral-900">Facebook / Instagram</option>
                                    <option className="dark:bg-neutral-900">Google Ads</option>
                                    <option className="dark:bg-neutral-900">TikTok Ads</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-neutral-400" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button type="button" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 dark:bg-emerald-500 px-8 py-4 text-sm font-semibold text-white dark:text-neutral-900 hover:opacity-90 transition shadow-lg">
                            Request Access
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
