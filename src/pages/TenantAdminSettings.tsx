import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Upload, LayoutTemplate, Palette, Shield, CreditCard } from 'lucide-react';

export default function TenantAdminSettings() {
  return (
    <div className="space-y-6 w-full max-w-[1600px]">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Settings</h1>
          <p className="text-slate-700 text-sm font-bold mt-1">Configure your organizational workspace and preferences.</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="w-full flex flex-col md:flex-row gap-8" orientation="vertical">
        <TabsList className="mb-6 md:mb-0 bg-transparent p-0 border-0 flex-col h-auto w-full md:w-[30%] lg:w-[280px] shrink-0 items-start gap-2 shadow-none overflow-visible">
          <TabsTrigger value="general" className="group w-full justify-start font-extrabold text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm border-2 border-transparent data-[state=active]:border-slate-200 transition-all rounded-xl px-5 py-4">
            <LayoutTemplate className="w-5 h-5 mr-3 group-data-[state=active]:text-primary text-slate-400 group-hover:text-slate-600 transition-colors" /> General
          </TabsTrigger>
          <TabsTrigger value="branding" className="group w-full justify-start font-extrabold text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm border-2 border-transparent data-[state=active]:border-slate-200 transition-all rounded-xl px-5 py-4">
            <Palette className="w-5 h-5 mr-3 group-data-[state=active]:text-primary text-slate-400 group-hover:text-slate-600 transition-colors" /> Branding
          </TabsTrigger>
          <TabsTrigger value="security" className="group w-full justify-start font-extrabold text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm border-2 border-transparent data-[state=active]:border-slate-200 transition-all rounded-xl px-5 py-4">
            <Shield className="w-5 h-5 mr-3 group-data-[state=active]:text-primary text-slate-400 group-hover:text-slate-600 transition-colors" /> Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="group w-full justify-start font-extrabold text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm border-2 border-transparent data-[state=active]:border-slate-200 transition-all rounded-xl px-5 py-4">
            <CreditCard className="w-5 h-5 mr-3 group-data-[state=active]:text-primary text-slate-400 group-hover:text-slate-600 transition-colors" /> Billing
          </TabsTrigger>
        </TabsList>
        
        <div className="flex-1 w-full md:w-[70%] min-w-0">
          <TabsContent value="general" className="m-0 space-y-6 focus-visible:outline-none focus-visible:ring-0">
          <Card className="bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="border-b-2 border-slate-100 bg-slate-50 p-6">
              <CardTitle className="text-xl font-extrabold text-slate-800 tracking-tight">Organization Details</CardTitle>
              <CardDescription className="font-bold text-slate-600">Update your academy name and basic information.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid gap-3 max-w-2xl bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                <Label htmlFor="org-name" className="text-slate-800 font-bold uppercase tracking-wider text-xs">Academy Name</Label>
                <Input id="org-name" defaultValue="Acme Learning Center" className="border-2 border-slate-200 bg-white shadow-sm font-bold h-11 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all" />
              </div>
              <div className="grid gap-3 max-w-2xl bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                <Label htmlFor="contact-email" className="text-slate-800 font-bold uppercase tracking-wider text-xs">Support Contact Email</Label>
                <Input id="contact-email" type="email" defaultValue="support@acmelearning.com" className="border-2 border-slate-200 bg-white shadow-sm font-bold h-11 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all" />
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50 border-t-2 border-slate-100 p-6 flex justify-end">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold h-11 px-8 shadow-sm transition-all hover:scale-[1.02]">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="m-0 space-y-6 focus-visible:outline-none focus-visible:ring-0">
          <Card className="bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="border-b-2 border-slate-100 bg-slate-50 p-6">
              <CardTitle className="text-xl font-extrabold text-slate-800 tracking-tight">Theme & Aesthetics</CardTitle>
              <CardDescription className="font-bold text-slate-600">Customize the look and feel of the learning platform.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="grid gap-6">
                <div>
                  <Label className="text-slate-800 font-bold mb-3 block">Primary Color</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-4 border-white ring-2 ring-indigo-200 bg-indigo-600 shadow-md transition-transform hover:scale-110 cursor-pointer"></div>
                    <Input type="text" defaultValue="#4f46e5" className="w-32 border-2 border-slate-200 font-mono font-bold text-sm h-11 focus:border-primary/50 transition-colors uppercase" />
                  </div>
                </div>
                
                <div className="pt-6 border-t-2 border-slate-100">
                  <Label className="text-slate-800 font-bold mb-4 block">Logo</Label>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center bg-slate-50 text-slate-500 hover:bg-slate-100 hover:border-slate-400 transition-colors cursor-pointer group">
                      <Upload className="w-8 h-8 mb-2 group-hover:text-primary transition-colors" />
                      <span className="text-sm font-bold group-hover:text-slate-700 transition-colors">Upload</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-bold text-slate-700">Recommended size: 512x512px.</p>
                      <p className="text-xs font-bold text-slate-600">Max size 2MB, formats: PNG, JPG.</p>
                      <Button variant="outline" size="sm" className="mt-2 font-bold border-2 h-10 px-6 hover:bg-slate-100 transition-colors">Choose File</Button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <Label className="text-slate-800 font-bold">Custom Domain</Label>
                    <p className="text-sm font-bold text-slate-600 mt-1">Host your academy on your own domain.</p>
                  </div>
                  <Badge className="bg-emerald-50 text-emerald-700 border-2 border-emerald-200 px-4 py-1.5 text-sm font-extrabold shadow-sm">acme.mentora.app</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50 border-t-2 border-slate-100 p-6 flex justify-end">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold h-11 px-8 shadow-sm transition-all hover:scale-[1.02]">Save Branding</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="m-0 space-y-6 focus-visible:outline-none focus-visible:ring-0">
          <Card className="bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="border-b-2 border-slate-100 bg-slate-50 p-6">
              <CardTitle className="text-xl font-extrabold text-slate-800 tracking-tight">Authentication & Access</CardTitle>
              <CardDescription className="font-bold text-slate-600">Manage security policies for your academy.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-between p-4 rounded-xl border-2 border-slate-100 hover:border-slate-200 transition-colors">
                <div className="space-y-1">
                  <Label className="text-base font-extrabold text-slate-800">Require Two-Factor Auth (2FA)</Label>
                  <p className="text-sm font-bold text-slate-600">Force all instructors and admins to use 2FA.</p>
                </div>
                <Switch id="2fa-required" className="data-[state=checked]:bg-indigo-600 scale-110" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl border-2 border-slate-100 hover:border-slate-200 transition-colors">
                <div className="space-y-1">
                  <Label className="text-base font-extrabold text-slate-800">Allow Self-Registration</Label>
                  <p className="text-sm font-bold text-slate-600">Students can create their own accounts.</p>
                </div>
                <Switch id="self-reg" defaultChecked className="data-[state=checked]:bg-emerald-500 scale-110" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="m-0 space-y-6 focus-visible:outline-none focus-visible:ring-0">
          <Card className="bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="border-b-2 border-slate-100 bg-slate-50 p-6">
              <CardTitle className="text-xl font-extrabold text-slate-800 tracking-tight">Subscription & Billing</CardTitle>
              <CardDescription className="font-bold text-slate-600">Manage your current plan and payment methods.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="rounded-xl bg-indigo-50/50 border-2 border-indigo-100 p-6 hover:bg-indigo-50 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-indigo-900 tracking-tight">Professional Plan</h3>
                    <p className="font-bold text-indigo-600 mt-1">₹12/learner/mo</p>
                  </div>
                  <Badge className="bg-indigo-600 text-white border-none font-bold px-3 py-1 self-start sm:self-auto uppercase tracking-wider text-xs">Active Subscription</Badge>
                </div>
                <div className="text-sm text-indigo-800 pb-6 border-b-2 border-indigo-100 mb-6">
                  Next billing date: <strong className="font-extrabold bg-indigo-100 px-2 py-1 rounded">Nov 1, 2026</strong>
                </div>
                <Button className="w-full sm:w-auto bg-white text-indigo-700 border-2 border-indigo-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 font-extrabold h-11 px-8 transition-all">Upgrade Plan</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
