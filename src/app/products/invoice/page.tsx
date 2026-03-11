'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Mail,
    Link as LinkIcon,
    Clock,
    Users,
    FileText,
    CheckCircle,
    ArrowRight,
    Zap,
    ShieldCheck,
    Globe,
    Monitor,
    Layout,
    FileCode,
    BarChart,
    MessageSquare,
    Bell,
    CreditCard,
    ChevronDown
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
};

export default function InvoicePage() {
    return (
        <div className="flex flex-col bg-transparent">
            {/* 1. Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden border-b border-neutral-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeInUp}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-8">
                            <Zap className="w-3 h-3 fill-current" />
                            Direct-to-Wallet Invoicing
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-bold text-neutral-900 leading-[1.1] mb-8">
                            Simple Invoicing for <br />
                            <span className="text-blue-600">Modern Businesses</span>
                        </h1>
                        <p className="text-xl text-neutral-700 leading-relaxed mb-10 max-w-lg">
                            Create professional invoices, send them via email or secure link, and track payments — all in one place.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link href="/pricing" className="w-full sm:w-auto h-14 px-10 bg-blue-600 text-white rounded-xl font-bold text-lg flex items-center justify-center hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/20">
                                Start Free
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto h-14 px-10 bg-white border border-neutral-200 text-neutral-900 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-neutral-50 transition-colors">
                                Book Demo
                            </Link>
                        </div>
                        <p className="mt-8 text-sm text-neutral-600 font-medium">Trusted by freelancers and growing teams.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                        className="relative"
                    >
                        <div className="bg-white rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-neutral-100 p-6 relative z-10">
                            <div className="flex justify-between items-center mb-10">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                </div>
                                <div className="text-xs font-bold text-neutral-400 tracking-widest uppercase">Invoice Dashboard</div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-10">
                                <StatCard label="Total Revenue" val="$42,850" change="+12%" />
                                <StatCard label="Pending" val="$8,120" change="-5%" />
                                <StatCard label="Paid" val="$34,730" isPositive />
                            </div>

                            <div className="space-y-4">
                                <InvoiceRow client="Vanguard Media" amount="$1,200" status="Paid" date="May 12" color="emerald" />
                                <InvoiceRow client="Nebula Design" amount="$850" status="Pending" date="May 14" color="amber" />
                                <InvoiceRow client="Helix Corp" amount="$3,400" status="Paid" date="May 15" color="emerald" />
                                <InvoiceRow client="Sync Systems" amount="$2,100" status="Overdue" date="May 10" color="red" />
                            </div>
                        </div>
                        {/* Soft decorative blur */}
                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* 2. Product Overview Section */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div {...fadeInUp} className="order-2 lg:order-1">
                        <div className="relative rounded-[2rem] border border-neutral-200 shadow-2xl overflow-hidden bg-white aspect-[4/3] group">
                            <div className="absolute inset-0 bg-neutral-900 group-hover:bg-neutral-800 transition-colors flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/images/invoice-dashboard.png"
                                    alt="Invoice Dashboard"
                                    fill
                                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-neutral-900/20" />
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur rounded-2xl border border-neutral-100 shadow-xl">
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600"><Layout className="w-6 h-6" /></div>
                                    <div>
                                        <div className="text-sm font-bold text-neutral-900">Adaptive Invoicing</div>
                                        <div className="text-xs text-neutral-600 uppercase tracking-widest font-black">Feature active</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div {...fadeInUp} className="order-1 lg:order-2">
                        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6 leading-tight">Everything You Need to Manage Invoices</h2>
                        <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
                            Buva Invoice helps you create invoices, manage customers, and track payments from one simple dashboard.
                        </p>
                        <ul className="space-y-6 mb-12">
                            <FeatureBullet text="Create invoices instantly" />
                            <FeatureBullet text="Track payment status" />
                            <FeatureBullet text="Manage customers" />
                            <FeatureBullet text="View business reports" />
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* 3. Key Features Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">Built for Accuracy</h2>
                        <p className="text-lg text-neutral-700 max-w-2xl mx-auto">Every tool we build is designed to shave hours off your administrative workflow.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<FileText className="w-6 h-6" />}
                            title="Invoice Creation"
                            desc="Create professional invoices quickly with customer details, automatic tax calculations, and auto-totals."
                        />
                        <FeatureCard
                            icon={<Mail className="w-6 h-6" />}
                            title="Email Invoice Sending"
                            desc="Send invoices directly via email with instant delivery, professional formatting, and PDF attachments."
                        />
                        <FeatureCard
                            icon={<LinkIcon className="w-6 h-6" />}
                            title="Secure Invoice Link"
                            desc="Generate secure shareable links. Customers can view invoices online on any device — no login required."
                        />
                        <FeatureCard
                            icon={<Clock className="w-6 h-6" />}
                            title="Invoice Status Tracking"
                            desc="Monitor the entire lifecycle in real-time: from sent and viewed to paid and overdue."
                        />
                        <FeatureCard
                            icon={<Users className="w-6 h-6" />}
                            title="Customer Management"
                            desc="Store client details, view complete invoice histories, and manage billing contacts in one place."
                        />
                        <FeatureCard
                            icon={<Plus className="w-6 h-6" />}
                            title="Product & Service Catalog"
                            desc="Save your offerings with descriptions and taxes for consistent pricing and lightning-fast invoice creation."
                        />
                        <FeatureCard
                            icon={<ShieldCheck className="w-6 h-6" />}
                            title="GST Support"
                            desc="Native support for the Indian tax system including automated CGST, SGST, and IGST calculations."
                        />
                        <FeatureCard
                            icon={<Bell className="w-6 h-6" />}
                            title="Automated Reminders"
                            desc="Reduce late payments with automatic email follow-ups based on your custom notification schedule."
                        />
                        <FeatureCard
                            icon={<Users className="w-6 h-6" />}
                            title="Team Access"
                            desc="Invite employees and assign role-based permissions to control who can view, edit, or send invoices."
                        />
                        <FeatureCard
                            icon={<BarChart className="w-6 h-6" />}
                            title="Reports & Analytics"
                            desc="Gain insights with a revenue overview, invoice analytics, and real-time payment tracking performance."
                        />
                        <FeatureCard
                            icon={<FileCode className="w-6 h-6" />}
                            title="PDF Generation"
                            desc="Download high-quality PDF invoices instantly for sharing, printing, or archival purposes."
                        />
                        <FeatureCard
                            icon={<Layout className="w-6 h-6" />}
                            title="Invoice Dashboard"
                            desc="A central command center to manage your invoices, customers, and reports with a quick business overview."
                        />
                    </div>
                </div>
            </section>

            {/* 4. How It Works Section */}
            <section className="py-32 border-t border-neutral-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">Zero to Paid in Minutes</h2>
                        <p className="text-neutral-700 text-lg">The most straightforward path to consistent cashflow.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        <div className="hidden md:block absolute top-12 left-[33%] right-[33%] h-px bg-neutral-100 z-0" />

                        <StepItem
                            num="01"
                            icon={<Plus className="w-8 h-8" />}
                            title="Create Invoice"
                            desc="Add your customer and line items. AI-powered fields suggest prices and details."
                        />
                        <StepItem
                            num="02"
                            icon={<Mail className="w-8 h-8" />}
                            title="Send to Customer"
                            desc="One click sends via professional email or copy a secure payment link."
                        />
                        <StepItem
                            num="03"
                            icon={<CreditCard className="w-8 h-8" />}
                            title="Track Payment"
                            desc="Monitor real-time status as the customer views and pays. Funds arrive instantly."
                        />
                    </div>
                </div>
            </section>


            {/* 6. Benefits Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-6">Why Businesses Choose Buva</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <BenefitItem icon={<Zap className="w-6 h-6" />} title="Easy to use interface" desc="No training required. Start invoicing in minutes with our intuitive dashboard." />
                        <BenefitItem icon={<Layout className="w-6 h-6" />} title="Professional invoice templates" desc="Choose from curated templates that match your brand identity perfectly." />
                        <BenefitItem icon={<FileText className="w-6 h-6" />} title="GST-ready invoices" desc="Automated tax calculations for GST, VAT, and local sales taxes." />
                        <BenefitItem icon={<Users className="w-6 h-6" />} title="Team collaboration" desc="Invite your team and set individual permissions for billing and reports." />
                        <BenefitItem icon={<ShieldCheck className="w-6 h-6" />} status="active" title="Secure invoice sharing" desc="Bank-grade encryption for every link and document you send." />
                        <BenefitItem icon={<Plus className="w-6 h-6" />} title="Fast invoice creation" desc="Our agentic AI helps auto-fill repetitive data points instantly." />
                    </div>
                </div>
            </section>

            {/* 7. Pricing Preview Section */}
            <section className="py-32 border-t border-neutral-100">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">Pricing</h2>
                        <p className="text-neutral-700 text-lg">Pick the plan that matches your current scale.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <PricingCard
                            title="Free Plan"
                            price="0"
                            features={["50 invoices per month", "2 users", "Basic reports", "Secure links"]}
                            btnText="Start Free"
                        />
                        <PricingCard
                            title="Pro Plan"
                            price="29"
                            features={["Unlimited invoices", "Team access", "Automated reminders", "Advanced analytics"]}
                            btnText="Go Pro"
                            highlight
                        />
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/pricing" className="text-blue-600 font-bold hover:underline">View full pricing details</Link>
                    </div>
                </div>
            </section>

            {/* 8. Testimonials Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-20">Loved by Builders</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <TestimonialCard
                            quote="Buva Invoice helped us simplify billing and track payments easily. The interface is pure magic."
                            author="Alex Rivers"
                            company="RiverFlow Media"
                            img="AR"
                        />
                        <TestimonialCard
                            quote="The secure links feature alone saved us hours of back-and-forth with clients. Best tool for billing."
                            author="Sarah Chen"
                            company="Apex Studio"
                            img="SC"
                        />
                        <TestimonialCard
                            quote="Automated tax-ready reports make my accountant's life so much easier. Highly recommended."
                            author="Marcus Thorne"
                            company="Thorne Logistics"
                            img="MT"
                        />
                    </div>
                </div>
            </section>

            {/* 9. FAQ Section */}
            <section className="py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Questions & Answers</h2>
                    <div className="space-y-4">
                        <FaqItem question="Do customers need an account to view invoices?" answer="No. Your customers can view and pay their invoices via a secure link without ever needing to sign up for Buva." />
                        <FaqItem question="Can invoices be downloaded as PDF?" answer="Absolutely. Every invoice can be downloaded as a high-quality PDF directly from the dashboard or the secure link." />
                        <FaqItem question="Does Buva support GST?" answer="Yes. We have built-in support for GST, VAT, and custom tax rules based on your business location." />
                        <FaqItem question="Can my team create invoices?" answer="Yes. With our Pro plan, you can invite multiple team members and set custom access levels for invoice creation." />
                    </div>
                </div>
            </section>

            {/* 10. Final CTA Section */}
            <section className="py-40 px-6">
                <motion.div
                    {...fadeInUp}
                    className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] border border-blue-100 p-12 sm:p-24 text-center relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl sm:text-6xl font-black text-neutral-900 mb-8 leading-tight">Start sending professional <br /> invoices in minutes.</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/pricing" className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-2xl shadow-blue-500/30">Start Free Now</Link>
                            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-white text-neutral-900 border border-blue-200 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-colors">Try Buva Invoice</Link>
                        </div>
                        <p className="mt-8 text-neutral-700 text-sm font-medium">No credit card required. Cancellation anytime.</p>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-32 -mb-32" />
                </motion.div>
            </section>
        </div>
    );
}

