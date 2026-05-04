import React from 'react';

export function SiteFooter() {
  return (
    <footer className="bg-background border-t-2 border-slate-200 dark:border-slate-800 py-12 pb-24 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
           <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-xs shadow-sm">M</div>
           <span className="text-lg font-extrabold tracking-tight text-foreground">Mentora</span>
        </div>
        <div className="text-sm font-extrabold text-foreground/60">
          <p>© {(new Date()).getFullYear()} Mentora Platform. All rights reserved. Built for ❤️ by Mentora.</p>
        </div>
      </div>
    </footer>
  );
}
