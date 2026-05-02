import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, MoreHorizontal, BookOpen, Plus, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';

const INITIAL_MOCK_COURSES = [
  { id: '1', title: 'Advanced React Patterns', instructor: 'Michael Chen', status: 'Published', students: 120, lastUpdated: '2 days ago' },
  { id: '2', title: 'System Design for Interviews', instructor: 'David Smith', status: 'Under Review', students: 0, lastUpdated: '5 hrs ago' },
  { id: '3', title: 'Intro to UI/UX Principles', instructor: 'Jessica Park', status: 'Draft', students: 0, lastUpdated: '1 week ago' },
  { id: '4', title: 'Frontend Tooling Masterclass', instructor: 'Michael Chen', status: 'Published', students: 85, lastUpdated: '3 weeks ago' },
  { id: '5', title: 'Data Structures in Python', instructor: 'Emily White', status: 'Published', students: 210, lastUpdated: '1 month ago' },
];

export default function TenantAdminCourses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [courses, setCourses] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('All');

  useEffect(() => {
    const storedCourses = localStorage.getItem('mentora_tenant_courses');
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    } else {
      setCourses(INITIAL_MOCK_COURSES);
      localStorage.setItem('mentora_tenant_courses', JSON.stringify(INITIAL_MOCK_COURSES));
    }
  }, []);

  const saveCourses = (updatedCourses: any[]) => {
    setCourses(updatedCourses);
    localStorage.setItem('mentora_tenant_courses', JSON.stringify(updatedCourses));
  };

  const handleDeleteCourse = (id: string) => {
    const updatedCourses = courses.filter(c => c.id !== id);
    saveCourses(updatedCourses);
  };

  const filteredCourses = courses.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 w-full max-w-[1600px]">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Course Directory</h1>
          <p className="text-slate-700 text-sm font-bold mt-1">Oversee, review, and manage courses created by your instructors.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-primary text-primary-foreground font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all border-2 border-primary/20 hover:scale-[1.02]">
            <Plus className="h-4 w-4 stroke-[3]" /> Add Blank Course
          </Button>
        </div>
      </div>

      <Card className="bg-white border-2 border-slate-200 rounded-2xl flex flex-col shadow-sm overflow-hidden">
        <CardHeader className="p-4 border-b-2 border-slate-100 bg-slate-50 flex space-y-0 flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="Search courses or instructors..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-2 border-slate-200 shadow-sm font-bold h-11 transition-all focus:border-primary/50"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 border-2 border-slate-200 text-slate-700 w-full sm:w-auto font-bold h-11 hover:bg-slate-100 transition-colors">
                <Filter className="h-4 w-4" /> Filter {statusFilter !== 'All' && `(${statusFilter})`}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 font-bold border-2 border-slate-200">
              <DropdownMenuLabel className="font-extrabold text-xs uppercase text-slate-600">Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked={statusFilter === 'All'} onCheckedChange={() => setStatusFilter('All')} className="font-bold cursor-pointer">
                All Status
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={statusFilter === 'Published'} onCheckedChange={() => setStatusFilter('Published')} className="font-bold cursor-pointer">
                Published
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={statusFilter === 'Under Review'} onCheckedChange={() => setStatusFilter('Under Review')} className="font-bold cursor-pointer">
                Under Review
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={statusFilter === 'Draft'} onCheckedChange={() => setStatusFilter('Draft')} className="font-bold cursor-pointer">
                Draft
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-100/80 border-b-2 border-slate-200">
                <TableRow className="hover:bg-slate-100/80">
                  <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs">Course Name</TableHead>
                  <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs">Instructor</TableHead>
                  <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs">Status</TableHead>
                  <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs">Analytics</TableHead>
                  <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-12">
                      <div className="flex flex-col items-center justify-center">
                        <BookOpen className="h-12 w-12 text-slate-300 mb-4" />
                        <h3 className="text-lg font-bold text-slate-700">No courses found.</h3>
                        <p className="text-slate-600 font-bold mt-1">Try adjusting your search criteria.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredCourses.map(course => (
                    <TableRow key={course.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors group">
                      <TableCell className="py-5">
                        <div className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors">{course.title}</div>
                        <div className="text-xs font-bold text-slate-600 mt-1">Last updated: {course.lastUpdated}</div>
                      </TableCell>
                      <TableCell className="text-sm font-bold text-slate-700 py-5">{course.instructor}</TableCell>
                      <TableCell className="py-5">
                        <Badge variant="outline" className={`font-bold border-2 ${course.status === 'Published' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : course.status === 'Under Review' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                          {course.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm font-bold text-slate-600 py-5">
                        <span className="flex items-center gap-1.5">
                          {course.students} Learners Enrolled
                        </span>
                      </TableCell>
                      <TableCell className="text-right py-5">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                              <MoreHorizontal className="h-5 w-5" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-[180px] font-bold border-2 border-slate-200">
                            <DropdownMenuLabel className="font-extrabold text-xs uppercase text-slate-600">Course Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer font-bold focus:bg-slate-100 focus:text-slate-900">
                              <ExternalLink className="mr-2 h-4 w-4" /> View Course
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer font-bold focus:bg-slate-100 focus:text-slate-900">
                              Edit Details
                            </DropdownMenuItem>
                            {course.status === 'Under Review' && (
                              <DropdownMenuItem className="cursor-pointer font-bold text-emerald-600 focus:bg-emerald-50 focus:text-emerald-700">
                                Approve & Publish
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer font-bold text-rose-600 focus:bg-rose-50 focus:text-rose-700" onClick={() => handleDeleteCourse(course.id)}>
                              Delete Course
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="bg-slate-50 border-t border-slate-100 p-4 flex items-center justify-between">
          <p className="text-sm font-bold text-slate-700">Showing <span className="font-extrabold text-slate-900">{filteredCourses.length}</span> of <span className="font-extrabold text-slate-900">{courses.length}</span> courses</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="font-bold border-2 border-slate-200" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="font-bold border-2 border-slate-200" disabled={courses.length <= 10}>Next</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
