import React, { useState, useEffect, useMemo } from 'react';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import {
  Search, Bell, LayoutDashboard, BookOpen, Video, Edit3, Users,
  BarChart2, FileText, CheckCircle, AlertTriangle, Clock, 
  UploadCloud, PlayCircle, Settings, ChevronRight, Menu, Sun, Moon,
  Plus, Bot, ShieldAlert, GraduationCap, Mic, Send, Download, Save, Trash2,
  X, Eye, Loader
} from 'lucide-react';

// --- MOCK DATA ---
const MOCK_USER = {
  name: "Prof. Ananya Sharma",
  id: "INS-9281",
  department: "Computer Science",
  role: "Senior Instructor",
  avatar: "AS"
};

const MOCK_COURSES = [
  { id: 1, title: "Data Structures & Algorithms", status: "Published", students: 245, rating: 4.8 },
  { id: 2, title: "Advanced Graph Theory", status: "Pending Approval", students: 0, rating: 0 },
  { id: 3, title: "Intro to Machine Learning", status: "Draft", students: 0, rating: 0 },
];

const MOCK_AT_RISK = [
  { id: 1, name: "Rahul Verma", course: "Data Structures", issue: "Failed 2 consecutive quizzes", lastActive: "3 days ago" },
  { id: 2, name: "Sneha Patil", course: "Data Structures", issue: "Attendance < 60%", lastActive: "1 week ago" },
  { id: 3, name: "Karan Desai", course: "Data Structures", issue: "AI Tutor flagged high confusion in Trees", lastActive: "Yesterday" },
];

const MOCK_STUDENTS = [
  { id: 1, name: "Rahul Verma", course: "Data Structures & Algorithms", attendance: "58%", grade: "C", status: "At Risk" },
  { id: 2, name: "Sneha Patil", course: "Data Structures & Algorithms", attendance: "61%", grade: "B-", status: "Needs Attention" },
  { id: 3, name: "Karan Desai", course: "Data Structures & Algorithms", attendance: "82%", grade: "B+", status: "AI Flagged" },
  { id: 4, name: "Isha Menon", course: "Advanced Graph Theory", attendance: "93%", grade: "A", status: "Healthy" },
  { id: 5, name: "Arjun Nair", course: "Intro to Machine Learning", attendance: "88%", grade: "A-", status: "Healthy" },
];

const MOCK_GRADING_TASKS = [
  { id: 1, title: "Midterm Essay: Big-O Notation", course: "Data Structures", pending: 45, aiAssisted: true, dueIn: "2 days" },
  { id: 2, title: "Week 4 Code Sandbox", course: "Data Structures", pending: 12, aiAssisted: false, dueIn: "5 hours" },
];

const MOCK_ENGAGEMENT_DATA = [
  { week: 'W1', engagement: 85, attendance: 92 },
  { week: 'W2', engagement: 82, attendance: 89 },
  { week: 'W3', engagement: 78, attendance: 85 },
  { week: 'W4', engagement: 88, attendance: 90 },
  { week: 'W5', engagement: 91, attendance: 94 },
];

const COURSES_STORAGE_KEY = 'mentora-instructor-courses';
const ANALYTICS_STORAGE_KEY = 'mentora-instructor-analytics';
const ROSTER_STORAGE_KEY = 'mentora-instructor-roster';
const AT_RISK_STORAGE_KEY = 'mentora-instructor-at-risk';
const VIDEOS_STORAGE_KEY = 'mentora-instructor-videos';

