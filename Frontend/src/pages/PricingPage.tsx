import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, XCircle, Hexagon, Star, Zap, Calculator, 
  ShieldCheck, Phone, ArrowRight, Infinity as InfinityIcon, Building2,
  Server, BadgeCheck, Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  const faqs = [
    {
      q: "What counts as an 'active student'?",
      a: "A student who logs in at least once in a 30-day period. Inactive students are not billed."
    },
    {
      q: "Can we add more Sub-Admins mid-contract?",
      a: "Yes. Starter allows 3, Professional allows 10. If you need more, upgrade to Enterprise (unlimited)."
    },
    {
      q: "What if we exceed our storage limit?",
      a: "You'll receive an alert at 80% usage. Auto-purchase additional 50 GB blocks at ₹500/month, or contact us for custom pricing."
    },
    {
      q: "Do you offer discounts for non-profits / government?",
      a: "Yes. Non-profits: 20% discount on Professional tier. Government: custom pricing (typically ₹5-8/student for large deployments)."
    },
    {
        q: "Can we pay monthly instead of annually?",
        a: "Starter tier supports monthly. Professional/Enterprise require annual contracts for pricing stability."
    },
    {
        q: "What's included in the 90-day free trial?",
        a: "Full Professional tier features. No credit card required. After 90 days, choose a paid tier or data is retained for 30 days then deleted."
    },
    {
        q: "Can we cancel mid-contract?",
        a: "Annual contracts are non-refundable. However, you can export all your data at any time (CSV, JSON, SCORM)."
    },
    {
        q: "How does billing work if our student count fluctuates?",
        a: "Monthly billing: charged for active students each month. Annual billing: based on estimated student count, with true-up at year-end (refund if overestimated, invoice if underestimated by >10%)."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30 relative overflow-hidden">
      <SiteHeader />
      
      {/* Dark modern background */}
      <div className="fixed inset-0 -z-10 bg-[#020202]"></div>
      <div className="fixed top-[20%] left-[50%] -translate-x-1/2 w-[60%] h-[30%] rounded-full bg-primary/20 blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <main className="flex-1 pb-32 pt-32">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mb-24">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
               <Badge className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 mb-8 py-2 px-6 shadow-[0_0_15px_rgba(var(--primary),0.3)] tracking-widest uppercase font-bold text-xs rounded-full">
                 Transparent Pricing
               </Badge>
            </motion.div>
            <motion.h1 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
               className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight"
            >
              No Hidden Fees. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Scale at Your Pace.</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
               className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed"
            >
              Start free for 90 days. Upgrade anytime. Cancel anytime.
            </motion.p>
          </div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Starter */}
              <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 className="bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-[2rem] overflow-hidden flex flex-col shadow-2xl relative h-full"
              >
                <div className="p-8 pb-4 border-b border-neutral-800/50">
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-6 border border-neutral-700">
                     <Hexagon className="w-6 h-6 text-neutral-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Starter</h3>
                  <p className="text-neutral-400 text-sm mt-2 font-medium">For: Coaching institutes, small colleges (&lt;500 students)</p>
                  <div className="mt-8 flex items-end gap-2">
                    <span className="text-5xl font-bold text-white">₹15</span>
                    <span className="text-neutral-500 mb-1 font-medium">/student/mo</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-4 leading-relaxed">
                    Min commitment: ₹7,500/month (500 students). Billed monthly or annually (10% discount on annual).
                  </p>
                </div>
                <div className="p-8 pt-6 flex-1 flex flex-col">
                  <p className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Includes:</p>
                  <ul className="space-y-4 mb-8">
                    <FeatureItem text="Up to 500 students" />
                    <FeatureItem text="3 Sub-Admins" />
                    <FeatureItem text="Unlimited courses & instructors" />
                    <FeatureItem text="AI Tutor: 50 queries/student/day" />
                    <FeatureItem text="Live classes (100 participants)" />
                    <FeatureItem text="50 GB cloud storage" />
                    <FeatureItem text="Mobile apps (Mentora-branded)" />
                    <FeatureItem text="Email support (24-hour response)" />
                    <FeatureItem text="99.5% uptime SLA" />
                    <FeatureItem text="Subdomain: yourname.mentora.com" />
                  </ul>
                  
                  <p className="text-sm font-bold text-neutral-500 mb-4 uppercase tracking-wider mt-auto pt-4 border-t border-neutral-800/50">Not Included:</p>
                  <ul className="space-y-4 mb-10">
                    <MissingFeatureItem text="SSO integration" />
                    <MissingFeatureItem text="SIS/HRMS sync" />
                    <MissingFeatureItem text="API access" />
                    <MissingFeatureItem text="Custom domain" />
                  </ul>

                  <Button asChild className="w-full rounded-xl py-6 text-base font-medium bg-white/5 hover:bg-white/10 text-white border border-white/10 mt-auto">
                      <Link to="/contact">Start 90-Day Free Trial</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Professional */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.4 }}
                 className="bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-[2rem] overflow-hidden flex flex-col relative shadow-[0_0_50px_rgba(var(--primary),0.15)] transform lg:-translate-y-4 h-full z-10"
              >
                <div className="absolute top-0 right-0 bg-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-bl-[1.5rem] uppercase tracking-wider backdrop-blur-md border-b border-l border-primary/30">⭐ Most Popular</div>
                <div className="p-8 pb-4 border-b border-primary/20">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(var(--primary),0.2)]">
                     <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Professional</h3>
                  <p className="text-neutral-300 text-sm mt-2 font-medium">For: Private colleges, corporate training (500-5,000 learners)</p>
                  <div className="mt-8 flex items-end gap-2">
                    <span className="text-5xl font-bold text-white">₹12</span>
                    <span className="text-primary/70 mb-1 font-medium">/student/mo</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                    Min commitment: Annual contract. Billed annually only.<br/>
                    <span className="text-primary font-bold mt-1 block">Ex: 3,000 students × ₹12 = ₹36,000/mo</span>
                  </p>
                </div>
                <div className="p-8 pt-6 flex-1 flex flex-col">
                  <p className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Everything in Starter, plus:</p>
                  <ul className="space-y-4 mb-10 flex-1">
                    <FeatureItem text="Up to 5,000 students" primary />
                    <FeatureItem text="10 Sub-Admins" primary />
                    <FeatureItem text="AI Tutor: 200 queries/student/day" primary />
                    <FeatureItem text="Live classes (500 participants)" primary />
                    <FeatureItem text="500 GB cloud storage" primary />
                    <FeatureItem text="SSO (Google, Microsoft, Okta)" primary />
                    <FeatureItem text="SIS/HRMS (Ellucian, Workday, etc.)" primary />
                    <FeatureItem text="Custom Domain (yourcollegename.com)" primary />
                    <FeatureItem text="API Access (1,000 req/hour)" primary />
                    <FeatureItem text="Email + Chat support (4-hr response)" primary />
                    <FeatureItem text="99.9% uptime SLA" primary />
                    <FeatureItem text="Quarterly business review calls" primary />
                  </ul>
                  
                  <Button asChild className="w-full mt-auto rounded-xl py-6 text-base font-medium shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary),0.6)] transition-all bg-primary hover:bg-primary/90 text-white">
                      <Link to="/contact">Request Demo + Quote</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Enterprise */}
              <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 className="bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-[2rem] overflow-hidden flex flex-col shadow-2xl relative h-full"
              >
                <div className="p-8 pb-4 border-b border-neutral-800/50">
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-6 border border-neutral-700">
                     <Building2 className="w-6 h-6 text-neutral-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Enterprise</h3>
                  <p className="text-neutral-400 text-sm mt-2 font-medium">For: Universities, Gov, Corps (5,000+ learners)</p>
                  <div className="mt-8 flex items-end gap-2">
                    <span className="text-4xl font-bold text-white">₹8-10</span>
                    <span className="text-neutral-500 mb-1 font-medium">/student/mo</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-4 leading-relaxed">
                    Custom negotiation based on volume. Multi-year contracts preferred.<br/>
                    <span className="text-white font-medium mt-1 block">Ex: 10,000 students × ₹10 = ₹1,00,000/mo</span>
                  </p>
                </div>
                <div className="p-8 pt-6 flex-1 flex flex-col">
                  <p className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Everything in Professional, plus:</p>
                  <ul className="space-y-4 mb-10 flex-1">
                    <FeatureItem text="Unlimited students & Sub-Admins" />
                    <FeatureItem text="AI Tutor: Unlimited queries" />
                    <FeatureItem text="Custom storage (500 GB - 10 TB)" />
                    <FeatureItem text="White-Label Native Mobile Apps" />
                    <FeatureItem text="Dedicated Infrastructure (Private Cloud)" />
                    <FeatureItem text="Full API Access (10,000 req/hour)" />
                    <FeatureItem text="Custom Integrations built by our team" />
                    <FeatureItem text="Data Residency (India-only or On-Prem)" />
                    <FeatureItem text="Dedicated Slack Channel + phone support" />
                    <FeatureItem text="99.95% uptime SLA with penalties" />
                    <FeatureItem text="Dedicated Customer Success Manager" />
                    <FeatureItem text="Custom Training for Admins" />
                    <FeatureItem text="Priority Feature Development" />
                  </ul>
                  
                  <Button asChild className="w-full mt-auto rounded-xl py-6 text-base font-medium bg-white text-black hover:bg-neutral-200 transition-colors">
                      <Link to="/contact">Contact Sales for Custom Quote</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Add-Ons */}
        <section className="py-24 max-w-7xl mx-auto px-6 border-t border-neutral-900">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Available Add-Ons (All Tiers)</h2>
            <p className="text-neutral-400 font-light">Customize your deployment with specific structural needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             <AddOnCard 
                icon={<Server />}
                title="One-Time Setup Fee"
                content={<>
                  <p className="text-sm text-neutral-400 mb-2">• Starter: <span className="text-white font-bold">Free</span></p>
                  <p className="text-sm text-neutral-400 mb-2">• Professional: <span className="text-white font-bold">₹25,000</span> (waived on 3-yr refs)</p>
                  <p className="text-sm text-neutral-400">• Enterprise: <span className="text-white font-bold">₹50k-₹1L</span> (includes custom SSO, migration)</p>
                </>}
             />
             <AddOnCard 
                icon={<BadgeCheck />}
                title="Blockchain Certificates"
                content={<p className="text-sm text-neutral-400"><span className="text-white text-lg font-bold">₹50</span> / certificate (tamper-proof, verifiable by employers)</p>}
             />
             <AddOnCard 
                icon={<Phone />}
                title="Premium Support Packages"
                content={<p className="text-sm text-neutral-400"><span className="text-white text-lg font-bold">₹50,000</span> / month: 24/7 phone support, 15-min response SLA, dedicated Slack channel.</p>}
             />
             <AddOnCard 
                icon={<Building2 />}
                title="Custom Mobile App Development"
                content={<p className="text-sm text-neutral-400"><span className="text-white text-lg font-bold">₹5,00,000</span> one-time: iOS + Android white-label apps submitted under your accounts.</p>}
             />
             <AddOnCard 
                icon={<Cloud />}
                title="Additional Storage"
                content={<p className="text-sm text-neutral-400"><span className="text-white text-lg font-bold">₹500</span> / month per 50 GB block.</p>}
             />
             <AddOnCard 
                icon={<ShieldCheck />}
                title="Online Proctoring"
                content={<>
                  <p className="text-sm text-neutral-400 mb-2">• Live: <span className="text-white font-bold">₹30-50</span> / student / exam</p>
                  <p className="text-sm text-neutral-400 mb-2">• Recorded: <span className="text-white font-bold">₹15-25</span> / student / exam</p>
                  <p className="text-sm text-neutral-400">• AI Auto: <span className="text-white font-bold">₹5-10</span> / student / exam</p>
                </>}
             />
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-24 max-w-5xl mx-auto px-6">
           <div className="bg-neutral-900/50 backdrop-blur-xl border border-primary/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(var(--primary),0.15)_0%,transparent_50%)] pointer-events-none"></div>
              
              <div className="text-center mb-12">
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 px-4 py-1">ROI Calculator</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Calculate Your Savings</h2>
              </div>

              <RoiCalculator />
           </div>
        </section>

        {/* Trust Signals */}
        <section className="py-24 border-t border-neutral-900">
           <div className="max-w-7xl mx-auto px-6 text-center">
             <h3 className="text-2xl font-bold text-white mb-12">Used by 100+ Institutions Across India</h3>
             
             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 mb-16 grayscale">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png" alt="University Logo" className="h-12 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BITS_Pilani_logo.svg/1200px-BITS_Pilani_logo.svg.png" alt="University Logo" className="h-12 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" alt="University Logo" className="h-12 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Delhi_University_logo.svg/1200px-Delhi_University_logo.svg.png" alt="University Logo" className="h-16 object-contain" />
             </div>
             
             <p className="text-neutral-500 font-medium tracking-wide uppercase text-sm mb-16">Trusted in Rajasthan, Maharashtra, Gujarat, Karnataka, Tamil Nadu</p>

             <div className="flex flex-wrap justify-center gap-6 mb-24">
               <div className="bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-full flex items-center gap-3">
                 <ShieldCheck className="w-5 h-5 text-neutral-400" />
                 <span className="text-sm text-neutral-300 font-medium">SOC 2 Type II (In Progress)</span>
               </div>
               <div className="bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-full flex items-center gap-3">
                 <ShieldCheck className="w-5 h-5 text-neutral-400" />
                 <span className="text-sm text-neutral-300 font-medium">ISO 27001 (Planned Q4 2025)</span>
               </div>
               <div className="bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-full flex items-center gap-3">
                 <ShieldCheck className="w-5 h-5 text-neutral-400" />
                 <span className="text-sm text-neutral-300 font-medium">GDPR Compliant</span>
               </div>
               <div className="bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-full flex items-center gap-3">
                 <Cloud className="w-5 h-5 text-neutral-400" />
                 <span className="text-sm text-neutral-300 font-medium">AWS Advanced Technology Partner</span>
               </div>
             </div>

             <div className="max-w-3xl mx-auto bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-8 md:p-10 rounded-[2rem]">
               <div className="flex gap-1 justify-center mb-6">
                 {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />)}
               </div>
               <p className="text-xl md:text-2xl text-white font-medium italic mb-8 leading-relaxed">
                 "We were paying ₹18 lakhs/year for a traditional LMS. Mentora costs us ₹4.32 lakhs — and does 10× more. ROI was obvious."
               </p>
               <p className="text-primary font-bold">Dr. Priya Sharma</p>
               <p className="text-neutral-500 text-sm">Dean, St. Xavier's College, Jaipur</p>
             </div>
           </div>
        </section>

        {/* FAQs */}
        <section className="py-24 max-w-4xl mx-auto px-6 border-t border-neutral-900">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pricing FAQ</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800 rounded-[2rem] p-8 hover:bg-neutral-900/60 hover:border-primary/30 transition-colors group">
                <h3 className="font-bold text-lg mb-4 text-white group-hover:text-primary transition-colors">{faq.q}</h3>
                <p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
           <div className="absolute inset-0 bg-primary/5"></div>
           <div className="max-w-5xl mx-auto px-6 relative z-10">
             <div className="bg-neutral-950 border border-neutral-800 rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden relative text-center">
               <div className="absolute top-0 right-0 w-full h-[50%] bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.2)_0%,transparent_70%)] pointer-events-none"></div>
               
               <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Ready to Transform Your Institution?</h2>
               <p className="text-xl text-neutral-400 font-light mb-12 max-w-2xl mx-auto">Connect with our team and launch the right Mentora rollout for your institution.</p>

               <Button
                 asChild
                 className="mx-auto h-16 rounded-full px-10 text-lg font-semibold shadow-[0_0_24px_rgba(var(--primary),0.35)] transition-all hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(var(--primary),0.5)] bg-primary hover:bg-primary/90 text-white"
               >
                 <Link to="/contact">
                   Get Started
                   <ArrowRight className="ml-2 h-5 w-5" />
                 </Link>
               </Button>
             </div>
           </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function FeatureItem({ text, primary = false }: { text: string, primary?: boolean }) {
  return (
    <li className="flex gap-4 text-neutral-300 font-light text-sm items-start">
      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${primary ? 'text-primary drop-shadow-[0_0_5px_rgba(var(--primary),0.5)]' : 'text-neutral-500'}`} /> 
      <span>{text}</span>
    </li>
  )
}

function MissingFeatureItem({ text }: { text: string }) {
  return (
    <li className="flex gap-4 text-neutral-500 font-light text-sm items-start opacity-70">
      <XCircle className="w-5 h-5 text-neutral-600 shrink-0 mt-0.5" /> 
      <span>{text}</span>
    </li>
  )
}

function AddOnCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) {
  return (
    <div className="bg-neutral-900/30 border border-neutral-800 p-6 rounded-2xl hover:bg-neutral-900/50 transition-colors">
      <div className="w-10 h-10 rounded-lg border border-neutral-700 bg-neutral-800 flex items-center justify-center text-neutral-400 mb-4">
        {icon}
      </div>
      <h4 className="text-white font-bold mb-3">{title}</h4>
      {content}
    </div>
  )
}

// ROI Calculator Component
function RoiCalculator() {
  const [students, setStudents] = useState<number>(3000);
  const [lmsCost, setLmsCost] = useState<number>(300);
  const [departments, setDepartments] = useState<number>(5);
  const [adminHours, setAdminHours] = useState<number>(40);

  // Constants
  const mentoraCostPerStudent = 12; // Professional Tier assumed
  const months = 12;
  const adminHourlyRate = 500; // INR

  // Calculations
  const currentLmsAnnualCost = (students * lmsCost * months) / 100000; // in Lakhs
  const mentoraAnnualCost = (students * mentoraCostPerStudent * months) / 100000; // in Lakhs
  const lmsSavings = currentLmsAnnualCost - mentoraAnnualCost;
  const lmsSavingsPercent = currentLmsAnnualCost > 0 ? ((lmsSavings / currentLmsAnnualCost) * 100).toFixed(0) : 0;

  const newAdminHours = adminHours * 0.3; // 70% reduction
  const timeFreed = adminHours - newAdminHours;
  const timeSavingsAnnualLakhs = (timeFreed * 52 * adminHourlyRate) / 100000; // in Lakhs

  const totalRoi = lmsSavings + timeSavingsAnnualLakhs;

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-bold text-white">Number of Students</label>
            <span className="text-primary font-bold">{students.toLocaleString()}</span>
          </div>
          <input 
            type="range" min="500" max="50000" step="500" 
            value={students} onChange={(e) => setStudents(Number(e.target.value))}
            className="w-full accent-primary h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-white block mb-2">Current LMS Cost (per student/month in ₹)</label>
          <input 
            type="number" min="0" value={lmsCost} onChange={(e) => setLmsCost(Number(e.target.value))}
            className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-bold text-white block mb-2">Departments</label>
            <input 
              type="number" min="1" value={departments} onChange={(e) => setDepartments(Number(e.target.value))}
              className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-white block mb-2">Admin Hours/Week</label>
            <input 
              type="number" min="0" value={adminHours} onChange={(e) => setAdminHours(Number(e.target.value))}
              className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      <div className="bg-neutral-950/80 border border-neutral-800 rounded-3xl p-8 backdrop-blur-md">
        <h3 className="text-xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">Estimated Annual Benefits</h3>
        
        <div className="space-y-6">
          <div>
            <p className="text-neutral-400 mb-1 text-sm">Direct Cost Savings</p>
            <div className="flex justify-between items-baseline mb-2">
              <p className="text-neutral-500 line-through text-sm">₹{currentLmsAnnualCost.toFixed(2)}L (Current)</p>
              <p className="text-white text-sm">₹{mentoraAnnualCost.toFixed(2)}L (Mentora)</p>
            </div>
            <div className="flex justify-between items-center bg-primary/10 border border-primary/20 px-4 py-3 rounded-xl text-primary font-bold">
              <span>You Save</span>
              <span>₹{lmsSavings.toFixed(2)} Lakhs <span className="text-xs opacity-80">({lmsSavingsPercent}%)</span></span>
            </div>
          </div>

          <div>
             <p className="text-neutral-400 mb-2 text-sm">Admin Time Savings (70% Reduction)</p>
             <div className="flex justify-between items-center mb-1 text-sm">
                <span className="text-white">{adminHours} hrs/wk → {newAdminHours.toFixed(1)} hrs/wk</span>
                <span className="text-green-400 font-bold">₹{timeSavingsAnnualLakhs.toFixed(2)} Lakhs</span>
             </div>
             <p className="text-xs text-neutral-500 text-right">Value of {timeFreed.toFixed(1)} hrs freed</p>
          </div>

          <div className="pt-6 border-t border-neutral-800">
             <p className="text-neutral-400 text-sm mb-1 uppercase tracking-widest font-bold">Total Annual ROI</p>
             <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
               ₹{totalRoi.toFixed(2)} Lakhs
             </p>
          </div>
        </div>
      </div>
    </div>
  )
}
