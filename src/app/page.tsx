'use client';

import { motion } from 'framer-motion';
import { Receipt, Users, Briefcase, CreditCard, Wallet, ShieldCheck, Zap, ArrowRight, Check, Shield, Globe, Lock, Cpu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 40, filter: 'blur(5px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 sm:pt-32 sm:pb-48 px-6 text-center max-w-6xl mx-auto overflow-hidden">
        <motion.div {...fadeInUp}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wide mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            The AI-First Business Operating System
          </div>
          <motion.h1
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="text-6xl sm:text-8xl md:text-9xl font-display font-bold tracking-tight text-neutral-900 dark:text-white mb-8 leading-[1.1]"
          >
            Run Your Whole <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500">
              Business on AI
            </span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="text-xl sm:text-2xl text-neutral-600 dark:text-white/60 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Buva.ai is the unified agentic platform that automates your <br className="hidden sm:block" />
            financials, team, customers, and payroll in one seamless pulse.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/pricing" className="w-full sm:w-auto group relative inline-flex items-center justify-center bg-blue-600 text-white h-16 px-10 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
              <span>Start Free Trial</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white h-16 px-10 rounded-full text-lg font-semibold hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors">
              Book a Strategy Call
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Trust & Integration Marquee */}
      <section className="py-16 border-y border-neutral-200 dark:border-white/5 bg-neutral-50/30 dark:bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-neutral-400 dark:text-white/30 uppercase tracking-[0.3em] mb-12">Built for the next generation of industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 dark:invert contrast-125">
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">VOLT.</div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter italic">prism</div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">NEXUS</div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">AURA</div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter uppercase font-serif">Koda</div>
          </div>
        </div>
      </section>

      {/* Core Products Spotlight */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl text-left">
              <motion.div {...fadeInUp} className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">The Solution Suite</motion.div>
              <motion.h2 {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="text-4xl sm:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
                One platform. <br />Four transformative products.
              </motion.h2>
            </div>
            <motion.p {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="text-neutral-500 dark:text-white/40 text-lg max-w-sm text-left">
              Stop context-switching. Buva integrates your most critical operations into a single, AI-orchestrated flow.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              icon={<Receipt className="w-8 h-8" />}
              title="Invoice"
              desc="Automated billing that learns your project cycles and gets you paid 2x faster."
              color="blue"
              href="/products/invoice"
              delay={0.1}
            />
            <ProductCard
              icon={<Users className="w-8 h-8" />}
              title="HRMS"
              desc="Agentic talent management. From smart onboarding to holistic performance tracking."
              color="indigo"
              href="/products/hrms"
              delay={0.2}
            />
            <ProductCard
              icon={<Briefcase className="w-8 h-8" />}
              title="CRM"
              desc="Predictive customer relationships. We handle the follow-ups so you handle the deals."
              color="purple"
              href="/products/crm"
              delay={0.3}
            />
            <ProductCard
              icon={<CreditCard className="w-8 h-8" />}
              title="Payroll"
              desc="Zero-error global payroll. Automated tax compliance and instant localized payments."
              color="emerald"
              href="/products/payroll"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Workflow: The Pulse */}
      <section className="py-32 bg-neutral-900/90 overflow-hidden relative backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">Universal Sync.<br /><span className="text-blue-500">Zero Latency.</span></h2>
            <div className="space-y-10">
              <WorkflowStep
                icon={<Globe className="w-6 h-6 text-blue-400" />}
                title="Global Connection"
                desc="Sync your bank, team apps, and customer data sources in one click."
              />
              <WorkflowStep
                icon={<Cpu className="w-6 h-6 text-indigo-400" />}
                title="Agentic Processing"
                desc="Our AI agents categorize, analyze, and automate every business transaction."
              />
              <WorkflowStep
                icon={<ShieldCheck className="w-6 h-6 text-emerald-400" />}
                title="Unified Governance"
                desc="Review everything from a single secure dashboard with bank-grade audit trails."
              />
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="relative group h-[500px] rounded-4xl bg-white/5 border border-white/10 p-4 backdrop-blur-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 group-hover:opacity-100 transition-opacity" />
            <div className="h-full rounded-3xl bg-neutral-950/80 border border-white/5 p-8 flex flex-col items-center justify-center text-center">
              <div className="mb-12 relative">
                <div className="w-32 h-32 rounded-full bg-blue-500/20 animate-pulse flex items-center justify-center">
                  <Zap className="w-12 h-12 text-blue-500" />
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-neutral-950" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Building OS...</h4>
              <p className="text-neutral-500 max-w-xs">Integrating Invoice, HR, CRM, and Payroll agents into your personal business pulse.</p>

              <div className="mt-12 w-full grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-blue-500 w-1/2 animate-shimmer" style={{ animationDelay: `${i * 0.2}s` }} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-6">Built for those who build.</h2>
            <p className="text-neutral-500 dark:text-white/40 text-lg">Leading teams around the world use Buva to stay ahead.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <QuoteCard
              quote="Switching to Buva was the best decision for our scaling startup. The HR & Payroll sync is pure magic."
              author="James Wilson"
              company="ScaleAI"
            />
            <QuoteCard
              quote="Having our CRM and Invoices in one place has shortened our sales cycle by nearly 30%."
              author="Linda Gray"
              company="GrayScale Design"
            />
            <QuoteCard
              quote="The security and compliance automation is worth every cent. It feels like having a global CFO on staff."
              author="Arjun Sethi"
              company="NeoBank"
            />
          </div>
        </div>
      </section>

      {/* Updated FAQ */}
      <section className="py-32 bg-neutral-50/70 dark:bg-white/5 px-6 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16 text-neutral-900 dark:text-white">Questions & Answers</h2>
          <div className="space-y-4">
            <SimpleFaqItem question="Do I need all four products?" answer="Not at all. You can start with just one and add others as your business team grows. They work perfectly standalone but are powerful together." />
            <SimpleFaqItem question="How secure is my data?" answer="We use enterprise-grade AES-256 encryption. Buva is built on a mission-critical infrastructure with 99.99% uptime and SOC2 compliance." />
            <SimpleFaqItem question="Can I migrate from Legacy Tools?" answer="Yes! We have automated migration paths for Quickbooks, Salesforce, and Workday. Our AI agents handle the data mapping for you." />
            <SimpleFaqItem question="Is there a setup fee?" answer="Zero setup fees. We believe in value-first. You only pay for your monthly or annual subscription." />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 px-6 text-center">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <div className="w-20 h-20 rounded-3xl bg-blue-600/10 flex items-center justify-center mx-auto mb-10 border border-blue-600/20 relative overflow-hidden p-4">
            <Image
              src="/images/logo.png"
              alt="Buva.ai Logo"
              fill
              className="object-contain p-4"
            />
          </div>
          <h2 className="text-5xl sm:text-7xl font-bold text-neutral-900 dark:text-white mb-8">Ready to evolve?</h2>
          <p className="text-xl text-neutral-500 dark:text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed">Join 15,000+ modern companies using Buva AI to automate their administrative core and focus on creation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" className="w-full sm:w-auto px-10 py-5 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">Start Free 14-Day Trial</Link>
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-full font-bold text-lg hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors">Talk to Sales</Link>
          </div>
          <p className="mt-8 text-neutral-400 text-sm">No credit card required. Cancel anytime.</p>
        </motion.div>
      </section>
    </div>
  );
}

