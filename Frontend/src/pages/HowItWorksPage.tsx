import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Zap, Users, Layers, MonitorPlay, CheckCircle2, Server, 
  Cog, Link, Database, Cloud, FileUp, Sparkles, Building2, 
  Activity, GraduationCap, LayoutDashboard, Clock, AlertTriangle, MessageSquare, ListTodo, ShieldCheck
} from 'lucide-react';

export default function HowItWorksPage() {
  const timelineSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineSectionRef,
    offset: ['start 25%', 'end 75%'],
  });
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30 relative overflow-hidden">
      <SiteHeader />
      
      {/* Background Grid */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <main className="flex-1 pb-32 pt-32">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden flex flex-col items-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/20 blur-[150px] -z-10 rounded-full mt-20 pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Badge className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 mb-8 py-2 px-6 shadow-[0_0_15px_rgba(var(--primary),0.3)] tracking-widest uppercase font-bold text-xs rounded-full">
                    The 60-Minute Promise
                </Badge>
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.5 }}
                className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight"
            >
              From Signup to Your First <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-pulse">Live Class in 60 Minutes.</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-3xl"
            >
              No servers to configure. No consultants to hire. No 6-month implementation nightmare.
            </motion.p>
          </div>
        </section>

        {/* Visual Timeline Section */}
        <section ref={timelineSectionRef} className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative pl-8 md:pl-0">
               {/* Center line with animated progress for Desktop */}
               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-900 rounded-full -translate-x-1/2 overflow-hidden">
                 <motion.div 
                   className="absolute top-0 w-full bg-gradient-to-b from-primary via-blue-500 to-purple-500 rounded-full" 
                   style={{ height: timelineHeight }}
                 />
               </div>

               {/* Mobile line */}
               <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-1 bg-neutral-900 rounded-full overflow-hidden">
                 <motion.div 
                   className="absolute top-0 w-full bg-gradient-to-b from-primary via-blue-500 to-purple-500 rounded-full" 
                   style={{ height: timelineHeight }}
                 />
               </div>
               
               <div className="space-y-40">
                  {/* Phase 1 */}
                  <div className="relative md:flex md:justify-between md:items-center group">
                    <div className="absolute left-[-45px] md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-neutral-950 border-4 border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_30px_rgba(var(--primary),0.6)] text-primary group-hover:scale-110 transition-transform duration-300">
                       <Zap className="w-8 h-8" />
                    </div>
                    <div className="md:w-5/12 text-left md:text-right pr-0 md:pr-16">
                       <div className="inline-block bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(var(--primary),0.2)]">Phase 1: Minutes 1-10</div>
                       <h3 className="text-4xl font-bold text-white mb-6 tracking-tight group-hover:text-primary transition-colors">Instant Provisioning</h3>
                       <p className="text-neutral-400 text-lg leading-relaxed mb-6">Sign up at mentora.com/signup. The system instantly auto-generates your Tenant ID, Custom Subdomain, SSL, MongoDB namespace, S3 bucket, and AI Vector DB.</p>
                       <div className="inline-flex flex-col gap-2 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 text-left w-full max-w-sm ml-auto md:ml-auto md:mr-0 custom-scrollbar overflow-hidden relative">
                         <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-neutral-900/80 to-transparent pointer-events-none"></div>
                         <p className="text-sm font-bold text-white mb-2">Guided 5-Step Wizard:</p>
                         <WizardStep num="1" text="Upload logo & brand colors" />
                         <WizardStep num="2" text="Set timezone & academic calendar" />
                         <WizardStep num="3" text="Configure SSO (Google/Microsoft)" />
                         <WizardStep num="4" text="Create first Sub-Admin" />
                         <WizardStep num="5" text="Billing details" />
                       </div>
                    </div>
                    <div className="hidden md:flex md:w-5/12 pl-16 items-center justify-center">
                       <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 shadow-2xl relative w-full h-[350px] overflow-hidden">
                           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80')] opacity-10 bg-cover mix-blend-luminosity"></div>
                           <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                             <Cog className="w-24 h-24 text-primary animate-[spin_8s_linear_infinite]" />
                             <p className="text-primary font-mono text-sm tracking-widest opacity-80 animate-pulse">SPINNING UP INFRASTRUCTURE...</p>
                           </div>
                       </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="relative md:flex md:justify-between md:items-center group">
                    <div className="absolute left-[-45px] md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-neutral-950 border-4 border-blue-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_30px_rgba(59,130,246,0.6)] text-blue-500 group-hover:scale-110 transition-transform duration-300">
                       <Users className="w-8 h-8" />
                    </div>
                    <div className="hidden md:flex md:w-5/12 pr-16 items-center justify-center">
                       <div className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative w-full h-[350px] flex">
                          <div className="w-1/2 bg-blue-950/20 border-r border-neutral-800 flex flex-col items-center justify-center p-6 text-center">
                            <FileUp className="w-12 h-12 text-blue-500 mb-4 opacity-80" />
                            <p className="text-sm font-medium text-white mb-2">CSV Uploading</p>
                            <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                              <div className="bg-blue-500 h-full w-3/4 animate-[pulse_2s_ease-in-out_infinite]"></div>
                            </div>
                            <p className="text-xs text-neutral-500 mt-2">Parsed 1,200 rows</p>
                          </div>
                          <div className="w-1/2 bg-neutral-900/20 flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-4">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-8 h-8 opacity-50 grayscale" />
                            </div>
                            <p className="text-sm font-medium text-white">SSO JIT Active</p>
                            <p className="text-xs text-neutral-500 mt-1">Ready for logins</p>
                          </div>
                       </div>
                    </div>
                    <div className="md:w-5/12 text-left pl-0 md:pl-16">
                       <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-500 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(59,130,246,0.2)]">Phase 2: Minutes 11-30</div>
                       <h3 className="text-4xl font-bold text-white mb-6 tracking-tight group-hover:text-blue-500 transition-colors">User Provisioning (3 Ways)</h3>
                       <div className="space-y-6">
                         <div>
                           <h4 className="text-white font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500"/> CSV Bulk Upload</h4>
                           <p className="text-neutral-400 text-sm leading-relaxed">Download template. Upload up to 100,000 rows. System validates, you confirm, and branded magic-link activation emails go out.</p>
                         </div>
                         <div>
                           <h4 className="text-white font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500"/> SSO Auto-Provisioning</h4>
                           <p className="text-neutral-400 text-sm leading-relaxed">Students/faculty sign in with institutional Google/Microsoft. Accounts created Just-In-Time (JIT) on first login.</p>
                         </div>
                         <div>
                           <h4 className="text-white font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500"/> Manual Entry</h4>
                           <p className="text-neutral-400 text-sm leading-relaxed">Add individual VIPs or late enrollments instantly via UI.</p>
                         </div>
                       </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative md:flex md:justify-between md:items-center group">
                    <div className="absolute left-[-45px] md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-neutral-950 border-4 border-amber-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_30px_rgba(245,158,11,0.6)] text-amber-500 group-hover:scale-110 transition-transform duration-300">
                       <Layers className="w-8 h-8" />
                    </div>
                    <div className="md:w-5/12 text-left md:text-right pr-0 md:pr-16">
                       <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-500 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(245,158,11,0.2)]">Phase 3: Minutes 31-45</div>
                       <h3 className="text-4xl font-bold text-white mb-6 tracking-tight group-hover:text-amber-500 transition-colors">Department Structure Setup</h3>
                       <p className="text-neutral-400 text-lg leading-relaxed mb-6">Create Sub-Admins for HODs or Department Managers. They manage their own instructors, course approvals, and view department-scoped analytics independently.</p>
                       <Card className="bg-neutral-900 border-neutral-800 text-left text-sm md:ml-auto w-full max-w-sm">
                         <CardContent className="p-5">
                           <p className="font-bold text-white mb-3">Sub-Admin Setup:</p>
                           <p className="text-neutral-400 mb-2">• <strong>Name:</strong> Dr. Ramesh Kumar</p>
                           <p className="text-neutral-400 mb-2">• <strong>Dept:</strong> Computer Science</p>
                           <p className="text-neutral-400 mb-4">• <strong>Staff:</strong> Drag-and-drop assignment</p>
                           <div className="space-y-1 border-t border-neutral-800 pt-3">
                             <p className="text-amber-400 font-medium text-xs">PERMISSIONS GRANTED:</p>
                             <p className="text-white text-xs flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500"/> Course Approvals</p>
                             <p className="text-white text-xs flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500"/> Announcements</p>
                             <p className="text-white text-xs flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500"/> Analytics Access</p>
                           </div>
                         </CardContent>
                       </Card>
                    </div>
                    <div className="hidden md:flex md:w-5/12 pl-16 items-center justify-center">
                       <div className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative w-full h-[350px]">
                           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555529733-0e670560f8e1?auto=format&fit=crop&q=80')] opacity-10 bg-cover mix-blend-color-dodge"></div>
                           <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 mb-4 transform translate-x-4 shadow-xl">
                                 <p className="text-xs text-neutral-500 font-mono mb-1">DASHBOARD VIEW</p>
                                 <p className="text-white font-bold">CS Department Overview</p>
                                 <div className="flex gap-2 mt-3">
                                   <div className="h-2 w-1/3 bg-green-500/50 rounded-full"></div>
                                   <div className="h-2 w-1/4 bg-blue-500/50 rounded-full"></div>
                                   <div className="h-2 w-full bg-neutral-800 rounded-full"></div>
                                 </div>
                              </div>
                              <div className="bg-neutral-900/60 backdrop-blur border border-neutral-800 rounded-xl p-4 transform -translate-x-4">
                                 <p className="text-white text-sm font-medium mb-2">Pending Course Approvals</p>
                                 <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2">
                                   <span className="text-xs text-neutral-400">Data Structures 101</span>
                                   <Badge className="bg-amber-500/20 text-amber-500 text-[10px]">Review</Badge>
                                 </div>
                              </div>
                           </div>
                       </div>
                    </div>
                  </div>

                  {/* Phase 4 */}
                  <div className="relative md:flex md:justify-between md:items-center group">
                    <div className="absolute left-[-45px] md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-neutral-950 border-4 border-purple-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_30px_rgba(168,85,247,0.6)] text-purple-500 group-hover:scale-110 transition-transform duration-300">
                       <MonitorPlay className="w-8 h-8" />
                    </div>
                    <div className="hidden md:flex md:w-5/12 pr-16 items-center justify-center">
                       <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-[350px]">
                         <div className="col-span-2 bg-neutral-950 border border-neutral-800 rounded-2xl p-4 shadow-xl flex flex-col justify-center relative overflow-hidden group-hover:border-purple-500/30 transition-colors">
                           <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"></div>
                           <p className="text-xs font-bold text-purple-400 mb-1 relative z-10">1. INSTRUCTOR</p>
                           <p className="text-sm text-white relative z-10">Creates course, uploads syllabus PDF & video.</p>
                         </div>
                         <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 shadow-xl flex flex-col justify-center relative overflow-hidden">
                           <p className="text-xs font-bold text-amber-400 mb-1 relative z-10">2. SUB-ADMIN</p>
                           <p className="text-xs text-neutral-300 relative z-10">Approves via dashboard queue.</p>
                         </div>
                         <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 shadow-xl flex flex-col justify-center relative overflow-hidden">
                           <p className="text-xs font-bold text-blue-400 mb-1 relative z-10">3. STUDENT</p>
                           <p className="text-xs text-neutral-300 relative z-10">Enrolls, opens lecture, chats with AI.</p>
                         </div>
                       </div>
                    </div>
                    <div className="md:w-5/12 text-left pl-0 md:pl-16">
                       <div className="inline-block bg-purple-500/10 border border-purple-500/20 text-purple-500 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(168,85,247,0.2)]">Phase 4: Minutes 46-60</div>
                       <h3 className="text-4xl font-bold text-white mb-6 tracking-tight group-hover:text-purple-500 transition-colors">First Course Goes Live</h3>
                       <div className="space-y-6">
                         <div>
                           <p className="text-white font-bold mb-1 flex items-center gap-2"><Sparkles className="w-4 h-4 text-purple-400"/> Auto-Processing Pipeline</p>
                           <p className="text-neutral-400 text-sm leading-relaxed border-l-2 border-neutral-800 pl-4 py-1 ml-2">Videos automatically transcode to adaptive HLS. PDFs are text-extracted for AI Vector DB placement. Audio receives Whisper transcription.</p>
                         </div>
                         <div>
                           <p className="text-white font-bold mb-1 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400"/> 1-Click Publishing</p>
                           <p className="text-neutral-400 text-sm leading-relaxed border-l-2 border-neutral-800 pl-4 py-1 ml-2">Instructor submits, Sub-Admin approves, and the course hits the student catalog immediately.</p>
                         </div>
                         <div>
                           <p className="text-white font-bold mb-1 flex items-center gap-2"><LayoutDashboard className="w-4 h-4 text-blue-400"/> Student View</p>
                           <p className="text-neutral-400 text-sm leading-relaxed border-l-2 border-neutral-800 pl-4 py-1 ml-2">Student launches the lecture and the AI tutor widget appears, ready to answer questions contextually.</p>
                         </div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Ongoing Operations (Day-to-Day) */}
        <section className="py-32 bg-neutral-950 border-y border-neutral-900 relative">
           <div className="max-w-[90rem] mx-auto px-6">
              <div className="text-center mb-20 md:mb-24">
                 <Badge variant="outline" className="mb-6 font-bold tracking-widest uppercase text-primary border-primary/20">The Daily Reality</Badge>
                 <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ongoing Operations (Day-to-Day)</h2>
                 <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">What the platform feels like running at full capacity.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                 {/* Tenant Admin */}
                 <div className="bg-neutral-900/50 border border-neutral-800 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                   <Building2 className="absolute -bottom-12 -right-12 w-64 h-64 text-primary/5 pointer-events-none group-hover:text-primary/10 transition-colors" />
                   <h3 className="text-3xl font-bold text-white mb-8 border-b border-neutral-800 pb-6">For Tenant Admin</h3>
                   
                   <div className="space-y-8 relative z-10">
                     <div>
                       <h4 className="text-primary font-bold flex items-center gap-2 mb-3"><LayoutDashboard className="w-5 h-5"/> Dashboard Overview</h4>
                       <ul className="space-y-2 text-neutral-400 text-sm">
                         <li>• Institution-wide metrics: total students, courses, live hours.</li>
                         <li>• Sub-Admin activity logs and billing (AI tokens, storage).</li>
                         <li>• Alerts: "3 instructors haven't logged in for 2 weeks."</li>
                       </ul>
                     </div>
                     <div>
                       <h4 className="text-primary font-bold flex items-center gap-2 mb-3"><ListTodo className="w-5 h-5"/> Monthly Tasks</h4>
                       <ul className="space-y-2 text-neutral-400 text-sm">
                         <li>• Review Sub-Admin performance reports.</li>
                         <li>• Approve budget for additional AI tokens if needed.</li>
                         <li>• Export NAAC/NBA accreditation reports.</li>
                       </ul>
                     </div>
                   </div>
                 </div>

                 {/* Sub-Admin */}
                 <div className="bg-neutral-900/50 border border-neutral-800 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                   <Building2 className="absolute -bottom-12 -right-12 w-64 h-64 text-amber-500/5 pointer-events-none group-hover:text-amber-500/10 transition-colors" />
                   <h3 className="text-3xl font-bold text-white mb-8 border-b border-neutral-800 pb-6">For Sub-Admin <span className="text-lg text-neutral-500 font-light">(Dept Manager)</span></h3>
                   
                   <div className="space-y-8 relative z-10">
                     <div>
                       <h4 className="text-amber-500 font-bold flex items-center gap-2 mb-3"><Activity className="w-5 h-5"/> Weekly Routine</h4>
                       <ul className="space-y-4 text-neutral-400 text-sm pl-4 border-l-2 border-neutral-800">
                         <li><strong className="text-white">Monday:</strong> Check attendance rates, quiz averages, and approve pending courses.</li>
                         <li><strong className="text-white">Wednesday:</strong> Review AI-flagged at-risk students and notify instructors.</li>
                         <li><strong className="text-white">Friday:</strong> Finalize approvals for next week's modules.</li>
                       </ul>
                     </div>
                   </div>
                 </div>

                 {/* Instructors */}
                 <div className="bg-neutral-900/50 border border-neutral-800 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                   <MonitorPlay className="absolute -bottom-12 -right-12 w-64 h-64 text-purple-500/5 pointer-events-none group-hover:text-purple-500/10 transition-colors" />
                   <h3 className="text-3xl font-bold text-white mb-8 border-b border-neutral-800 pb-6">For Instructors</h3>
                   
                   <Tabs defaultValue="live" className="w-full relative z-10">
                    <TabsList className="grid grid-cols-3 bg-neutral-950/50 mb-6">
                      <TabsTrigger value="live">Live Class</TabsTrigger>
                      <TabsTrigger value="post">Post-Class</TabsTrigger>
                      <TabsTrigger value="grading">Grading</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="live" className="text-neutral-400 text-sm space-y-2 mt-0">
                      <p>• Join 10 minutes early. Students join WebRTC room (500 max).</p>
                      <p>• Teach using screen share and infinite whiteboard.</p>
                      <p>• Launch polls, manage breakout rooms, and monitor Q&A sidebar.</p>
                    </TabsContent>
                    
                    <TabsContent value="post" className="text-neutral-400 text-sm space-y-2 mt-0">
                      <p>• Recording automatically saved.</p>
                      <p>• AI generates Whisper transcription and Cornell notes within 30 mins.</p>
                      <p>• Attendance auto-logged (75% duration threshold enforced).</p>
                    </TabsContent>

                    <TabsContent value="grading" className="text-neutral-400 text-sm space-y-2 mt-0">
                      <p>• AI auto-grades MCQs and numericals instantly.</p>
                      <p>• AI-assisted grading for essays via custom rubric scoring.</p>
                      <p>• Instructor performs 1-click approve or adjusts suggestions.</p>
                    </TabsContent>
                   </Tabs>
                 </div>

                 {/* Students */}
                 <div className="bg-neutral-900/50 border border-neutral-800 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                   <GraduationCap className="absolute -bottom-12 -right-12 w-64 h-64 text-blue-500/5 pointer-events-none group-hover:text-blue-500/10 transition-colors" />
                   <h3 className="text-3xl font-bold text-white mb-8 border-b border-neutral-800 pb-6">For Students</h3>
                   
                   <div className="space-y-6 relative z-10">
                     <div className="bg-neutral-950/50 p-4 rounded-xl border border-neutral-800">
                       <p className="text-white font-bold mb-2 flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400"/> Daily Learning Flow</p>
                       <div className="space-y-3 mt-3">
                         <div className="flex gap-3">
                           <span className="text-blue-500 font-bold text-xs mt-0.5">MORN</span>
                           <p className="text-neutral-400 text-sm">Push notification: "New lecture available."</p>
                         </div>
                         <div className="flex gap-3">
                           <span className="text-blue-500 font-bold text-xs mt-0.5">STUDY</span>
                           <p className="text-neutral-400 text-sm">Watch video (1.5x speed). Pause to ask AI tutor questions. AI uses Socratic hints, not direct answers.</p>
                         </div>
                         <div className="flex gap-3">
                           <span className="text-blue-500 font-bold text-xs mt-0.5">NIGHT</span>
                           <p className="text-neutral-400 text-sm">Attend live doubt clearing. Submit practice assignments.</p>
                         </div>
                       </div>
                     </div>
                     <p className="text-sm text-neutral-400 pl-4 border-l-2 border-blue-500/30">
                       <strong>Weekly Email:</strong> Gets AI-generated study plans targeting specific weak topics based on quiz performance.
                     </p>
                   </div>
                 </div>

              </div>
           </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-32 relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 relative z-10">
             <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-white mb-6">Behind the Scenes</h2>
               <p className="text-xl text-neutral-400 font-light">Enterprise architecture delivering 99.95% uptime.</p>
             </div>

             <div className="grid lg:grid-cols-12 gap-8 md:items-center">
                <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                  {/* Abstract diagram */}
                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.05)_0%,transparent_80%)]"></div>
                   
                   <div className="grid grid-cols-3 gap-4 relative z-10">
                      <div className="col-span-3 bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center">
                        <p className="text-neutral-500 text-xs font-bold tracking-widest mb-2">FRONTEND</p>
                        <p className="text-white font-medium">Next.js Web + React Native Apps</p>
                      </div>
                      <div className="col-span-3 flex justify-center py-2">
                         <div className="w-px h-8 bg-neutral-800"></div>
                      </div>
                      <div className="col-span-3 bg-neutral-900/50 border border-neutral-800 border-dashed rounded-xl p-4 text-center">
                        <p className="text-neutral-500 text-xs font-bold tracking-widest mb-1">API GATEWAY</p>
                        <p className="text-white font-medium text-sm">Kong (Rate Limit & Auth)</p>
                      </div>
                      <div className="col-span-3 flex justify-center gap-24 py-2 relative">
                         <div className="w-px h-8 bg-neutral-800"></div>
                         <div className="w-px h-8 bg-neutral-800"></div>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-150px)] h-px bg-neutral-800"></div>
                      </div>
                      
                      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center">
                        <Database className="w-6 h-6 text-blue-500 mx-auto mb-2"/>
                        <p className="text-xs text-neutral-400">MongoDB Atlas + Redis</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center">
                        <Sparkles className="w-6 h-6 text-purple-500 mx-auto mb-2"/>
                        <p className="text-xs text-neutral-400">Llama 3.1 + Pinecone</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center">
                        <Cloud className="w-6 h-6 text-amber-500 mx-auto mb-2"/>
                        <p className="text-xs text-neutral-400">AWS S3 + Agora WebRTC</p>
                      </div>
                   </div>
                </div>

                <div className="lg:col-span-5 space-y-6">
                   <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
                     <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Server className="w-5 h-5 text-primary"/> Core Technologies</h4>
                     <p className="text-neutral-400 text-sm leading-relaxed">
                       Python FastAPI Microservices, Next.js, WebRTC, AWS infrastructure, Datadog Monitoring.
                     </p>
                   </div>
                   <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 border-l-4 border-l-primary">
                     <h4 className="text-white font-bold mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary"/> Absolute Data Isolation</h4>
                     <p className="text-neutral-400 text-sm leading-relaxed">
                       Every database record is tagged with a root <code>tenant_id</code>. Sub-Admin queries are additionally filtered by <code>department_id</code>. Cross-tenant data leakage is architecturally impossible.
                     </p>
                   </div>
                </div>
             </div>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 max-w-4xl mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
           </div>
           
           <div className="space-y-6">
              {[
                { q: "What if we already use Google Classroom / Microsoft Teams?", a: "Mentora integrates via LTI standard. Students can access Mentora courses from within Teams/Classroom. Or use Mentora as the single source of truth and sunset fragmented tools." },
                { q: "Can we customize the platform heavily?", a: "Yes. Enterprise tier includes: custom mobile app development, API access, custom integrations, dedicated Slack support channel." },
                { q: "What happens to our data if we want to leave?", a: "You own 100% of your data. One-click export to standard formats (CSV, JSON, SCORM). No lock-in whatsoever." },
                { q: "How many Sub-Admins can we create?", a: "Unlimited. Recommended: 1 Sub-Admin per department or 1 per 20-30 instructors to keep things manageable." },
                { q: "Do Sub-Admins need technical training?", a: "No. They receive a 4-step orientation tour on first login. Average time to full competence is 2 hours." }
              ].map((faq, i) => (
                <div key={i} className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 group hover:border-primary/30 transition-colors">
                   <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{faq.q}</h4>
                   <p className="text-neutral-400 leading-relaxed text-lg">{faq.a}</p>
                </div>
              ))}
           </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function WizardStep({ num, text }: { num: string, text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
        <span className="text-[10px] text-primary font-bold">{num}</span>
      </div>
      <p className="text-neutral-300 text-xs truncate">{text}</p>
    </div>
  )
}
