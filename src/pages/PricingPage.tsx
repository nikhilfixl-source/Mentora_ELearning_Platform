import React from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  const faqs = [
    {
      q: "How does billing work?",
      a: "You pay a simple subscription based on your active learners and the features you need. Your billing covers all your instructors and students without hidden infrastructure fees."
    },
    {
      q: "What defines an 'Active Learner'?",
      a: "An active learner is any student who logs in and accesses course material or uses the AI Tutor at least once within a given billing month. Instructors and admins are free."
    },
    {
      q: "Can I bring my own cloud (BYOC)?",
      a: "Yes. Customers on the Enterprise tier can request a dedicated private cloud instance deployed directly into their own AWS/GCP/Azure environments for maximum compliance and data sovereignty."
    },
    {
      q: "Are the AI limits strictly enforced?",
      a: "Our plans include generous AI token limits that cover 99% of normal usage across your academy. If your students require exceptionally high AI interactions, we offer seamless overage pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30">
      <SiteHeader />
      <main className="flex-1 pb-24">
        <section className="py-24 bg-muted/10 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight">Transparent Pricing Models</h1>
            <p className="text-xl text-foreground/80 font-extrabold max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade infrastructure shouldn't require unpredictable costs. Predictable scaling for ambitious educational businesses.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter */}
              <Card className="bg-card border-2 border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-2xl font-bold">Starter</CardTitle>
                  <p className="text-muted-foreground font-medium mt-2 leading-relaxed">Perfect for growing academies testing the waters.</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-5xl font-black text-foreground">₹15</span>
                    <span className="text-muted-foreground mb-1 font-bold">/learner/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {[
                      '10 live classes/mo', 
                      '100GB Storage', 
                      'Standard AI Context Window', 
                      'Email Support',
                      'No Custom Domains'
                    ].map((feat, i) => (
                      <li key={i} className="flex gap-4 text-foreground/80 font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {feat}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full font-bold py-6 text-md" variant="outline"><Link to="/signup">Start 14-Day Trial</Link></Button>
                </CardContent>
              </Card>

              {/* Growth */}
              <Card className="bg-card border-2 border-primary rounded-3xl overflow-hidden flex flex-col relative shadow-xl transform md:-translate-y-2">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-2xl font-bold">Professional</CardTitle>
                  <p className="text-muted-foreground font-medium mt-2 leading-relaxed">For scaling bootcamps with professional needs.</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-5xl font-black text-foreground">₹12</span>
                    <span className="text-muted-foreground mb-1 font-bold">/learner/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {[
                      'Everything in Starter, plus:',
                      'Unlimited live classes', 
                      '1TB Storage', 
                      'Advanced Expanded AI Context', 
                      'Advanced AI Analytics', 
                      'Priority Phone Support',
                      'Custom Domain Setup'
                    ].map((feat, i) => (
                      <li key={i} className={`flex gap-4 text-foreground/80 font-bold text-sm ${i === 0 ? 'text-primary' : ''}`}>
                        {i === 0 ? <CheckCircle2 className="w-5 h-5 text-primary opacity-0 shrink-0 hidden" /> : <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />} 
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full font-bold py-6 text-md"><Link to="/signup">Start 14-Day Trial</Link></Button>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="bg-card border-2 border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                  <p className="text-muted-foreground font-medium mt-2 leading-relaxed">For global institutions and mass deployment.</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-5xl font-black text-foreground">Custom</span>
                    <span className="text-muted-foreground mb-1 font-bold"> pricing</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {[
                      'Everything in Professional, plus:',
                      'Unlimited Instructors & Features', 
                      'Unlimited Storage & Bandwidth', 
                      'Bring Your Own Cloud (BYOC)', 
                      'Dedicated Success Manager', 
                      'Custom Multi-Agent Workflows',
                      '99.99% Guaranteed SLA'
                    ].map((feat, i) => (
                      <li key={i} className={`flex gap-4 text-foreground/80 font-bold text-sm ${i === 0 ? 'text-primary' : ''}`}>
                        {i === 0 ? <CheckCircle2 className="w-5 h-5 text-primary opacity-0 shrink-0 hidden" /> : <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />} 
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full font-bold py-6 text-md" variant="outline"><Link to="/book-demo">Contact Sales</Link></Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 border-t-2 border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl font-black mb-12 text-center text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-card border-2 border-slate-200 dark:border-slate-800 p-8 rounded-2xl flex gap-4">
                  <HelpCircle className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground font-medium leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
