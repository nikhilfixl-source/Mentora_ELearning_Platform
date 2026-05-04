import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import {
  Search, Bell, LayoutDashboard, BookOpen, MessageSquare, Calendar,
  CheckSquare, Video, Award, Settings, DownloadCloud, Wifi,
  PlayCircle, Clock, FileText, Download, ChevronRight, Menu, Sun, Moon,
  Bot, Sparkles, BrainCircuit, Activity, GraduationCap, ChevronLeft, Send, X, LogOut
} from 'lucide-react';

// --- MOCK DATA ---
const MOCK_USER = {
  name: "Aisha Sharma",
  id: "STU-24-0892",
  department: "Computer Science",
  semester: "Semester 4",
  plan: "Pro (200 AI Queries/day)",
  avatar: "AS"
};

const MOCK_COURSES = [
  { id: 1, title: "Data Structures & Algorithms", progress: 68, health: "Good", grade: "A-", nextTask: "Watch: Trees & Graphs", color: "#3b82f6" },
  { id: 2, title: "Database Management Systems", progress: 42, health: "At Risk", grade: "C+", nextTask: "Quiz: Normalization", color: "#ef4444" },
  { id: 3, title: "Operating Systems", progress: 85, health: "Excellent", grade: "A", nextTask: "Assignment: Process Scheduling", color: "#10b981" },
  { id: 4, title: "Software Engineering", progress: 15, health: "Good", grade: "B", nextTask: "Read: Agile Methodologies", color: "#8b5cf6" },
];

const MOCK_TASKS = [
  { id: 1, type: "video", title: "Trees & Graphs - Part 1", course: "Data Structures", duration: "45 min", due: "Today", status: "pending" },
  { id: 2, type: "quiz", title: "Normalization 1st-3rd NF", course: "DBMS", duration: "20 min", due: "Today, 11:59 PM", status: "urgent" },
  { id: 3, type: "live", title: "OS Process Scheduling Q&A", course: "Operating Systems", duration: "60 min", due: "Tomorrow, 10:00 AM", status: "upcoming" },
];

const MOCK_STUDY_PLAN = [
  { day: "Mon", adherence: 90 },
  { day: "Tue", adherence: 85 },
  { day: "Wed", adherence: 40 },
  { day: "Thu", adherence: 95 },
  { day: "Fri", adherence: 80 },
  { day: "Sat", adherence: 100 },
  { day: "Sun", adherence: 0 },
];

const MOCK_AI_CHAT = [
  { sender: "ai", text: "Hi Aisha! You have 142 queries left today. You seem to be struggling with Database Normalization based on your recent quiz. Do you want to review 2nd Normal Form?", timestamp: "10:00 AM" },
  { sender: "user", text: "Yes, explain 2NF with an example of a student table.", timestamp: "10:02 AM" },
  { sender: "ai", text: "Sure! 2NF requires that a table is in 1NF, and all non-key attributes are fully functional dependent on the primary key. \n\nImagine a table with `StudentID`, `CourseID` (Composite Key), `StudentName`, and `CourseName`. `StudentName` depends only on `StudentID`, not the whole key. This violates 2NF.", timestamp: "10:03 AM", source: "DBMS Lecture 4, 12:45" }
];

const MOCK_ASSIGNMENTS = [
  { id: 1, title: "Process Scheduling Algorithm", course: "Operating Systems", due: "Tomorrow, 11:59 PM", status: "Pending", score: null },
  { id: 2, title: "Normalization Quiz", course: "Database Management Systems", due: "Today, 5:00 PM", status: "Pending", score: null },
  { id: 3, title: "Graph Traversal Implementation", course: "Data Structures", due: "Last Week", status: "Graded", score: "95/100" },
];

const MOCK_CREDENTIALS = [
  { id: 1, title: "Python For Beginners", date: "Aug 2023", type: "Certificate" },
  { id: 2, title: "Data Structures Pro", date: "Dec 2023", type: "Badge" },
];

