import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Building, ShieldCheck, ArrowRight, CheckCircle2, LayoutDashboard, Quote, Github, Twitter, Linkedin, Zap, Users, GraduationCap, Database, Lock, Fingerprint, Bot, Webhook, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const phrases = [
  "Powered by AI.",
  "Built for Enterprises.",
  "Designed for Scale.",
  "Trusted by Teams."
];

function HeroTextRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000); // 2.5s display + 0.5s transition
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-grid [grid-template-areas:'stack'] items-center justify-center text-center">
      {/* Invisible placeholder for max width */}
      <span className="[grid-area:stack] invisible pointer-events-none pb-2">
        Built for Enterprises.
      </span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          className="[grid-area:stack] whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-primary/50 pb-2"
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
          exit={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
      <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 50 Q 50 100 100 50" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
    </span>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30">
      <SiteHeader />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full px-4 pt-8 pb-24 sm:pt-12 sm:pb-32 sm:px-8 text-center flex flex-col items-center overflow-hidden">
          {/* Alive Background Elements */}
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          <div className="absolute inset-0 -z-10 translate-y-[-20%]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] opacity-20 blur-[100px] bg-primary rounded-full"></div>
          </div>

          <svg className="absolute -z-10 left-[10%] top-[20%] w-6 h-6 text-primary/40 animate-pulse hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <svg className="absolute -z-10 right-[15%] top-[15%] w-8 h-8 text-primary/30 animate-[bounce_4s_infinite] hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth={2} />
          </svg>
          <svg className="absolute -z-10 left-[20%] bottom-[20%] w-5 h-5 text-primary/50 animate-[spin_6s_linear_infinite] hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
          </svg>
          <svg className="absolute -z-10 right-[25%] bottom-[15%] w-10 h-10 text-primary/20 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: 'rotate(45deg)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z" />
          </svg>
          <div className="absolute -z-10 left-[5%] top-[60%] w-24 h-24 bg-primary/5 rounded-full blur-xl hidden md:block animate-pulse"></div>
          <div className="absolute -z-10 right-[5%] bottom-[40%] w-32 h-32 bg-primary/10 rounded-full blur-2xl hidden md:block"></div>
          
          <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center mt-12 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary/20 bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-8 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              Mentora 2.0 is live
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] w-full max-w-7xl text-center drop-shadow-sm flex flex-col md:inline-block">
              Scalable Learning Infrastructure <HeroTextRotator />
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-12 max-w-5xl leading-relaxed font-extrabold text-center">
              A reliable learning management system built for scalability. Deliver personalized education with AI tutoring, seamless integrations, and unified observability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-20 relative z-10">
              <Button size="lg" asChild className="text-base font-bold h-14 px-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5">
                <Link to="/signup">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base font-bold h-14 px-8 border-2 hover:bg-muted transition-colors">
                <Link to="#dashboards">Interactive Demo</Link>
              </Button>
            </div>

            {/* Hero App Mockup */}
            <div className="w-full max-w-6xl mx-auto rounded-xl sm:rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-background shadow-2xl relative z-10 transform md:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none z-10" />
              <div className="bg-muted border-b-2 border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-start gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 text-center font-mono text-xs font-bold text-muted-foreground mr-14">app.mentora.ai</div>
              </div>
              <div className="aspect-[16/10] md:aspect-[21/9] w-full relative overflow-hidden bg-muted/20 p-4 sm:p-8 flex gap-4 sm:gap-8 text-left">
                {/* Mockup Sidebar */}
                <div className="hidden md:flex flex-col gap-4 w-56 border-r-2 border-slate-200 dark:border-slate-800 pr-6">
                   <div className="h-8 flex items-center gap-2 mb-4">
                     <div className="w-6 h-6 bg-primary rounded"></div>
                     <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded flex-1"></div>
                   </div>
                   <div className="h-8 bg-primary/10 border-l-2 border-primary rounded-r px-3 flex items-center"><div className="h-2.5 bg-primary/60 rounded w-1/2"></div></div>
                   <div className="h-8 px-3 flex items-center"><div className="h-2.5 bg-slate-300 dark:bg-slate-700 rounded w-2/3"></div></div>
                   <div className="h-8 px-3 flex items-center"><div className="h-2.5 bg-slate-300 dark:bg-slate-700 rounded w-3/4"></div></div>
                   <div className="h-8 px-3 flex items-center"><div className="h-2.5 bg-slate-300 dark:bg-slate-700 rounded w-1/2"></div></div>
                </div>
                {/* Mockup Main content */}
                <div className="flex-1 flex flex-col gap-6">
                   <div className="flex justify-between items-center">
                     <div className="h-8 bg-slate-300 dark:bg-slate-700 rounded-md w-1/4"></div>
                     <div className="h-10 w-10 bg-primary/20 border-2 border-primary/30 rounded-full"></div>
                   </div>
                   <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                     <div className="h-28 bg-card border-2 border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-5 flex flex-col justify-between">
                       <span className="text-sm font-bold text-muted-foreground">Total Users</span>
                       <span className="text-3xl font-black text-foreground">84,102</span>
                     </div>
                     <div className="h-28 bg-card border-2 border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-5 flex flex-col justify-between">
                       <span className="text-sm font-bold text-muted-foreground">AI Assistance Rate</span>
                       <span className="text-3xl font-black text-primary">94.2%</span>
                     </div>
                     <div className="h-28 bg-card border-2 border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-5 hidden lg:flex flex-col justify-between">
                       <span className="text-sm font-bold text-muted-foreground">Avg. Completion</span>
                       <span className="text-3xl font-black text-green-500">76%</span>
                     </div>
                   </div>
                   <div className="flex-1 bg-card border-2 border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-5 relative overflow-hidden flex flex-col">
                     <span className="text-sm font-bold text-muted-foreground mb-4">Platform Growth</span>
                     <div className="flex-1 relative w-full">
                       <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                       <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                         <path d="M0 100 L 0 60 Q 20 50 40 70 T 80 40 T 100 20 L 100 100 Z" fill="currentColor" className="text-primary/10"></path>
                         <path d="M0 60 Q 20 50 40 70 T 80 40 T 100 20" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary"></path>
                       </svg>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By & Compliance Section */}
        <section className="py-12 border-y-2 border-slate-200 dark:border-slate-800 bg-muted/40 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
             <p className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">Trusted by educational leaders & enterprises</p>
             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               <h3 className="text-2xl font-black text-foreground">AcmeCorp</h3>
               <h3 className="text-2xl font-black text-foreground">GlobalU</h3>
               <h3 className="text-2xl font-black text-foreground">TechAcademy</h3>
               <h3 className="text-2xl font-black text-foreground">EduScale</h3>
               <h3 className="text-2xl font-black text-foreground">SkillFlow</h3>
             </div>
             
             <div className="flex flex-wrap justify-center gap-4 mt-8 pt-8 border-t border-border/50">
                <Badge variant="secondary" className="px-4 py-1.5 font-bold text-sm flex items-center gap-2 bg-background hover:bg-background"><Lock className="w-4 h-4 text-primary"/> SOC 2 Type II Certified</Badge>
                <Badge variant="secondary" className="px-4 py-1.5 font-bold text-sm flex items-center gap-2 bg-background hover:bg-background"><Fingerprint className="w-4 h-4 text-primary"/> GDPR Compliant</Badge>
                <Badge variant="secondary" className="px-4 py-1.5 font-bold text-sm flex items-center gap-2 bg-background hover:bg-background"><ShieldCheck className="w-4 h-4 text-primary"/> 99.99% Uptime SLA</Badge>
             </div>
          </div>
        </section>

        {/* Dashboards Section (Developer Mock Check) */}
        <section id="dashboards" className="relative py-24 px-4 sm:px-8 bg-background border-b-2 border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

          <div className="relative max-w-7xl mx-auto">
            <div className="w-full bg-card border-2 border-slate-200 dark:border-slate-800 mb-10 transform transition-all hover:border-primary/40 hover:shadow-2xl duration-300 rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200 dark:ring-slate-800">
              <div className="p-5 border-b-2 border-slate-200 dark:border-slate-800 bg-muted/90 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="font-extrabold text-foreground text-sm uppercase tracking-wider flex items-center gap-2">
                    <LayoutDashboard className="h-5 w-5 text-primary" />
                    Live Platform Dashboards
                  </h2>
                  <p className="text-sm font-bold text-muted-foreground mt-1">Jump directly into different user roles to test out functionality.</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive hidden sm:block"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500 hidden sm:block"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hidden sm:block"></div>
                </div>
              </div>
              <div className="p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-background">
                <Link to="/tenant-admin" className="group p-6 border-2 border-slate-200 dark:border-slate-800 rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all flex flex-col items-start bg-card">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border-2 border-primary/20 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">Admin Dashboard &rarr;</h3>
                  <p className="text-sm text-foreground/80 font-extrabold leading-relaxed">Academy management, custom branding, and billing.</p>
                </Link>
                
                <Link to="/instructor" className="group p-6 border-2 border-slate-200 dark:border-slate-800 rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all flex flex-col items-start bg-card">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border-2 border-primary/20 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-sm">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">Instructor Panel &rarr;</h3>
                  <p className="text-sm text-foreground/80 font-extrabold leading-relaxed">Course creation, engagement tracking, and grading.</p>
                </Link>

                <Link to="/student" className="group p-6 border-2 border-slate-200 dark:border-slate-800 rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all flex flex-col items-start bg-card">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border-2 border-primary/20 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-sm">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">Student Learner &rarr;</h3>
                  <p className="text-sm text-foreground/80 font-extrabold leading-relaxed">Personalized learning path, AI tutoring, and course access.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works / Problem -> Solution */}
        <section id="how-it-works" className="py-32 bg-muted/20 border-b-2 border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Why upgrade your standard LMS?</h2>
              <p className="text-xl text-foreground/80 font-extrabold max-w-3xl mx-auto">Traditional platforms fragment user data and lack personalized feedback, resulting in low completion rates and high support overhead. We solve this.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-destructive/10 text-destructive rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-destructive/20">
                    <Database className="w-7 h-7"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">The Problem: Siloed Data & High Churn</h3>
                    <p className="text-foreground/80 font-extrabold leading-relaxed">Organizations struggle to maintain multiple LMS instances. Learners abandon courses early due to a lack of immediate, personalized guidance when they inevitably get stuck.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-primary/20">
                    <Zap className="w-7 h-7"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">The Mentora Solution</h3>
                    <p className="text-foreground/80 font-extrabold leading-relaxed">Mentora gives you a powerful academy control plane, while embedding an AI tutor directly into the student workflow to resolve friction instantly. Better engagement, less overhead.</p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-card border-2 border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl overflow-hidden relative group">
                <div className="bg-muted px-6 py-4 border-b-2 border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-4 font-extrabold text-foreground flex items-center gap-2 text-sm"><BookOpen className="w-4 h-4 text-primary"/> Analytics Engine</span>
                  </div>
                </div>
                <div className="p-10 pt-8">
                  <div className="flex justify-between items-center mb-8 border-b-2 border-slate-200 dark:border-slate-800 pb-6">
                     <span className="font-extrabold text-xl text-foreground">Course Completion Rate</span>
                     <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-sm font-extrabold border-0 px-3 py-1">+45% ROI</Badge>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm font-bold text-muted-foreground mb-2">
                        <span>Traditional LMS</span>
                        <span>32%</span>
                      </div>
                      <div className="h-4 bg-muted rounded-full w-full overflow-hidden">
                         <div className="h-full bg-slate-400 w-[32%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-bold text-primary mb-2">
                        <span>Mentora (+ AI Tutor)</span>
                        <span>77%</span>
                      </div>
                      <div className="h-4 bg-primary/20 rounded-full w-full overflow-hidden relative">
                         <div className="absolute top-0 left-0 h-full bg-primary w-[77%]"></div>
                         <div className="absolute top-0 left-0 h-full w-[77%] bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[stripes_1s_linear_infinite]"></div>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80 font-extrabold pt-4">Direct business value delivered through increased learner success rates and reduced human support tickets.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases / Audience */}
        <section id="solutions" className="relative py-32 bg-background border-b-2 border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Built for scale, tailored for your industry</h2>
              <p className="text-xl text-foreground/80 font-extrabold max-w-3xl mx-auto">Who uses Mentora to scale their operations?</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <Card className="bg-muted/30 border-2 border-slate-200 dark:border-slate-800 shadow-lg rounded-3xl hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-10 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Corporate Training</h3>
                    <p className="text-foreground/80 font-extrabold leading-relaxed">
                      Onboard employees globally with isolated branch environments per department. Track compliance training with granular RBAC and audit logs.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted/30 border-2 border-slate-200 dark:border-slate-800 shadow-lg rounded-3xl hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-10 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Bootcamps & Academies</h3>
                    <p className="text-foreground/80 font-extrabold leading-relaxed">
                      Provide 24/7 Socratic AI tutoring to students when instructors are unavailable. Seamlessly integrate Zoom/WebRTC for live cohorts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30 border-2 border-slate-200 dark:border-slate-800 shadow-lg rounded-3xl hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-10 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Coaching Businesses</h3>
                    <p className="text-foreground/80 font-extrabold leading-relaxed">
                      Spin up fully white-labeled LMS instances for individual clients. Manage billing and usage metrics across all your clients from one dashboard.
                    </p>
                  </CardContent>
                </Card>
            </div>
          </div>
        </section>

        {/* Features / Platform Deep Dive */}
        <section id="features" className="relative py-32 bg-muted/10 overflow-hidden border-b-2 border-slate-200 dark:border-slate-800">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Unified Intelligence For Every Role</h2>
              <p className="text-xl text-foreground/80 font-extrabold max-w-3xl mx-auto">Mentora is a powerful system that delivers customized workflows to Administrators, Instructors, and Learners.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Card className="bg-card border-2 border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
                <CardContent className="p-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground">Administrative Console</h3>
                  <ul className="space-y-3 mt-4">
                    {['Dynamic white-label branding', 'SSO onboarding wizard', 'Enterprise granular RBAC', 'Deep analytics & observing'].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm font-semibold">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-2 border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
                <CardContent className="p-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Building className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground">Instructor Workstation</h3>
                  <ul className="space-y-3 mt-4">
                    {['Drag-and-drop course builder', 'Live WebRTC Studio & Whiteboards', 'Student engagement tracking', 'AI-assisted grading & feedback'].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm font-semibold">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
                <CardContent className="p-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground">Learner Experience</h3>
                  <ul className="space-y-3 mt-4">
                    {['24/7 AI Socratic Tutor integrated', 'Real-time syncing Cornell Notes', 'Spaced Repetition AI Flashcards', 'Gamified learning pathways'].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm font-semibold">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI & Integration Section */}
        <section className="py-32 bg-background border-b-2 border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shadow-sm">
                  <Bot className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-extrabold text-foreground">A truly intelligent co-pilot, not just a wrapper.</h2>
                <p className="text-xl text-foreground/80 font-extrabold leading-relaxed">
                  Mentora doesn't simply give students the answer. Our Socratic AI Tutor analyzes the structure of the course content, observes where the learner is stuck, and guides them via pedagogical inquiry.
                </p>
                <div className="space-y-4 pt-4 border-t border-border">
                  <h4 className="font-bold text-foreground">Seamlessly integrates with your stack:</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="px-3 py-1.5 font-bold text-sm bg-muted/50 hover:bg-primary/10 hover:border-primary/30 transition-colors">Stripe Billing</Badge>
                    <Badge variant="outline" className="px-3 py-1.5 font-bold text-sm bg-muted/50 hover:bg-primary/10 hover:border-primary/30 transition-colors">Auth0 / Okta SSO</Badge>
                    <Badge variant="outline" className="px-3 py-1.5 font-bold text-sm bg-muted/50 hover:bg-primary/10 hover:border-primary/30 transition-colors">Salesforce CRM</Badge>
                    <Badge variant="outline" className="px-3 py-1.5 font-bold text-sm bg-muted/50 hover:bg-primary/10 hover:border-primary/30 transition-colors">Slack / Teams</Badge>
                    <Badge variant="outline" className="px-3 py-1.5 font-bold text-sm bg-muted/50 hover:bg-primary/10 hover:border-primary/30 transition-colors"><Webhook className="w-3 h-3 mr-1 inline"/> Webhooks via Zapier</Badge>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl -z-10 translate-x-4 -translate-y-4"></div>
                <div className="bg-card border-2 border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl overflow-hidden text-sm relative">
                  <div className="bg-muted p-5 border-b-2 border-slate-200 dark:border-slate-800 font-extrabold flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-4">Ask the AI Tutor</span>
                    </div>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/20 border-0">Context-Aware</Badge>
                  </div>
                  <div className="p-6 space-y-4 h-64 overflow-hidden relative">
                    <div className="flex gap-4">
                       <Avatar className="w-8 h-8"><AvatarFallback>US</AvatarFallback></Avatar>
                       <div className="bg-muted p-3 rounded-lg rounded-tl-none font-medium max-w-[80%]">I don't understand Big O notation at all.</div>
                    </div>
                    <div className="flex gap-4 flex-row-reverse">
                       <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none font-medium max-w-[80%]">
                         Let's break it down! Imagine you're searching for a specific book. If the books are unsorted, you might have to check every single one. What would we call that in terms of time?
                       </div>
                       <Avatar className="w-8 h-8 bg-primary"><AvatarFallback>AI</AvatarFallback></Avatar>
                    </div>
                    {/* Gradient fade to hide bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-card to-transparent pointer-events-none"></div>
                  </div>
                  <div className="p-5 border-t-2 border-slate-200 dark:border-slate-800 bg-background flex gap-2">
                     <div className="flex-1 bg-muted rounded-full border-2 border-slate-200 dark:border-slate-800 px-4 py-3 text-muted-foreground font-medium">Type your answer...</div>
                     <Button size="icon" className="rounded-full shadow-md w-12 h-12"><ArrowRight className="w-5 h-5"/></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative py-32 bg-primary/5 border-y-2 border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Trusted by Learning Leaders</h2>
              <p className="text-xl text-foreground/80 font-extrabold max-w-3xl mx-auto">See how top institutions are transforming their delivery with our infrastructure.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Card className="bg-card border-2 border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl transform hover:-translate-y-2 relative group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary/20 group-hover:bg-primary transition-colors"></div>
                <CardContent className="p-10 pt-12">
                  <Quote className="h-8 w-8 text-primary/40 mb-6 group-hover:text-primary transition-colors" />
                  <p className="text-foreground text-base leading-relaxed mb-8 font-semibold italic text-slate-700 dark:text-slate-300">"Mentora allowed us to spin up a fully branded LMS for our corporate clients in days rather than months. The platform is truly secure and reliable."</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="ring-2 ring-primary/20 w-12 h-12">
                      <AvatarImage src="https://i.pravatar.cc/150?u=sara" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-extrabold text-sm text-foreground">Sarah Jenkins</h4>
                      <p className="text-xs font-extrabold text-foreground/70">CTO, EdTech Solutions Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl transform md:-translate-y-4 hover:md:-translate-y-6 relative group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary/20 group-hover:bg-primary transition-colors"></div>
                <CardContent className="p-10 pt-12">
                  <Quote className="h-8 w-8 text-primary/40 mb-6 group-hover:text-primary transition-colors" />
                  <p className="text-foreground text-base leading-relaxed mb-8 font-semibold italic text-slate-700 dark:text-slate-300">"The integrated AI tutor feature dramatically reduced our human support tickets by 40%. Learners get immediate, guidance right alongside their coursework."</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="ring-2 ring-primary/20 w-12 h-12">
                      <AvatarImage src="https://i.pravatar.cc/150?u=marcus" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-extrabold text-sm text-foreground">Marcus Chen</h4>
                      <p className="text-xs font-extrabold text-foreground/70">Director of Learning, GlobalU</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl transform hover:-translate-y-2 relative group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary/20 group-hover:bg-primary transition-colors"></div>
                <CardContent className="p-10 pt-12">
                  <Quote className="h-8 w-8 text-primary/40 mb-6 group-hover:text-primary transition-colors" />
                  <p className="text-foreground text-base leading-relaxed mb-8 font-semibold italic text-slate-700 dark:text-slate-300">"As an Admin, the active observability gives me absolute peace of mind. I can proactively spot bottlenecks before a student even notices."</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="ring-2 ring-primary/20 w-12 h-12">
                      <AvatarImage src="https://i.pravatar.cc/150?u=elena" />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-extrabold text-sm text-foreground">Elena Rodriguez</h4>
                      <p className="text-xs font-extrabold text-foreground/70">VP Engineering, ScaleAcademia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-32 bg-slate-950 text-slate-50 border-t-2 border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-white mb-4">Transparent Pricing Models</h2>
              <p className="text-xl text-slate-300 font-extrabold max-w-3xl mx-auto">Enterprise-grade infrastructure at scalable pricing.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {/* Starter */}
              <Card className="bg-slate-900 border-2 border-slate-800 shadow-xl rounded-3xl flex flex-col hover:border-primary/50 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <CardContent className="p-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-extrabold text-slate-200 mb-2">Starter</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-extrabold text-white">₹15</span>
                    <span className="text-slate-400 font-bold">/learner/mo</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-primary" /> 10 live classes/mo
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-primary" /> 100GB Storage
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-primary" /> Email Support
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full font-extrabold border-2 border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white h-12">Get Started</Button>
                </CardContent>
              </Card>

              {/* Professional */}
              <Card className="bg-slate-900 border-2 border-primary shadow-2xl rounded-3xl relative flex flex-col ring-4 ring-primary/20 transform md:-translate-y-4 hover:shadow-[0_20px_50px_rgba(var(--primary),0.3)] transition-all">
                <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest text-center py-3 rounded-t-[1.35rem]">Recommended</div>
                <CardContent className="p-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-extrabold text-white mb-2">Professional</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-extrabold text-white">₹12</span>
                    <span className="text-slate-400 font-bold">/learner/mo</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-3 text-sm text-primary font-bold">
                      Everything in Starter, plus:
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-primary" /> Unlimited live classes
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-primary" /> 1TB Storage
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-primary" /> Priority Phone Support
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-primary" /> Advanced AI Analytics
                    </li>
                  </ul>
                  <Button className="w-full font-extrabold text-md h-12 shadow-lg hover:shadow-xl transition-all">Start Free Trial</Button>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="bg-slate-800 border-2 border-slate-700 shadow-xl rounded-3xl relative flex flex-col hover:border-slate-500 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <CardContent className="p-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-extrabold text-white mb-2">Enterprise</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-extrabold text-white">Custom</span>
                    <span className="text-slate-400 font-bold"> pricing</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-3 text-sm text-primary font-bold">
                       Everything in Professional, plus:
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-slate-500" /> Dedicated Infrastructure
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-slate-500" /> SSO & Active Directory
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-slate-500" /> 99.95% SLA Guarantee
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-slate-500" /> Custom API Access
                    </li>
                  </ul>
                  <Button variant="secondary" className="w-full font-extrabold bg-white text-slate-900 hover:bg-slate-200 h-12">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="bg-primary py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
             <h2 className="text-4xl font-extrabold text-primary-foreground">Ready to upgrade your infrastructure?</h2>
             <p className="text-xl text-primary-foreground/80 font-medium">Join industry leaders who trust Mentora for scalable, AI-powered learning delivery.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button size="lg" variant="secondary" className="font-extrabold h-14 px-10 text-lg shadow-xl hover:-translate-y-1 transition-transform">Get Started Now</Button>
                <Button size="lg" className="font-extrabold h-14 px-10 text-lg bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border-2 border-primary-foreground/20 shadow-none hover:shadow-lg transition-all">Contact Sales</Button>
             </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
