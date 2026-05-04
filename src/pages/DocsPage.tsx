import React from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Code, Book, Box, Settings, LogOut, ChevronRight } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30">
      <SiteHeader />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-12 w-full flex gap-12 lg:gap-16">
         {/* Sidebar Navigation */}
         <aside className="hidden lg:block w-64 shrink-0 top-24 sticky h-[calc(100vh-8rem)] overflow-y-auto pb-10">
            <div className="mb-10">
              <h4 className="font-black text-foreground mb-4 uppercase tracking-widest text-xs">Getting Started</h4>
              <ul className="space-y-2">
                 <li><a href="#" className="flex items-center gap-2 text-sm font-bold text-primary bg-primary/10 px-3 py-2 rounded-lg"><Book className="w-4 h-4"/> Introduction</a></li>
                 <li><a href="#" className="flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-foreground hover:bg-muted px-3 py-2 rounded-lg transition-colors"><Code className="w-4 h-4"/> Quick Start Guide</a></li>
                 <li><a href="#" className="flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-foreground hover:bg-muted px-3 py-2 rounded-lg transition-colors"><LogOut className="w-4 h-4"/> Authentication</a></li>
              </ul>
            </div>
            <div className="mb-10">
              <h4 className="font-black text-foreground mb-4 uppercase tracking-widest text-xs">Core Concepts</h4>
              <ul className="space-y-2">
                 <li><a href="#" className="flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-foreground hover:bg-muted px-3 py-2 rounded-lg transition-colors"><Box className="w-4 h-4"/> Tenants & Isolation</a></li>
                 <li><a href="#" className="flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-foreground hover:bg-muted px-3 py-2 rounded-lg transition-colors"><Settings className="w-4 h-4"/> AI Provisioning</a></li>
                 <li><a href="#" className="flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-foreground hover:bg-muted px-3 py-2 rounded-lg transition-colors"><Code className="w-4 h-4"/> Webhooks</a></li>
              </ul>
            </div>
         </aside>

         {/* Article Content */}
         <div className="flex-1 pb-24">
            <div className="mb-12 border-b-2 border-slate-100 dark:border-slate-800 pb-12">
               <div className="flex items-center gap-2 text-sm font-bold text-primary mb-6">
                 <span>Docs</span> <ChevronRight className="w-4 h-4" /> <span>Getting Started</span> <ChevronRight className="w-4 h-4" /> <span className="text-foreground">Introduction</span>
               </div>
               <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6 mt-2">Introduction to Mentora</h1>
               <p className="text-xl text-foreground/80 font-bold leading-relaxed max-w-3xl">
                 Mentora is a developer-first LMS product designed to scale robust educational platforms. 
                 It abstracts away the complexities of video streaming, AI integrations, and course management so you can focus on curriculum design.
               </p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-p:font-medium prose-p:leading-relaxed prose-a:text-primary prose-a:font-bold">
              <h2 className="text-3xl mb-4 mt-8">Mental Model</h2>
              <p className="text-lg">
                Before integrating the API, it's vital to understand the architecture. Mentora uses a dedicated database approach ensuring strict isolation and security for your learning environment. You manage instructors, students, and courses globally from your admin console.
              </p>
              <div className="bg-muted border-l-4 border-l-primary p-6 rounded-lg my-8 font-medium">
                <strong>Note on Security:</strong> Due to stringent Row-Level Security (RLS), it is impossible to perform unauthorized access. API keys restricted to your academy scope will strictly 403 on invalid resources.
              </div>

              <h2 className="text-3xl mb-4 mt-12">Authentication</h2>
              <p className="text-lg">
                Mentora uses standard Bearer tokens for all API requests. You can generate API keys directly from your Admin dashboard under the <code>Settings -&gt; Keys</code> tab. Always rotate keys every 90 days.
              </p>
              
              <div className="bg-[#0f172a] text-slate-50 p-6 rounded-2xl shadow-xl my-6 border border-slate-800">
                <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">cURL</span>
                  <button className="text-xs font-bold text-slate-400 hover:text-white transition-colors">Copy</button>
                </div>
                <pre className="text-sm font-mono whitespace-pre-wrap leading-relaxed">
{`curl -X GET https://api.mentora.ai/v1/students \\
  -H "Authorization: Bearer mnt_live_xxxxxxxxxxxxxxxx" \\
  -H "Content-Type: application/json"`}
                </pre>
              </div>

              <h2 className="text-3xl mb-4 mt-12">Provisioning Students</h2>
              <p className="text-lg">
                When you onboard a new student, you'll provision their account via the POST <code>/v1/students</code> endpoint.
              </p>
              
              <div className="bg-[#0f172a] text-slate-50 p-6 rounded-2xl shadow-xl my-6 border border-slate-800">
                <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">JSON Protocol</span>
                  <button className="text-xs font-bold text-slate-400 hover:text-white transition-colors">Copy</button>
                </div>
                <pre className="text-sm font-mono whitespace-pre-wrap leading-relaxed text-blue-300">
{`{
  "name": "Acme Corp Academy",
  "domain": "academy.acmecorp.com",
  "settings": {
    "disable_public_signup": true,
    "ai_personality_prompt": "You are a helpful software engineering guide."
  }
}`}
                </pre>
              </div>
            </div>
         </div>
      </main>
      <SiteFooter />
    </div>
  );
}
