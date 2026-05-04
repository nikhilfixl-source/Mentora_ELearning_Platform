import React from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Badge } from '@/components/ui/badge';
import { Database, Sparkles, BookOpen, Layers, Cog, ShieldCheck, Activity, Briefcase, Users } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30">
      <SiteHeader />
      <main className="flex-1 pb-24">
        <section className="py-24 bg-muted/20 border-b-2 border-slate-200 dark:border-slate-800 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 text-center text-balance">
            <Badge className="bg-primary/20 text-primary hover:bg-primary/20 border-0 mb-6">How It Works</Badge>
            <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight">The Engine Powering Next-Gen Learning Platforms</h1>
            <p className="text-xl text-foreground/80 font-extrabold leading-relaxed">
              Mentora abstracts away the heavy lifting of AI orchestration, video streaming, and role-based access control so you can focus on building your curriculum.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-32">
            
            {/* Phase 1: Infrastructure */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 font-bold text-sm mb-6 uppercase tracking-wider">Phase 1: Architecture</div>
                <h2 className="text-4xl font-black text-foreground mb-6 leading-tight">Master Academy Provisioning</h2>
                <p className="text-lg text-foreground/80 font-bold leading-relaxed mb-6">
                  At its core, Mentora is built on a scalable cloud architecture. Think of it as AWS for LMS. Mentora handles the overarching infrastructure, so you (the Admin) can run your own fully custom institution, empowering your instructors and students without worrying about scale.
                </p>
                <div className="space-y-8">
                   <div className="flex gap-4">
                     <Layers className="w-7 h-7 text-primary shrink-0" />
                     <div>
                       <h4 className="font-extrabold text-foreground text-xl mb-1">Logical Separation</h4>
                       <p className="text-foreground/70 font-bold text-sm leading-relaxed">Data is partitioned using strict row-level security. Tenant A cannot ever query Tenant B's users, courses, or analytics under any circumstance.</p>
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <Cog className="w-7 h-7 text-primary shrink-0" />
                     <div>
                       <h4 className="font-extrabold text-foreground text-xl mb-1">Custom Branding</h4>
                       <p className="text-foreground/70 font-bold text-sm leading-relaxed">You define your own theme variables, custom domain mapping (e.g., academy.acmecorp.com), SSO settings, and email templates natively.</p>
                     </div>
                   </div>
                </div>
              </div>
              <div className="bg-card border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl">
                 {/* Decorative Graphic for Phase 1 */}
                 <div className="flex flex-col gap-4">
                   <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 shadow-md text-white border-l-4 border-l-slate-500 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-10"><Database className="w-16 h-16"/></div>
                     <div className="font-bold mb-2 flex justify-between relative z-10 text-slate-300"><span>Mentora Infrastructure</span><ShieldCheck className="w-5 h-5 text-slate-400"/></div>
                     <p className="text-sm font-semibold text-slate-500 relative z-10">Global routing, security, and cloud scalability</p>
                   </div>
                   
                   <div className="flex gap-4 ml-4">
                     <div className="w-6 border-l-2 border-b-2 border-slate-300 rounded-bl-xl mt-4"></div>
                     <div className="flex-1 bg-white border-2 border-primary rounded-2xl p-5 shadow-sm relative hover:-translate-y-1 transition-transform border-l-4 border-l-primary">
                        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="font-extrabold text-slate-800 mb-1">Admin (You)</div>
                        <p className="text-xs font-bold text-slate-500">Your Organization Academy • Custom Domain & Branding</p>
                     </div>
                   </div>

                   <div className="flex gap-4 ml-12">
                     <div className="w-6 border-l-2 border-b-2 border-slate-300 rounded-bl-xl mt-4"></div>
                     <div className="flex-1 bg-white border-2 border-slate-200 rounded-2xl p-4 shadow-sm relative hover:-translate-y-1 transition-transform">
                        <div className="font-extrabold text-slate-800 mb-1 flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary"/> Instructors</div>
                        <p className="text-xs font-bold text-slate-500">Course creation, analytics, and grading</p>
                     </div>
                   </div>

                   <div className="flex gap-4 ml-12">
                     <div className="w-6 border-l-2 border-b-2 border-slate-300 rounded-bl-xl -mt-6 h-12"></div>
                     <div className="flex-1 bg-white border-2 border-slate-200 rounded-2xl p-4 shadow-sm relative hover:-translate-y-1 transition-transform">
                        <div className="font-extrabold text-slate-800 mb-1 flex items-center gap-2"><Users className="w-4 h-4 text-primary"/> Students</div>
                        <p className="text-xs font-bold text-slate-500">Course discovery, learning pathways, and AI tutoring</p>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Phase 2: Embedding AI */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-card border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center">
                 {/* Decorative Graphic for Phase 2 */}
                 <div className="w-full space-y-4">
                    <div className="bg-muted p-4 rounded-xl border border-slate-200 flex items-start gap-4 shadow-sm">
                       <div className="bg-blue-500/10 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-500/20">L</div>
                       <p className="text-sm font-bold pt-1">I don't understand how React hooks actually preserve state between renders. It feels like magic.</p>
                    </div>
                    <div className="flex justify-center -my-2 relative z-10 w-full">
                      <div className="bg-blue-200 w-1 h-8 rounded-full"></div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200/50 p-5 rounded-xl flex items-start gap-4">
                       <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shrink-0 shadow-md transform rotate-12">AI</div>
                       <div className="space-y-3">
                         <div className="text-xs font-black text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-wider flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 w-max px-2 py-1 rounded"><Activity className="w-3 h-3"/> Semantic Search: <i>module_4_hooks.md</i></div>
                         <p className="text-sm font-bold leading-relaxed text-foreground/80">Think of hooks as attaching an invisible array to the component instance in memory. When the component rerenders, it looks up values from that array by their index. Based on that, what do you think would happen if you put a hook inside an `if` statement?</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mb-6 uppercase tracking-wider">Phase 2: Learner Experience</div>
                <h2 className="text-4xl font-black text-foreground mb-6 leading-tight">Socratic AI Orchestration</h2>
                <p className="text-lg text-foreground/80 font-bold leading-relaxed mb-6">
                  Mentora doesn't offer a generic chatbot. We utilize deep Retrieval-Augmented Generation (RAG) strictly scoped to your academy's own curriculum parameters.
                </p>
                <div className="space-y-8">
                   <div className="flex gap-4">
                     <Sparkles className="w-7 h-7 text-blue-500 shrink-0" />
                     <div>
                       <h4 className="font-extrabold text-foreground text-xl mb-1">Socratic Enforcement</h4>
                       <p className="text-foreground/70 font-bold text-sm leading-relaxed">System prompts force the LLM to guide users to the answer via pedagogical inquiry, rather than just copy-pasting solutions and harming retention.</p>
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <BookOpen className="w-7 h-7 text-blue-500 shrink-0" />
                     <div>
                       <h4 className="font-extrabold text-foreground text-xl mb-1">Content Indexing</h4>
                       <p className="text-foreground/70 font-bold text-sm leading-relaxed">Upload PDFs, videos, and Markdown. Mentora automatically chunks, vectorizes, and stores your material into strictly isolated Pinecone namespaces.</p>
                     </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
