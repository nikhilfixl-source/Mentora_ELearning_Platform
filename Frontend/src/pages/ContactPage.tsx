import React from 'react';
import { motion } from 'motion/react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/30 relative overflow-hidden">
      <SiteHeader />
      
      {/* Dark modern background */}
      <div className="fixed inset-0 -z-10 bg-[#020202]"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>

      <main className="flex-1 pb-32 pt-32">
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Left Column: Info */}
             <div>
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                   <Badge className="bg-white/5 text-neutral-300 border border-white/10 mb-8 py-2 px-4 backdrop-blur-md uppercase tracking-wider text-xs">
                     Get in Touch
                   </Badge>
                </motion.div>
                <motion.h1 
                   initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                   className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter"
                >
                  Let's Upgrade <br/>Your Campus.
                </motion.h1>
                <motion.p 
                   initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                   className="text-xl text-neutral-400 font-light mb-12 leading-relaxed"
                >
                  Speak with our education specialists to see how Mentora can reduce your IT workload and improve student outcomes.
                </motion.p>
                
                <motion.div 
                   initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                   className="space-y-8"
                >
                   <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-primary">
                         <Phone className="w-6 h-6" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-1">Sales & Support</p>
                         <p className="text-xl text-white font-medium">+91 98765 43210</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-primary">
                         <Mail className="w-6 h-6" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-1">Email Us</p>
                         <p className="text-xl text-white font-medium">hello@mentora.in</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-primary">
                         <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-1">Headquarters</p>
                         <p className="text-lg text-white font-medium">HSR Layout, Sector 2<br/><span className="text-neutral-400 font-light text-base">Bengaluru, Karnataka 560102</span></p>
                      </div>
                   </div>
                </motion.div>
             </div>

             {/* Right Column: Form */}
             <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
             >
                <Card className="bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 rounded-[2.5rem] p-8 shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[2.5rem] pointer-events-none"></div>
                  <CardContent className="p-0 relative z-10">
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! We'll be in touch shortly."); }}>
                      <div className="grid grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <Label htmlFor="firstName" className="text-neutral-400">First name</Label>
                           <Input id="firstName" placeholder="Rahul" required className="bg-black/50 border-neutral-800 h-12 focus-visible:ring-primary text-white" />
                         </div>
                         <div className="space-y-2">
                           <Label htmlFor="lastName" className="text-neutral-400">Last name</Label>
                           <Input id="lastName" placeholder="Sharma" required className="bg-black/50 border-neutral-800 h-12 focus-visible:ring-primary text-white" />
                         </div>
                      </div>
                      
                      <div className="space-y-2">
                         <Label htmlFor="email" className="text-neutral-400">Work Email</Label>
                         <Input id="email" type="email" placeholder="rahul@yourinstitute.edu.in" required className="bg-black/50 border-neutral-800 h-12 focus-visible:ring-primary text-white" />
                      </div>
                      
                      <div className="space-y-2">
                         <Label htmlFor="organization" className="text-neutral-400">Institution Name</Label>
                         <Input id="organization" placeholder="e.g. Modern Technology Institute" required className="bg-black/50 border-neutral-800 h-12 focus-visible:ring-primary text-white" />
                      </div>

                      <div className="space-y-2">
                         <Label htmlFor="students" className="text-neutral-400">Total Students</Label>
                         <select id="students" className="w-full bg-black/50 border border-neutral-800 rounded-md h-12 px-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none">
                            <option value="">Select range</option>
                            <option value="1-500">1 - 500</option>
                            <option value="501-2000">501 - 2000</option>
                            <option value="2001-5000">2001 - 5000</option>
                            <option value="5000+">5000+</option>
                         </select>
                      </div>

                      <div className="space-y-2">
                         <Label htmlFor="message" className="text-neutral-400">How can we help?</Label>
                         <Textarea id="message" placeholder="Tell us about your current challenges..." className="bg-black/50 border-neutral-800 min-h-[120px] focus-visible:ring-primary text-white resize-none" />
                      </div>

                      <Button type="submit" size="lg" className="w-full h-14 text-white font-bold tracking-wide shadow-[0_0_20px_rgba(var(--primary),0.3)] bg-primary hover:bg-primary/90 mt-4 rounded-xl">
                        Send Message <Send className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
             </motion.div>

          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
