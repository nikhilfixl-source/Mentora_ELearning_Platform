import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Quote } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent, rolePath: string) => {
    e.preventDefault();
    navigate(rolePath);
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
            <Quote className="w-12 h-12 text-slate-950/40 mb-6" />
            <h2 className="text-4xl font-black tracking-tight mb-6 leading-tight text-slate-950">Scale your educational infrastructure.</h2>
            <p className="text-slate-950/80 font-medium text-lg leading-relaxed mb-8">
              Join hundreds of institutions using Mentora to deliver, manage, and scale their learning ecosystems globally.
            </p>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-slate-950/10 flex items-center justify-center font-bold text-slate-950 border border-slate-950/20">JD</div>
               <div>
                  <p className="font-bold text-slate-950">Jane Doe</p>
                  <p className="text-sm text-slate-950/80 font-medium">Head of Learning, TechCorp</p>
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
              <h2 className="text-3xl font-black text-foreground tracking-tight">Sign in</h2>
              <p className="mt-2 text-sm font-bold text-muted-foreground">
                Or <Link to="/signup" className="text-primary hover:text-primary/80 transition-colors">start your 14-day free trial</Link>
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => handleLogin(e, '/student')}>
              <div className="space-y-2">
                <Label htmlFor="email" className="block text-sm font-bold text-foreground">Email address</Label>
                <div className="mt-1">
                  <Input id="email" name="email" type="email" autoComplete="email" required className="block w-full border-2" defaultValue="rahul@iit.ac.in" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="block text-sm font-bold text-foreground">Password</Label>
                <div className="mt-1">
                  <Input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full border-2" defaultValue="password123" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-2 border-slate-300 text-primary focus:ring-primary" />
                  <label htmlFor="remember-me" className="block text-sm font-bold text-foreground/80">Remember me</label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-bold text-primary hover:text-primary/80 transition-colors">Forgot password?</a>
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full flex justify-center font-bold">
                  Sign in
                </Button>
              </div>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300 dark:border-slate-700" />
                </div>
                <div className="relative flex justify-center text-sm font-medium">
                  <span className="bg-card px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" type="button" className="w-full flex justify-center font-bold items-center gap-2 border-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Sign in with Google
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-border" />
                </div>
                <div className="relative flex justify-center text-sm font-bold">
                  <span className="px-2 bg-card text-muted-foreground">Mock Role Login Quick Links</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button variant="outline" size="sm" onClick={(e) => handleLogin(e, '/tenant-admin')} className="text-xs font-bold border-2">Academy Admin</Button>
                <Button variant="outline" size="sm" onClick={(e) => handleLogin(e, '/student')} className="text-xs font-bold border-2">Student</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
