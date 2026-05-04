import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, GraduationCap, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const mockAccounts = [
  {
    email: 'admin@edu.in',
    password: 'TenantAdmin@123',
    route: '/tenant-admin-dashboard',
    role: 'Tenant Admin',
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
  },
  {
    email: 'teacher@edu.in',
    password: 'Instructor@123',
    route: '/instructor-dashboard',
    role: 'Instructor',
    icon: <Users className="w-5 h-5 text-blue-400" />,
  },
  {
    email: 'student@edu.in',
    password: 'Student@123',
    route: '/student-dashboard',
    role: 'Student',
    icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
  },
];

export default function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const account = mockAccounts.find(
      (item) => item.email === email.trim().toLowerCase() && item.password === password
    );

    if (!account) {
      setError('Invalid mock credentials. Use one of the enterprise demo accounts shown below.');
      return;
    }

    setError('');
    navigate(account.route);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30 relative overflow-hidden">
      <SiteHeader />

      <div className="fixed inset-0 -z-10 bg-[#020202]"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-primary/20 blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[130px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_65%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <main className="flex-1 pb-24 pt-32">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid gap-14 xl:grid-cols-[1.1fr_0.95fr] items-start">
            <div className="pt-8">
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <Badge className="bg-white/5 text-neutral-300 border border-white/10 mb-8 py-2 px-4 backdrop-blur-md uppercase tracking-wider text-xs">
                  Enterprise Access
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter leading-[1.05]"
              >
                Sign In to Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Institution Workspace.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-neutral-400 font-light mb-10 leading-relaxed max-w-2xl"
              >
                This enterprise login is wired with mock access for tenant admins, instructors, and students so you can preview each product experience quickly.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid gap-4"
              >
                {mockAccounts.map((account) => (
                  <div key={account.email} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">
                        {account.icon}
                      </div>
                      <div>
                        <p className="text-white font-bold">{account.role}</p>
                        <p className="text-xs text-neutral-500 uppercase tracking-[0.18em]">Mock Login</p>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-300">Email: <span className="text-white font-medium">{account.email}</span></p>
                    <p className="text-sm text-neutral-300 mt-1">Password: <span className="text-white font-medium">{account.password}</span></p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="xl:max-w-[520px] xl:justify-self-end w-full"
            >
              <Card className="relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-neutral-900/60 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none"></div>
                <CardContent className="relative z-10 p-6 md:p-7">

                  <div className="w-11 h-11 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-5">
                    <Building2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <Badge className="mb-5 bg-white/5 text-neutral-300 border border-white/10 uppercase tracking-wider text-[11px]">
                    Tenant Workspace
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Enterprise Login</h3>
                  <p className="text-neutral-400 leading-6 text-sm mb-6">
                    Sign in as a tenant admin, instructor, or student using the mock enterprise credentials shown on the left.
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="enterprise-email" className="text-neutral-400">Email</Label>
                      <Input
                        id="enterprise-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@edu.in"
                        className="bg-black/50 border-neutral-800 h-12 focus-visible:ring-primary text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="enterprise-password" className="text-neutral-400">Password</Label>
                      <Input
                        id="enterprise-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="bg-black/50 border-neutral-800 h-12 focus-visible:ring-primary text-white"
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 text-neutral-500">
                        <input type="checkbox" className="accent-[rgb(var(--primary))]" />
                        Keep me signed in
                      </label>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors">Forgot password?</a>
                    </div>
                    {error && (
                      <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        {error}
                      </p>
                    )}
                    <Button type="submit" className="w-full h-13 rounded-xl text-base font-semibold transition-all bg-primary hover:bg-primary/90 text-white shadow-[0_0_22px_rgba(var(--primary),0.35)]">
                      Login to Workspace
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="pb-8">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-[2.5rem] border border-neutral-800 bg-neutral-950/70 p-8 md:p-10 backdrop-blur-xl text-center">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a New Workspace or Access Help?</h2>
              <p className="text-neutral-400 font-light max-w-2xl mx-auto mb-8">
                If your institution needs onboarding, SSO setup, or account provisioning, our team can help you get the right login environment configured fast.
              </p>
              <Button asChild className="rounded-full px-8 h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-[0_0_24px_rgba(var(--primary),0.3)]">
                <Link to="/contact">
                  Contact Mentora Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
