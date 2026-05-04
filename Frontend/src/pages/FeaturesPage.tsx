import React from 'react';
import { motion } from 'motion/react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, Users, LayoutDashboard, Database, UserPlus, FileText, 
  Video, PlayCircle, Edit3, BookOpen, FileCheck, MessageSquare,
  Bot, AlertTriangle, Route, Lightbulb, Network,
  Smartphone, Award, UserPlus2, CalendarDays, Eye,
  BarChart4, PieChart, LineChart, TrendingUp, Users2,
  Key, CloudDownload, Building, Blocks, Settings, ShieldCheck, FileKey, Shield,
  Lock, History, CheckCircle2, Globe, DatabaseBackup, GraduationCap, Sparkles, Baby
} from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30 relative overflow-hidden">
      <SiteHeader />
      
      {/* Dark modern background */}
      <div className="fixed inset-0 -z-10 bg-[#020202]"></div>
      <div className="fixed top-[0%] right-[0%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>

      <main className="flex-1 pb-32 pt-32">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
               <Badge className="bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10 mb-8 py-2 px-4 backdrop-blur-md shadow-xl uppercase tracking-widest text-xs">
                 The Arsenal
               </Badge>
            </motion.div>
            <motion.h1 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
               className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
            >
              Everything Your Institution Needs. <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Nothing It Doesn't.</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
               className="text-xl md:text-2xl text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed"
            >
              87 features. One platform. Built for Indian education.
            </motion.p>
          </div>
        </section>

        {/* Features Content (Linear Scrolling) */}
        <section className="relative max-w-7xl mx-auto px-6 space-y-32">
           
            {/* Category 1: Administrative & Management */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
              <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start border-b border-neutral-800 pb-8">
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                      <Building2 className="w-7 h-7 text-primary" />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white">Administrative & Management</h2>
                 </div>
                 <p className="text-lg text-neutral-400 font-light md:ml-[72px]">Tools designed to reduce IT overhead and scale effortlessly.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <FeatureCard icon={Building2} title="Instant Tenant Provisioning" desc="Complete institutional workspace in <60 minutes. Auto-generated subdomain, SSL, MongoDB namespace, S3 bucket, vector DB, with a guided setup wizard." color="primary" />
                 <FeatureCard icon={Users} title="Sub-Admin Role" desc="Create Sub-Admins for departments/branches. Each manages assigned instructors/courses with department-scoped analytics. Reduces Tenant Admin workload by 70%." badge="★ NEW" color="primary" />
                 <FeatureCard icon={UserPlus} title="User Provisioning (4 Methods)" desc="CSV Bulk Upload (up to 100k rows), Magic Link Activation (48-hr JWT), SSO Integration, or JIT Provisioning on first login." color="primary" />
                 <FeatureCard icon={LayoutDashboard} title="White-Label Branding" desc="Custom domains, logos, brand colors, and email templates. Students never see Mentora's brand. Native mobile apps available on Enterprise." color="primary" />
                 <FeatureCard icon={Database} title="Multi-Tenant Data Isolation" desc="Zero cross-tenant data leakage architecturally enforced. Every record tagged with tenant_id. Dedicated Pinecone namespace per tenant for AI." color="primary" />
                 <FeatureCard icon={BarChart4} title="Institutional Analytics Dashboard" desc="Institution-wide or department-scoped real-time metrics. Track active users, live class attendance, AI queries, completion rates, and historical trends." color="primary" />
                 <FeatureCard icon={FileText} title="Accreditation Reporting" desc="Auto-generated reports in NAAC/NBA formats. One-click export for attendance, assessment scores, and syllabi compiled from Sub-Admins." color="primary" />
              </div>
            </motion.div>

            {/* Category 2: Teaching & Content Delivery */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
              <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start border-b border-neutral-800 pb-8">
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                      <GraduationCap className="w-7 h-7 text-blue-500" />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white">Teaching & Content Delivery</h2>
                 </div>
                 <p className="text-lg text-neutral-400 font-light md:ml-[72px]">Best-in-class broadcasting, course building, and assessment engines.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <FeatureCard icon={Video} title="Live Class Studio (500 Pax)" desc="Agora.io WebRTC integration. Includes infinite whiteboard, real-time polls, sub-200ms Q&A, breakout rooms, and auto-recording with Whisper transcription." color="blue-500" />
                 <FeatureCard icon={PlayCircle} title="Pre-Recorded Lecture Engine" desc="Upload any format (MP4, AVI, MOV). Auto-transcoded to adaptive HLS. Includes timestamps, PDF sync, and Whisper transcription with speaker diarization." color="blue-500" />
                 <FeatureCard icon={Edit3} title="AI-Generated Cornell Notes" desc="Real-time note generation matching video timestamps. Features Cues, Notes, and Summary columns. Export to PDF, Notion, Evernote, and Google Docs." color="blue-500" />
                 <FeatureCard icon={BookOpen} title="Dragon-Drop Course Builder" desc="Syllabus creation with pre-requisite logic. Drip content unlock rules, waitlists, and publication workflow (Draft → Sub-Admin Approval → Published)." color="blue-500" />
                 <FeatureCard icon={FileCheck} title="Assessment & Assignment Engine" desc="MCQ, multi-select, essay, code grading, and file uploads. Includes rubric scoring, peer reviews, timed auto-submission, and Plagiarism Detection." color="blue-500" />
                 <FeatureCard icon={Bot} title="AI-Powered Grading Assistant" desc="Auto-grade objective questions. AI assists with short answers and essays per rubric. Code execution sandboxed in Docker. Reduces grading time by 60%." color="blue-500" />
                 <FeatureCard icon={MessageSquare} title="Discussion Forums" desc="Threaded, searchable conversations at the course or institution level. Upvote/downvote, pin threads, and AI moderation for inappropriate content." color="blue-500" />
              </div>
            </motion.div>

            {/* Category 3: AI & Personalization */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
              <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start border-b border-neutral-800 pb-8">
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                      <Sparkles className="w-7 h-7 text-purple-500" />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white">AI & Personalization</h2>
                 </div>
                 <p className="text-lg text-neutral-400 font-light md:ml-[72px]">Context-aware tutoring and deeply personalized learning roadmaps.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <FeatureCard icon={Bot} title="AI Teaching Assistant (24/7)" desc="Contextual retrieval based strictly on your uploaded materials. Socratic mode guides with hints. Multilingual support (12 languages). Rate-limited by tier." color="purple-500" />
                 <FeatureCard icon={AlertTriangle} title="At-Risk Student Identification" desc="AI correlates low attendance, poor scores, and specific AI queries to flag struggling students. Generates intervention recommendations for instructors." color="purple-500" />
                 <FeatureCard icon={Route} title="Personalized Learning Paths" desc="Dynamically generated study plans based on performance. Implements spaced repetition and adapts within 24 hours to balance multiple course loads." color="purple-500" />
                 <FeatureCard icon={Lightbulb} title="Intelligent Recommendations" desc="Collaborative filtering suggests helpful resources across courses (e.g., 'Students who struggled with Topic A found this video helpful')." color="purple-500" />
                 <FeatureCard icon={Network} title="Institutional Knowledge Graph" desc="Semantic network connecting concepts across courses. Compare curriculum to benchmarks (e.g., MIT CS) and export anonymized data for research." color="purple-500" />
              </div>
            </motion.div>

            {/* Category 4: Student Experience */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
              <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start border-b border-neutral-800 pb-8">
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <Baby className="w-7 h-7 text-emerald-500" />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white">Student Experience</h2>
                 </div>
                 <p className="text-lg text-neutral-400 font-light md:ml-[72px]">Frictionless, gamified, and highly accessible paths to success.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <FeatureCard icon={Smartphone} title="Mobile Apps (iOS + Android)" desc="Download materials for offline viewing. Video player perfectly synced with web. Auto-sync progress on reconnect. Push notifications for deadlines/grades." color="emerald-500" />
                 <FeatureCard icon={Award} title="Gamification & Engagement" desc="Badges, XP points, and Streaks. Opt-in leaderboards gamify learning and encourage consistent study habits (e.g., '7-day study streak')." color="emerald-500" />
                 <FeatureCard icon={UserPlus2} title="Social Learning" desc="Student-created private study groups, shared PDF/video annotations, and WebRTC group video calls for up to 10 participants." color="emerald-500" />
                 <FeatureCard icon={CalendarDays} title="Calendar & Notifications" desc="Unified calendar syncing with Google, Outlook, and Apple. Configurable Push, SMS, and Email notifications, plus daily/weekly digest emails." color="emerald-500" />
                 <FeatureCard icon={Eye} title="Accessibility Features" desc="WCAG 2.1 Level AA compliance. Screen reader (NVDA, JAWS) and keyboard navigation support. Auto-generated captions, high-contrast mode, and scalable fonts." color="emerald-500" />
              </div>
            </motion.div>

            {/* Category 5: Analytics & Reporting */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
              <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start border-b border-neutral-800 pb-8">
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                      <PieChart className="w-7 h-7 text-amber-500" />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white">Analytics & Reporting</h2>
                 </div>
                 <p className="text-lg text-neutral-400 font-light md:ml-[72px]">Granular insights connecting activity to concrete learning outcomes.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <FeatureCard icon={Building2} title="Tenant Admin Analytics" desc="Institution-wide overview. Track active courses, engagement metrics, grade distribution, storage, bandwidth, and view Sub-Admin activity logs." color="amber-500" />
                 <FeatureCard icon={PieChart} title="Sub-Admin Analytics" desc="Department-scoped dashboard monitoring instructor performance, student distribution, at-risk counts, and course health metrics." badge="★ NEW" color="amber-500" />
                 <FeatureCard icon={LineChart} title="Instructor Analytics" desc="Course-level tracking of enrollment, attendance, assignment trends, and a breakdown of AI tutor query topics to pinpoint mass confusion." color="amber-500" />
                 <FeatureCard icon={TrendingUp} title="Student Analytics (Self-Service)" desc="Personal dashboard tracking GPA, study time, and highlighting weak vs. strong topics. Identifies optimal study habits (e.g., times of day)." color="amber-500" />
                 <FeatureCard icon={Users2} title="Parent Dashboard" desc="View child's attendance, grades, and upcoming deadlines. Receive weekly digests and securely message teachers. Privacy-preserved AI history." color="amber-500" />
              </div>
            </motion.div>

            {/* Category 6: Integrations & Extensions */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
              <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start border-b border-neutral-800 pb-8">
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                      <Blocks className="w-7 h-7 text-rose-500" />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white">Integrations & Extensions</h2>
                 </div>
                 <p className="text-lg text-neutral-400 font-light md:ml-[72px]">Sync with the enterprise ecosystem you already use.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <FeatureCard icon={Key} title="SSO Integrations" desc="Google Workspace, MS 365, Okta, OneLogin, Azure AD via SAML 2.0 and OAuth 2.0. Supports Just-In-Time (JIT) provisioning." color="rose-500" />
                 <FeatureCard icon={CloudDownload} title="SIS Integrations" desc="Pre-built hooks for Ellucian Banner, Oracle PeopleSoft, Workday Student. Auto-sync student rosters, enrollments, and grades via REST API." color="rose-500" />
                 <FeatureCard icon={Building} title="HRMS Integration (Corporate)" desc="Bi-directional sync for employee training metrics with Workday, SAP SuccessFactors, BambooHR, and Zoho People." color="rose-500" />
                 <FeatureCard icon={Video} title="Video Conferencing Backup" desc="Automated failover to Zoom/Teams/Google Meet if primary WebRTC encounters networking issues. Manual overrides supported per class." color="rose-500" />
                 <FeatureCard icon={Blocks} title="Payment Gateway (Optional)" desc="Monetize courses with Razorpay or Stripe integrations. Supports one-time payments, installments, and subscriptions." color="rose-500" />
                 <FeatureCard icon={Settings} title="RESTful API & Webhooks" desc="Custom integrations using Bearer JWT. Event webhooks for course approvals, user creation, and more. Rate limited based on tier." color="rose-500" />
              </div>
            </motion.div>

            {/* Category 7: Security & Compliance */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
              <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start border-b border-neutral-800 pb-8">
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      <ShieldCheck className="w-7 h-7 text-cyan-500" />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white">Security & Compliance</h2>
                 </div>
                 <p className="text-lg text-neutral-400 font-light md:ml-[72px]">Enterprise-grade security preventing leaks and meeting global standards.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <FeatureCard icon={Lock} title="Data Encryption" desc="AES-256 for data at rest (MongoDB, S3). TLS 1.3 in transit. End-to-end encryption for WebRTC. Optional DRM video streaming." color="cyan-500" />
                 <FeatureCard icon={ShieldCheck} title="Role-Based Access Control" desc="7 rigid roles: Super Admin, Tenant Admin, Sub-Admin, Instructor, TA, Student, Parent. Enforced at the database query level to prevent escalation." color="cyan-500" />
                 <FeatureCard icon={History} title="Immutable Audit Logging" desc="Every login, config change, and data access is timestamped, IP-logged, and immutable. Sub-admins cannot clear their own traces." color="cyan-500" />
                 <FeatureCard icon={FileCheck} title="Global Compliance" desc="SOC 2 Type II (in progress). GDPR compliant with right-to-erasure workflows and DPO guidance. ISO/IEC 27001:2022 and FERPA ready." color="cyan-500" />
                 <FeatureCard icon={Globe} title="Data Residency Options" desc="Global deployment (AWS Mumbai primary) or strictly India-Sovereign loops. Private Cloud/On-Premises available exclusively on Enterprise." color="cyan-500" />
                 <FeatureCard icon={DatabaseBackup} title="Backup & Disaster Recovery" desc="Daily incremental and weekly full backups. Strict RTO of 4 hours and RPO of 1 hour guarantees institutional continuity during disasters." color="cyan-500" />
              </div>
            </motion.div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-24 max-w-7xl mx-auto px-6">
           <div className="mb-16 text-center">
             <h2 className="text-4xl font-bold text-white mb-4">Feature Comparison by Tier</h2>
             <p className="text-xl text-neutral-400 font-light">Find the plan that matches your institutional scale.</p>
           </div>
           
           <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-xl">
             <Table>
               <TableHeader>
                 <TableRow className="border-neutral-800 hover:bg-transparent">
                   <TableHead className="w-[300px] text-white font-bold py-6 pl-8">Feature</TableHead>
                   <TableHead className="text-white font-bold text-center py-6">Starter</TableHead>
                   <TableHead className="text-white font-bold text-center py-6 bg-primary/10">Professional</TableHead>
                   <TableHead className="text-white font-bold text-center py-6">Enterprise</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 <ComparisonRow title="Max Students" starter="500" pro="5,000" ent="Unlimited" />
                 <ComparisonRow title="Sub-Admins" starter="3" pro="10" ent="Unlimited" />
                 <ComparisonRow title="AI Tutor Queries/Day (per student)" starter="50" pro="200" ent="Unlimited" />
                 <ComparisonRow title="Live Class Participants" starter="100" pro="500" ent="500 (custom infra available)" />
                 <ComparisonRow title="Storage" starter="50 GB" pro="500 GB" ent="Custom" />
                 <ComparisonRow title="White-Label Domain" starter="Subdomain only" pro="Custom domain" ent="Custom domain + mobile apps" />
                 <ComparisonRow title="SSO" starter={false} pro={true} ent={true} />
                 <ComparisonRow title="SIS/HRMS Integration" starter={false} pro={true} ent={true} />
                 <ComparisonRow title="API Access" starter={false} pro="Limited" ent="Full" />
                 <ComparisonRow title="Support" starter="Email (24-hour response)" pro="Email + Chat (4-hour)" ent="Dedicated Slack + Phone (1-hour)" />
                 <ComparisonRow title="Uptime SLA" starter="99.5%" pro="99.9%" ent="99.95%" />
                 <TableRow className="border-t border-neutral-800 hover:bg-transparent bg-black/30">
                   <TableCell className="font-bold text-white py-6 pl-8">Pricing</TableCell>
                   <TableCell className="text-center font-bold text-white">₹15/student/month</TableCell>
                   <TableCell className="text-center font-bold text-primary bg-primary/5">₹12/student/month</TableCell>
                   <TableCell className="text-center font-bold text-white">₹8-10/student/month (negotiated)</TableCell>
                 </TableRow>
               </TableBody>
             </Table>
           </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, badge, color = "primary" }: { icon: any, title: string, desc: string, badge?: string, color?: string }) {
  const badgeClasses: Record<string, string> = {
    "primary": "text-primary border-primary/30 bg-primary/20",
    "blue-500": "text-blue-500 border-blue-500/30 bg-blue-500/20",
    "purple-500": "text-purple-500 border-purple-500/30 bg-purple-500/20",
    "emerald-500": "text-emerald-500 border-emerald-500/30 bg-emerald-500/20",
    "amber-500": "text-amber-500 border-amber-500/30 bg-amber-500/20",
    "rose-500": "text-rose-500 border-rose-500/30 bg-rose-500/20",
    "cyan-500": "text-cyan-500 border-cyan-500/30 bg-cyan-500/20",
  };

  const wrapperClasses: Record<string, string> = {
    "primary": "hover:border-primary/50",
    "blue-500": "hover:border-blue-500/50",
    "purple-500": "hover:border-purple-500/50",
    "emerald-500": "hover:border-emerald-500/50",
    "amber-500": "hover:border-amber-500/50",
    "rose-500": "hover:border-rose-500/50",
    "cyan-500": "hover:border-cyan-500/50",
  };

  const bgGradientClasses: Record<string, string> = {
    "primary": "from-primary/5",
    "blue-500": "from-blue-500/5",
    "purple-500": "from-purple-500/5",
    "emerald-500": "from-emerald-500/5",
    "amber-500": "from-amber-500/5",
    "rose-500": "from-rose-500/5",
    "cyan-500": "from-cyan-500/5",
  };

  const textClasses: Record<string, string> = {
    "primary": "text-primary",
    "blue-500": "text-blue-500",
    "purple-500": "text-purple-500",
    "emerald-500": "text-emerald-500",
    "amber-500": "text-amber-500",
    "rose-500": "text-rose-500",
    "cyan-500": "text-cyan-500",
  }
  
  return (
    <Card className={`bg-neutral-900/60 border-neutral-800 transition-colors relative overflow-hidden group ${wrapperClasses[color] || wrapperClasses['primary']}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradientClasses[color] || bgGradientClasses['primary']} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-black border border-neutral-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Icon className={`w-6 h-6 ${textClasses[color] || textClasses['primary']}`} />
          </div>
          {badge && <Badge className={`${badgeClasses[color] || badgeClasses['primary']} text-[10px] tracking-wide border`}>{badge}</Badge>}
        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-400 font-light leading-relaxed text-sm">{desc}</p>
      </CardContent>
    </Card>
  )
}

function ComparisonRow({ title, starter, pro, ent }: { title: string, starter: string | boolean, pro: string | boolean, ent: string | boolean }) {
  const renderCell = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <span className="text-neutral-600 font-bold">-</span>;
    }
    return <span className="text-neutral-300 text-sm font-medium">{val}</span>;
  }

  return (
    <TableRow className="border-neutral-800 hover:bg-white/5 transition-colors">
      <TableCell className="font-medium text-white py-4 pl-8 border-r border-neutral-800/50">{title}</TableCell>
      <TableCell className="text-center border-r border-neutral-800/50">{renderCell(starter)}</TableCell>
      <TableCell className="text-center border-r border-neutral-800/50 bg-primary/5">{renderCell(pro)}</TableCell>
      <TableCell className="text-center">{renderCell(ent)}</TableCell>
    </TableRow>
  )
}
