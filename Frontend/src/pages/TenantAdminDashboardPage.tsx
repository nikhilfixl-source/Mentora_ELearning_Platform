import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {
  Search, Bell, LayoutDashboard, BarChart3, Users,
  GraduationCap, BookOpen, Upload, Settings, Shield,
  CreditCard, Palette, Link as LinkIcon, Menu, X, CheckCircle,
  MoreVertical, Plus, FileText, ChevronRight,
  ChevronLeft, ArrowRight, UploadCloud, MonitorPlay, MessageSquare, ShieldAlert,
  Moon, Sun
} from 'lucide-react';

// --- MOCK DATA ---
const MOCK_SUB_ADMINS = [
  { id: 1, name: 'Dr. Priya Nair', email: 'priya.nair@siveciinstitute.mentora.in', department: 'Computer Science', status: 'Active', instructors: 14, lastLogin: '2 hours ago' },
  { id: 2, name: 'Prof. Ramesh Gupta', email: 'ramesh.gupta@siveciinstitute.mentora.in', department: 'Mechanical Engineering', status: 'Active', instructors: 11, lastLogin: '5 hours ago' },
  { id: 3, name: 'Ms. Sunita Verma', email: 'sunita.verma@siveciinstitute.mentora.in', department: 'MBA Department', status: 'Active', instructors: 8, lastLogin: '1 day ago' },
  { id: 4, name: 'Mr. Arjun Pillai', email: 'arjun.pillai@siveciinstitute.mentora.in', department: 'Civil Engineering', status: 'Suspended', instructors: 9, lastLogin: '1 week ago' },
  { id: 5, name: 'Dr. Meena Krishnan', email: 'meena.k@siveciinstitute.mentora.in', department: 'Electronics & Communication', status: 'Active', instructors: 7, lastLogin: '3 hours ago' },
  { id: 6, name: 'Ms. Lakshmi Rao', email: 'lakshmi.r@siveciinstitute.mentora.in', department: 'Humanities', status: 'Pending', instructors: 5, lastLogin: 'Never' },
];

const MOCK_ACTIVITY_FEED = [
  { id: 1, text: "Prof. Ananya Sharma submitted 'Data Structures – Unit 4' for approval", time: "2 min ago", type: "course" },
  { id: 2, text: "Sub-Admin Ramesh Gupta (Mech Dept) approved 3 courses", time: "15 min ago", type: "admin" },
  { id: 3, text: "47 students enrolled in 'Cloud Computing Fundamentals'", time: "1 hour ago", type: "student" },
  { id: 4, text: "Bulk import: 234 students added by CSV", time: "3 hours ago", type: "system" },
  { id: 5, text: "At-risk alert: 12 students flagged in Mechanical Dept", time: "Yesterday", type: "alert" },
];

const MOCK_DEPARTMENTS = [
  { name: 'Computer Science', subAdmin: 'Dr. Priya Nair', courses: 24, attendance: 86, atRisk: 12 },
  { name: 'Mechanical Eng.', subAdmin: 'Prof. Ramesh Gupta', courses: 18, attendance: 79, atRisk: 24 },
  { name: 'MBA Dept', subAdmin: 'Ms. Sunita Verma', courses: 12, attendance: 91, atRisk: 3 },
  { name: 'Civil Eng.', subAdmin: 'Unassigned', courses: 15, attendance: 72, atRisk: 18 },
];

const MOCK_ENROLLMENT_DATA = [
  { name: 'Jan', new: 400, total: 2400 },
  { name: 'Feb', new: 300, total: 2700 },
  { name: 'Mar', new: 200, total: 2900 },
  { name: 'Apr', new: 278, total: 3178 },
  { name: 'May', new: 189, total: 3367 },
  { name: 'Jun', new: 239, total: 3606 },
  { name: 'Jul', new: 349, total: 3955 },
];

