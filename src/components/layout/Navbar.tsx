'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Receipt, Users, Briefcase, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Maintain standard light theme by default
        document.documentElement.classList.remove('dark');

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: 'Products',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                {
                    name: 'Invoice',
                    href: '/products/invoice',
                    icon: <Receipt className="w-5 h-5 text-blue-500" />,
                    desc: 'Automated billing & GST-ready invoicing'
                },
                {
                    name: 'HRMS',
                    href: '/products/hrms',
                    icon: <Users className="w-5 h-5 text-indigo-500" />,
                    desc: 'Agentic talent & team management'
                },
                {
                    name: 'CRM',
                    href: '/products/crm',
                    icon: <Briefcase className="w-5 h-5 text-purple-500" />,
                    desc: 'Predictive customer relationship tools'
                },
                {
                    name: 'Payroll',
                    href: '/products/payroll',
                    icon: <CreditCard className="w-5 h-5 text-emerald-500" />,
                    desc: 'Zero-error global payroll automation'
                },
            ]
        },
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Agent Platform', href: '#', hasDropdown: true },
        { name: 'More', href: '#', hasDropdown: true },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md border-b border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-black/80 shadow-sm' : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group z-50">
                        <div className="relative w-10 h-10 overflow-hidden">
                            <Image
                                src="/images/logo.png"
                                alt="Buva.ai Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition-colors">
                            Buva.ai
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group/item">
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-[15px] font-medium text-neutral-600 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white transition-colors py-2"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown className="w-4 h-4 text-neutral-400 group-hover/item:rotate-180 transition-transform duration-300" />}
                                </Link>

                                {link.hasDropdown && (
                                    <div className={`absolute top-full ${link.name === 'Products' ? '-left-20' : 'left-0'} pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-300`}>
                                        <div className={`${link.name === 'Products' ? 'w-[640px]' : 'w-56'} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-2xl p-4 shadow-2xl`}>
                                            {link.dropdownItems ? (
                                                <div className={`grid ${link.name === 'Products' ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
                                                    {link.dropdownItems.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-white/5 transition-all group/subitem"
                                                        >
                                                            <div className="w-10 h-10 rounded-lg bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center shrink-0 group-hover/subitem:bg-white dark:group-hover/subitem:bg-neutral-700 shadow-sm transition-colors border border-transparent group-hover/subitem:border-neutral-100 dark:group-hover/subitem:border-white/10">
                                                                {item.icon}
                                                            </div>
                                                            <div>
                                                                <div className="text-[15px] font-bold text-neutral-900 dark:text-white mb-0.5">{item.name}</div>
                                                                {(item as any).desc && (
                                                                    <div className="text-xs text-neutral-500 dark:text-white/40 leading-relaxed">{(item as any).desc}</div>
                                                                )}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="p-4">
                                                    <div className="px-3 py-2 text-xs font-semibold text-neutral-400 dark:text-white/40 uppercase tracking-wider">Coming Soon</div>
                                                    <div className="h-24 flex items-center justify-center text-sm text-neutral-400">Loading modules...</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6 z-50">
                        <div className="hidden sm:flex items-center gap-6">
                            <Link href="/login" className="text-[15px] font-medium text-neutral-600 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white transition-colors">
                                Sign in
                            </Link>
                            <Link
                                href="/contact"
                                className="px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                            >
                                GET IN TOUCH
                            </Link>
                        </div>



                        <button
                            className="lg:hidden p-2 text-neutral-600 dark:text-white/80"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-neutral-900 backdrop-blur-xl border-b border-neutral-200 dark:border-white/10 py-6 px-6 shadow-xl z-40 overflow-hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-neutral-600 dark:text-white/70 flex items-center justify-between"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown className="w-5 h-5" />}
                                </Link>
                            ))}
                            <div className="h-px bg-neutral-200 dark:bg-white/10 my-2" />
                            <Link href="/login" className="text-lg font-medium text-neutral-600 dark:text-white/70">Sign in</Link>
                            <Link href="/contact" className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-center font-bold rounded-xl shadow-lg">GET IN TOUCH</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

