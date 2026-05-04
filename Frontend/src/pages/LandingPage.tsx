import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Bot, Zap, Globe, Sparkles, CheckCircle2, Star, Users, Briefcase, PlayCircle, FileText, CheckCircle, ShieldCheck } from 'lucide-react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Badge } from '@/components/ui/badge';

const words = ["Training.", "Schools.", "Teams.", "Growth."];

export default function LandingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30 flex flex-col relative overflow-hidden">
      <SiteHeader />

      {/* Abstract Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(var(--primary),0.15),transparent_100%)]"></div>
      <div className="fixed inset-0 -z-20 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <main className="flex-1 flex flex-col pt-32">
        {/* Hero Section */}
        <section className="relative w-full px-6 md:px-12 pt-20 pb-40 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wide mb-8 shadow-[0_0_15px_rgba(var(--primary),0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover the new standard in education</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Your Institution's Complete AI-Powered Learning Ecosystem — Live in Under 60 Minutes
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-4xl leading-relaxed font-light"
          >
            The only multi-tenant LMS built for Indian institutions. Deploy a fully-branded digital campus with AI tutoring, live classes, and intelligent department management at ₹12-15/student/month.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 relative z-10"
          >
            <Button size="lg" asChild className="h-14 px-8 rounded-full shadow-[0_0_30px_rgba(var(--primary),0.5)] hover:shadow-[0_0_40px_rgba(var(--primary),0.8)] transition-all bg-primary hover:bg-primary/90 text-white border-transparent">
              <Link to="/pricing">Start Free 90-Day Trial <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 rounded-full border-white text-white hover:bg-white/10 backdrop-blur-md transition-all bg-transparent">
              <Link to="/how-it-works"><PlayCircle className="mr-2 w-5 h-5" /> Watch 3-Min Demo</Link>
            </Button>
          </motion.div>

          {/* Hero mockup visual */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "circOut" }}
            className="w-full max-w-7xl mx-auto mt-24 relative z-10"
          >
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-b from-primary/50 to-transparent opacity-50 blur-2xl"></div>
            <div className="relative rounded-[2rem] bg-black/50 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-2xl p-2 h-[400px] md:h-[600px] flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=3271&auto=format&fit=crop" alt="Students learning and collaborating" className="w-full h-full object-cover rounded-[1.5rem] opacity-60 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-left px-4">
                     <p className="text-3xl font-bold text-white mb-2 drop-shadow-md">Beautifully Simple.</p>
                     <p className="text-neutral-400 max-w-md drop-shadow-md">Bring your courses to life in minutes with our intuitive, drag-and-drop platform.</p>
                </div>
            </div>
          </motion.div>
          {/* Trust Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-7xl mx-auto mt-16 text-center border-t border-neutral-800/50 pt-12 relative z-10"
          >
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-8">Trusted by 100+ institutions across India</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Mock Logos */}
               <div className="flex items-center gap-2 font-bold text-xl"><div className="w-8 h-8 bg-white rounded-full"></div> Institute of Excellence</div>
               <div className="flex items-center gap-2 font-bold text-xl"><div className="w-8 h-8 border-4 border-white rounded-md"></div> TechMasters</div>
               <div className="flex items-center gap-2 font-bold text-xl"><div className="w-8 h-8 bg-blue-500 rotate-45"></div> Global Ed</div>
               <div className="flex items-center gap-2 font-bold text-xl"><div className="w-8 h-8 border-t-8 border-white rounded-full"></div> Academy Co.</div>
            </div>
          </motion.div>
        </section>

        {/* Problem-Solution Section */}
        <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-neutral-950/30">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why 87% of Indian Institutions Are Abandoning Traditional LMS</h2>
            <p className="text-xl text-neutral-400 font-light max-w-3xl mx-auto">The old way of managing education is broken. We asked 500+ educators what was holding them back.</p>
          </div>
          <div className="max-w-7xl mx-auto">
             <div className="grid md:grid-cols-3 gap-8 mb-20">
                {[
                  { icon: Zap, title: "Fragmented Tools = Chaos", desc: "Your faculty juggles Zoom + Google Classroom + WhatsApp + manual attendance sheets. Students lose 40% study time switching between 5-8 disconnected tools." },
                  { icon: Bot, title: "Zero AI Support", desc: "Traditional LMS offers no 24/7 doubt resolution. At-risk students fall through the cracks—identified only after they fail an exam." },
                  { icon: Users, title: "Administrative Overload", desc: "Your admin team drowns managing 200+ instructors manually. No middle management layer exists between institution admins and ground-level faculty." }
                ].map((ft, i) => (
                  <motion.div 
                    key={ft.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="bg-neutral-900 border-neutral-800 text-white h-full flex flex-col hover:border-red-500/20 transition-colors duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 text-red-500">
                          <ft.icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl">{ft.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-neutral-400 text-base leading-relaxed">
                          {ft.desc}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
             </div>

             {/* The Mentora Solution (Visual Timeline) */}
             <div className="text-center mb-12">
               <Badge variant="outline" className="mb-6 text-green-500 border-green-500/30 bg-green-500/5 uppercase tracking-widest font-black py-1.5 px-3">The Mentora Solution</Badge>
               <h3 className="text-3xl font-bold text-white mb-4">From zero to a fully functional digital campus in 60 minutes.</h3>
             </div>

             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative before:absolute before:inset-0 before:top-1/2 before:-translate-y-1/2 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-primary/30 before:to-transparent before:hidden lg:before:block">
                {[
                  { time: "Min 1-10", title: "Provisioning", desc: "Tenant provisioning complete — branded subdomain live." },
                  { time: "Min 11-30", title: "Onboarding", desc: "Bulk import 5,000 students via CSV seamlessly." },
                  { time: "Min 31-45", title: "Structuring", desc: "Create 5 Sub-Admins (one per department)." },
                  { time: "Min 46-60", title: "Going Live", desc: "First course published, AI tutor trained, live class scheduled." },
                ].map((step, i) => (
                  <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 relative z-10 shadow-xl">
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white font-bold text-sm px-3 py-1 rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                       {step.time}
                     </div>
                     <h4 className="text-xl font-bold text-white mt-4 mb-2 text-center">{step.title}</h4>
                     <p className="text-neutral-400 text-sm text-center leading-relaxed">{step.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Core Value Propositions (Icon Grid) */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <Badge variant="outline" className="mb-6 text-primary border-primary/30 bg-primary/5 uppercase tracking-widest font-black py-1.5 px-3">Everything You Need</Badge>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Designed for scale and simplicity.</h2>
             <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-8">Mentora bridges the gap between powerful enterprise features and an intuitive, beautiful user experience.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { icon: Zap, title: "Deploy in Under 1 Hour", desc: "From signup to first live class in 60 minutes. Zero IT overhead." },
               { icon: Bot, title: "AI Teaching Assistant (24/7)", desc: "Trained on your course content. Socratic tutoring, not answer-giving. 12 languages." },
               { icon: Users, title: "Intelligent Department Management", desc: "Sub-Admins distribute admin load. HODs manage their departments independently." },
               { icon: PlayCircle, title: "Live Class Studio (500 Participants)", desc: "WebRTC-powered. Auto-recording, breakout rooms, Cornell notes, attendance tracking." },
               { icon: Globe, title: "White-Label Everything", desc: "Your domain, logo, colors, mobile apps. Students never see 'Mentora.'" },
               { icon: ShieldCheck, title: "Enterprise Security", desc: "SOC 2 Type II • ISO 27001 • GDPR • Data residency in India" }
             ].map((feat, i) => (
               <motion.div 
                 key={feat.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
               >
                 <Card className="bg-neutral-900 border-neutral-800 text-white h-full hover:border-primary/50 transition-colors">
                   <CardHeader>
                     <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-primary">
                       <feat.icon className="w-6 h-6" />
                     </div>
                     <CardTitle className="text-xl">{feat.title}</CardTitle>
                   </CardHeader>
                   <CardContent>
                     <CardDescription className="text-neutral-400 text-base leading-relaxed">
                       {feat.desc}
                     </CardDescription>
                   </CardContent>
                 </Card>
               </motion.div>
             ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-neutral-950/30 border-y border-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We're Different</h2>
               <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">See why institutions are moving away from traditional, bulky platforms to Mentora's modern ecosystem.</p>
            </div>
            
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[800px]">
                 <thead>
                   <tr>
                     <th className="p-6 border-b border-neutral-800 text-neutral-400 font-medium text-lg w-1/4">Feature</th>
                     <th className="p-6 border-b border-neutral-800 text-neutral-400 font-medium text-lg w-1/4">Traditional LMS (Canvas/Blackboard)</th>
                     <th className="p-6 border-b border-neutral-800 text-neutral-400 font-medium text-lg w-1/4">Video Tools (Zoom)</th>
                     <th className="p-6 border-b-2 border-primary text-primary font-bold text-xl px-8 w-1/4 bg-primary/5 rounded-t-2xl">Mentora</th>
                   </tr>
                 </thead>
                 <tbody className="text-lg">
                   <tr className="hover:bg-neutral-900/50 transition-colors">
                     <td className="p-6 border-b border-neutral-800 text-white font-medium">Deployment Time</td>
                     <td className="p-6 border-b border-neutral-800 text-neutral-400">6-8 months</td>
                     <td className="p-6 border-b border-neutral-800 text-neutral-400">Instant (limited)</td>
                     <td className="p-6 border-b border-neutral-800 text-white font-bold px-8 bg-primary/5">&lt;1 hour (complete)</td>
                   </tr>
                   <tr className="hover:bg-neutral-900/50 transition-colors">
                     <td className="p-6 border-b border-neutral-800 text-white font-medium">AI Tutoring</td>
                     <td className="p-6 border-b border-neutral-800 text-neutral-400">❌ None</td>
                     <td className="p-6 border-b border-neutral-800 text-neutral-400">❌ None</td>
                     <td className="p-6 border-b border-neutral-800 text-white font-bold px-8 bg-primary/5 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Native, contextual</td>
                   </tr>
                   <tr className="hover:bg-neutral-900/50 transition-colors">
                     <td className="p-6 border-b border-neutral-800 text-white font-medium">Sub-Admin Layer</td>
                     <td className="p-6 border-b border-neutral-800 text-neutral-400">❌ No</td>
                     <td className="p-6 border-b border-neutral-800 text-neutral-400">❌ No</td>
                     <td className="p-6 border-b border-neutral-800 text-white font-bold px-8 bg-primary/5 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Yes — tenant-created</td>
                   </tr>
                   <tr className="hover:bg-neutral-900/50 transition-colors">
                     <td className="p-6 border-b border-neutral-800 text-white font-medium">Pricing</td>
                     <td className="p-6 border-b border-neutral-800 text-neutral-400">₹300-600/student/month</td>
                     <td className="p-6 border-b border-neutral-800 text-neutral-400">₹450/user/month</td>
                     <td className="p-6 border-b border-neutral-800 text-white font-bold px-8 bg-primary/5">₹12-15/student/month</td>
                   </tr>
                   <tr className="hover:bg-neutral-900/50 transition-colors">
                     <td className="p-6 border-b border-neutral-800 text-white font-medium">Live Classes</td>
                     <td className="p-6 border-b border-neutral-800 text-neutral-400">❌ Separate tool needed</td>
                     <td className="p-6 border-b border-neutral-800 text-neutral-400">✅ Yes</td>
                     <td className="p-6 border-b border-neutral-800 text-white font-bold px-8 bg-primary/5 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Integrated + auto-transcription</td>
                   </tr>
                   <tr className="hover:bg-neutral-900/50 transition-colors">
                     <td className="p-6 border-b border-neutral-800 text-white font-medium">White Labeling</td>
                     <td className="p-6 border-b border-neutral-800 text-neutral-400">Limited</td>
                     <td className="p-6 border-b border-neutral-800 text-neutral-400">❌ None</td>
                     <td className="p-6 border-b border-neutral-800 text-white font-bold px-8 bg-primary/5 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Full (domain + apps)</td>
                   </tr>
                   <tr className="hover:bg-neutral-900/50 transition-colors">
                     <td className="p-6 text-white font-medium">Data Ownership</td>
                     <td className="p-6 text-neutral-400">Institution owns</td>
                     <td className="p-6 text-neutral-400">Vendor retention</td>
                     <td className="p-6 text-white font-bold px-8 bg-primary/5 rounded-b-2xl">Institution owns 100%</td>
                   </tr>
                 </tbody>
               </table>
            </div>
          </div>
        </section>

        {/* Metrics Showcase */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=3000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-white/20">
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">200k+</div>
                <div className="text-primary-100 font-medium text-sm lg:text-base">Students Online Daily</div>
              </div>
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">100+</div>
                <div className="text-primary-100 font-medium text-sm lg:text-base">Institutions Live</div>
              </div>
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">99.9%</div>
                <div className="text-primary-100 font-medium text-sm lg:text-base">Platform Uptime</div>
              </div>
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">12%</div>
                <div className="text-primary-100 font-medium text-sm lg:text-base">Avg. Grade Improvement</div>
              </div>
              <div className="px-4 border-l-0 md:border-l">
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">&lt;60m</div>
                <div className="text-primary-100 font-medium text-sm lg:text-base">Avg. Deployment Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-6 max-w-7xl mx-auto text-center relative">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Institutions Scaling Education Without Scaling Costs</h2>
           <p className="text-xl text-neutral-400 font-light mb-16 max-w-2xl mx-auto">See how Mentora transforms institutional management and student outcomes.</p>
           
           <div className="grid md:grid-cols-3 gap-6 text-left">
             {[
               { name: "Dr. Priya Sharma", title: "Dean of Academics, St. Xavier's College", quote: "We deployed Mentora across 8 departments in 45 minutes. Our HODs now manage their own instructors as Sub-Admins — our IT admin's workload dropped 70%.", details: "2,400 students • 120 faculty" },
               { name: "Rajesh Gupta", title: "Director, TechMasters Institute", quote: "The AI tutor resolved 82% of student doubts after 10 PM. Our faculty can finally focus on teaching instead of answering the same beginner questions.", details: "12,000 students • JEE/NEET prep" },
               { name: "Anjali Verma", title: "VP Learning & Development, InfoTech Solutions", quote: "Sub-Admin feature is a game-changer. Each campus head manages their branch independently. No more bottleneck approvals from head office.", details: "8,000 employees • 5 training centers" }
             ].map((t, idx) => (
                <div key={idx} className="bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 hover:bg-neutral-900/60 transition-colors flex flex-col">
                  <div className="flex gap-1 mb-6 text-amber-500">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-neutral-300 mb-8 font-light leading-relaxed text-lg flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-xl font-bold text-neutral-500">{t.name.charAt(0)}</div>
                    <div>
                      <p className="font-bold text-white leading-tight">{t.name}</p>
                      <p className="text-xs text-neutral-400 mt-1">{t.title}</p>
                      <p className="text-xs text-primary mt-0.5">{t.details}</p>
                    </div>
                  </div>
                </div>
             ))}
           </div>
        </section>

        {/* Industry Recognition */}
        <section className="py-24 bg-neutral-950 border-t border-b border-neutral-900 relative text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-12">Enterprise Security & Industry Recognition</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
               <div className="flex flex-col items-center gap-2">
                 <ShieldCheck className="w-10 h-10 text-neutral-500" />
                 <span className="text-sm font-bold text-neutral-400">SOC 2 Type II<br/><span className="font-light text-xs">(In Progress)</span></span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <ShieldCheck className="w-10 h-10 text-neutral-500" />
                 <span className="text-sm font-bold text-neutral-400">ISO 27001<br/><span className="font-light text-xs">(Planned)</span></span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <ShieldCheck className="w-10 h-10 text-neutral-500" />
                 <span className="text-sm font-bold text-neutral-400">GDPR Compliant</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <ShieldCheck className="w-10 h-10 text-neutral-500" />
                 <span className="text-sm font-bold text-neutral-400">AWS Tech Partner</span>
               </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-6 sm:px-12 bg-black text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(var(--primary),0.15),transparent_100%)]"></div>
          
          <div className="relative max-w-6xl mx-auto z-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 text-white max-w-4xl mx-auto">Join 100+ Forward-Thinking Institutions</h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
               <Card className="bg-neutral-900/50 border-neutral-800 p-8 backdrop-blur-md">
                 <h3 className="text-3xl font-bold text-white mb-4">Start Your Free 90-Day Pilot</h3>
                 <p className="text-neutral-400 mb-8">No credit card required. Full feature access. Dedicated onboarding manager.</p>
                 <Button size="lg" asChild className="h-14 px-8 w-full text-lg shadow-[0_0_20px_rgba(var(--primary),0.3)] bg-primary text-white hover:bg-primary/90 border-transparent">
                   <Link to="/pricing">Start Free Trial <ArrowRight className="ml-2 w-5 h-5" /></Link>
                 </Button>
               </Card>

               <Card className="bg-neutral-900/50 border-neutral-800 p-8 backdrop-blur-md">
                 <h3 className="text-3xl font-bold text-white mb-4">Or Book a Personalized Demo</h3>
                 <p className="text-neutral-400 mb-8">30-minute live walkthrough. See Sub-Admin workflow. Custom pricing discussion.</p>
                 <Button size="lg" variant="outline" asChild className="h-14 px-8 w-full text-lg border-white text-white hover:bg-white border hover:text-black">
                   <Link to="/contact">Talk to Sales <ArrowRight className="ml-2 w-5 h-5" /></Link>
                 </Button>
               </Card>
            </div>
            
            <div className="mt-16 text-neutral-500 text-sm">
               <p className="mb-2">Trusted by institutions in Rajasthan, Maharashtra, Gujarat, Karnataka, Tamil Nadu.</p>
               <p>Questions? Call +91-XXXX-XXXXXX • support@mentora.com</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

