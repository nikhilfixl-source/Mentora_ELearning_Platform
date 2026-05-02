import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Activity, Users, Building, AlertCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const growthData = [
  { month: 'Jan', learners: 400000, tenants: 45 },
  { month: 'Feb', learners: 600000, tenants: 78 },
  { month: 'Mar', learners: 850000, tenants: 102 },
  { month: 'Apr', learners: 1050000, tenants: 125 },
  { month: 'May', learners: 1250000, tenants: 142 },
];

export default function SuperAdminDashboard() {
  const [metrics, setMetrics] = useState<any>(null);
  const [tenants, setTenants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/super/metrics').then(r => r.json()),
      fetch('/api/super/tenants').then(r => r.json())
    ]).then(([metricsData, tenantsData]) => {
      setMetrics(metricsData.data);
      setTenants(tenantsData.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="animate-pulse space-y-4">
    <div className="h-8 bg-slate-200 rounded w-1/4"></div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[1,2,3,4].map(i => <div key={i} className="h-32 bg-slate-200 rounded"></div>)}
    </div>
  </div>;

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Mentora Mission Control</h1>
        <p className="text-slate-500 text-sm">Cross-tenant management and organizational health metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white border border-slate-200 rounded-xl flex flex-col shadow-sm overflow-hidden">
          <CardHeader className="p-4 border-b border-slate-100 flex flex-row items-center justify-between bg-slate-50/50 space-y-0">
            <CardTitle className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              Active Tenants
            </CardTitle>
            <Building className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent className="p-5">
            <div className="text-2xl font-bold">{metrics.activeTenants}</div>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">+12 this month</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white border border-slate-200 rounded-xl flex flex-col shadow-sm overflow-hidden">
          <CardHeader className="p-4 border-b border-slate-100 flex flex-row items-center justify-between bg-slate-50/50 space-y-0">
            <CardTitle className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              Total Learners
            </CardTitle>
            <Users className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent className="p-5">
            <div className="text-2xl font-bold text-slate-900">{(metrics.totalLearners / 1000000).toFixed(2)}M</div>
            <p className="text-xs text-emerald-600 mt-1 uppercase tracking-wider font-bold">+18% vs last month</p>
          </CardContent>
        </Card>

        <Card className="bg-white border border-slate-200 rounded-xl flex flex-col shadow-sm overflow-hidden">
          <CardHeader className="p-4 border-b border-slate-100 flex flex-row items-center justify-between bg-slate-50/50 space-y-0">
            <CardTitle className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Platform Uptime
            </CardTitle>
            <Activity className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent className="p-5">
            <div className="text-2xl font-bold text-slate-900">{metrics.platformUptime}%</div>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">All systems operational</p>
          </CardContent>
        </Card>

        <Card className="bg-white border border-slate-200 rounded-xl flex flex-col shadow-sm overflow-hidden">
          <CardHeader className="p-4 border-b border-slate-100 flex flex-row items-center justify-between bg-slate-50/50 space-y-0">
            <CardTitle className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500"></div>
              System Alerts
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent className="p-5">
            <div className="text-2xl font-bold text-slate-900">0</div>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">No active incidents</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <CardHeader className="p-5 border-b border-slate-100 bg-slate-50/50">
            <CardTitle className="font-bold text-slate-700">Platform Growth</CardTitle>
          </CardHeader>
          <CardContent className="p-5 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLearners" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val / 1000000}M`} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: any) => [`${(value / 1000).toFixed(0)}k`, 'Learners']}
                />
                <Area type="monotone" dataKey="learners" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorLearners)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <CardHeader className="p-5 border-b border-slate-100 bg-slate-50/50">
            <CardTitle className="font-bold text-slate-700">New Tenants Activation</CardTitle>
          </CardHeader>
          <CardContent className="p-5 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="tenants" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white border border-slate-200 rounded-xl flex flex-col shadow-sm overflow-hidden">
        <CardHeader className="p-5 border-b border-slate-100 bg-slate-50/50">
          <CardTitle className="font-bold text-slate-700">Recent Tenants</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/80">
              <TableRow className="hover:bg-transparent">
                <TableHead className="py-4 font-semibold text-slate-600">Organization</TableHead>
                <TableHead className="py-4 font-semibold text-slate-600">Plan</TableHead>
                <TableHead className="py-4 font-semibold text-slate-600">Region</TableHead>
                <TableHead className="py-4 font-semibold text-slate-600">Learner Seats</TableHead>
                <TableHead className="py-4 font-semibold text-slate-600">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.map(tenant => (
                <TableRow key={tenant.id} className="hover:bg-slate-50/80 cursor-pointer transition-colors">
                  <TableCell className="font-medium text-slate-900 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">
                        {tenant.name.slice(0, 2).toUpperCase()}
                      </div>
                      {tenant.name}
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge variant="outline" className={`${tenant.plan === 'Enterprise' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                      {tenant.plan}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-600 py-4">{tenant.region}</TableCell>
                  <TableCell className="text-slate-600 py-4 font-mono text-sm">{tenant.users.toLocaleString()}</TableCell>
                  <TableCell className="py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {tenant.status.charAt(0).toUpperCase() + tenant.status.slice(1)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