// --- Components ---

function StatCard({ label, val, change, isPositive }: any) {
    return (
        <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 shadow-sm">
            <div className="text-[10px] font-black uppercase text-neutral-400 mb-1 tracking-tighter">{label}</div>
            <div className="text-lg font-bold text-neutral-900 mb-1">{val}</div>
            {change && (
                <div className={`text-[10px] font-bold ${isPositive ? 'text-emerald-500' : 'text-amber-500'}`}>
                    {change} vs LW
                </div>
            )}
        </div>
    );
}

function InvoiceRow({ client, amount, status, date, color }: any) {
    const colors: any = {
        emerald: 'bg-emerald-50 text-emerald-600',
        amber: 'bg-amber-50 text-amber-600',
        red: 'bg-red-50 text-red-600'
    };
    return (
        <div className="flex items-center justify-between p-4 rounded-xl border border-neutral-50 bg-neutral-50/30">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs uppercase">
                    {client.charAt(0)}
                </div>
                <div>
                    <div className="text-xs font-bold text-neutral-900">{client}</div>
                    <div className="text-[10px] text-neutral-400">{date}</div>
                </div>
            </div>
            <div className="text-right">
                <div className="text-xs font-black text-neutral-900 mb-1">{amount}</div>
                <div className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${colors[color]}`}>
                    {status}
                </div>
            </div>
        </div>
    );
}

function FeatureBullet({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-4 text-neutral-700 font-medium">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <CheckCircle className="w-4 h-4" />
            </div>
            {text}
        </li>
    );
}

function FeatureCard({ icon, title, desc }: any) {
    return (
        <motion.div
            {...fadeInUp}
            className="p-10 rounded-3xl bg-white border border-neutral-100 hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-2 transition-all duration-500 group"
        >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight leading-tight">{title}</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
        </motion.div>
    );
}

function StepItem({ num, icon, title, desc }: any) {
    return (
        <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-24 h-24 rounded-[2rem] bg-white border border-neutral-100 shadow-xl flex items-center justify-center text-blue-600 mb-10 relative">
                {icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white text-[10px] font-black flex items-center justify-center">{num}</div>
            </div>
            <h4 className="text-xl font-bold text-neutral-900 mb-3">{title}</h4>
            <p className="text-sm text-neutral-600 max-w-[240px] leading-relaxed">{desc}</p>
        </div>
    );
}

function GalleryCard({ title, icon, desc }: any) {
    return (
        <div className="p-6 rounded-3xl bg-white border border-neutral-100 shadow-lg group">
            <div className="relative aspect-video rounded-2xl bg-neutral-50 border border-neutral-100 mb-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity" />
                <div className="text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
                    {icon}
                </div>
            </div>
            <h4 className="text-lg font-bold text-neutral-900 mb-2">{title}</h4>
            <p className="text-sm text-neutral-400">{desc}</p>
        </div>
    );
}

function BenefitItem({ icon, title, desc, status }: any) {
    return (
        <div className="flex gap-6 group">
            <div className={`w-14 h-14 shrink-0 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 ${status === 'active' ? 'ring-4 ring-blue-50' : ''}`}>
                {icon}
            </div>
            <div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2">{title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function PricingCard({ title, price, features, btnText, highlight }: any) {
    return (
        <div className={`p-10 rounded-[2.5rem] bg-white border-2 transition-all duration-500 ${highlight ? 'border-blue-600 shadow-2xl scale-[1.05] z-10' : 'border-neutral-100 hover:border-neutral-200 shadow-xl'}`}>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">{title}</h3>
            <div className="flex items-end gap-1 mb-10">
                <span className="text-5xl font-black text-neutral-900">${price}</span>
                <span className="text-neutral-400 font-bold mb-1">/mo</span>
            </div>
            <ul className="space-y-4 mb-12">
                {features.map((f: string) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium text-neutral-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {f}
                    </li>
                ))}
            </ul>
            <Link href="/pricing" className={`w-full h-14 rounded-xl flex items-center justify-center font-bold text-lg transition-all ${highlight ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30' : 'bg-neutral-50 text-neutral-900 hover:bg-neutral-100'}`}>
                {btnText}
            </Link>
        </div>
    );
}

function TestimonialCard({ quote, author, company, img }: any) {
    return (
        <div className="p-10 rounded-3xl bg-white border border-neutral-100 shadow-lg hover:shadow-2xl transition-all duration-500">
            <p className="text-lg italic font-medium text-neutral-800 mb-10 leading-relaxed">"{quote}"</p>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">{img}</div>
                <div>
                    <div className="text-base font-bold text-neutral-900">{author}</div>
                    <div className="text-xs text-neutral-400 uppercase tracking-widest font-black">{company}</div>
                </div>
            </div>
        </div>
    );
}

function FaqItem({ question, answer }: any) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'bg-blue-50/30 border-blue-200' : 'bg-white border-neutral-100'}`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 flex justify-between items-center text-left"
            >
                <span className="text-lg font-bold text-neutral-900">{question}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
