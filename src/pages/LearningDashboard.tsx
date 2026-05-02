import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, FileText, PlayCircle, Bot, Sparkles, BrainCircuit } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const skillsData = [
  { subject: 'Algorithms', A: 120, fullMark: 150 },
  { subject: 'Data Structures', A: 98, fullMark: 150 },
  { subject: 'System Design', A: 86, fullMark: 150 },
  { subject: 'Databases', A: 99, fullMark: 150 },
  { subject: 'Networking', A: 85, fullMark: 150 },
  { subject: 'OS', A: 65, fullMark: 150 },
];

export default function LearningDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/learning/dashboard')
      .then(r => r.json())
      .then(d => {
        setData(d.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="animate-pulse space-y-4">
    <div className="h-20 bg-slate-200 rounded-lg max-w-6xl mx-auto m-6"></div>
    <div className="h-96 bg-slate-200 rounded-lg max-w-6xl mx-auto m-6"></div>
  </div>;

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
        <div className="relative z-10">
          <Badge className="mb-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 px-2.5 py-0.5 shadow-none">Learning Track: Senior Backend</Badge>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Welcome back, Rahul <span className="inline-block animate-wave">👋</span></h1>
          <p className="text-sm text-slate-500 mt-2 max-w-xl">You've maintained a 14-day streak. Your AI tutor suggests reviewing Graph Algorithms before tomorrow's live class.</p>
        </div>
        <div className="relative z-10 flex gap-3">
          <Button variant="outline" className="border-slate-200 hover:bg-slate-50">View Path</Button>
          <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-md text-white">
            <Bot className="mr-2 h-4 w-4" /> Ask AI Tutor
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <Card className="bg-white border border-slate-200 rounded-2xl flex flex-col shadow-sm overflow-hidden">
            <CardHeader className="p-6 border-b border-slate-100 bg-slate-50/30 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-bold text-slate-800 text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-indigo-500" />
                  Upcoming Classes
                </CardTitle>
                <CardDescription className="text-slate-500 mt-1">Your schedule for the next 48 hours</CardDescription>
              </div>
              <Badge variant="outline" className="text-slate-500 hidden sm:flex">View Calendar</Badge>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {data.upcomingClasses.map((cls: any) => (
                  <div key={cls.id} className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all gap-4">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className={`p-3.5 rounded-xl shrink-0 ${cls.type === 'Live' ? 'bg-rose-50 text-rose-600 border border-rose-100' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                        {cls.type === 'Live' ? <PlayCircle className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={cls.type === 'Live' ? 'bg-rose-500 hover:bg-rose-600 text-white text-[10px] px-1.5 py-0 border-none' : 'bg-blue-500 hover:bg-blue-600 text-white text-[10px] px-1.5 py-0 border-none'}>{cls.type}</Badge>
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{cls.time}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{cls.title}</h4>
                        <div className="text-sm text-slate-500 mt-0.5">Instructor: {cls.instructor}</div>
                      </div>
                    </div>
                    <Button variant={cls.type === 'Live' ? "default" : "outline"} className={`shrink-0 ${cls.type === 'Live' ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm' : ''}`}>
                      {cls.type === 'Live' ? 'Join WebRTC Studio' : 'Watch VOD'}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border border-slate-200 rounded-2xl flex flex-col shadow-sm overflow-hidden">
              <CardHeader className="p-6 border-b border-slate-100 bg-slate-50/30">
                <CardTitle className="font-bold text-slate-800 text-lg flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5 text-emerald-500" />
                  Skill Mastery
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 h-72 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="65%" data={skillsData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11 }} />
                    <Radar name="Rahul" dataKey="A" stroke="#8b5cf6" strokeWidth={2} fill="#8b5cf6" fillOpacity={0.4} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 rounded-2xl flex flex-col shadow-sm overflow-hidden">
              <CardHeader className="p-6 border-b border-slate-100 bg-slate-50/30">
                <CardTitle className="font-bold text-slate-800 text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-500" />
                  AI Generated Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {data.recentNotes.map((note: any) => (
                    <div key={note.id} className="group flex justify-between items-center p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-100 transition-colors">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-slate-800">{note.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{note.generated}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 text-sm">View all notes &rarr;</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>
            <CardHeader className="p-6 border-b border-slate-800">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                Course Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-end justify-between mb-4">
                <div className="text-5xl font-black">{data.progress}<span className="text-2xl text-slate-400 font-bold">%</span></div>
                <Badge className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-emerald-500/20 mb-2">On Track</Badge>
              </div>
              <Progress value={data.progress} className="h-2.5 bg-slate-800 [&>div]:bg-gradient-to-r [&>div]:from-indigo-500 [&>div]:to-violet-500" />
              <div className="mt-6 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <span className="font-semibold text-white">AI Prediction:</span> You are likely to complete "Algorithms II" 3 days early. We've adjusted your spaced repetition queue to focus on Graph Theory.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-orange-200 rounded-2xl flex flex-col shadow-sm overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-400"></div>
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-lg font-bold text-slate-800">Spaced Repetition</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-2">
              <div className="flex items-center gap-4 mt-2">
                <div className="w-16 h-16 rounded-full bg-orange-50 border border-orange-100 flex flex-col items-center justify-center text-orange-600 font-black text-xl">
                  12
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Reviews Due</h4>
                  <p className="text-sm text-slate-500 mt-0.5">Focusing on Dynamic Programming & Trees</p>
                </div>
              </div>
              <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white shadow-sm border-none">
                Start Review Session
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
