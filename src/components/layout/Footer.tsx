import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-black py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="relative w-10 h-10 overflow-hidden">
                            <Image
                                src="/images/logo.png"
                                alt="Buva.ai Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                            Buva.ai
                        </span>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-white/50 max-w-sm leading-relaxed mb-6">
                        The premier agentic AI platform for business automation and intelligent advertising intelligence.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-6 uppercase tracking-wider">Product</h4>
                    <ul className="space-y-3 text-sm text-neutral-500 dark:text-white/60">
                        <li><Link href="/" className="hover:text-emerald-500 transition-colors">Platform</Link></li>
                        <li><Link href="/features" className="hover:text-emerald-500 transition-colors">Features</Link></li>
                        <li><Link href="/pricing" className="hover:text-emerald-500 transition-colors">Pricing</Link></li>
                        <li><Link href="/roadmap" className="hover:text-emerald-500 transition-colors">Roadmap</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-6 uppercase tracking-wider">Legal</h4>
                    <ul className="space-y-3 text-sm text-neutral-500 dark:text-white/60">
                        <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-emerald-500 transition-colors">Status</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-200 dark:border-white/10">
                <p className="text-xs text-center text-neutral-400 dark:text-white/30">
                    © 2025 Buva.ai. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
