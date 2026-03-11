'use client';

import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 40, filter: 'blur(5px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
};

export default function PricingPage() {
    return (
        <section className="pt-12 pb-20 px-6 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.h1 {...fadeInUp} className="text-5xl sm:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">Simple Pricing</motion.h1>
                <motion.p {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="text-xl text-neutral-600 dark:text-white/60">No hidden fees. Cancel anytime. Prices in USD.</motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {/* Base Plan */}
                <motion.div
                    {...fadeInUp}
                    className="rounded-3xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 p-10 hover:border-emerald-500/30 transition-colors"
                >
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Base Plan</h3>
                    <div className="text-4xl font-bold mb-6">$15 <span className="text-lg font-normal text-neutral-500">/mo</span></div>
                    <p className="text-neutral-500 mb-8">Perfect for freelancers and small Ethiopian businesses.</p>
                    <button className="w-full py-4 rounded-xl border border-neutral-300 dark:border-white/20 hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors font-semibold">Start 7-Day Trial</button>
                    <div className="mt-8 space-y-4">
                        <PricingFeature text="3 Connected Accounts" />
                        <PricingFeature text="Weekly Reports" />
                        <PricingFeature text="5 AI Videos / Month" />
                        <PricingFeature text="Standard Support" />
                    </div>
                </motion.div>

                {/* Premium Plan */}
                <motion.div
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.1 }}
                    className="rounded-3xl border-2 border-emerald-500 bg-neutral-900 dark:bg-black p-10 relative shadow-2xl shadow-emerald-500/20"
                >
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-2xl text-xs font-bold uppercase">Best Value</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Premium Plan</h3>
                    <div className="text-4xl font-bold text-white mb-6">$50 <span className="text-lg font-normal text-neutral-400">/mo</span></div>
                    <p className="text-neutral-400 mb-8">For agencies managing multiple clients.</p>
                    <button className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-colors font-semibold shadow-lg shadow-emerald-500/30">Get Started</button>
                    <div className="mt-8 space-y-4 text-white">
                        <PricingFeature text="Unlimited Accounts" />
                        <PricingFeature text="Real-time Insights" />
                        <PricingFeature text="Unlimited AI Videos" />
                        <PricingFeature text="Voice Cloning" />
                        <PricingFeature text="No Watermark" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function PricingFeature({ text }: { text: string }) {
    return (
        <div className="flex gap-3 text-sm">
            <Check className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>{text}</span>
        </div>
    );
}
