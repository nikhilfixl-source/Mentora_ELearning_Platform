import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Hexagon, Mail, Phone, ShieldCheck } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-background text-muted-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/50 bg-primary/20 text-primary shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                <Hexagon className="w-6 h-6 fill-current" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground">Mentora</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Enterprise-grade AI learning infrastructure for institutions, universities, and training teams that need scale, governance, and a premium learner experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground">
                Multi-Tenant Deployment
              </div>
              <div className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground">
                AI Tutoring
              </div>
              <div className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground">
                White-Label LMS
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Quick Links</h3>
            <div className="mt-5 space-y-3 text-sm">
              <Link to="/" className="block hover:text-foreground transition-colors">Home</Link>
              <Link to="/how-it-works" className="block hover:text-foreground transition-colors">How It Works</Link>
              <Link to="/solutions" className="block hover:text-foreground transition-colors">Solutions</Link>
              <Link to="/features" className="block hover:text-foreground transition-colors">Features</Link>
              <Link to="/pricing" className="block hover:text-foreground transition-colors">Pricing</Link>
              <Link to="/contact" className="block hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Platform</h3>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
                <span>SOC-aware enterprise controls and role-based governance</span>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-4 w-4 text-primary" />
                <span>White-label deployment for institutions across regions</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="mt-0.5 h-4 w-4 text-primary" />
                <span>Fast onboarding from trial to full-scale rollout</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Contact</h3>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@mentora.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91-XXXX-XXXXXX</span>
              </div>
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-3 font-medium text-primary transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_24px_rgba(var(--primary),0.35)]"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {(new Date()).getFullYear()} Mentora Platform. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <span>Privacy-first architecture</span>
            <span>Enterprise onboarding support</span>
            <span>Built for institutions and training teams</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
