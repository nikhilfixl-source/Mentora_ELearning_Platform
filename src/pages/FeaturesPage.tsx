import React from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Badge } from '@/components/ui/badge';
import { Bot, Webhook, Lock, Command, Code2, LineChart, Globe, Zap, Users } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      title: "Context-Aware AI Tutor",
      description: "Unlike wrapper bots, Mentora's AI utilizes RAG strictly constrained to your curriculum's specified knowledge base, enforcing Socratic pedagogy.",
      icon: Bot,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Extensible Webhooks",
      description: "Trigger real-time events natively. Fire webhooks when a learner completes a module to grant certificates in external systems like Credly.",
      icon: Webhook,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Enterprise Grade Security",
      description: "Built on partitioned databases with fierce row-level security. Field-level encryption guarantees compliance across highly-regulated industries.",
      icon: Lock,
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    {
      title: "Keyboard-First Command Palette",
      description: "Power users can press Cmd+K anywhere to jump instantly to settings, impersonate users, or access billing information.",
      icon: Command,
      color: "text-slate-700 dark:text-slate-300",
      bg: "bg-slate-200 dark:bg-slate-800"
    },
    {
      title: "Headless API Support",
      description: "Don't like our UI? Build your own on top of our bulletproof API. Perfect for creating custom native mobile apps.",
      icon: Code2,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Aggregated Analytics",
      description: "Admins can view health checks, engagement metrics and test scores unified across all classrooms from the main observability dashboard.",
      icon: LineChart,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      title: "Custom Domain Mapping",
      description: "We provide your academy with its own branding. Automatically provision SSL certificates for domains like learn.acmecorp.com in minutes.",
      icon: Globe,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      title: "SCIM Provisioning",
      description: "Enterprise identity management. Sync user directories directly from Okta, JumpCloud, or Azure Active Directory automatically.",
      icon: Zap,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10"
    },
    {
      title: "Cohort Management",
      description: "Group learners into cohorts with identical pacing timelines. Assign teaching assistants and track collective progress seamlessly.",
      icon: Users,
      color: "text-pink-500",
      bg: "bg-pink-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30">
      <SiteHeader />
      <main className="flex-1 pb-24">
        <section className="py-24 bg-muted/10 border-b-2 border-slate-200 dark:border-slate-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
            <Badge className="bg-primary/20 text-primary hover:bg-primary/20 border-0 mb-6">Features</Badge>
            <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight">Everything you need to deliver world-class learning</h1>
            <p className="text-xl text-foreground/80 font-extrabold max-w-3xl mx-auto leading-relaxed">
              Mentora combines robust enterprise primitives with a highly polished learner experience. Stop wrestling with open-source plugins.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {features.map((feat, i) => (
                 <div key={i} className="bg-card border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feat.bg} ${feat.color}`}>
                      <feat.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-foreground mb-3">{feat.title}</h3>
                    <p className="text-foreground/70 font-bold leading-relaxed shadow-sm pb-1">
                      {feat.description}
                    </p>
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
