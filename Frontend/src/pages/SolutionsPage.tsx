import React from 'react';
import { motion } from 'motion/react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building2, Users, LayoutDashboard, Database, UserPlus, FileText, 
  Video, PlayCircle, Edit3, BookOpen, FileCheck, MessageSquare,
  Bot, AlertTriangle, Route, Lightbulb, Network,
  Smartphone, Award, UserPlus2, CalendarDays, Eye,
  BarChart4, PieChart, LineChart, TrendingUp, Users2,
  Key, CloudDownload, Building, Blocks, Settings, ShieldCheck, FileKey,
  Lock, History, CheckCircle2, Globe, DatabaseBackup, Fingerprint, MonitorPlay, BrainCircuit, Activity, Shield as ShieldIcon
} from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30 relative overflow-hidden">
      <SiteHeader />
      
      {/* Dark modern background */}
      <div className="fixed inset-0 -z-10 bg-[#020202]"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="fixed bottom-0 right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      
      <main className="flex-1 pb-32 pt-32">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden flex flex-col items-center border-b border-neutral-900 pb-32">
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <Badge className="bg-primary/10 text-primary border border-primary/20 mb-8 py-2 px-6 shadow-[0_0_15px_rgba(var(--primary),0.3)] tracking-widest uppercase font-bold text-xs ring-1 ring-primary/30">
                    Feature Capabilities
                </Badge>
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1]"
            >
              Everything Your Institution Needs. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Nothing It Doesn't.</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto"
            >
              87 features. One platform. Built for Indian education.
            </motion.p>
          </div>
        </section>

        {/* The 7 Pillars Container */}
        <section className="max-w-7xl mx-auto px-6 py-24 space-y-40">

          {/* Section 1: Administrative & Management */}
          <SectionBlock 
             number="01" 
             title="Administrative & Management" 
             desc="Tools designed to reduce IT overhead and scale effortlessly. Set up operations in record time."
             color="primary"
             Icon={Building2}
             features={[
               { icon: Building2, title: "Instant Tenant Provisioning", body: "Complete workspace in <60 mins. Subdomain, SSL, MongoDB, S3, Vector DB all auto-generated." },
               { icon: Users, title: "Sub-Admin (Department Manager)", body: "Tenant Admin delegates. Sub-Admins manage department instructors & courses with scoped analytics. Cuts central workload by 70%.", badge: "★ NEW" },
               { icon: UserPlus, title: "User Provisioning (4 Methods)", body: "100k-row CSV uploads, 48-hour Magic Links, JIT Provisioning, or traditional SAML 2.0 / OAuth SSO integrations." },
               { icon: LayoutDashboard, title: "White-Label Branding", body: "Custom subdomain, zero Mentora branding, full color/logo control. Native enterprise mobile apps available." },
               { icon: Database, title: "Multi-Tenant Data Isolation", body: "Zero cross-tenant data leakage. Hardware/software isolation on Pinecone namespaces and document DBs." },
               { icon: BarChart4, title: "Institutional Analytics", body: "Institution-wide or department-scoped realtime tracking: active users, live class attendance, AI queries." },
               { icon: FileText, title: "Accreditation Reporting", body: "NAAC/NBA auto-generated formats. Export attendance, scores, and syllabi with one click." }
             ]}
          />

          {/* Section 2: Teaching & Content Delivery */}
          <SectionBlock 
             number="02" 
             title="Teaching & Content Delivery" 
             desc="Best-in-class broadcasting, course building, and assessment engines out of the box."
             color="blue-500"
             Icon={MonitorPlay}
             reverse
             features={[
               { icon: Video, title: "Live Class Studio (500 Pax)", body: "Agora WebRTC (99.95% SLA). 9-feed video gallery, screen sharing, infinite whiteboard, polls, and breakout rooms." },
               { icon: PlayCircle, title: "Pre-Recorded Lecture Engine", body: "Auto-transcode any format to adaptive HLS. 0.5x-2x speed, bookmarks, and Whisper transcription with diarization." },
               { icon: Edit3, title: "AI-Generated Cornell Notes", body: "Real-time parsing during live classes into Cues + Notes + Summary. Click a note to jump to video timestamp." },
               { icon: BookOpen, title: "Course Builder", body: "Drag-and-drop syllabus creation. Complex pre-requisite logic, drip scheduling, and strict publication approval workflows." },
               { icon: FileCheck, title: "Assessment & Assignment", body: "MCQs, file uploads, peer reviews, timed auto-submits, plus Turnitin/GPTZero plagiarism detection." },
               { icon: Bot, title: "AI-Powered Grading Assistant", body: "Auto-grade objective questions. AI rubric scoring. Code grading via sandboxed Docker with test case static analysis." },
               { icon: MessageSquare, title: "Discussion Forums", body: "Threaded, searchable discussions. AI-powered moderation auto-flags inappropriate content across the platform." }
             ]}
          />

          {/* Section 3: AI & Personalization */}
          <SectionBlock 
             number="03" 
             title="AI & Personalization" 
             desc="Context-aware tutoring and deeply personalized learning roadmaps tailored to each learner."
             color="purple-500"
             Icon={BrainCircuit}
             features={[
               { icon: Bot, title: "AI Teaching Assistant (24/7)", body: "Trained strictly on your course content. Socratic tutoring mode provides hints without giving away answers directly." },
               { icon: AlertTriangle, title: "At-Risk Student Identification", body: "AI detects low attendance + poor scores + confusion queries. Alerts instructor instantly with intervention suggestions." },
               { icon: Route, title: "Personalized Learning Paths", body: "Generates day-by-day spaced repetition study plans based on performance. Balances load across multiple courses dynamically." },
               { icon: Lightbulb, title: "Intelligent Recommendations", body: "Collaborative filtering: 'Students who struggled with Topic A found this exact timestamped resource helpful'." },
               { icon: Network, title: "Institutional Knowledge Graph", body: "Semantic network mapping concepts platform-wide. Search 'climate policy' and see timestamped lectures across all courses." }
             ]}
          />

          {/* Section 4: Student Experience */}
          <SectionBlock 
             number="04" 
             title="Student Experience" 
             desc="Frictionless, gamified, and highly accessible paths to success to boost retention."
             color="emerald-500"
             Icon={Users}
             reverse
             features={[
               { icon: Smartphone, title: "Mobile Apps (iOS + Android)", body: "Download for offline viewing. Auto-sync progress on reconnect. Instant push notifications for new content." },
               { icon: Award, title: "Gamification & Engagement", body: "Badges (e.g. 'Quiz Master') and progressive streaks. Opt-in privacy respecting leaderboards." },
               { icon: UserPlus2, title: "Social Learning", body: "Private study groups, shared collaborative PDF annotations, and quick WebRTC group video calls." },
               { icon: CalendarDays, title: "Calendar & Notifications", body: "Unified timeline. Syncs seamlessly with Google, Apple, and Outlook calendars. SMS/Email digests." },
               { icon: Eye, title: "Accessibility Features", body: "WCAG 2.1 Level AA. Tested screen reader support (NVDA, JAWS). Auto-captions and high-contrast modes standard." }
             ]}
          />

          {/* Section 5: Analytics & Reporting */}
          <SectionBlock 
             number="05" 
             title="Analytics & Reporting" 
             desc="Granular insights connecting activity to concrete learning outcomes across all levels."
             color="amber-500"
             Icon={Activity}
             features={[
               { icon: Building2, title: "Tenant Admin Analytics", body: "Global dashboard of active courses, total students, storage/bandwidth consumption, and AI tokens consumed." },
               { icon: PieChart, title: "Sub-Admin Analytics", body: "Department-scoped dashboard monitoring instructor performance, completion rates, and raw CSV exports.", badge: "★ NEW" },
               { icon: LineChart, title: "Instructor Analytics", body: "Track mass confusion zones via AI tutor query topic clustering. Easily view submission velocity distributions." },
               { icon: TrendingUp, title: "Student Analytics (Self-Service)", body: "Highlights weak vs. strong topics. Discovers study habit insights ('You study optimally between 8-10 PM')." },
               { icon: Users2, title: "Parent Dashboard", body: "Weekly performance digest. Privacy-preserving AI chat history (topics only). Direct teacher messaging." }
             ]}
          />

          {/* Section 6: Integrations & Extensions */}
          <SectionBlock 
             number="06" 
             title="Integrations & Extensions" 
             desc="Sync with the enterprise ecosystem you already use. Completely modular API structure."
             color="rose-500"
             Icon={Blocks}
             reverse
             features={[
               { icon: Key, title: "SSO Integrations", body: "Google, Microsoft 365, Okta, Azure AD via OAuth 2.0 / SAML 2.0. Native JIT provisioning." },
               { icon: CloudDownload, title: "SIS (Student Info System)", body: "Ellucian Banner, Oracle PeopleSoft, Workday hooks. Auto-sync enrollment and final grades." },
               { icon: Building, title: "HRMS Integration", body: "Corporate training sync for Workday, SAP SuccessFactors, BambooHR, and Zoho People." },
               { icon: Video, title: "Video Conferencing Backup", body: "If Agora experiences local network outages, system auto-fails over to Zoom/Teams seamlessly." },
               { icon: Settings, title: "RESTful Webhooks API", body: "API key authentication. Events like sub_admin.created, course.approved available for instant payloads." },
               { icon: FileKey, title: "Payment Gateway", body: "Razorpay, Stripe built-in for coaching institutes. Supports subscription or installment billing out of the box." }
             ]}
          />

          {/* Section 7: Security & Compliance */}
          <SectionBlock 
             number="07" 
             title="Security & Compliance" 
             desc="Enterprise-grade security preventing leaks and meeting global operational standards."
             color="cyan-500"
             Icon={ShieldIcon}
             features={[
               { icon: Lock, title: "Data Encryption", body: "AES-256 at rest. TLS 1.3 in transit. End-to-end encrypted WebRTC. Optional DRM on video files." },
               { icon: ShieldCheck, title: "Role-Based Access Control", body: "7 strict roles enforcing permissions at the database query layer. Escalation is structurally impossible." },
               { icon: History, title: "Audit Logging", body: "Immutable logs tracking User ID, Action, Timestamp, IP. Sub-admins cannot alter their own trails." },
               { icon: Fingerprint, title: "SOC 2 & ISO 27001", body: "SOC 2 Type II processing/confidentiality (Q3 2025). ISO 27001 ISMS planned Q4 2025." },
               { icon: Globe, title: "GDPR & Data Residency", body: "Right to erasure. Primary servers in AWS Mumbai with India-Sovereign data-loop compliance." },
               { icon: DatabaseBackup, title: "Disaster Recovery", body: "Daily incremental + weekly full backups. Strict RTO of 4 hours and RPO of 1 hour." }
             ]}
          />

        </section>

        {/* Feature Comparison Table */}
        <section className="py-24 max-w-7xl mx-auto px-6 border-t border-neutral-900 mt-24">
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
                 <ComparisonRow title="AI Tutor Queries/Day" starter="50" pro="200" ent="Unlimited" />
                 <ComparisonRow title="Live Class Participants" starter="100" pro="500" ent="500 (custom infra)" />
                 <ComparisonRow title="Storage" starter="50 GB" pro="500 GB" ent="Custom" />
                 <ComparisonRow title="White-Label Domain" starter="Subdomain only" pro="Custom domain" ent="Custom domain + apps" />
                 <ComparisonRow title="SSO Integrations" starter={false} pro={true} ent={true} />
                 <ComparisonRow title="SIS/HRMS Integrations" starter={false} pro={true} ent={true} />
                 <ComparisonRow title="API Access" starter={false} pro="Limited" ent="Full" />
                 <ComparisonRow title="Tech Support" starter="Email (24-hour)" pro="Email + Chat (4-hour)" ent="Slack + Phone (1-hour)" />
                 <ComparisonRow title="Uptime SLA" starter="99.5%" pro="99.9%" ent="99.95%" />
                 <TableRow className="border-t border-neutral-800 hover:bg-transparent bg-black/30">
                   <TableCell className="font-bold text-white py-6 pl-8">Pricing</TableCell>
                   <TableCell className="text-center font-bold text-white">₹15/student/month</TableCell>
                   <TableCell className="text-center font-bold text-primary bg-primary/5">₹12/student/month</TableCell>
                   <TableCell className="text-center font-bold text-white">₹8-10/student/mo (negotiated)</TableCell>
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