// --- MAIN COMPONENT ---
export default function TenantAdminDashboardPage() {
  // State
  const [isFirstLogin, setIsFirstLogin] = useState(true);
  const [wizardStep, setWizardStep] = useState(1);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  // Modals
  const [showCreateAdminModal, setShowCreateAdminModal] = useState(false);
  
  // Form States (Wizard)
  const [institution, setInstitution] = useState({
    name: "Siveci Institute of Technology",
    subdomain: "siveciinstitute.mentora.in",
    primaryColor: "#1a56db",
    plan: "Professional"
  });

  // Theme Management
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  // Helpers
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleWizardComplete = () => {
    setIsFirstLogin(false);
    showToast("Dashboard setup completed successfully!");
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // --- WIZARD RENDERER ---
  if (isFirstLogin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4 font-sans text-foreground transition-colors duration-300">
        <div className="w-full max-w-3xl bg-card border border-border rounded-xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold text-card-foreground">Welcome to Mentora</h1>
                <p className="text-muted-foreground">Let's set up your institution workspace</p>
              </div>
              <div className="flex items-center space-x-4">
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-colors cursor-pointer">
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Step {wizardStep} of 5
                </div>
              </div>
            </div>

            {/* Step Progress Bar */}
            <div className="w-full bg-muted h-2 rounded-full mb-8 overflow-hidden">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(wizardStep / 5) * 100}%` }}
              ></div>
            </div>

            {/* Step 1: Branding */}
            {wizardStep === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h2 className="text-xl font-semibold text-card-foreground">1. Institution Branding</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Institution Name</label>
                    <input type="text" value={institution.name} onChange={e => setInstitution({...institution, name: e.target.value})} className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring outline-none text-foreground" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Subdomain</label>
                    <input type="text" disabled value={institution.subdomain} className="w-full px-4 py-2 border border-input bg-muted/50 text-muted-foreground rounded-lg cursor-not-allowed" />
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-foreground mb-1">Brand Color</label>
                      <div className="flex items-center space-x-2">
                        <input type="color" value={institution.primaryColor} onChange={e => setInstitution({...institution, primaryColor: e.target.value})} className="h-10 w-10 border border-input rounded cursor-pointer bg-background" />
                        <span className="text-sm text-muted-foreground">{institution.primaryColor}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-foreground mb-1">Institution Logo</label>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-background border border-input rounded-lg hover:bg-accent hover:text-accent-foreground w-full justify-center transition-colors cursor-pointer">
                        <Upload size={18} className="text-muted-foreground" />
                        <span className="text-sm text-foreground">Upload Image</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Calendar */}
            {wizardStep === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h2 className="text-xl font-semibold text-card-foreground">2. Academic Calendar</h2>
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-foreground mb-1">Start Date</label>
                      <input type="date" className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring outline-none text-foreground" style={{colorScheme: theme}} />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-foreground mb-1">End Date</label>
                      <input type="date" className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring outline-none text-foreground" style={{colorScheme: theme}} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Term Structure</label>
                    <div className="flex space-x-4">
                      {['Semester', 'Trimester', 'Quarter', 'Annual'].map(t => (
                        <label key={t} className="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" name="term" className="text-primary accent-primary" defaultChecked={t === 'Semester'} />
                          <span className="text-sm text-foreground">{t}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Integrations */}
            {wizardStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h2 className="text-xl font-semibold text-card-foreground">3. Integrations</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">SSO Provider</label>
                    <select className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring outline-none text-foreground">
                      <option>Google Workspace</option>
                      <option>Microsoft 365</option>
                      <option>Okta</option>
                      <option>SAML 2.0</option>
                      <option>None</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Plagiarism Detection</label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded accent-primary text-primary focus:ring-ring" defaultChecked />
                        <span className="text-sm text-foreground">Turnitin Integration</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded accent-primary text-primary focus:ring-ring" defaultChecked />
                        <span className="text-sm text-foreground">GPTZero (AI Detection)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Billing */}
            {wizardStep === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h2 className="text-xl font-semibold text-card-foreground">4. Billing Plan</h2>
                <div className="grid grid-cols-3 gap-4">
                  {['Starter', 'Professional', 'Enterprise'].map(plan => (
                    <div key={plan} 
                      className={`border p-4 rounded-xl cursor-pointer transition-all ${institution.plan === plan ? 'border-primary bg-primary/5 ring-2 ring-primary ring-opacity-50' : 'border-border hover:border-muted-foreground bg-background'}`}
                      onClick={() => setInstitution({...institution, plan})}
                    >
                      <h3 className="font-semibold text-lg text-foreground">{plan}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan === 'Starter' ? '15' : plan === 'Professional' ? '12' : '8-10'} INR/student/mo
                      </p>
                      {institution.plan === plan && <CheckCircle size={20} className="text-primary mt-4" />}
                    </div>
                  ))}
                </div>
                <div className="bg-muted/30 p-4 rounded-lg flex justify-between items-center border border-border">
                  <div>
                    <p className="text-sm font-medium text-foreground">Estimated Monthly Cost (3,847 students)</p>
                    <p className="text-2xl font-bold text-card-foreground">₹46,164</p>
                  </div>
                  <CreditCard className="text-muted-foreground" size={32} />
                </div>
              </div>
            )}

            {/* Step 5: First Sub-Admin */}
            {wizardStep === 5 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h2 className="text-xl font-semibold text-card-foreground">5. Create Your First Sub-Admin</h2>
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg flex gap-3 text-primary text-sm">
                  <Shield size={20} className="flex-shrink-0" />
                  <p>A Sub-Admin (Department Admin) manages one department — instructors, courses, and students — so you don't have to manage everything yourself.</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                    <input type="text" placeholder="e.g. Dr. Priya Nair" className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring outline-none text-foreground placeholder:text-muted-foreground" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                    <input type="email" placeholder="priya@institution.edu" className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring outline-none text-foreground placeholder:text-muted-foreground" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Department</label>
                    <select className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring outline-none text-foreground">
                      <option>Computer Science</option>
                      <option>Mechanical Engineering</option>
                      <option>MBA</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Wizard Navigation */}
            <div className="mt-10 flex justify-between pt-6 border-t border-border">
              <button 
                onClick={() => setWizardStep(Math.max(1, wizardStep - 1))}
                className={`flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors ${wizardStep === 1 ? 'invisible' : ''} cursor-pointer`}
              >
                <ChevronLeft size={16} className="mr-1" /> Back
              </button>
              
              {wizardStep < 5 ? (
                <button 
                  onClick={() => setWizardStep(wizardStep + 1)}
                  className="flex items-center px-6 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm cursor-pointer"
                >
                  Continue <ChevronRight size={16} className="ml-1" />
                </button>
              ) : (
                <div className="flex space-x-3">
                  <button onClick={handleWizardComplete} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Skip for now
                  </button>
                  <button 
                    onClick={handleWizardComplete}
                    className="flex items-center px-6 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm cursor-pointer"
                  >
                    Finish Setup <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN DASHBOARD RENDERER ---

  const NavItem = ({ icon: Icon, label, id }: { icon: any, label: string, id: string }) => (
    <button
      onClick={() => setActiveSection(id)}
      className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg mb-1 transition-colors cursor-pointer ${
        activeSection === id 
          ? 'bg-primary text-primary-foreground' 
          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
      }`}
    >
      <Icon size={20} />
      {sidebarOpen && <span className="text-sm font-medium">{label}</span>}
    </button>
  );

  const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-card-foreground">{title}</h1>
      {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
    </div>
  );

  return (
    <div className="flex h-screen bg-background font-sans overflow-hidden text-foreground transition-colors duration-300">
      
      {/* SIDEBAR */}
      <aside className={`bg-card text-card-foreground border-r border-border flex flex-col transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-border shrink-0">
          {sidebarOpen ? (
            <div className="flex items-center font-bold text-lg text-foreground truncate">
              <span className="text-primary mr-2">❖</span> Mentora
            </div>
          ) : (
            <span className="text-primary text-xl font-bold mx-auto">❖</span>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-muted-foreground hover:text-foreground cursor-pointer">
            <Menu size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
          {sidebarOpen && <div className="text-xs font-semibold text-muted-foreground mb-2 mt-2 px-2">OVERVIEW</div>}
          <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
          <NavItem id="analytics" icon={BarChart3} label="Analytics" />

          {sidebarOpen && <div className="text-xs font-semibold text-muted-foreground mb-2 mt-6 px-2">INSTITUTION</div>}
          <NavItem id="subadmins" icon={Shield} label="Sub-Admins" />
          <NavItem id="instructors" icon={Users} label="Instructors" />
          <NavItem id="students" icon={GraduationCap} label="Students" />
          
          {sidebarOpen && <div className="text-xs font-semibold text-muted-foreground mb-2 mt-6 px-2">ACADEMICS</div>}
          <NavItem id="courses" icon={BookOpen} label="All Courses" />
          
          {sidebarOpen && <div className="text-xs font-semibold text-muted-foreground mb-2 mt-6 px-2">MANAGEMENT</div>}
          <NavItem id="import" icon={UploadCloud} label="User Import" />
          <NavItem id="announcements" icon={MessageSquare} label="Announcements" />
          <NavItem id="moderation" icon={ShieldAlert} label="Content Moderation" />

          {sidebarOpen && <div className="text-xs font-semibold text-muted-foreground mb-2 mt-6 px-2">SETTINGS</div>}
          <NavItem id="branding" icon={Palette} label="Branding" />
          <NavItem id="integrations" icon={LinkIcon} label="Integrations" />
          <NavItem id="billing" icon={CreditCard} label="Billing" />
          <NavItem id="security" icon={Settings} label="Security" />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* TOP NAV */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 shrink-0 z-10 shadow-sm transition-colors duration-300">
          <div className="flex items-center text-sm font-medium text-foreground">
            {institution.name}
            <span className="ml-3 px-2 py-0.5 bg-muted border border-border text-muted-foreground rounded text-xs font-mono">
              {institution.subdomain}
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="text" 
                placeholder="Search across institution..." 
                className="w-64 pl-10 pr-4 py-2 bg-muted/50 border border-input rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>
            
            <button onClick={toggleTheme} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
               {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="relative text-muted-foreground hover:text-foreground cursor-pointer">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
            </button>
            
            <div className="flex items-center space-x-2 cursor-pointer border-l border-border pl-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                TA
              </div>
              <span className="text-sm font-medium text-foreground hidden sm:block">Tenant Admin</span>
            </div>
          </div>
        </header>

        {/* SCROLLABLE VIEW AREA */}
        <main className="flex-1 overflow-y-auto p-6 bg-background transition-colors duration-300">
          
          {/* TOAST */}
          {toastMessage && (
            <div className="fixed top-20 right-6 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3 z-50 animate-in slide-in-from-top-2">
              <CheckCircle size={20} className="text-green-500" />
              <p className="text-sm font-medium">{toastMessage}</p>
            </div>
          )}

          {/* 1. DASHBOARD */}
          {activeSection === 'dashboard' && (
            <div className="space-y-6 animate-in fade-in">
              <SectionHeader title="Dashboard Overview" subtitle="High-level metrics for your institution." />
              
              {/* KPI Strip */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { title: 'Total Students', value: '3,847', trend: '+12% this month', positive: true },
                  { title: 'Active Instructors', value: '142', trend: '+3 this week', positive: true },
                  { title: 'Courses Running', value: '67', trend: '12 pending approval', positive: false },
                  { title: 'Sub-Admins', value: '8', trend: '2 depts unassigned', positive: false }
                ].map((kpi, i) => (
                  <div key={i} className="bg-card p-5 rounded-xl border border-border shadow-sm flex flex-col">
                    <span className="text-sm font-medium text-muted-foreground">{kpi.title}</span>
                    <span className="text-2xl font-bold text-card-foreground mt-2">{kpi.value}</span>
                    <span className={`text-xs mt-2 font-medium ${kpi.positive ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
                      {kpi.trend}
                    </span>
                  </div>
                ))}
              </div>

              {/* Middle Row */}
              <div className="grid grid-cols-12 gap-6">
                
                {/* Activity Feed */}
                <div className="col-span-7 bg-card rounded-xl border border-border shadow-sm flex flex-col h-[350px]">
                  <div className="p-4 border-b border-border flex justify-between items-center">
                    <h3 className="font-semibold text-card-foreground">Activity Feed</h3>
                    <div className="flex space-x-2 text-xs">
                      <button className="px-2 py-1 bg-muted rounded text-foreground font-medium cursor-pointer">All</button>
                      <button className="px-2 py-1 hover:bg-muted rounded text-muted-foreground cursor-pointer">Alerts</button>
                    </div>
                  </div>
                  <div className="p-4 overflow-y-auto flex-1 space-y-4">
                    {MOCK_ACTIVITY_FEED.map(item => (
                      <div key={item.id} className="flex items-start space-x-3 text-sm border-b border-border pb-3 last:border-0">
                        <div className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${item.type === 'alert' ? 'bg-destructive' : item.type === 'course' ? 'bg-primary' : 'bg-muted-foreground'}`} />
                        <div>
                          <p className="text-foreground">{item.text}</p>
                          <span className="text-xs text-muted-foreground mt-1 block">{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="col-span-5 bg-card rounded-xl border border-border shadow-sm p-5 flex flex-col">
                  <h3 className="font-semibold text-card-foreground mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    <button onClick={() => { setActiveSection('subadmins'); setShowCreateAdminModal(true); }} className="flex flex-col items-center justify-center p-4 border border-border rounded-lg bg-background hover:bg-primary/10 hover:border-primary/30 transition-colors text-primary group cursor-pointer">
                      <Plus className="mb-2 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Add Sub-Admin</span>
                    </button>
                    <button onClick={() => setActiveSection('import')} className="flex flex-col items-center justify-center p-4 border border-border rounded-lg bg-background hover:bg-accent transition-colors text-foreground cursor-pointer">
                      <Upload className="mb-2 text-muted-foreground" />
                      <span className="text-sm font-medium">Import Users</span>
                    </button>
                    <button onClick={() => setActiveSection('announcements')} className="flex flex-col items-center justify-center p-4 border border-border rounded-lg bg-background hover:bg-accent transition-colors text-foreground cursor-pointer">
                      <MessageSquare className="mb-2 text-muted-foreground" />
                      <span className="text-sm font-medium">Send Announcement</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-border rounded-lg bg-background hover:bg-accent transition-colors text-foreground cursor-pointer">
                      <FileText className="mb-2 text-muted-foreground" />
                      <span className="text-sm font-medium">Generate Report</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-2 gap-6">
                {/* Chart */}
                <div className="bg-card p-5 rounded-xl border border-border shadow-sm h-[350px] flex flex-col">
                  <h3 className="font-semibold text-card-foreground mb-4">Enrollment Trend (12 Months)</h3>
                  <div className="flex-1 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={MOCK_ENROLLMENT_DATA}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#374151' : '#E5E7EB'} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: theme === 'dark' ? '#9CA3AF' : '#6B7280' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: theme === 'dark' ? '#9CA3AF' : '#6B7280' }} />
                        <Tooltip 
                          contentStyle={{ 
                            borderRadius: '8px', 
                            border: '1px solid var(--border)', 
                            backgroundColor: 'var(--card)', 
                            color: 'var(--card-foreground)',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                          }} 
                        />
                        <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', color: 'var(--foreground)' }} />
                        <Line type="monotone" dataKey="total" name="Total Students" stroke="hsl(var(--primary))" strokeWidth={3} dot={false} />
                        <Line type="monotone" dataKey="new" name="New Enrollments" stroke="#10b981" strokeWidth={3} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Dept Health */}
                <div className="bg-card rounded-xl border border-border shadow-sm flex flex-col overflow-hidden">
                  <div className="p-5 border-b border-border">
                    <h3 className="font-semibold text-card-foreground">Department Health Overview</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted text-muted-foreground font-medium border-b border-border">
                        <tr>
                          <th className="px-4 py-3">Department</th>
                          <th className="px-4 py-3">Sub-Admin</th>
                          <th className="px-4 py-3">Courses</th>
                          <th className="px-4 py-3 text-right">At-Risk</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {MOCK_DEPARTMENTS.map((dept, i) => (
                          <tr key={i} className="hover:bg-muted/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-foreground">{dept.name}</td>
                            <td className="px-4 py-3">
                              {dept.subAdmin === 'Unassigned' ? (
                                <span className="text-destructive font-medium text-xs bg-destructive/10 px-2 py-1 rounded">Unassigned</span>
                              ) : (
                                <span className="text-muted-foreground">{dept.subAdmin}</span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-muted-foreground">{dept.courses}</td>
                            <td className="px-4 py-3 text-right">
                              <span className={`font-semibold ${dept.atRisk > 10 ? 'text-destructive' : 'text-muted-foreground'}`}>{dept.atRisk}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. SUB-ADMINS */}
          {activeSection === 'subadmins' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex justify-between items-end mb-6">
                <SectionHeader title="Sub-Admin Management" subtitle="Manage department heads and their permissions." />
                <button 
                  onClick={() => setShowCreateAdminModal(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm flex items-center transition-colors shadow-sm mb-6 cursor-pointer"
                >
                  <Plus size={16} className="mr-2" /> Create Sub-Admin
                </button>
              </div>

              {/* Toolbar */}
              <div className="flex justify-between items-center bg-card p-3 rounded-lg border border-border shadow-sm">
                <div className="relative w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <input type="text" placeholder="Search by name or dept..." className="w-full pl-9 pr-4 py-1.5 text-sm bg-background border border-input rounded-md focus:ring-2 focus:ring-ring outline-none text-foreground placeholder:text-muted-foreground" />
                </div>
                <div className="flex space-x-2 text-sm">
                  <button className="px-3 py-1.5 bg-muted font-medium rounded-md text-foreground cursor-pointer">All</button>
                  <button className="px-3 py-1.5 hover:bg-muted rounded-md text-muted-foreground cursor-pointer">Active</button>
                  <button className="px-3 py-1.5 hover:bg-muted rounded-md text-muted-foreground cursor-pointer">Suspended</button>
                </div>
              </div>

              {/* Grid view */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {MOCK_SUB_ADMINS.map(admin => (
                  <div key={admin.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative group">
                    <div className="absolute right-4 top-4">
                      <button className="text-muted-foreground hover:text-foreground cursor-pointer">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                        {admin.name.charAt(4)}
                      </div>
                      <div>
                        <h3 className="font-bold text-card-foreground leading-tight">{admin.name}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{admin.email}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block px-2.5 py-1 bg-muted text-foreground text-xs font-medium rounded border border-border">
                        {admin.department}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-t border-border pt-4">
                      <div className="text-muted-foreground">
                        <span className="font-semibold text-foreground">{admin.instructors}</span> instructors
                      </div>
                      <div>
                        {admin.status === 'Active' && <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">Active</span>}
                        {admin.status === 'Suspended' && <span className="text-xs font-semibold text-destructive bg-destructive/10 px-2 py-1 rounded-full border border-destructive/20">Suspended</span>}
                        {admin.status === 'Pending' && <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-1 rounded-full border border-amber-500/20">Pending</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CREATE SUB-ADMIN MODAL */}
          {showCreateAdminModal && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
                <div className="px-6 py-4 border-b border-border flex justify-between items-center bg-muted/30 rounded-t-xl">
                  <h2 className="text-xl font-bold text-card-foreground">Create New Sub-Admin</h2>
                  <button onClick={() => setShowCreateAdminModal(false)} className="text-muted-foreground hover:text-foreground cursor-pointer">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                      <input type="text" placeholder="e.g. Dr. Jane Doe" className="w-full px-3 py-2 bg-background border border-input rounded-md focus:ring-2 focus:ring-ring outline-none text-sm text-foreground placeholder:text-muted-foreground" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                      <input type="email" placeholder="jane@institution.edu" className="w-full px-3 py-2 bg-background border border-input rounded-md focus:ring-2 focus:ring-ring outline-none text-sm text-foreground placeholder:text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Assigned Department *</label>
                    <select className="w-full px-3 py-2 bg-background border border-input rounded-md focus:ring-2 focus:ring-ring outline-none text-sm text-foreground">
                      <option value="">Select a department...</option>
                      <option>Computer Science</option>
                      <option>Mechanical Engineering</option>
                      <option>Civil Engineering</option>
                    </select>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="text-sm font-semibold text-card-foreground mb-3">Permissions</h4>
                    <div className="space-y-3">
                      {[
                        { label: 'Can approve/reject courses', desc: 'Allow this admin to manage course lifecycle', default: true },
                        { label: 'Can send announcements', desc: 'Allow sending mass emails to department students', default: true },
                        { label: 'Can view student grades', desc: 'Full read access to all grades in department', default: true },
                        { label: 'Can export analytics reports', desc: 'Allow downloading raw CSV data', default: false },
                      ].map((perm, i) => (
                        <div key={i} className="flex items-start">
                          <div className="flex items-center h-5">
                            <input type="checkbox" defaultChecked={perm.default} className="w-4 h-4 accent-primary text-primary rounded border-input focus:ring-ring cursor-pointer" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label className="font-medium text-foreground">{perm.label}</label>
                            <p className="text-muted-foreground">{perm.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-border bg-muted/30 flex justify-end space-x-3 rounded-b-xl shrink-0">
                  <button onClick={() => setShowCreateAdminModal(false)} className="px-4 py-2 border border-input text-sm font-medium rounded-lg text-foreground bg-background hover:bg-accent cursor-pointer">
                    Cancel
                  </button>
                  <button 
                    onClick={() => {
                      setShowCreateAdminModal(false);
                      showToast("Sub-Admin created and activation email sent.");
                    }} 
                    className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 shadow-sm cursor-pointer"
                  >
                    Create & Send Activation
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* FALLBACK FOR OTHER SECTIONS */}
          {!['dashboard', 'subadmins'].includes(activeSection) && (
            <div className="space-y-6 animate-in fade-in">
              <SectionHeader 
                title={activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} 
                subtitle="This module is rendering placeholder UI." 
              />
              <div className="bg-card p-12 rounded-xl border border-dashed border-border flex flex-col items-center justify-center text-muted-foreground">
                <MonitorPlay size={48} className="mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-lg font-medium text-card-foreground mb-1">Module Under Construction</h3>
                <p className="text-sm text-center max-w-sm">The '{activeSection}' view components would render here connected to the central store.</p>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