export default function StudentDashboardPage() {
  const navigate = useNavigate();
  // State
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [chatInput, setChatInput] = useState("");
  const [offlineMode, setOfflineMode] = useState(false);

  // New States for Timeline AI
  const [timelineHoverPos, setTimelineHoverPos] = useState<number | null>(null);
  const [hoverTimestamp, setHoverTimestamp] = useState("");
  const [activeContextChat, setActiveContextChat] = useState<string | null>(null);
  const [timelineChatInput, setTimelineChatInput] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Theme Management
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const handleLogout = () => {
    setShowProfileMenu(false);
    navigate('/signin');
  };

  // Nav Item Component
  const NavItem = ({ icon: Icon, label, id, badge }: { icon: any, label: string, id: string, badge?: number }) => (
    <button
      onClick={() => {
        setActiveSection(id);
        if (id === 'courses') setSelectedCourseId(null);
      }}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl mb-1 transition-all duration-200 cursor-pointer ${
        activeSection === id 
          ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' 
          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
      }`}
    >
      <div className="flex items-center space-x-3">
        <Icon size={20} className={activeSection === id ? 'text-primary-foreground' : ''} />
        {sidebarOpen && <span className="text-sm font-medium">{label}</span>}
      </div>
      {sidebarOpen && badge && (
        <span className="bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );

  const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon?: any }) => (
    <div className="mb-8 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {Icon && <div className="p-2 bg-primary/10 text-primary rounded-lg"><Icon size={24} /></div>}
        <div>
          <h1 className="text-2xl font-bold text-card-foreground tracking-tight">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>
      {activeSection === 'dashboard' && (
        <div className="flex items-center space-x-2 text-sm bg-muted/50 border border-border px-3 py-1.5 rounded-lg">
          <Activity size={16} className="text-green-500" />
          <span className="text-foreground font-medium">Study Streak: <span className="text-primary font-bold">12 Days</span></span>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex h-screen bg-background font-sans overflow-hidden text-foreground transition-colors duration-300">
      
      {/* SIDEBAR */}
      <aside className={`bg-card text-card-foreground border-r border-border flex flex-col transition-all duration-300 z-20 shadow-sm ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-border shrink-0">
          {sidebarOpen ? (
            <div className="flex items-center font-bold text-xl tracking-tight text-foreground truncate">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-2 shadow-sm shadow-primary/20">
                <GraduationCap size={20} className="text-primary-foreground" />
              </div>
              Mentora
            </div>
          ) : (
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto shadow-sm shadow-primary/20">
              <GraduationCap size={20} className="text-primary-foreground" />
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors p-1 rounded-md hover:bg-accent hidden md:block">
            <Menu size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 custom-scrollbar flex flex-col space-y-1">
          {sidebarOpen && <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 px-2">Learning</div>}
          <NavItem id="dashboard" icon={LayoutDashboard} label="Home Feed" />
          <NavItem id="courses" icon={BookOpen} label="My Courses" />
          <NavItem id="study-plan" icon={Calendar} label="Study Plan" />
          
          {sidebarOpen && <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 mt-6 px-2">Workspace</div>}
          <NavItem id="ai-tutor" icon={Bot} label="AI Tutor" badge={2} />
          <NavItem id="assignments" icon={CheckSquare} label="Assignments" badge={1} />
          <NavItem id="live" icon={Video} label="Live Classes" />
          
          {sidebarOpen && <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 mt-6 px-2">Achievements</div>}
          <NavItem id="credentials" icon={Award} label="Credentials" />
        </div>

        {/* User Profile Mini */}
        <div className="relative p-4 border-t border-border shrink-0">
          {showProfileMenu && (
            <div className="absolute bottom-full left-4 right-4 mb-2 bg-card border border-border rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 z-50">
              <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors cursor-pointer">
                <Settings size={16} className="mr-3 text-muted-foreground" /> Settings
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-3 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors border-t border-border cursor-pointer"
              >
                <LogOut size={16} className="mr-3" /> Logout
              </button>
            </div>
          )}
          <button 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-full flex items-center space-x-3 hover:bg-accent p-2 -mx-2 rounded-xl transition-colors text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md shrink-0">
              {MOCK_USER.avatar}
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">{MOCK_USER.name}</p>
                <p className="text-xs text-muted-foreground truncate">{MOCK_USER.plan}</p>
              </div>
            )}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        
        {/* TOP NAV */}
        <header className="h-16 bg-card/80 backdrop-blur-md border-b border-border flex items-center justify-between px-6 shrink-0 z-10 transition-colors duration-300">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              <Menu size={20} />
            </button>
            <div className="hidden md:flex items-center text-sm font-medium text-muted-foreground">
              {MOCK_USER.department} <ChevronRight size={14} className="mx-2 opacity-50" /> {MOCK_USER.semester}
            </div>
          </div>

          <div className="flex items-center space-x-5">
            {/* Offline Toggle */}
            <button 
              onClick={() => setOfflineMode(!offlineMode)}
              className={`flex items-center space-x-2 text-sm font-medium px-3 py-1.5 rounded-full transition-colors cursor-pointer border ${offlineMode ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' : 'bg-transparent text-muted-foreground border-border hover:bg-accent'}`}
            >
              {offlineMode ? <DownloadCloud size={16} /> : <Wifi size={16} />}
              <span className="hidden sm:inline">{offlineMode ? 'Offline Mode' : 'Online'}</span>
            </button>

            <button onClick={toggleTheme} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors p-2 rounded-full hover:bg-accent">
               {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="relative text-muted-foreground hover:text-foreground cursor-pointer p-2 rounded-full hover:bg-accent transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-destructive rounded-full ring-2 ring-card animate-pulse"></span>
            </button>
          </div>
        </header>

        {/* SCROLLABLE VIEW AREA */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-background transition-colors duration-300">
          <div className="max-w-6xl mx-auto">

            {/* 1. DASHBOARD (HOME) */}
            {activeSection === 'dashboard' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <SectionHeader title={`Welcome back, ${MOCK_USER.name.split(' ')[0]} 👋`} subtitle="Here is your learning summary for today." />
                
                {/* Top Row: AI + Tasks */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* AI Study Plan Nudge */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none">
                      <BrainCircuit size={200} />
                    </div>
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="p-3 bg-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/30">
                        <Sparkles size={28} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">Your AI Study Plan has been updated</h3>
                        <p className="text-muted-foreground mt-2 max-w-lg leading-relaxed">
                          Based on your 42% progress in DBMS, I've scheduled a 30-minute spaced repetition session for Normalization tonight. You can safely skip the introductory readings for OS.
                        </p>
                        <div className="mt-4 flex space-x-3">
                          <button onClick={() => setActiveSection('study-plan')} className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm cursor-pointer">
                            View Study Plan
                          </button>
                          <button onClick={() => setActiveSection('ai-tutor')} className="px-4 py-2 bg-background border border-border text-foreground text-sm font-semibold rounded-lg hover:bg-accent transition-colors cursor-pointer">
                            Ask AI Tutor
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Today's Tasks */}
                  <div className="bg-card rounded-2xl border border-border p-6 shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-card-foreground">Today's Tasks</h3>
                      <span className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded-md">3 Due</span>
                    </div>
                    <div className="flex-1 space-y-3 overflow-y-auto">
                      {MOCK_TASKS.map(task => (
                        <div key={task.id} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-accent/50 transition-colors border border-transparent hover:border-border group cursor-pointer">
                          <div className={`mt-0.5 p-1.5 rounded-lg ${task.status === 'urgent' ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>
                            {task.type === 'video' ? <PlayCircle size={16} /> : task.type === 'quiz' ? <FileText size={16} /> : <Video size={16} />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">{task.title}</p>
                            <p className="text-xs text-muted-foreground truncate">{task.course}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Course Progress Grid */}
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-4 flex items-center"><BookOpen size={20} className="mr-2 text-primary" /> Enrolled Courses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {MOCK_COURSES.map(course => (
                      <div key={course.id} className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer" onClick={() => { setActiveSection('courses'); setSelectedCourseId(course.id); }}>
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: course.color }}>
                            {course.title.charAt(0)}
                          </div>
                          <div className={`text-xs font-bold px-2 py-1 rounded-md border ${course.health === 'At Risk' ? 'bg-destructive/10 text-destructive border-destructive/20' : course.health === 'Excellent' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' : 'bg-muted text-muted-foreground border-border'}`}>
                            {course.grade} Projected
                          </div>
                        </div>
                        <h4 className="font-bold text-card-foreground leading-tight line-clamp-2 mb-4 group-hover:text-primary transition-colors">{course.title}</h4>
                        
                        {/* Progress Bar */}
                        <div className="space-y-1 mb-4">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Progress</span>
                            <span className="font-medium text-foreground">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                            <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${course.progress}%`, backgroundColor: course.color }} />
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border flex items-center justify-between">
                          <p className="text-xs font-medium text-muted-foreground truncate w-4/5"><span className="font-bold text-foreground">Next:</span> {course.nextTask}</p>
                          <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Adherence Chart */}
                <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                  <h3 className="font-bold text-card-foreground mb-6">Study Plan Adherence (This Week)</h3>
                  <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={MOCK_STUDY_PLAN}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#374151' : '#E5E7EB'} />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: theme === 'dark' ? '#9CA3AF' : '#6B7280', fontSize: 12 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: theme === 'dark' ? '#9CA3AF' : '#6B7280', fontSize: 12 }} domain={[0, 100]} />
                        <Tooltip 
                          cursor={{ fill: theme === 'dark' ? '#1f2937' : '#f3f4f6' }}
                          contentStyle={{ borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--card)', color: 'var(--foreground)' }}
                        />
                        <Bar dataKey="adherence" name="Adherence %" radius={[4, 4, 0, 0]}>
                          {MOCK_STUDY_PLAN.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.adherence >= 80 ? '#10b981' : entry.adherence >= 50 ? '#3b82f6' : '#ef4444'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </div>
            )}

            {/* 2. COURSES LIST & LECTURE PLAYER */}
            {activeSection === 'courses' && !selectedCourseId && (
              <div className="space-y-6 animate-in fade-in">
                <SectionHeader title="My Enrolled Courses" subtitle="Select a course to continue learning." icon={BookOpen} />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                  {MOCK_COURSES.map(course => (
                    <div key={course.id} className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer" onClick={() => setSelectedCourseId(course.id)}>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: course.color }}>
                          {course.title.charAt(0)}
                        </div>
                        <div className={`text-xs font-bold px-2 py-1 rounded-md border ${course.health === 'At Risk' ? 'bg-destructive/10 text-destructive border-destructive/20' : course.health === 'Excellent' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' : 'bg-muted text-muted-foreground border-border'}`}>
                          {course.grade} Projected
                        </div>
                      </div>
                      <h4 className="font-bold text-card-foreground leading-tight line-clamp-2 mb-4 group-hover:text-primary transition-colors">{course.title}</h4>
                      
                      <div className="space-y-1 mb-4">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Progress</span>
                          <span className="font-medium text-foreground">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${course.progress}%`, backgroundColor: course.color }} />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border flex items-center justify-between">
                        <p className="text-xs font-medium text-muted-foreground truncate w-4/5"><span className="font-bold text-foreground">Next:</span> {course.nextTask}</p>
                        <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'courses' && selectedCourseId && (
              <div className="animate-in fade-in space-y-6 h-full flex flex-col">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2 cursor-pointer hover:text-foreground w-fit" onClick={() => setSelectedCourseId(null)}>
                  <ChevronLeft size={16} /> <span>Back to Courses</span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left: Video Player */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="w-full aspect-video bg-black rounded-2xl relative overflow-hidden flex items-center justify-center group shadow-lg">
                      <video src="/mock-video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                        <button className="w-16 h-16 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-xl backdrop-blur-sm">
                          <PlayCircle size={32} />
                        </button>
                      </div>
                      {/* Player Controls Mock */}
                      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-full flex items-center space-x-4">
                          <div className="text-white text-xs font-medium">12:45 / 45:00</div>
                          <div 
                            className="flex-1 h-1.5 bg-white/30 rounded-full cursor-pointer relative group/timeline"
                            onMouseMove={(e) => {
                              if (activeContextChat) return;
                              const rect = e.currentTarget.getBoundingClientRect();
                              const x = e.clientX - rect.left;
                              const percentage = (x / rect.width) * 100;
                              setTimelineHoverPos(percentage);
                              
                              const totalSeconds = 45 * 60;
                              const hoverSeconds = (percentage / 100) * totalSeconds;
                              const mins = Math.floor(hoverSeconds / 60);
                              const secs = Math.floor(hoverSeconds % 60);
                              setHoverTimestamp(`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
                            }}
                            onMouseLeave={() => {
                              if (!activeContextChat) setTimelineHoverPos(null);
                            }}
                          >
                            <div className="absolute inset-y-0 left-0 w-1/3 bg-primary rounded-full pointer-events-none"></div>
                            
                            {timelineHoverPos !== null && !activeContextChat && (
                              <button 
                                className="absolute top-[-28px] -translate-x-1/2 w-7 h-7 bg-card border border-primary text-primary rounded-full shadow-lg flex items-center justify-center animate-in zoom-in cursor-pointer hover:scale-110 transition-transform z-20"
                                style={{ left: `${timelineHoverPos}%` }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveContextChat(hoverTimestamp);
                                }}
                              >
                                <Sparkles size={14} />
                              </button>
                            )}

                            {activeContextChat && timelineHoverPos !== null && (
                              <div 
                                className="absolute bottom-4 -translate-x-1/2 w-72 bg-card/95 backdrop-blur-xl border border-primary/30 rounded-xl shadow-2xl z-30 animate-in zoom-in-95 cursor-default"
                                style={{ left: `${Math.min(Math.max(timelineHoverPos, 15), 85)}%` }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <div className="p-3 border-b border-border flex justify-between items-center bg-muted/50 rounded-t-xl">
                                  <div className="flex items-center space-x-2">
                                    <Bot size={16} className="text-primary" />
                                    <span className="text-xs font-bold text-foreground">Ask Mentora AI about <span className="text-primary">{activeContextChat}</span></span>
                                  </div>
                                  <button 
                                    className="text-muted-foreground hover:text-foreground cursor-pointer"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveContextChat(null);
                                      setTimelineHoverPos(null);
                                    }}
                                  >
                                    <X size={14} />
                                  </button>
                                </div>
                                <div className="p-3">
                                  <div className="relative">
                                    <input 
                                      autoFocus
                                      type="text"
                                      value={timelineChatInput}
                                      onChange={(e) => setTimelineChatInput(e.target.value)}
                                      placeholder="What did she mean here...?"
                                      className="w-full bg-background border border-input rounded-lg py-2 pl-3 pr-10 text-xs text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
                                      onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                           setTimelineChatInput("");
                                           setActiveContextChat(null);
                                           setTimelineHoverPos(null);
                                        }
                                      }}
                                    />
                                    <button 
                                      className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors cursor-pointer"
                                      onClick={(e) => {
                                         e.stopPropagation();
                                         setTimelineChatInput("");
                                         setActiveContextChat(null);
                                         setTimelineHoverPos(null);
                                      }}
                                    >
                                      <Send size={12} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="flex space-x-3 text-white">
                            <button className="text-xs font-bold px-1.5 py-0.5 bg-white/20 rounded">1.5x</button>
                            <Settings size={16} className="cursor-pointer hover:text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Lecture 4: Database Normalization (1NF to 3NF)</h2>
                      <p className="text-muted-foreground mt-1">Database Management Systems · Prof. Ananya Sharma</p>
                      
                      <div className="flex space-x-4 mt-4">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-accent text-foreground rounded-lg text-sm font-medium transition-colors cursor-pointer">
                          <Download size={16} /> <span>Download Offline</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-accent text-foreground rounded-lg text-sm font-medium transition-colors cursor-pointer">
                          <FileText size={16} /> <span>Slides (PDF)</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right: AI Cornell Notes */}
                  <div className="bg-card rounded-2xl border border-border shadow-sm flex flex-col h-[600px] overflow-hidden">
                    <div className="p-4 border-b border-border bg-muted/30 flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Sparkles size={18} className="text-primary" />
                        <h3 className="font-bold text-foreground">AI Synced Notes</h3>
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">Auto-scroll On</span>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4 space-y-6 relative">
                      {/* Note Items */}
                      {[
                        { time: "02:15", title: "Introduction to 1NF", desc: "First Normal Form requires atomicity. Every column must hold indivisible values.", active: false },
                        { time: "12:45", title: "Second Normal Form (2NF)", desc: "Must be in 1NF. All non-key attributes must be fully functionally dependent on the primary key. No partial dependencies.", active: true },
                        { time: "28:30", title: "Third Normal Form (3NF)", desc: "Must be in 2NF. No transitive dependencies. Non-key attributes must not depend on other non-key attributes.", active: false },
                      ].map((note, i) => (
                        <div key={i} className={`flex space-x-4 p-3 rounded-xl transition-all cursor-pointer border ${note.active ? 'bg-primary/5 border-primary/30 shadow-sm' : 'border-transparent hover:bg-muted'}`}>
                          <div className="flex flex-col items-center">
                            <span className={`text-xs font-mono font-bold ${note.active ? 'text-primary' : 'text-muted-foreground'}`}>{note.time}</span>
                            <div className={`w-0.5 h-full my-1 ${note.active ? 'bg-primary' : 'bg-border'}`}></div>
                          </div>
                          <div className="flex-1 pb-2">
                            <h4 className={`font-bold text-sm ${note.active ? 'text-primary' : 'text-foreground'}`}>{note.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{note.desc}</p>
                            {note.active && (
                              <div className="mt-3 flex">
                                <input type="text" placeholder="Add personal annotation..." className="w-full text-xs px-3 py-1.5 bg-background border border-input rounded-md focus:outline-none focus:border-primary text-foreground" />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. AI TUTOR */}
            {activeSection === 'ai-tutor' && (
              <div className="h-[calc(100vh-8rem)] flex flex-col animate-in fade-in zoom-in-95 duration-300">
                <SectionHeader title="AI Tutor" subtitle="24/7 Contextual Q&A with Socratic Mode." icon={Bot} />
                
                <div className="flex-1 bg-card rounded-2xl border border-border shadow-sm flex flex-col overflow-hidden relative">
                  
                  {/* Chat Header */}
                  <div className="p-4 border-b border-border bg-muted/30 flex justify-between items-center z-10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                        <Bot size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">Mentora AI</h3>
                        <p className="text-xs text-muted-foreground">Pro Plan • 142/200 queries left today</p>
                      </div>
                    </div>
                    <select className="bg-background border border-input text-xs rounded-md px-2 py-1 text-foreground outline-none focus:ring-1 focus:ring-primary cursor-pointer hidden sm:block">
                      <option>Socratic Mode (Guides you)</option>
                      <option>Direct Answer Mode</option>
                      <option>Summarize Mode</option>
                    </select>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-gradient-to-b from-background to-card/50">
                    {MOCK_AI_CHAT.map((msg, i) => (
                      <div key={i} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                          <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                            msg.sender === 'user' 
                              ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                              : 'bg-muted border border-border text-foreground rounded-tl-sm'
                          }`}>
                            {msg.text}
                          </div>
                          
                          <div className="flex items-center space-x-2 mt-1 px-1">
                            <span className="text-[10px] text-muted-foreground font-medium">{msg.timestamp}</span>
                            {msg.source && (
                              <button className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer flex items-center">
                                <PlayCircle size={10} className="mr-1" /> {msg.source}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input Area */}
                  <div className="p-4 border-t border-border bg-card z-10">
                    <div className="relative flex items-center">
                      <button className="absolute left-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        <Sparkles size={20} />
                      </button>
                      <input 
                        type="text" 
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Ask anything about your courses... (Supports 12 languages)" 
                        className="w-full bg-background border border-input rounded-xl py-3 pl-10 pr-12 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground shadow-sm"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && chatInput) {
                            setChatInput("");
                          }
                        }}
                      />
                      <button className={`absolute right-2 p-1.5 rounded-lg transition-colors cursor-pointer ${chatInput ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' : 'bg-muted text-muted-foreground pointer-events-none'}`}>
                        <Send size={16} />
                      </button>
                    </div>
                    <div className="mt-2 flex space-x-2 px-1 overflow-x-auto no-scrollbar">
                      {["Explain 3NF simply", "Generate practice quiz for OS", "Summarize last lecture"].map((chip, i) => (
                        <button key={i} className="whitespace-nowrap text-xs bg-muted hover:bg-accent text-muted-foreground hover:text-foreground border border-border px-3 py-1 rounded-full transition-colors cursor-pointer">
                          {chip}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. STUDY PLAN */}
            {activeSection === 'study-plan' && (
              <div className="space-y-6 animate-in fade-in">
                <SectionHeader title="My Study Plan" subtitle="AI-generated weekly schedule based on your progress." icon={Calendar} />
                <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
                  <div className="space-y-6">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, i) => (
                      <div key={day} className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="w-32 font-bold text-foreground pt-3 md:pt-0">{day}</div>
                        <div className="flex-1 space-y-3">
                          {i === 0 ? MOCK_TASKS.map(t => (
                            <div key={t.id} className="bg-background border border-border p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow group">
                              <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-lg ${t.status === 'urgent' ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>
                                  {t.type === 'video' ? <PlayCircle size={18} /> : t.type === 'quiz' ? <FileText size={18} /> : <Video size={18} />}
                                </div>
                                <div>
                                  <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{t.title}</p>
                                  <p className="text-xs text-muted-foreground">{t.course}</p>
                                </div>
                              </div>
                              <span className="text-xs font-medium bg-muted px-3 py-1.5 rounded-lg border border-border">{t.duration}</span>
                            </div>
                          )) : (
                            <div className="bg-muted/30 border border-dashed border-border p-4 rounded-xl text-muted-foreground text-sm flex items-center justify-center italic">
                              <Sparkles size={16} className="mr-2 opacity-50" /> AI will automatically schedule tasks here based on performance.
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 5. ASSIGNMENTS */}
            {activeSection === 'assignments' && (
              <div className="space-y-6 animate-in fade-in">
                <SectionHeader title="Assignments" subtitle="Manage your upcoming and graded coursework." icon={CheckSquare} />
                <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
                      <tr>
                        <th className="px-6 py-4">Title</th>
                        <th className="px-6 py-4">Course</th>
                        <th className="px-6 py-4">Due Date</th>
                        <th className="px-6 py-4 text-right">Status / Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {MOCK_ASSIGNMENTS.map(a => (
                        <tr key={a.id} className="hover:bg-muted/20 transition-colors">
                          <td className="px-6 py-4 font-medium text-foreground">{a.title}</td>
                          <td className="px-6 py-4 text-muted-foreground">{a.course}</td>
                          <td className="px-6 py-4 text-muted-foreground">{a.due}</td>
                          <td className="px-6 py-4 text-right">
                            {a.status === 'Pending' ? (
                              <span className="bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/20">Pending</span>
                            ) : (
                              <span className="bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/20">{a.score}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 6. LIVE CLASSES */}
            {activeSection === 'live' && (
              <div className="space-y-6 animate-in fade-in">
                <SectionHeader title="Live Classes" subtitle="Upcoming live sessions and recordings." icon={Video} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                    <h3 className="font-bold text-foreground mb-4 flex items-center"><Video size={18} className="mr-2 text-primary" /> Upcoming Sessions</h3>
                    <div className="space-y-4">
                      <div className="bg-primary/5 border border-primary/20 p-5 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-primary text-lg">OS Process Scheduling Q&A</h4>
                          <span className="text-xs font-bold bg-primary text-primary-foreground px-2 py-1 rounded-md">Tomorrow, 10:00 AM</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Prof. Ananya Sharma · 60 mins</p>
                        <button className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors cursor-pointer">Join Class</button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                    <h3 className="font-bold text-foreground mb-4 flex items-center"><PlayCircle size={18} className="mr-2 text-muted-foreground" /> Recent Recordings</h3>
                    <div className="text-muted-foreground text-sm italic text-center py-12 flex flex-col items-center justify-center">
                      <Video size={32} className="opacity-20 mb-3" />
                      No recent recordings available.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. CREDENTIALS */}
            {activeSection === 'credentials' && (
              <div className="space-y-6 animate-in fade-in">
                <SectionHeader title="Achievements & Credentials" subtitle="Your verified certificates and badges." icon={Award} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {MOCK_CREDENTIALS.map(c => (
                    <div key={c.id} className="bg-card rounded-2xl border border-border p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group">
                      <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                        <Award size={40} />
                      </div>
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{c.title}</h3>
                      <p className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">Issued: {c.date}</p>
                      <span className="text-xs font-bold bg-muted px-3 py-1 rounded-full text-foreground border border-border">{c.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FALLBACK FOR OTHER SECTIONS */}
            {!['dashboard', 'courses', 'ai-tutor', 'study-plan', 'assignments', 'live', 'credentials'].includes(activeSection) && (
              <div className="space-y-6 animate-in fade-in">
                <SectionHeader 
                  title={activeSection.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} 
                  subtitle="This module is rendering placeholder UI." 
                />
                <div className="bg-card p-16 rounded-2xl border border-dashed border-border flex flex-col items-center justify-center text-muted-foreground text-center">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
                    <Sparkles size={32} className="text-muted-foreground opacity-50" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Module Under Construction</h3>
                  <p className="text-sm max-w-md leading-relaxed">
                    The '{activeSection}' view components are outlined in the PRD and will render here.
                  </p>
                  <button onClick={() => setActiveSection('dashboard')} className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium shadow-sm hover:bg-primary/90 transition-colors cursor-pointer">
                    Return to Dashboard
                  </button>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}
