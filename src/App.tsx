import { BrowserRouter, Routes, Route, Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, Settings, Bell, Search, Menu, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { GlobalSearch } from './components/GlobalSearch';
import { Notifications } from './components/Notifications';

// Pages
import LandingPage from './pages/LandingPage';
import HowItWorksPage from './pages/HowItWorksPage';
import SolutionsPage from './pages/SolutionsPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import DocsPage from './pages/DocsPage';
import BookDemoPage from './pages/BookDemoPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import TenantAdminDashboard from './pages/TenantAdminDashboard';
import TenantAdminUsers from './pages/TenantAdminUsers';
import TenantAdminCourses from './pages/TenantAdminCourses';
import TenantAdminSettings from './pages/TenantAdminSettings';
import LearningDashboard from './pages/LearningDashboard';

// Layout Component
function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getNavLinks = () => {
    if (location.pathname.startsWith('/super-admin')) {
      return [
        { name: 'Dashboard', path: '/super-admin', icon: LayoutDashboard },
        { name: 'Tenants', path: '/super-admin/tenants', icon: Users },
        { name: 'Settings', path: '/super-admin/settings', icon: Settings }
      ];
    } else if (location.pathname.startsWith('/tenant-admin')) {
      return [
        { name: 'Dashboard', path: '/tenant-admin', icon: LayoutDashboard },
        { name: 'Users', path: '/tenant-admin/users', icon: Users },
        { name: 'Courses', path: '/tenant-admin/courses', icon: BookOpen },
        { name: 'Settings', path: '/tenant-admin/settings', icon: Settings }
      ];
    } else if (location.pathname.startsWith('/instructor')) {
      return [
        { name: 'My Courses', path: '/instructor', icon: LayoutDashboard },
        { name: 'Students', path: '/instructor/students', icon: Users },
        { name: 'Settings', path: '/instructor/settings', icon: Settings }
      ];
    } else {
      return [
        { name: 'Learning', path: '/student', icon: BookOpen },
        { name: 'Settings', path: '/student/settings', icon: Settings }
      ];
    }
  };

  const links = getNavLinks();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-foreground overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-[220px] flex-col bg-white border-r-[3px] border-slate-200 shadow-[4px_0_12px_-4px_rgba(0,0,0,0.05)] z-20 shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-lg">M</div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">Mentora</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-1.5 mt-6">
          <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 px-3">Navigation</div>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-lg transition-all ${
                location.pathname === link.path ? 'bg-primary text-primary-foreground font-black shadow-md shadow-primary/20 hover:bg-primary/95' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-bold'
              }`}
            >
              <link.icon className="h-5 w-5 stroke-[2.5]" />
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t-2 border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white border-2 border-slate-200 shadow-sm rounded-full flex-shrink-0 flex items-center justify-center text-slate-700 font-black text-lg">SJ</div>
            <div className="overflow-hidden flex-1">
              <p className="text-base font-extrabold truncate text-slate-900">Sarah Jenkins</p>
              <p className="text-[0.65rem] font-black text-slate-500 truncate text-ellipsis uppercase tracking-wider mt-0.5">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50 relative">
        {/* Header */}
        <header className="h-16 bg-white border-b-[3px] border-slate-200 px-4 sm:px-8 flex items-center justify-between z-10 shadow-sm sticky top-0">
          <div className="flex items-center gap-4 flex-1">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] p-0 bg-white">
                <div className="p-6 flex items-center gap-3 border-b-2 border-slate-100">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-lg">M</div>
                  <span className="text-xl font-extrabold tracking-tight text-slate-900">Mentora</span>
                </div>
                <nav className="p-4 space-y-1.5 mt-4">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-lg transition-colors ${
                        location.pathname === link.path ? 'bg-primary text-primary-foreground font-black shadow-sm' : 'text-slate-600 hover:bg-slate-100 font-bold'
                      }`}
                    >
                      <link.icon className="h-5 w-5 stroke-[2.5]" />
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            {!location.pathname.startsWith('/tenant-admin') && <GlobalSearch />}
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/super-admin" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium">Super Admin</Link>
            <Link to="/tenant-admin" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium">Admin (You)</Link>
            <Link to="/instructor" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium">Instructor</Link>
            <Link to="/student" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium">Student</Link>
            <div className="h-8 w-[1px] bg-border hidden sm:block"></div>
            <Notifications />
            <Button variant="ghost" size="icon" onClick={handleLogout} className="text-muted-foreground hover:text-foreground">
              <LogOut className="h-5 w-5" />
            </Button>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-tighter hidden sm:block">Status: <span className="text-green-500 font-bold">Healthy</span></div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-4 sm:p-8">
          <Outlet />
        </main>
        
        {/* Footer Info Bar */}
        <footer className="hidden sm:flex h-10 bg-card border-t border-border px-8 items-center justify-between text-[10px] text-muted-foreground font-mono shrink-0">
          <div>CONNECTED TO PROD-API-01 (V4.2.1)</div>
          <div className="flex gap-4">
            <span>LATENCY: 24MS</span>
            <span className="text-green-500">● SYNCHRONIZED</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/book-demo" element={<BookDemoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<AppLayout />}>
          <Route path="/student" element={<LearningDashboard />} />
          <Route path="/instructor" element={<div className="p-8 text-2xl font-bold">Instructor Dashboard Content (Mocking)</div>} />
          <Route path="/super-admin" element={<SuperAdminDashboard />} />
          <Route path="/tenant-admin">
            <Route index element={<TenantAdminDashboard />} />
            <Route path="users" element={<TenantAdminUsers />} />
            <Route path="courses" element={<TenantAdminCourses />} />
            <Route path="settings" element={<TenantAdminSettings />} />
          </Route>
          <Route path="*" element={<div className="text-slate-500">Page Not Found. (Mocked for this demo)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
