import React from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Users, ArrowRight, Activity, Cpu, ShieldCheck, Sparkles } from 'lucide-react';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30">
      <SiteHeader />
      <main className="flex-1 pb-24">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 text-center text-balance mb-20">
            <Badge className="bg-primary/20 text-primary hover:bg-primary/20 border-0 mb-6">Solutions</Badge>
            <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight">Purpose-Built for Your Industry</h1>
            <p className="text-xl text-foreground/80 font-extrabold leading-relaxed">
              Mentora's flexible architecture adapts to completely different operational models out of the box. You do not need to fork your application.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-32">
            
            {/* Industry 1: Corporate Training */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-slate-950 text-slate-50 border-2 border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden h-[400px]">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center"><Briefcase className="w-5 h-5"/></div>
                        <span className="font-bold text-lg">Corporate HR Portal</span>
                     </div>
                     <div className="space-y-4">
                        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl backdrop-blur-md">
                           <div className="flex justify-between items-center mb-2">
                             <span className="font-bold text-sm text-slate-300">Compliance Audit: Q3</span>
                             <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/10">100% Passed</Badge>
                           </div>
                           <div className="w-full bg-slate-800 rounded-full h-2.5">
                              <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                           </div>
                        </div>
                        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl backdrop-blur-md">
                           <div className="flex justify-between items-center mb-2">
                             <span className="font-bold text-sm text-slate-300">New Hire Onboarding: Eng</span>
                             <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/10">84% Completion</Badge>
                           </div>
                           <div className="w-full bg-slate-800 rounded-full h-2.5">
                              <div className="bg-amber-400 h-2.5 rounded-full" style={{ width: '84%' }}></div>
                           </div>
                        </div>
                     </div>
                  </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-black text-foreground leading-tight">Corporate Compliance & Training</h2>
                <p className="text-lg text-foreground/80 font-bold leading-relaxed mb-6">
                  Manage the complexity of multinational teams. Mentora allows you to spin up isolated departments, enforce strict SCIM provisioning via Okta/Azure AD, and maintain bulletproof audit logs for SOC2 compliance.
                </p>
                <ul className="space-y-4 pt-2">
                  <li className="flex gap-4"><ShieldCheck className="w-6 h-6 text-blue-500 shrink-0"/> <span className="font-bold text-foreground/80">Automated directory sync & role mapping</span></li>
                  <li className="flex gap-4"><Activity className="w-6 h-6 text-blue-500 shrink-0"/> <span className="font-bold text-foreground/80">Department-level manager dashboards</span></li>
                  <li className="flex gap-4"><Cpu className="w-6 h-6 text-blue-500 shrink-0"/> <span className="font-bold text-foreground/80">API triggers for HRIS integration (Workday, Bamboo)</span></li>
                </ul>
              </div>
            </div>

            {/* Industry 2: Bootcamps */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-black text-foreground leading-tight">Bootcamps & High-Growth Academies</h2>
                <p className="text-lg text-foreground/80 font-bold leading-relaxed mb-6">
                  Deliver personalized education at an unprecedented scale. Offset instructor burnout by relying on Socratic AI tutors that can guide students through complex debugging or theory 24/7.
                </p>
                <ul className="space-y-4 pt-2">
                  <li className="flex gap-4"><Sparkles className="w-6 h-6 text-purple-500 shrink-0"/> <span className="font-bold text-foreground/80">Context-aware AI tutoring on course repos</span></li>
                  <li className="flex gap-4"><Users className="w-6 h-6 text-purple-500 shrink-0"/> <span className="font-bold text-foreground/80">Cohort-based pacing and analytics</span></li>
                  <li className="flex gap-4"><Cpu className="w-6 h-6 text-purple-500 shrink-0"/> <span className="font-bold text-foreground/80">Automated grading and peer review flows</span></li>
                </ul>
              </div>
              <div className="bg-purple-950 text-slate-50 border-2 border-purple-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden h-[400px] flex items-center justify-center">
                 <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:20px_20px]"></div>
                 <div className="bg-purple-900/80 border border-purple-800 p-6 rounded-2xl backdrop-blur-md w-full max-w-sm relative z-10 shadow-xl">
                     <p className="text-xs font-bold text-purple-300 mb-4 uppercase tracking-wider">AI Instructor</p>
                     <p className="font-medium text-sm leading-relaxed mb-4">You're getting a CORS error because the preflight OPTIONS request is failing. Looking at your `server.js` file, what middleware are you currently using to handle cross-origin requests?</p>
                     <div className="bg-purple-950/50 p-3 rounded-lg text-xs font-mono text-purple-200">
                        // Your code context:<br/>
                        app.use(express.json());<br/>
                        app.listen(3000);
                     </div>
                 </div>
              </div>
            </div>

            {/* Industry 3: Coaching */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-orange-50 border-2 border-orange-100 dark:bg-orange-950/20 dark:border-orange-900/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden h-[400px]">
                 <div className="w-full h-full flex flex-col gap-4">
                     <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 font-bold text-muted-foreground">Client 1</div>
                        <h4 className="font-black text-2xl mb-1 text-foreground">Sarah's VIP Coaching</h4>
                        <p className="text-sm font-bold text-muted-foreground">URL: sarah.mentora.link</p>
                     </div>
                     <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 font-bold text-muted-foreground">Client 2</div>
                        <h4 className="font-black text-2xl mb-1 text-foreground">Mark's Executive Plan</h4>
                        <p className="text-sm font-bold text-muted-foreground">URL: mark.mentora.link</p>
                     </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-black text-foreground leading-tight">Coaching & Agency Businesses</h2>
                <p className="text-lg text-foreground/80 font-bold leading-relaxed mb-6">
                  Maintain a single content library, but deploy fully white-labeled LMS portals for each of your individual clients. Manage billing and usage metrics across everyone from one central dashboard.
                </p>
                <ul className="space-y-4 pt-2">
                  <li className="flex gap-4"><Briefcase className="w-6 h-6 text-orange-500 shrink-0"/> <span className="font-bold text-foreground/80">White-labeled portals per client</span></li>
                  <li className="flex gap-4"><ShieldCheck className="w-6 h-6 text-orange-500 shrink-0"/> <span className="font-bold text-foreground/80">Content syndication (update once, deploy everywhere)</span></li>
                  <li className="flex gap-4"><Activity className="w-6 h-6 text-orange-500 shrink-0"/> <span className="font-bold text-foreground/80">Stripe billing integration</span></li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
