import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, UserPlus, Filter, MoreHorizontal, Upload, FileUp, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const INITIAL_MOCK_USERS = [
  { id: '1', name: 'Sarah Jenkins', email: 'sarah@example.com', role: 'Admin', department: 'Operations', lastActive: '2 mins ago' },
  { id: '2', name: 'Michael Chen', email: 'm.chen@example.com', role: 'Instructor', department: 'Engineering', lastActive: '1 hr ago' },
  { id: '3', name: 'Jessica Park', email: 'jpark@example.com', role: 'Student', department: 'Product', lastActive: '3 hrs ago' },
  { id: '4', name: 'David Smith', email: 'dsmith@example.com', role: 'Instructor', department: 'Design', lastActive: '5 hrs ago' },
  { id: '5', name: 'Emily White', email: 'emily.w@example.com', role: 'Student', department: 'Engineering', lastActive: '1 day ago' },
  { id: '6', name: 'Alex Johnson', email: 'alex.j@example.com', role: 'Student', department: 'Operations', lastActive: '2 days ago' },
];

export default function TenantAdminUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<any[]>([]);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);

  const [roleFilter, setRoleFilter] = useState<string>('All');

  // Form states
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState('Student');
  const [newDepartment, setNewDepartment] = useState('');

  useEffect(() => {
    const storedUsers = localStorage.getItem('mentora_tenant_users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      setUsers(INITIAL_MOCK_USERS);
      localStorage.setItem('mentora_tenant_users', JSON.stringify(INITIAL_MOCK_USERS));
    }
  }, []);

  const saveUsers = (updatedUsers: any[]) => {
    setUsers(updatedUsers);
    localStorage.setItem('mentora_tenant_users', JSON.stringify(updatedUsers));
  };

  const handleAddUser = () => {
    if (!newName || !newEmail || !newDepartment) return;
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: newName,
      email: newEmail,
      role: newRole,
      department: newDepartment,
      lastActive: 'Just now'
    };
    saveUsers([newUser, ...users]);
    setIsAddUserOpen(false);
    resetForm();
  };

  const handleEditUser = () => {
    if (!editingUser || !newName || !newEmail || !newDepartment) return;
    const updatedUsers = users.map(u => u.id === editingUser.id ? {
      ...u,
      name: newName,
      email: newEmail,
      role: newRole,
      department: newDepartment
    } : u);
    saveUsers(updatedUsers);
    setIsEditUserOpen(false);
    resetForm();
  };

  const handleDeleteUser = (id: string) => {
    const updatedUsers = users.filter(u => u.id !== id);
    saveUsers(updatedUsers);
  };

  const openEditModal = (user: any) => {
    setEditingUser(user);
    setNewName(user.name);
    setNewEmail(user.email);
    setNewRole(user.role);
    setNewDepartment(user.department);
    setIsEditUserOpen(true);
  };

  const resetForm = () => {
    setNewName('');
    setNewEmail('');
    setNewRole('Student');
    setNewDepartment('');
    setEditingUser(null);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'All' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6 w-full max-w-[1600px]">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">User Management</h1>
          <p className="text-slate-700 text-sm font-bold mt-1">Manage instructors, students, and administrators with granular control.</p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={isAddUserOpen} onOpenChange={(open) => { setIsAddUserOpen(open); if(!open) resetForm(); }}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-primary-foreground font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all border-2 border-primary/20 hover:scale-[1.02]">
                <UserPlus className="h-4 w-4 stroke-[3]" /> Add User
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-extrabold">Add New User</DialogTitle>
                <DialogDescription className="font-bold text-slate-600">
                  Create a new user manually or upload a CSV for mass imports.
                </DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="manual" className="w-full mt-4">
                <TabsList className="grid w-full grid-cols-2 mb-4 bg-slate-100 p-1 border-2 border-slate-200">
                  <TabsTrigger value="manual" className="font-bold data-[state=active]:shadow-sm">Manual Entry</TabsTrigger>
                  <TabsTrigger value="csv" className="font-bold data-[state=active]:shadow-sm">CSV Bulk Upload</TabsTrigger>
                </TabsList>
                
                <TabsContent value="manual" className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="font-bold">Full Name</Label>
                      <Input id="name" value={newName} onChange={e => setNewName(e.target.value)} placeholder="e.g. John Doe" className="border-2 font-bold" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="font-bold">Email Address</Label>
                      <Input id="email" type="email" value={newEmail} onChange={e => setNewEmail(e.target.value)} placeholder="e.g. john@example.com" className="border-2 font-bold" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="role" className="font-bold">Role</Label>
                      <Select value={newRole} onValueChange={setNewRole}>
                        <SelectTrigger className="border-2 font-bold">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent className="font-bold">
                          <SelectItem value="Admin">Admin</SelectItem>
                          <SelectItem value="Instructor">Instructor</SelectItem>
                          <SelectItem value="Student">Student</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="department" className="font-bold">Department / Cohort</Label>
                      <Input id="department" value={newDepartment} onChange={e => setNewDepartment(e.target.value)} placeholder="e.g. Engineering" className="border-2 font-bold" />
                    </div>
                  </div>
                  <DialogFooter className="mt-6">
                    <Button variant="outline" onClick={() => setIsAddUserOpen(false)} className="font-bold border-2">Cancel</Button>
                    <Button onClick={handleAddUser} className="font-bold">Create User</Button>
                  </DialogFooter>
                </TabsContent>
                
                <TabsContent value="csv">
                  <div className="border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border-2 border-slate-200">
                      <FileUp className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-extrabold text-lg mb-1">Click to upload CSV</h3>
                    <p className="text-sm font-bold text-slate-600 mb-6">Must contain Name, Email, Role, Department columns.</p>
                    <Button variant="outline" className="font-bold border-2">Browse Files</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>

          {/* Edit User Dialog */}
          <Dialog open={isEditUserOpen} onOpenChange={(open) => { setIsEditUserOpen(open); if(!open) resetForm(); }}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-extrabold">Edit User</DialogTitle>
                <DialogDescription className="font-bold text-slate-600">
                  Update user information and access level.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-name" className="font-bold">Full Name</Label>
                  <Input id="edit-name" value={newName} onChange={e => setNewName(e.target.value)} className="border-2 font-bold" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-email" className="font-bold">Email Address</Label>
                  <Input id="edit-email" type="email" value={newEmail} onChange={e => setNewEmail(e.target.value)} className="border-2 font-bold" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-role" className="font-bold">Role</Label>
                  <Select value={newRole} onValueChange={setNewRole}>
                    <SelectTrigger className="border-2 font-bold">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent className="font-bold">
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Instructor">Instructor</SelectItem>
                      <SelectItem value="Student">Student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-department" className="font-bold">Department / Cohort</Label>
                  <Input id="edit-department" value={newDepartment} onChange={e => setNewDepartment(e.target.value)} className="border-2 font-bold" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsEditUserOpen(false)} className="font-bold border-2">Cancel</Button>
                <Button onClick={handleEditUser} className="font-bold">Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

        </div>
      </div>

      <Card className="bg-white border-2 border-slate-200 rounded-2xl flex flex-col shadow-sm overflow-hidden">
        <CardHeader className="p-4 border-b-2 border-slate-100 bg-slate-50 flex space-y-0 flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="Search users..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-2 border-slate-200 shadow-sm font-bold h-11 transition-all focus:border-primary/50"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 border-2 border-slate-200 text-slate-700 w-full sm:w-auto font-bold h-11 hover:bg-slate-100 transition-colors">
                <Filter className="h-4 w-4" /> Filter {roleFilter !== 'All' && `(${roleFilter})`}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 font-bold border-2 border-slate-200">
              <DropdownMenuLabel className="font-extrabold text-xs uppercase text-slate-600">Filter by Role</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked={roleFilter === 'All'} onCheckedChange={() => setRoleFilter('All')} className="font-bold cursor-pointer">
                All Roles
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={roleFilter === 'Admin'} onCheckedChange={() => setRoleFilter('Admin')} className="font-bold cursor-pointer">
                Admins
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={roleFilter === 'Instructor'} onCheckedChange={() => setRoleFilter('Instructor')} className="font-bold cursor-pointer">
                Instructors
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={roleFilter === 'Student'} onCheckedChange={() => setRoleFilter('Student')} className="font-bold cursor-pointer">
                Students
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-100/80 border-b-2 border-slate-200">
                <TableRow className="hover:bg-slate-100/80">
                  <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs">User</TableHead>
                  <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs">Role</TableHead>
                  <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs">Department</TableHead>
                  <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs">Last Active</TableHead>
                  <TableHead className="py-5 font-extrabold text-slate-700 uppercase tracking-wider text-xs text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-12">
                      <div className="flex flex-col items-center justify-center">
                        <Users className="h-12 w-12 text-slate-300 mb-4" />
                        <h3 className="text-lg font-bold text-slate-700">No users found.</h3>
                        <p className="text-slate-600 font-bold mt-1">Try adjusting your search criteria.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map(user => (
                    <TableRow key={user.id} className="hover:bg-slate-50 border-b border-slate-100 transition-colors group">
                      <TableCell className="flex items-center gap-4 py-5">
                        <Avatar className="h-10 w-10 border-2 border-slate-200 shadow-sm group-hover:scale-105 transition-transform">
                          <AvatarFallback className="text-xs bg-primary/10 text-primary font-extrabold">{user.name.slice(0,2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold text-sm text-slate-900">{user.name}</div>
                          <div className="text-xs font-bold text-slate-600 mt-0.5">{user.email}</div>
                        </div>
                      </TableCell>
                      <TableCell className="py-5">
                        <Badge variant="outline" className={`font-bold border-2 ${user.role === 'Admin' ? 'bg-rose-50 text-rose-700 border-rose-200' : user.role === 'Instructor' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm font-bold text-slate-700 py-5">{user.department}</TableCell>
                      <TableCell className="text-sm font-bold text-slate-600 py-5">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${user.lastActive.includes('Just now') || user.lastActive.includes('mins') ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                          {user.lastActive}
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
                          <DropdownMenuContent align="end" className="w-[160px] font-bold border-2 border-slate-200">
                            <DropdownMenuLabel className="font-extrabold text-xs uppercase text-slate-600">Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer font-bold focus:bg-slate-100 focus:text-slate-900" onClick={() => openEditModal(user)}>
                              Edit User
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer font-bold focus:bg-slate-100 focus:text-slate-900">
                              Reset Password
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer font-bold text-rose-600 focus:bg-rose-50 focus:text-rose-700" onClick={() => handleDeleteUser(user.id)}>
                              Delete User
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
          <p className="text-sm font-bold text-slate-700">Showing <span className="font-extrabold text-slate-900">{filteredUsers.length}</span> of <span className="font-extrabold text-slate-900">{users.length}</span> users</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="font-bold border-2 border-slate-200" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="font-bold border-2 border-slate-200" disabled={users.length <= 10}>Next</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

