import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, Flag, LayoutTemplate, BookOpen, GraduationCap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const enrollmentData = [
  { course: 'Advanced Mathematics', enrolled: 120 },
  { course: 'Physics 101', enrolled: 98 },
  { course: 'Computer Science', enrolled: 156 },
  { course: 'World History', enrolled: 82 },
  { course: 'Literature', enrolled: 65 },
];

const activityData = [
  { day: 'Mon', active: 300 },
  { day: 'Tue', active: 450 },
  { day: 'Wed', active: 600 },
  { day: 'Thu', active: 550 },
  { day: 'Fri', active: 400 },
  { day: 'Sat', active: 150 },
  { day: 'Sun', active: 200 },
];

export default function TenantAdminDashboard() {
  const [users, setUsers] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/tenant/analytics').then(r => r.json()),
      fetch('/api/tenant/users').then(r => r.json())
    ]).then(([analyticsData, usersData]) => {
      setAnalytics(analyticsData.data);
      
      const storedUsers = localStorage.getItem('mentora_tenant_users');
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      } else {
        setUsers(usersData.data);
        localStorage.setItem('mentora_tenant_users', JSON.stringify(usersData.data));
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="animate-pulse space-y-4">
    <div className="h-8 bg-slate-200 rounded w-1/4"></div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[1,2,3,4].map(i => <div key={i} className="h-32 bg-slate-200 rounded border-2 border-slate-300 border-dashed"></div>)}
    </div>
  </div>;

  return (
    <div className="space-y-6 w-full max-w-[1600px]">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Organization Command Center</h1>
          <p className="text-slate-700 text-sm font-bold mt-1">Manage your institution's sandbox, branding, and users.</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-emerald-100 text-emerald-800 font-bold border-2 border-emerald-300 px-3 py-1 text-xs hover:bg-emerald-200 transition-colors cursor-default">Sandbox Active</Badge>
          <Badge className="bg-indigo-100 text-indigo-800 font-bold border-2 border-indigo-300 px-3 py-1 text-xs font-mono hover:bg-indigo-200 transition-colors cursor-default">ID: ORG-9842</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white border-2 border-slate-200 rounded-2xl flex flex-col shadow-sm hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer group">
          <CardHeader className="p-4 border-b-2 border-slate-100 flex flex-row items-center justify-between bg-slate-50 space-y-0 group-hover:bg-slate-100 transition-colors">
            <CardTitle className="text-sm font-extrabold text-slate-700 mt-0 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-sm"></div>
              Active Users
            </CardTitle>
            <Users className="h-5 w-5 text-slate-500 group-hover:text-indigo-500 transition-colors" />
          </CardHeader>
          <CardContent className="p-5">
            <div className="text-3xl font-black text-slate-900 tracking-tight">{analytics.activeUsers.toLocaleString()}</div>
            <p className="text-xs text-indigo-600 mt-2 uppercase tracking-wider font-extrabold">+5% vs last week</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-slate-200 rounded-2xl flex flex-col shadow-sm hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer group">
          <CardHeader className="p-4 border-b-2 border-slate-100 flex flex-row items-center justify-between bg-slate-50 space-y-0 group-hover:bg-slate-100 transition-colors">
            <CardTitle className="text-sm font-extrabold text-slate-700 mt-0 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm"></div>
              Avg Engagement
            </CardTitle>
            <Clock className="h-5 w-5 text-slate-500 group-hover:text-emerald-500 transition-colors" />
          </CardHeader>
          <CardContent className="p-5">
            <div className="text-3xl font-black text-slate-900 tracking-tight">{analytics.avgEngagementTime}</div>
            <p className="text-xs text-slate-600 mt-2 uppercase tracking-wider font-extrabold">Per session</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-slate-200 rounded-2xl flex flex-col shadow-sm hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer group">
          <CardHeader className="p-4 border-b-2 border-slate-100 flex flex-row items-center justify-between bg-slate-50 space-y-0 group-hover:bg-slate-100 transition-colors">
            <CardTitle className="text-sm font-extrabold text-slate-700 mt-0 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm"></div>
              Flagged Content
            </CardTitle>
            <Flag className="h-5 w-5 text-slate-500 group-hover:text-rose-500 transition-colors" />
          </CardHeader>
          <CardContent className="p-5">
            <div className="text-3xl font-black text-slate-900 tracking-tight">{analytics.flaggedContent}</div>
            <p className="text-xs text-rose-500 mt-2 uppercase tracking-wider font-extrabold">Requires review</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-slate-200 rounded-2xl flex flex-col shadow-sm hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer group">
          <CardHeader className="p-4 border-b-2 border-slate-100 flex flex-row items-center justify-between bg-slate-50 space-y-0 group-hover:bg-slate-100 transition-colors">
            <CardTitle className="text-sm font-extrabold text-slate-700 mt-0 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm"></div>
              Branding
            </CardTitle>
            <LayoutTemplate className="h-5 w-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
          </CardHeader>
          <CardContent className="p-5">
            <div className="text-2xl font-black text-slate-900 tracking-tight leading-none mt-1">Custom Domain</div>
            <p className="text-xs text-indigo-500 mt-3 uppercase tracking-wider font-extrabold">Active</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-2 border-slate-200 rounded-2xl shadow-sm overflow-hidden hover:border-slate-300 transition-colors hover:shadow-md">
          <CardHeader className="p-5 border-b-2 border-slate-100 bg-slate-50">
            <CardTitle className="font-extrabold text-slate-800">Daily Active Learners</CardTitle>
          </CardHeader>
          <CardContent className="p-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} fontWeight={700} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} fontWeight={700} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '2px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 800 }}
                  labelStyle={{ fontWeight: 800, color: '#64748b', marginBottom: '4px' }}
                />
                <Line type="monotone" dataKey="active" stroke="#4f46e5" strokeWidth={4} dot={{ r: 5, fill: '#4f46e5', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8, strokeWidth: 0 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-slate-200 rounded-2xl shadow-sm overflow-hidden hover:border-slate-300 transition-colors hover:shadow-md">
          <CardHeader className="p-5 border-b-2 border-slate-100 bg-slate-50">
            <CardTitle className="font-extrabold text-slate-800">Course Enrollments</CardTitle>
          </CardHeader>
          <CardContent className="p-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={enrollmentData} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                <XAxis type="number" stroke="#64748b" fontSize={12} fontWeight={700} tickLine={false} axisLine={false} />
                <YAxis dataKey="course" type="category" stroke="#475569" fontSize={12} fontWeight={700} tickLine={false} axisLine={false} width={120} />
                <CartesianGrid strokeDasharray="4 4" horizontal={false} stroke="#e2e8f0" />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '2px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 800 }}
                  labelStyle={{ fontWeight: 800, color: '#64748b', marginBottom: '4px' }}
                />
                <Bar dataKey="enrolled" fill="#10b981" radius={[0, 6, 6, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="directory" className="w-full">
        <TabsList className="mb-6 bg-slate-100 p-1.5 border-2 border-slate-200 rounded-xl inline-flex">
          <TabsTrigger value="directory" className="font-bold data-[state=active]:bg-white data-[state=active]:shadow text-sm px-6 py-2 rounded-lg transition-all">User Directory</TabsTrigger>
          <TabsTrigger value="courses" className="font-bold data-[state=active]:bg-white data-[state=active]:shadow text-sm px-6 py-2 rounded-lg transition-all">Top Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="directory" className="m-0 focus-visible:outline-none focus-visible:ring-0">
          <Card className="bg-white border-2 border-slate-200 rounded-2xl flex flex-col shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-slate-50 border-b-2 border-slate-200">
                  <TableRow className="hover:bg-slate-50 border-none">
                    <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs">User</TableHead>
                    <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs">Role</TableHead>
                    <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs">Department</TableHead>
                    <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs text-right pr-6">Last Active</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.slice(0, 5).map((user: any) => (
                    <TableRow key={user.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors group cursor-pointer">
                      <TableCell className="flex items-center gap-4 py-5 pl-6">
                        <Avatar className="h-10 w-10 border-2 border-slate-200 shadow-sm group-hover:scale-105 transition-transform">
                          <AvatarFallback className="text-xs bg-indigo-50 text-indigo-700 font-extrabold">{user.name.slice(0,2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">{user.name}</div>
                          <div className="text-xs font-bold text-slate-600 mt-0.5">{user.email}</div>
                        </div>
                      </TableCell>
                      <TableCell className="py-5">
                        <Badge variant="outline" className={`font-bold border-2 ${user.role === 'Admin' ? 'bg-rose-50 text-rose-700 border-rose-200' : user.role === 'Instructor' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm font-bold text-slate-700 py-5">{user.department}</TableCell>
                      <TableCell className="text-sm font-bold text-slate-600 py-5 text-right pr-6">
                        <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                          <span className={`w-2 h-2 rounded-full ${user?.lastActive?.includes?.('Just now') || user?.lastActive?.includes?.('mins') ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                          {user.lastActive}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="courses" className="m-0 focus-visible:outline-none focus-visible:ring-0">
          <Card className="bg-white border-2 border-slate-200 rounded-2xl flex flex-col shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="divide-y-2 divide-slate-100">
                {analytics.topCourses.map((course: string, i: number) => (
                  <div key={i} className="flex justify-between items-center p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 border-2 border-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-100 transition-all shadow-sm">
                        {i % 2 === 0 ? <BookOpen className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
                      </div>
                      <div>
                        <div className="font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">{course}</div>
                        <div className="text-sm font-bold text-slate-600 mt-1 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {(120 - (i*15))} Students enrolled
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-slate-100 text-slate-700 font-extrabold border-2 border-slate-200 px-3 py-1 text-sm group-hover:bg-white transition-colors">Active</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
