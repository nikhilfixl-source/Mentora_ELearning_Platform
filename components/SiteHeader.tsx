import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="h-20 bg-background/90 backdrop-blur-xl border-b-2 border-slate-200 dark:border-slate-800 px-4 sm:px-8 flex items-center justify-between sticky top-0 w-full z-50 shadow-sm">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold shadow-sm">M</div>
        <span className="text-xl font-extrabold tracking-tight text-foreground">Mentora</span>
      </Link>
      <nav className="hidden md:flex gap-8">
        <Link to="/how-it-works" className={`text-sm font-extrabold transition-colors ${isActive('/how-it-works') ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}>How it Works</Link>
        <Link to="/solutions" className={`text-sm font-extrabold transition-colors ${isActive('/solutions') ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}>Solutions</Link>
        <Link to="/features" className={`text-sm font-extrabold transition-colors ${isActive('/features') ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}>Features</Link>
        <Link to="/pricing" className={`text-sm font-extrabold transition-colors ${isActive('/pricing') ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}>Pricing</Link>
        <Link to="/docs" className={`text-sm font-extrabold transition-colors ${isActive('/docs') ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}>Docs</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link to="/login" className="text-sm font-extrabold text-foreground/80 hover:text-foreground transition-colors hidden sm:block">Log in</Link>
        <Button asChild className="shadow-sm hover:shadow-md transition-all font-bold">
          <Link to="/book-demo">Book Demo</Link>
        </Button>
      </div>
    </header>
  );
}