// Reusable Components

function SectionBlock({ 
  number, title, desc, color, Icon, reverse = false, features 
}: { 
  number: string, title: string, desc: string, color: string, Icon: any, reverse?: boolean, features: any[] 
}) {
  const colorMap: Record<string, string> = {
    "primary": "text-primary border-primary/30 from-primary/10 to-transparent",
    "blue-500": "text-blue-500 border-blue-500/30 from-blue-500/10 to-transparent",
    "purple-500": "text-purple-500 border-purple-500/30 from-purple-500/10 to-transparent",
    "emerald-500": "text-emerald-500 border-emerald-500/30 from-emerald-500/10 to-transparent",
    "amber-500": "text-amber-500 border-amber-500/30 from-amber-500/10 to-transparent",
    "rose-500": "text-rose-500 border-rose-500/30 from-rose-500/10 to-transparent",
    "cyan-500": "text-cyan-500 border-cyan-500/30 from-cyan-500/10 to-transparent",
  };

  const textClasses: Record<string, string> = {
    "primary": "text-primary",
    "blue-500": "text-blue-500",
    "purple-500": "text-purple-500",
    "emerald-500": "text-emerald-500",
    "amber-500": "text-amber-500",
    "rose-500": "text-rose-500",
    "cyan-500": "text-cyan-500",
  };

  const textClass = textClasses[color] || textClasses['primary'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start relative"
    >
      {/* Visual / Title Anchor Column */}
      <div className={cn("sticky top-32 flex flex-col items-start", reverse ? "lg:order-2" : "lg:order-1")}>
         <div className="flex items-baseline gap-2 mb-6 opacity-30">
            <span className={cn("text-7xl font-black tracking-tighter", textClass)}>{number}</span>
         </div>
         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">{title}</h2>
         <p className="text-xl text-neutral-400 font-light mb-12">{desc}</p>
         
         <div className="w-full aspect-[4/3] rounded-3xl border border-neutral-800 bg-neutral-900/50 flex items-center justify-center relative overflow-hidden group">
            <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-20", colorMap[color] || colorMap['primary'])}></div>
            <Icon className={cn("w-32 h-32 opacity-20 group-hover:scale-110 transition-transform duration-700", textClass)} />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
         </div>
      </div>

      {/* Feature List Column */}
      <div className={cn("space-y-6", reverse ? "lg:order-1" : "lg:order-2")}>
        {features.map((feat, idx) => (
          <ListCard key={idx} icon={feat.icon} title={feat.title} body={feat.body} badge={feat.badge} color={color} />
        ))}
      </div>
    </motion.div>
  );
}