export default function InstructorDashboardPage() {
  // State
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [courses, setCourses] = useState(MOCK_COURSES);
  const [courseForm, setCourseForm] = useState({
    title: '',
    status: 'Draft',
    students: '0',
    rating: '0',
  });
  const [selectedAnalyticsCourse, setSelectedAnalyticsCourse] = useState('Data Structures & Algorithms');
  const [selectedAnalyticsRange, setSelectedAnalyticsRange] = useState('Last 5 Weeks');
  const [analyticsGoal, setAnalyticsGoal] = useState('Raise attendance above 90% for all active cohorts.');
  const [analyticsSummary, setAnalyticsSummary] = useState(
    'Engagement is trending upward in Data Structures. Attendance dipped during Week 3 but recovered after the live Q&A intervention.'
  );
  const [studentRoster, setStudentRoster] = useState(MOCK_STUDENTS);
  const [atRiskAlerts, setAtRiskAlerts] = useState(
    MOCK_AT_RISK.map((item) => ({ ...item, contacted: false, resolved: false }))
  );
  const [courseVideos, setCourseVideos] = useState<Record<number, Array<{id: string, title: string, duration: string, uploadDate: string, url: string}>>>({});
  const [selectedCourseForVideo, setSelectedCourseForVideo] = useState<number | null>(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [expandedCourseVideos, setExpandedCourseVideos] = useState<number | null>(null);

  // Theme Management
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const savedCourses = window.localStorage.getItem(COURSES_STORAGE_KEY);
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }

    const savedAnalytics = window.localStorage.getItem(ANALYTICS_STORAGE_KEY);
    if (savedAnalytics) {
      const parsed = JSON.parse(savedAnalytics);
      setSelectedAnalyticsCourse(parsed.selectedAnalyticsCourse ?? 'Data Structures & Algorithms');
      setSelectedAnalyticsRange(parsed.selectedAnalyticsRange ?? 'Last 5 Weeks');
      setAnalyticsGoal(parsed.analyticsGoal ?? 'Raise attendance above 90% for all active cohorts.');
      setAnalyticsSummary(
        parsed.analyticsSummary ??
          'Engagement is trending upward in Data Structures. Attendance dipped during Week 3 but recovered after the live Q&A intervention.'
      );
    }

    const savedRoster = window.localStorage.getItem(ROSTER_STORAGE_KEY);
    if (savedRoster) {
      setStudentRoster(JSON.parse(savedRoster));
    }

    const savedAtRisk = window.localStorage.getItem(AT_RISK_STORAGE_KEY);
    if (savedAtRisk) {
      setAtRiskAlerts(JSON.parse(savedAtRisk));
    }

    const savedVideos = window.localStorage.getItem(VIDEOS_STORAGE_KEY);
    if (savedVideos) {
      setCourseVideos(JSON.parse(savedVideos));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    window.localStorage.setItem(
      ANALYTICS_STORAGE_KEY,
      JSON.stringify({
        selectedAnalyticsCourse,
        selectedAnalyticsRange,
        analyticsGoal,
        analyticsSummary,
      })
    );
  }, [selectedAnalyticsCourse, selectedAnalyticsRange, analyticsGoal, analyticsSummary]);

  useEffect(() => {
    window.localStorage.setItem(ROSTER_STORAGE_KEY, JSON.stringify(studentRoster));
  }, [studentRoster]);

  useEffect(() => {
    window.localStorage.setItem(AT_RISK_STORAGE_KEY, JSON.stringify(atRiskAlerts));
  }, [atRiskAlerts]);

  useEffect(() => {
    window.localStorage.setItem(VIDEOS_STORAGE_KEY, JSON.stringify(courseVideos));
  }, [courseVideos]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const analyticsData = useMemo(() => {
    const baseShift = selectedAnalyticsCourse === 'Data Structures & Algorithms' ? 0 : selectedAnalyticsCourse === 'Advanced Graph Theory' ? -6 : -10;
    return MOCK_ENGAGEMENT_DATA.map((item, index) => ({
      week: item.week,
      engagement: Math.max(40, item.engagement + baseShift + (index % 2 === 0 ? 1 : -1)),
      attendance: Math.max(45, item.attendance + Math.floor(baseShift / 2)),
    }));
  }, [selectedAnalyticsCourse]);

  const analyticsKpis = useMemo(() => {
    const last = analyticsData[analyticsData.length - 1];
    const avgEngagement = Math.round(analyticsData.reduce((sum, item) => sum + item.engagement, 0) / analyticsData.length);
    const avgAttendance = Math.round(analyticsData.reduce((sum, item) => sum + item.attendance, 0) / analyticsData.length);
    return {
      avgEngagement,
      avgAttendance,
      lastWeek: last.week,
      activeStudents: courses.find((course) => course.title === selectedAnalyticsCourse)?.students ?? 0,
    };
  }, [analyticsData, courses, selectedAnalyticsCourse]);

  const handleCourseFormChange = (field: 'title' | 'status' | 'students' | 'rating', value: string) => {
    setCourseForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateCourse = () => {
    if (!courseForm.title.trim()) return;

    const newCourse = {
      id: Date.now(),
      title: courseForm.title.trim(),
      status: courseForm.status,
      students: Number(courseForm.students) || 0,
      rating: Number(courseForm.rating) || 0,
    };

    setCourses((prev) => [newCourse, ...prev]);
    setCourseForm({ title: '', status: 'Draft', students: '0', rating: '0' });
  };

  const updateCourseStatus = (courseId: number, nextStatus: string) => {
    setCourses((prev) =>
      prev.map((course) => (course.id === courseId ? { ...course, status: nextStatus } : course))
    );
  };

  const removeCourse = (courseId: number) => {
    setCourses((prev) => prev.filter((course) => course.id !== courseId));
  };

  // Video upload handlers
  const handleVideoUpload = async (courseId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !videoTitle.trim()) return;

    setUploadingVideo(true);

    // Simulate upload delay
    setTimeout(() => {
      const reader = new FileReader();
      reader.onload = () => {
        const videoId = `video-${Date.now()}`;
        const videoDuration = Math.floor(Math.random() * 45) + 5; // 5-50 minutes
        const newVideo = {
          id: videoId,
          title: videoTitle.trim(),
          duration: `${videoDuration}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
          uploadDate: new Date().toLocaleDateString(),
          url: reader.result as string,
        };

        setCourseVideos((prev) => ({
          ...prev,
          [courseId]: [...(prev[courseId] || []), newVideo],
        }));

        setVideoTitle('');
        setSelectedCourseForVideo(null);
        setUploadingVideo(false);
        event.target.value = '';
      };
      reader.readAsDataURL(file);
    }, 1000);
  };

  const deleteVideo = (courseId: number, videoId: string) => {
    setCourseVideos((prev) => ({
      ...prev,
      [courseId]: prev[courseId].filter((v) => v.id !== videoId),
    }));
  };

  const downloadVideo = (videoUrl: string, videoTitle: string) => {
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = `${videoTitle}.mp4`;
    link.click();
  };

  const runAnalyticsSummary = () => {
    setAnalyticsSummary(
      `${selectedAnalyticsCourse} is currently averaging ${analyticsKpis.avgEngagement}% engagement and ${analyticsKpis.avgAttendance}% attendance across ${selectedAnalyticsRange.toLowerCase()}. Focus next on the lowest-attendance week and push one targeted live recap for inactive learners.`
    );
  };

  const exportAnalyticsSnapshot = () => {
    const csv = [
      'Week,Engagement,Attendance',
      ...analyticsData.map((row) => `${row.week},${row.engagement},${row.attendance}`),
    ].join('\n');
    window.localStorage.setItem('mentora-instructor-analytics-export', csv);
    setAnalyticsSummary('Analytics snapshot exported to demo local storage successfully.');
  };

  const toggleStudentStatus = (studentId: number, nextStatus: string) => {
    setStudentRoster((prev) =>
      prev.map((student) => (student.id === studentId ? { ...student, status: nextStatus } : student))
    );
  };

  const contactAtRiskStudent = (studentId: number) => {
    setAtRiskAlerts((prev) =>
      prev.map((student) => (student.id === studentId ? { ...student, contacted: true } : student))
    );
  };

  const resolveAtRiskStudent = (studentId: number) => {
    setAtRiskAlerts((prev) =>
      prev.map((student) => (student.id === studentId ? { ...student, resolved: true } : student))
    );
  };

  // Nav Item Component
  const NavItem = ({ icon: Icon, label, id, badge, alert }: { icon: any, label: string, id: string, badge?: number, alert?: boolean }) => (
    <button
      onClick={() => setActiveSection(id)}
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
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${alert ? 'bg-destructive text-destructive-foreground' : 'bg-primary/20 text-primary-foreground'}`}>
          {badge}
        </span>
      )}
    </button>
  );

  const SectionHeader = ({ title, subtitle, action }: { title: string, subtitle?: string, action?: React.ReactNode }) => (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-card-foreground tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
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
          {sidebarOpen && <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 px-2">Overview</div>}
          <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
          <NavItem id="analytics" icon={BarChart2} label="Analytics" />
          
          {sidebarOpen && <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 mt-6 px-2">Teaching</div>}
          <NavItem id="courses" icon={BookOpen} label="Course Management" />
          <NavItem id="studio" icon={Video} label="Live Class Studio" />
          <NavItem id="grading" icon={Edit3} label="Grading Hub" badge={57} />
          
          {sidebarOpen && <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 mt-6 px-2">Students</div>}
          <NavItem id="students" icon={Users} label="Student Roster" />
          <NavItem id="at-risk" icon={AlertTriangle} label="At-Risk Alerts" badge={3} alert={true} />
        </div>

        {/* User Profile Mini */}
        <div className="p-4 border-t border-border shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
              {MOCK_USER.avatar}
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{MOCK_USER.name}</p>
                <p className="text-xs text-muted-foreground truncate">{MOCK_USER.role}</p>
              </div>
            )}
          </div>
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
              {MOCK_USER.department}
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="hidden md:flex items-center text-sm font-medium px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full">
              <Clock size={16} className="mr-2" />
              Avg Grading Turnaround: 24h
            </div>

            <button onClick={toggleTheme} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors p-2 rounded-full hover:bg-accent">
               {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="relative text-muted-foreground hover:text-foreground cursor-pointer p-2 rounded-full hover:bg-accent transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-destructive rounded-full ring-2 ring-card"></span>
            </button>
          </div>
        </header>

        {/* SCROLLABLE VIEW AREA */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-background transition-colors duration-300">
          <div className="max-w-7xl mx-auto">

            {/* 1. DASHBOARD OVERVIEW */}
            {activeSection === 'dashboard' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <SectionHeader 
                  title={`Welcome back, ${MOCK_USER.name} 👋`} 
                  subtitle="Here's what's happening in your courses today." 
                  action={
                    <button onClick={() => setActiveSection('studio')} className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors shadow-sm cursor-pointer">
                      <Video size={16} /> <span>Start Live Class</span>
                    </button>
                  }
                />
                
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: 'Total Enrolled', value: '245', icon: Users, color: 'text-blue-500' },
                    { title: 'Pending Grading', value: '57', icon: Edit3, color: 'text-amber-500' },
                    { title: 'Avg Course Rating', value: '4.8/5', icon: CheckCircle, color: 'text-green-500' },
                    { title: 'At-Risk Alerts', value: '3', icon: AlertTriangle, color: 'text-destructive', alert: true },
                  ].map((kpi, i) => (
                    <div key={i} className={`bg-card p-5 rounded-2xl border ${kpi.alert ? 'border-destructive/50 shadow-destructive/10' : 'border-border'} shadow-sm flex items-start justify-between`}>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">{kpi.title}</span>
                        <div className="text-2xl font-bold text-card-foreground mt-2">{kpi.value}</div>
                      </div>
                      <div className={`p-3 rounded-xl bg-muted ${kpi.color} bg-opacity-10`}>
                        <kpi.icon size={24} className={kpi.color} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Left Column: Grading & Courses */}
                  <div className="lg:col-span-2 space-y-6">
                    
                    {/* Priority Grading Tasks */}
                    <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col">
                      <div className="p-5 border-b border-border flex justify-between items-center">
                        <h3 className="font-bold text-card-foreground">Priority Grading Tasks</h3>
                        <button onClick={() => setActiveSection('grading')} className="text-sm font-medium text-primary hover:underline cursor-pointer">View All</button>
                      </div>
                      <div className="divide-y divide-border">
                        {MOCK_GRADING_TASKS.map(task => (
                          <div key={task.id} className="p-5 flex items-center justify-between hover:bg-muted/50 transition-colors">
                            <div className="flex items-start space-x-4">
                              <div className="p-2 bg-primary/10 text-primary rounded-lg mt-0.5">
                                <FileText size={20} />
                              </div>
                              <div>
                                <h4 className="font-bold text-foreground text-sm">{task.title}</h4>
                                <p className="text-xs text-muted-foreground mt-1">{task.course}</p>
                                <div className="flex items-center space-x-3 mt-2">
                                  <span className="text-xs font-medium bg-muted px-2 py-0.5 rounded text-foreground">{task.pending} submissions</span>
                                  {task.aiAssisted && (
                                    <span className="text-[10px] font-bold bg-purple-500/10 text-purple-500 border border-purple-500/20 px-2 py-0.5 rounded flex items-center">
                                      <Bot size={12} className="mr-1" /> AI Pre-Graded
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-xs font-medium text-destructive mb-3 flex items-center"><Clock size={12} className="mr-1" /> Due in {task.dueIn}</span>
                              <button onClick={() => setActiveSection('grading')} className="px-3 py-1.5 bg-background border border-border hover:bg-accent hover:text-accent-foreground text-sm font-medium rounded-lg transition-colors cursor-pointer">
                                Grade Now
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Engagement Chart */}
                    <div className="bg-card rounded-2xl border border-border shadow-sm p-5">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-card-foreground">Course Engagement (Data Structures)</h3>
                      </div>
                      <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={analyticsData}>
                            <defs>
                              <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#374151' : '#E5E7EB'} />
                            <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: theme === 'dark' ? '#9CA3AF' : '#6B7280', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: theme === 'dark' ? '#9CA3AF' : '#6B7280', fontSize: 12 }} domain={[0, 100]} />
                            <Tooltip 
                              contentStyle={{ borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--card)', color: 'var(--foreground)' }}
                            />
                            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                            <Area type="monotone" dataKey="engagement" name="Avg Engagement %" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorEngagement)" />
                            <Area type="monotone" dataKey="attendance" name="Attendance %" stroke="#10b981" strokeWidth={3} fillOpacity={0} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Alerts */}
                  <div className="space-y-6">
                    <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-5 shadow-sm relative overflow-hidden">
                      <div className="flex items-center space-x-2 mb-4 relative z-10">
                        <ShieldAlert size={20} className="text-destructive" />
                        <h3 className="font-bold text-destructive">AI At-Risk Alerts</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 relative z-10">Mentora AI has flagged these students based on recent performance and engagement drops.</p>
                      
                      <div className="space-y-3 relative z-10">
                        {MOCK_AT_RISK.map(student => (
                          <div key={student.id} className="bg-background rounded-xl p-4 border border-destructive/10 shadow-sm flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-bold text-sm text-foreground">{student.name}</span>
                              <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded">{student.lastActive}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mb-3">{student.issue}</p>
                            <button className="w-full py-1.5 text-xs font-medium text-destructive hover:bg-destructive/10 rounded border border-destructive/20 transition-colors cursor-pointer">
                              Message Student
                            </button>
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full mt-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        View All Alerts
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* ANALYTICS */}
            {activeSection === 'analytics' && (
              <div className="space-y-6 animate-in fade-in">
                <SectionHeader
                  title="Analytics"
                  subtitle="Track course engagement, attendance, and instruction outcomes using persistent demo data."
                  action={
                    <div className="flex items-center gap-3">
                      <button
                        onClick={runAnalyticsSummary}
                        className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors shadow-sm cursor-pointer"
                      >
                        <Bot size={16} /> <span>Generate AI Insight</span>
                      </button>
                      <button
                        onClick={exportAnalyticsSnapshot}
                        className="flex items-center space-x-2 bg-background border border-border text-foreground px-4 py-2 rounded-lg font-medium text-sm hover:bg-accent transition-colors shadow-sm cursor-pointer"
                      >
                        <Download size={16} /> <span>Export Demo CSV</span>
                      </button>
                    </div>
                  }
                />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Avg Engagement', value: `${analyticsKpis.avgEngagement}%` },
                    { label: 'Avg Attendance', value: `${analyticsKpis.avgAttendance}%` },
                    { label: 'Active Students', value: `${analyticsKpis.activeStudents}` },
                    { label: 'Latest Week', value: analyticsKpis.lastWeek },
                  ].map((card) => (
                    <div key={card.label} className="bg-card p-5 rounded-2xl border border-border shadow-sm">
                      <p className="text-sm font-medium text-muted-foreground">{card.label}</p>
                      <p className="text-2xl font-bold text-card-foreground mt-2">{card.value}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-6">
                  <div className="bg-card rounded-2xl border border-border shadow-sm p-5">
                    <div className="flex flex-wrap gap-3 justify-between items-center mb-6">
                      <h3 className="font-bold text-card-foreground">Course Performance Trend</h3>
                      <div className="flex flex-wrap gap-3">
                        <select
                          value={selectedAnalyticsCourse}
                          onChange={(e) => setSelectedAnalyticsCourse(e.target.value)}
                          className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground outline-none"
                        >
                          {courses.map((course) => (
                            <option key={course.id} value={course.title}>{course.title}</option>
                          ))}
                        </select>
                        <select
                          value={selectedAnalyticsRange}
                          onChange={(e) => setSelectedAnalyticsRange(e.target.value)}
                          className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground outline-none"
                        >
                          <option>Last 5 Weeks</option>
                          <option>Last 30 Days</option>
                          <option>Current Term</option>
                        </select>
                      </div>
                    </div>

                    <div className="h-[320px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={analyticsData}>
                          <defs>
                            <linearGradient id="colorAnalyticsEngagement" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#374151' : '#E5E7EB'} />
                          <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: theme === 'dark' ? '#9CA3AF' : '#6B7280', fontSize: 12 }} />
                          <YAxis axisLine={false} tickLine={false} tick={{ fill: theme === 'dark' ? '#9CA3AF' : '#6B7280', fontSize: 12 }} domain={[0, 100]} />
                          <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--card)', color: 'var(--foreground)' }} />
                          <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                          <Area type="monotone" dataKey="engagement" name="Engagement %" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorAnalyticsEngagement)" />
                          <Area type="monotone" dataKey="attendance" name="Attendance %" stroke="#10b981" strokeWidth={3} fillOpacity={0} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-card rounded-2xl border border-border shadow-sm p-5">
                      <h3 className="font-bold text-card-foreground mb-4">Instruction Goal</h3>
                      <textarea
                        value={analyticsGoal}
                        onChange={(e) => setAnalyticsGoal(e.target.value)}
                        className="w-full h-28 bg-background border border-input rounded-lg p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                      <p className="text-xs text-muted-foreground mt-3">Saved locally for demonstration. Refresh the page and it stays.</p>
                    </div>

                    <div className="bg-card rounded-2xl border border-border shadow-sm p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <Bot size={18} className="text-primary" />
                        <h3 className="font-bold text-card-foreground">AI Insight Summary</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{analyticsSummary}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* COURSE MANAGEMENT */}
            {activeSection === 'courses' && (
              <div className="space-y-6 animate-in fade-in">
                <SectionHeader
                  title="Course Management"
                  subtitle="Create, update, publish, and manage demo course inventory with local storage persistence."
                  action={
                    <button
                      onClick={handleCreateCourse}
                      className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors shadow-sm cursor-pointer"
                    >
                      <Plus size={16} /> <span>Create Course</span>
                    </button>
                  }
                />

                <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-6">
                  <div className="bg-card rounded-2xl border border-border shadow-sm p-5 space-y-4">
                    <h3 className="font-bold text-card-foreground">New Course Draft</h3>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Course Title</label>
                      <input
                        value={courseForm.title}
                        onChange={(e) => handleCourseFormChange('title', e.target.value)}
                        placeholder="e.g. Compiler Design Foundations"
                        className="w-full bg-background border border-input rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Status</label>
                        <select
                          value={courseForm.status}
                          onChange={(e) => handleCourseFormChange('status', e.target.value)}
                          className="w-full bg-background border border-input rounded-lg px-3 py-2.5 text-sm text-foreground outline-none"
                        >
                          <option>Draft</option>
                          <option>Pending Approval</option>
                          <option>Published</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Enrolled Students</label>
                        <input
                          type="number"
                          value={courseForm.students}
                          onChange={(e) => handleCourseFormChange('students', e.target.value)}
                          className="w-full bg-background border border-input rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Rating</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        value={courseForm.rating}
                        onChange={(e) => handleCourseFormChange('rating', e.target.value)}
                        className="w-full bg-background border border-input rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        onClick={handleCreateCourse}
                        className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors cursor-pointer"
                      >
                        <Save size={16} /> <span>Save Draft</span>
                      </button>
                      <button
                        onClick={() => setCourseForm({ title: '', status: 'Draft', students: '0', rating: '0' })}
                        className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors cursor-pointer"
                      >
                        Reset Form
                      </button>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                    <div className="p-5 border-b border-border flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-card-foreground">Managed Courses</h3>
                        <p className="text-sm text-muted-foreground mt-1">Actions below update locally and persist after refresh.</p>
                      </div>
                    </div>

                    <div className="divide-y divide-border">
                      {courses.map((course) => (
                        <div key={course.id} className="p-5 hover:bg-muted/20 transition-colors">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div>
                              <h4 className="font-bold text-foreground">{course.title}</h4>
                              <div className="flex flex-wrap gap-3 mt-2 text-xs">
                                <span className="bg-muted px-2.5 py-1 rounded-full text-foreground border border-border">
                                  {course.students} students
                                </span>
                                <span className="bg-muted px-2.5 py-1 rounded-full text-foreground border border-border">
                                  Rating {course.rating}
                                </span>
                                <span className={`px-2.5 py-1 rounded-full border ${
                                  course.status === 'Published'
                                    ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20'
                                    : course.status === 'Pending Approval'
                                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                                    : 'bg-muted text-muted-foreground border-border'
                                }`}>
                                  {course.status}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              <button
                                onClick={() => updateCourseStatus(course.id, 'Draft')}
                                className="px-3 py-1.5 bg-background border border-border hover:bg-accent text-foreground text-sm rounded-lg transition-colors cursor-pointer"
                              >
                                Mark Draft
                              </button>
                              <button
                                onClick={() => updateCourseStatus(course.id, 'Pending Approval')}
                                className="px-3 py-1.5 bg-background border border-border hover:bg-accent text-foreground text-sm rounded-lg transition-colors cursor-pointer"
                              >
                                Submit Approval
                              </button>
                              <button
                                onClick={() => updateCourseStatus(course.id, 'Published')}
                                className="px-3 py-1.5 bg-primary text-primary-foreground text-sm rounded-lg transition-colors cursor-pointer hover:bg-primary/90"
                              >
                                Publish
                              </button>
                              <button
                                onClick={() => setExpandedCourseVideos(expandedCourseVideos === course.id ? null : course.id)}
                                className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm rounded-lg transition-colors cursor-pointer hover:bg-purple-500/20 flex items-center gap-1"
                              >
                                <Video size={14} /> Videos {courseVideos[course.id]?.length ? `(${courseVideos[course.id].length})` : ''}
                              </button>
                              <button
                                onClick={() => removeCourse(course.id)}
                                className="px-3 py-1.5 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-lg transition-colors cursor-pointer hover:bg-destructive/20"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>

                            {expandedCourseVideos === course.id && (
                              <div className="col-span-full border-t border-border pt-4 mt-4 space-y-4">
                                {/* Upload Video Form */}
                                <div className="bg-background rounded-lg p-4 border border-dashed border-primary/30">
                                  <h5 className="font-semibold text-foreground mb-3">Upload Video to "{course.title}"</h5>
                                  <div className="space-y-3">
                                    <div>
                                      <label className="text-xs font-medium text-muted-foreground">Video Title</label>
                                      <input
                                        type="text"
                                        value={selectedCourseForVideo === course.id ? videoTitle : ''}
                                        onChange={(e) => {
                                          if (selectedCourseForVideo !== course.id) setSelectedCourseForVideo(course.id);
                                          setVideoTitle(e.target.value);
                                        }}
                                        placeholder="e.g. Introduction to Data Structures"
                                        className="w-full mt-1 bg-card border border-input rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                      />
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <label className="flex items-center gap-2 cursor-pointer px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                                        <UploadCloud size={16} />
                                        Choose Video
                                        <input
                                          type="file"
                                          accept="video/*"
                                          onChange={(e) => handleVideoUpload(course.id, e)}
                                          disabled={uploadingVideo || !videoTitle.trim()}
                                          className="hidden"
                                        />
                                      </label>
                                      {uploadingVideo && <Loader size={16} className="animate-spin text-primary" />}
                                      {uploadingVideo && <span className="text-xs text-muted-foreground">Uploading...</span>}
                                    </div>
                                  </div>
                                </div>

                                {/* Video List */}
                                {courseVideos[course.id] && courseVideos[course.id].length > 0 && (
                                  <div className="space-y-2">
                                    <h5 className="font-semibold text-foreground text-sm">Videos ({courseVideos[course.id].length})</h5>
                                    <div className="space-y-2">
                                      {courseVideos[course.id].map((video) => (
                                        <div key={video.id} className="flex items-center justify-between bg-background border border-border rounded-lg p-3">
                                          <div className="flex items-center gap-3 flex-1 min-w-0">
                                            <div className="bg-primary/10 text-primary p-2 rounded">
                                              <Video size={16} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <p className="text-sm font-medium text-foreground truncate">{video.title}</p>
                                              <p className="text-xs text-muted-foreground">{video.duration} • {video.uploadDate}</p>
                                            </div>
                                          </div>
                                          <div className="flex items-center gap-1 flex-shrink-0">
                                            <button
                                              onClick={() => downloadVideo(video.url, video.title)}
                                              className="p-1.5 bg-background border border-border hover:bg-accent rounded transition-colors cursor-pointer"
                                              title="Download"
                                            >
                                              <Download size={14} />
                                            </button>
                                            <button
                                              onClick={() => deleteVideo(course.id, video.id)}
                                              className="p-1.5 bg-background border border-border hover:bg-destructive/10 text-destructive rounded transition-colors cursor-pointer"
                                              title="Delete"
                                            >
                                              <Trash2 size={14} />
                                            </button>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {(!courseVideos[course.id] || courseVideos[course.id].length === 0) && (
                                  <div className="text-center py-6 text-muted-foreground">
                                    <Video size={24} className="mx-auto mb-2 opacity-50" />
                                    <p className="text-sm">No videos uploaded yet</p>
                                  </div>
                                )}
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

            {/* STUDENT ROSTER */}
            {activeSection === 'students' && (
              <div className="space-y-6 animate-in fade-in">
                <SectionHeader
                  title="Student Roster"
                  subtitle="Track student health, attendance, grade posture, and update support status for demonstration."
                  action={
                    <div className="flex items-center space-x-2 bg-background border border-border text-foreground px-4 py-2 rounded-lg font-medium text-sm shadow-sm">
                      <Users size={16} /> <span>{studentRoster.length} learners</span>
                    </div>
                  }
                />

                <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                  <div className="p-5 border-b border-border flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-card-foreground">Managed Learners</h3>
                      <p className="text-sm text-muted-foreground mt-1">Update support labels locally to simulate instructor actions.</p>
                    </div>
                  </div>

                  <div className="divide-y divide-border">
                    {studentRoster.map((student) => (
                      <div key={student.id} className="p-5 hover:bg-muted/20 transition-colors">
                        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
                          <div>
                            <h4 className="font-bold text-foreground">{student.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{student.course}</p>
                            <div className="flex flex-wrap gap-3 mt-3 text-xs">
                              <span className="bg-muted px-2.5 py-1 rounded-full text-foreground border border-border">
                                Attendance {student.attendance}
                              </span>
                              <span className="bg-muted px-2.5 py-1 rounded-full text-foreground border border-border">
                                Grade {student.grade}
                              </span>
                              <span className={`px-2.5 py-1 rounded-full border ${
                                student.status === 'Healthy'
                                  ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20'
                                  : student.status === 'At Risk'
                                  ? 'bg-destructive/10 text-destructive border-destructive/20'
                                  : student.status === 'Needs Attention'
                                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                                  : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                              }`}>
                                {student.status}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() => toggleStudentStatus(student.id, 'Healthy')}
                              className="px-3 py-1.5 bg-background border border-border hover:bg-accent text-foreground text-sm rounded-lg transition-colors cursor-pointer"
                            >
                              Mark Healthy
                            </button>
                            <button
                              onClick={() => toggleStudentStatus(student.id, 'Needs Attention')}
                              className="px-3 py-1.5 bg-background border border-border hover:bg-accent text-foreground text-sm rounded-lg transition-colors cursor-pointer"
                            >
                              Needs Attention
                            </button>
                            <button
                              onClick={() => toggleStudentStatus(student.id, 'At Risk')}
                              className="px-3 py-1.5 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-lg transition-colors cursor-pointer hover:bg-destructive/20"
                            >
                              Escalate
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* AT-RISK ALERTS */}
            {activeSection === 'at-risk' && (
              <div className="space-y-6 animate-in fade-in">
                <SectionHeader
                  title="At-Risk Alerts"
                  subtitle="Review AI-detected risk signals, log outreach, and mark interventions resolved."
                  action={
                    <div className="flex items-center space-x-2 bg-destructive/10 border border-destructive/20 text-destructive px-4 py-2 rounded-lg font-medium text-sm shadow-sm">
                      <ShieldAlert size={16} /> <span>{atRiskAlerts.filter((item) => !item.resolved).length} open alerts</span>
                    </div>
                  }
                />

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  {atRiskAlerts.map((student) => (
                    <div
                      key={student.id}
                      className={`rounded-2xl border p-5 shadow-sm ${
                        student.resolved
                          ? 'bg-green-500/5 border-green-500/20'
                          : 'bg-card border-border'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-bold text-foreground">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">{student.course}</p>
                        </div>
                        <span className={`text-[10px] px-2 py-1 rounded-full border font-bold ${
                          student.resolved
                            ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20'
                            : 'bg-destructive/10 text-destructive border-destructive/20'
                        }`}>
                          {student.resolved ? 'Resolved' : 'Open'}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{student.issue}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <span>Last active</span>
                        <span className="font-medium text-foreground">{student.lastActive}</span>
                      </div>

                      <div className="space-y-3">
                        <button
                          onClick={() => contactAtRiskStudent(student.id)}
                          disabled={student.contacted}
                          className={`w-full py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                            student.contacted
                              ? 'bg-muted text-muted-foreground cursor-default'
                              : 'bg-background border border-border hover:bg-accent text-foreground'
                          }`}
                        >
                          {student.contacted ? 'Outreach Logged' : 'Message Student'}
                        </button>
                        <button
                          onClick={() => resolveAtRiskStudent(student.id)}
                          disabled={student.resolved}
                          className={`w-full py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                            student.resolved
                              ? 'bg-muted text-muted-foreground cursor-default'
                              : 'bg-primary text-primary-foreground hover:bg-primary/90'
                          }`}
                        >
                          {student.resolved ? 'Resolved' : 'Mark Resolved'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. GRADING HUB */}
            {activeSection === 'grading' && (
              <div className="animate-in fade-in space-y-6 h-full flex flex-col">
                <SectionHeader title="Grading Hub" subtitle="AI-assisted grading and plagiarism detection." />
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Grading Sidebar List */}
                  <div className="lg:col-span-1 bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-border bg-muted/30">
                      <h3 className="font-semibold text-sm text-card-foreground">Pending Submissions</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto divide-y divide-border">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`p-4 cursor-pointer transition-colors ${i === 1 ? 'bg-primary/5 border-l-4 border-primary' : 'hover:bg-muted'}`}>
                          <div className="flex justify-between items-start mb-1">
                            <span className={`text-sm font-medium ${i === 1 ? 'text-foreground' : 'text-muted-foreground'}`}>Student {i}</span>
                            <span className="text-xs text-green-500 font-bold">92% Match</span>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-1">Midterm Essay: Big-O Notation</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Grading Interface */}
                  <div className="lg:col-span-3 bg-card border border-border rounded-xl shadow-sm flex flex-col overflow-hidden h-[600px]">
                    <div className="p-4 border-b border-border flex justify-between items-center bg-muted/30">
                      <div>
                        <h2 className="font-bold text-lg text-foreground">Student 1 - Midterm Essay</h2>
                        <p className="text-xs text-muted-foreground">Submitted 2 hours ago • Turnitin Score: <span className="text-green-500 font-medium">4% (Safe)</span></p>
                      </div>
                      <div className="flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-lg">
                        <Bot size={16} className="text-purple-500" />
                        <span className="text-sm font-bold text-purple-500">AI Suggested: 85/100</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex overflow-hidden">
                      {/* Document Viewer Mock */}
                      <div className="flex-1 p-6 overflow-y-auto border-r border-border bg-background">
                        <h1 className="text-2xl font-bold mb-4">The Importance of Big-O Notation</h1>
                        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                          In computer science, Big-O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows. 
                          It is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                          <span className="bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1 rounded">For example, O(n) denotes linear time complexity, meaning the time taken increases linearly with the input size.</span> 
                          However, O(1) represents constant time, which is highly desirable.
                        </p>
                      </div>
                      
                      {/* Grading Panel */}
                      <div className="w-80 p-4 overflow-y-auto flex flex-col space-y-6 bg-muted/10">
                        
                        <div>
                          <h3 className="text-sm font-bold mb-3 text-foreground flex items-center"><Bot size={16} className="mr-2 text-purple-500" /> AI Rubric Analysis</h3>
                          <div className="space-y-3">
                            <div className="bg-background p-3 rounded-lg border border-border">
                              <div className="flex justify-between text-xs mb-1">
                                <span className="font-medium text-foreground">Technical Accuracy</span>
                                <span className="text-primary font-bold">18/20</span>
                              </div>
                              <p className="text-[10px] text-muted-foreground">Accurate definition, but missed mentioning space complexity tradeoffs.</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg border border-border">
                              <div className="flex justify-between text-xs mb-1">
                                <span className="font-medium text-foreground">Examples Provided</span>
                                <span className="text-primary font-bold">15/20</span>
                              </div>
                              <p className="text-[10px] text-muted-foreground">O(n) example was good, but lacked an example for O(n^2).</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-sm font-bold mb-2 text-foreground">Final Score</h3>
                          <input type="number" defaultValue={85} className="w-24 text-2xl font-bold bg-background border border-input rounded-lg px-3 py-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary" />
                          <span className="text-foreground font-medium ml-2">/ 100</span>
                          
                          <h3 className="text-sm font-bold mt-4 mb-2 text-foreground">Feedback to Student</h3>
                          <textarea 
                            className="w-full h-32 bg-background border border-input rounded-lg p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground resize-none"
                            placeholder="Add your feedback here..."
                            defaultValue="Good overview of time complexity, but you forgot to discuss space complexity. Next time, include an example of O(n^2) like nested loops."
                          />
                        </div>

                        <button className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-xl shadow-sm hover:bg-primary/90 transition-colors cursor-pointer">
                          Submit Grade & Next
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. LIVE STUDIO */}
            {activeSection === 'studio' && (
              <div className="animate-in fade-in space-y-6 h-full flex flex-col">
                <SectionHeader 
                  title="Live Class Studio" 
                  subtitle="Schedule, manage, and host live sessions." 
                  action={
                    <button className="flex items-center space-x-2 bg-background border border-border text-foreground px-4 py-2 rounded-lg font-medium text-sm hover:bg-accent transition-colors shadow-sm cursor-pointer">
                      <Plus size={16} /> <span>Schedule Session</span>
                    </button>
                  }
                />

                <div className="bg-card border border-border rounded-2xl shadow-sm p-8 text-center flex flex-col items-center justify-center py-20">
                  <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                    <Video size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-2">No Live Sessions Active</h2>
                  <p className="text-muted-foreground max-w-md mb-8">You can schedule a new session or start an instant meeting. Live classes support up to 500 students, infinite whiteboards, and breakout rooms.</p>
                  
                  <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm cursor-pointer flex items-center">
                      <PlayCircle size={20} className="mr-2" /> Start Instant Class
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
                    <h3 className="font-bold text-foreground mb-4">Upcoming Sessions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary/10 text-primary p-2 rounded"><Video size={16}/></div>
                          <div>
                            <p className="text-sm font-bold text-foreground">Graph Traversal Q&A</p>
                            <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
                          </div>
                        </div>
                        <button className="text-xs font-medium bg-background border border-border px-3 py-1 rounded hover:bg-accent cursor-pointer">Edit</button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
                    <h3 className="font-bold text-foreground mb-4">Recent Recordings</h3>
                    <p className="text-sm text-muted-foreground italic text-center py-4">No recent recordings available. Recordings are automatically saved and transcribed via Whisper AI.</p>
                  </div>
                </div>
              </div>
            )}

            {/* FALLBACK FOR OTHER SECTIONS */}
            {!['dashboard', 'grading', 'studio', 'analytics', 'courses', 'students', 'at-risk'].includes(activeSection) && (
              <div className="space-y-6 animate-in fade-in">
                <SectionHeader 
                  title={activeSection.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} 
                  subtitle="This module is rendering placeholder UI." 
                />
                <div className="bg-card p-16 rounded-2xl border border-dashed border-border flex flex-col items-center justify-center text-muted-foreground text-center">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
                    <Settings size={32} className="text-muted-foreground opacity-50 animate-spin-slow" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Module Under Construction</h3>
                  <p className="text-sm max-w-md leading-relaxed">
                    The '{activeSection}' view components are outlined in the PRD (like Course Management or Student Roster) and will render here.
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
