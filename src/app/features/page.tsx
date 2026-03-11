'use client';

import { motion } from 'framer-motion';
import { BarChart2, MessageSquareDashed, Video, Mic, Download, Lock } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 40, filter: 'blur(5px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
};

export default function FeaturesPage() {
    const features = [
        { icon: <BarChart2 className="w-6 h-6" />, title: "Real-time Analytics", description: "Hourly data sync from all platforms via WebSocket connections.", color: "blue", delay: 0.1 },
        { icon: <MessageSquareDashed className="w-6 h-6" />, title: "Reasoning Bot", description: "Diagnosis Bot using DeepSeek-R1 provides specific fixes for low performing ads.", color: "purple", delay: 0.2 },
        { icon: <Video className="w-6 h-6" />, title: "Hunyuan Video", description: "Generate 1080p videos for TikTok and Reels at $0.15/second cost.", color: "emerald", delay: 0.3 },
        { icon: <Mic className="w-6 h-6" />, title: "CosyVoice TTS", description: "Natural sounding voiceovers in English and Chinese with background music mixing.", color: "orange", delay: 0.4 },
        { icon: <Download className="w-6 h-6" />, title: "Data Export", description: "Export reports in PDF/CSV (Base) or JSON (Premium) for client reporting.", color: "pink", delay: 0.5 },
        { icon: <Lock className="w-6 h-6" />, title: "Enterprise Security", description: "Encrypted tokens (AWS KMS) and isolated containers via Kubernetes.", color: "indigo", delay: 0.6 },
    ];

    return (
        <section className="pt-12 pb-20 px-6 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.h1 {...fadeInUp} className="text-5xl sm:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">Platform Features</motion.h1>
                <motion.p {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="text-xl text-neutral-600 dark:text-white/60">Built on a microservices architecture using Go, Python, and Next.js.</motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                    <FeatureCard key={i} {...feature} />
                ))}
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description, color, delay }: any) {
    const colorMap: Record<string, string> = {
        blue: 'bg-blue-500/10 text-blue-500',
        purple: 'bg-purple-500/10 text-purple-500',
        emerald: 'bg-emerald-500/10 text-emerald-500',
        orange: 'bg-orange-500/10 text-orange-500',
        pink: 'bg-pink-500/10 text-pink-500',
        indigo: 'bg-indigo-500/10 text-indigo-500'
    };

    return (
        <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay }}
            className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
        >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${colorMap[color]}`}>
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{title}</h3>
            <p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">{description}</p>
        </motion.div>
    );
}
