import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Briefcase } from 'lucide-react';

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Default redirect to super-admin for new signups in this mock
    navigate('/super-admin');
  };

  return (
    <div className="min-h-screen bg-background font-sans grid grid-cols-1 lg:grid-cols-2 selection:bg-primary/30">
      {/* Left Column - Brand/Value Prop */}
      <div className="hidden lg:flex flex-col justify-between bg-primary p-12 text-slate-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#000000_1px,transparent_0)] [background-size:24px_24px]"></div>
        
        <div className="relative z-10 flex flex-col justify-between h-full">
          <Link to="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity w-fit">
            <div className="w-10 h-10 bg-slate-950 rounded-lg flex items-center justify-center text-primary font-black text-xl shadow-sm">M</div>
            <span className="text-2xl font-black tracking-tight text-slate-950">Mentora</span>
          </Link>
          
          <div className="max-w-md">
            <Briefcase className="w-12 h-12 text-slate-950/40 mb-6" />
            <h2 className="text-4xl font-black tracking-tight mb-6 leading-tight text-slate-950">Create your workspace.</h2>
            <p className="text-slate-950/80 font-medium text-lg leading-relaxed mb-8">
              Set up your academy, customize your domain, and start enrolling students in under 5 minutes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-slate-950/70 font-bold bg-slate-950/10 px-3 py-1 rounded-full text-sm">1</div>
                <p className="font-bold text-slate-950">Sign up securely</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-slate-950/70 font-bold bg-slate-950/10 px-3 py-1 rounded-full text-sm">2</div>
                <p className="font-bold text-slate-950">Configure your institution</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-slate-950/70 font-bold bg-slate-950/10 px-3 py-1 rounded-full text-sm">3</div>
                <p className="font-bold text-slate-950">Invite your team</p>
              </div>
            </div>
          </div>
          
          <div className="text-sm font-medium text-slate-950/70 w-fit">
            © {new Date().getFullYear()} Mentora Platform. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 bg-background relative z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] border-l-2 border-border">
        <div className="w-full max-w-md mx-auto">
          {/* Mobile Logo */}
          <div className="lg:hidden flex mb-12">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-xl shadow-sm">M</div>
              <span className="text-2xl font-black tracking-tight text-foreground">Mentora</span>
            </Link>
          </div>

          <div className="bg-card py-10 px-8 shadow-2xl rounded-3xl border-2 border-slate-200 dark:border-slate-800">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-foreground tracking-tight">Create workspace</h2>
              <p className="mt-2 text-sm font-bold text-muted-foreground">
                Already have an account? <Link to="/login" className="text-primary hover:text-primary/80 transition-colors">Log in</Link>
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSignup}>
              <div className="space-y-2">
                <Label htmlFor="companyName" className="block text-sm font-bold text-foreground">Institution / Company Name</Label>
                <div className="mt-1">
                  <Input id="companyName" name="companyName" type="text" required className="block w-full border-2" placeholder="e.g. Acme University" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="block text-sm font-bold text-foreground">Work Email address</Label>
                <div className="mt-1">
                  <Input id="email" name="email" type="email" autoComplete="email" required className="block w-full border-2" placeholder="you@institution.edu" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="block text-sm font-bold text-foreground">Password</Label>
                <div className="mt-1">
                  <Input id="password" name="password" type="password" autoComplete="new-password" required className="block w-full border-2" />
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full flex justify-center font-bold">
                  Create Workspace
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-xs font-bold text-muted-foreground leading-relaxed">
              By creating a workspace, you agree to our <a href="#" className="text-foreground hover:underline">Terms of Service</a> and <a href="#" className="text-foreground hover:underline">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
