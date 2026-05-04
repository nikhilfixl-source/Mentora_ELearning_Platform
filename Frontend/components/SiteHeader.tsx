import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Hexagon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export function SiteHeader() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 h-20 bg-background/80 backdrop-blur-md border-b border-border/70 flex items-center justify-between px-6 lg:px-12">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="w-10 h-10 bg-primary/20 border border-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.3)] rounded-xl flex items-center justify-center text-primary">
          <Hexagon className="w-6 h-6 fill-current" />
        </div>
        <span className="text-2xl font-bold tracking-tighter text-foreground">Mentora</span>
      </Link>
      
      <nav className="hidden md:flex gap-8 items-center bg-background/70 px-6 py-2.5 rounded-full border border-border/70 shadow-sm">
        <Link to="/how-it-works" className={`text-sm font-medium transition-all hover:-translate-y-0.5 ${isActive('/how-it-works') ? 'text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]' : 'text-muted-foreground hover:text-foreground'}`}>How it Works</Link>
        <Link to="/solutions" className={`text-sm font-medium transition-all hover:-translate-y-0.5 ${isActive('/solutions') ? 'text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]' : 'text-muted-foreground hover:text-foreground'}`}>Solutions</Link>
        <Link to="/features" className={`text-sm font-medium transition-all hover:-translate-y-0.5 ${isActive('/features') ? 'text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]' : 'text-muted-foreground hover:text-foreground'}`}>Features</Link>
        <Link to="/pricing" className={`text-sm font-medium transition-all hover:-translate-y-0.5 ${isActive('/pricing') ? 'text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]' : 'text-muted-foreground hover:text-foreground'}`}>Pricing</Link>
      </nav>

      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full border-border bg-background/70 hover:bg-muted text-foreground shrink-0 shadow-sm"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
        <Button asChild variant="outline" className="hidden sm:inline-flex rounded-full border-border bg-background/70 hover:bg-muted text-foreground shadow-sm">
          <Link to="/signin">Sign In</Link>
        </Button>
        <Button asChild className="rounded-full shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary),0.6)] transition-all">
          <Link to="/contact">Get Started</Link>
        </Button>
      </div>
    </header>
  );
}