function ListCard({ icon: Icon, title, body, badge, color }: { icon: any, title: string, body: string, badge?: string, color: string }) {
  const badgeClasses: Record<string, string> = {
    "primary": "text-primary border-primary/30 bg-primary/20",
    "blue-500": "text-blue-500 border-blue-500/30 bg-blue-500/20",
    "purple-500": "text-purple-500 border-purple-500/30 bg-purple-500/20",
    "emerald-500": "text-emerald-500 border-emerald-500/30 bg-emerald-500/20",
    "amber-500": "text-amber-500 border-amber-500/30 bg-amber-500/20",
    "rose-500": "text-rose-500 border-rose-500/30 bg-rose-500/20",
    "cyan-500": "text-cyan-500 border-cyan-500/30 bg-cyan-500/20",
  };
  const hoverClasses: Record<string, string> = {
    "primary": "hover:border-primary/50",
    "blue-500": "hover:border-blue-500/50",
    "purple-500": "hover:border-purple-500/50",
    "emerald-500": "hover:border-emerald-500/50",
    "amber-500": "hover:border-amber-500/50",
    "rose-500": "hover:border-rose-500/50",
    "cyan-500": "hover:border-cyan-500/50",
  };
  const iconClasses: Record<string, string> = {
    "primary": "text-primary",
    "blue-500": "text-blue-500",
    "purple-500": "text-purple-500",
    "emerald-500": "text-emerald-500",
    "amber-500": "text-amber-500",
    "rose-500": "text-rose-500",
    "cyan-500": "text-cyan-500",
  };

  return (
    <Card className={cn("bg-neutral-900/40 border-neutral-800 transition-colors group", hoverClasses[color] || hoverClasses['primary'])}>
      <CardContent className="p-6 flex flex-col md:flex-row gap-6">
        <div className="shrink-0 mt-1">
          <div className="w-12 h-12 rounded-xl bg-black border border-neutral-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
             <Icon className={cn("w-6 h-6", iconClasses[color] || iconClasses['primary'])} />
          </div>
        </div>
        <div>
           <div className="flex items-center gap-3 mb-2 flex-wrap">
             <h3 className="text-xl font-bold text-white">{title}</h3>
             {badge && <Badge className={cn("text-[10px] tracking-widest border font-bold uppercase", badgeClasses[color] || badgeClasses['primary'])}>{badge}</Badge>}
           </div>
           <p className="text-neutral-400 font-light leading-relaxed">{body}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function ComparisonRow({ title, starter, pro, ent }: { title: string, starter: string | boolean, pro: string | boolean, ent: string | boolean }) {
  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-neutral-600">-</span>;
    }
    return value;
  };

  return (
    <TableRow className="border-neutral-800 hover:bg-neutral-900/50 transition-colors">
      <TableCell className="font-medium text-white py-4 pl-8">{title}</TableCell>
      <TableCell className="text-center text-neutral-300 py-4">{renderCell(starter)}</TableCell>
      <TableCell className="text-center text-white font-semibold py-4 bg-primary/5">{renderCell(pro)}</TableCell>
      <TableCell className="text-center text-neutral-300 py-4">{renderCell(ent)}</TableCell>
    </TableRow>
  );
}