function ProductCard({ icon, title, desc, color, href, delay }: any) {
  const colorMap: Record<string, string> = {
    blue: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    indigo: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    purple: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    emerald: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
  };

  return (
    <motion.div
      {...fadeInUp}
      transition={{ ...fadeInUp.transition, delay }}
      className="p-8 rounded-4xl bg-white dark:bg-black border border-neutral-100 dark:border-white/5 shadow-xl shadow-neutral-200/50 dark:shadow-black/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group flex flex-col h-full"
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform ${colorMap[color]}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-neutral-500 dark:text-white/40 mb-10 text-sm leading-relaxed">{desc}</p>
      <Link href={href} className="mt-auto flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-4 transition-all">
        Explore {title} <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

function WorkflowStep({ icon, title, desc }: any) {
  return (
    <div className="flex gap-8 group">
      <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-600/30 transition-colors duration-500">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function QuoteCard({ quote, author, company }: any) {
  return (
    <div className="p-10 rounded-4xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/10 flex flex-col items-center text-center shadow-lg">
      <div className="mb-6 flex gap-1">
        {[...Array(5)].map((_, i) => <Zap key={i} className="w-4 h-4 text-blue-500 fill-current" />)}
      </div>
      <p className="text-xl italic font-medium text-neutral-800 dark:text-white mb-8 leading-relaxed">"{quote}"</p>
      <div>
        <div className="text-lg font-bold text-neutral-900 dark:text-white">{author}</div>
        <div className="text-neutral-400 text-sm uppercase tracking-widest">{company}</div>
      </div>
    </div>
  );
}

function SimpleFaqItem({ question, answer }: any) {
  return (
    <div className="group p-8 rounded-3xl bg-white dark:bg-black border border-neutral-200 dark:border-white/5 hover:border-blue-500/50 transition-colors">
      <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 flex justify-between items-center group-hover:text-blue-500 transition-colors">
        {question}
      </h4>
      <p className="text-neutral-500 dark:text-white/40 leading-relaxed">{answer}</p>
    </div>
  );
}
