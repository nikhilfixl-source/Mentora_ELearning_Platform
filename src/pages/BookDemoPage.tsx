import React, { useState } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30">
      <SiteHeader />
      <main className="flex-1 flex items-center bg-muted/10 relative overflow-hidden py-16">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
                Scale your learning <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/60">infrastructure.</span>
              </h1>
              <p className="text-xl text-foreground/80 font-extrabold max-w-lg leading-relaxed">
                See how Mentora can unify your academy, boost engagement with AI, and give you complete observability.
              </p>
            </div>

            <div className="space-y-8 pt-4 max-w-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-card border-2 border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg">Enterprise Security</h3>
                  <p className="text-muted-foreground font-bold text-sm leading-relaxed mt-1">SOC2 Type II compliance, isolated databases, and end-to-end encryption down to the field level.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-card border-2 border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg">Blazing Fast Setup</h3>
                  <p className="text-muted-foreground font-bold text-sm leading-relaxed mt-1">Deploy your learning environment in seconds. Provision users via SCIM automatically. Spend less time engineering.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-card border-2 border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg">10x Learner Engagement</h3>
                  <p className="text-muted-foreground font-bold text-sm leading-relaxed mt-1">Embedded Socratic AI tutors unblock students instantly without scaling human support staff. Better learning outcomes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <Card className="border-2 border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl overflow-hidden bg-card/50 backdrop-blur-xl">
              <CardContent className="p-8">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-black text-2xl">Demo Requested!</h3>
                    <p className="text-muted-foreground font-extrabold">We'll contact you within 24 hours to schedule your personalized walkthrough of Mentora.</p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-bold text-2xl mb-6">Book your demo</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-bold text-muted-foreground">Full Name</Label>
                        <Input id="name" placeholder="John Doe" className="bg-background border-2 font-medium" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-bold text-muted-foreground">Work Email</Label>
                        <Input id="email" type="email" placeholder="john@company.com" className="bg-background border-2 font-medium" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="font-bold text-muted-foreground">Company Size</Label>
                        <select id="company" className="flex h-10 w-full items-center justify-between rounded-md border-2 border-input bg-background px-3 py-2 text-sm font-medium ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required defaultValue="">
                          <option value="" disabled>Select company size...</option>
                          <option value="1-50">1 - 50 employees</option>
                          <option value="51-200">51 - 200 employees</option>
                          <option value="201-1000">201 - 1000 employees</option>
                          <option value="1001+">1001+ employees</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-bold text-muted-foreground">How can we help?</Label>
                        <Textarea id="message" placeholder="Tell us about your learning infrastructure needs..." className="bg-background border-2 resize-none font-medium text-sm" rows={4} required />
                      </div>
                      <Button type="submit" className="w-full font-bold py-6 text-md mt-4">
                        Request Walkthrough
                      </Button>
                      <p className="text-center text-xs font-bold text-muted-foreground mt-4">By submitting, you agree to our Terms of Service.</p>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
