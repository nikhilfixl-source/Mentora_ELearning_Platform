import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  const mockApiDelay = (ms: number) => new Promise(res => setTimeout(res, ms));

  // 1. Super Admin (Mentora Mission Control)
  app.get('/api/super/tenants', async (req, res) => {
    await mockApiDelay(500);
    res.json({
      status: 'ok',
      data: [
        { id: 't_1', name: 'IIT Delhi', users: 15400, plan: 'Enterprise', status: 'active', region: 'India' },
        { id: 't_2', name: 'Stanford University', users: 8200, plan: 'Enterprise', status: 'active', region: 'US' },
        { id: 't_3', name: 'Acme Corp L&D', users: 1200, plan: 'Professional', status: 'active', region: 'Europe' },
      ]
    });
  });

  app.get('/api/super/metrics', async (req, res) => {
    await mockApiDelay(400);
    res.json({
      status: 'ok',
      data: {
        activeTenants: 142,
        totalLearners: 1250000,
        aiTutoringHours: 840500,
        platformUptime: 99.98,
        revenue: '₹4.5M'
      }
    });
  });

  // 2. Tenant Admin (Organization Command Center)
  app.get('/api/tenant/users', async (req, res) => {
    await mockApiDelay(500);
    res.json({
      status: 'ok',
      data: [
        { id: 'u_1', name: 'Rahul Sharma', email: 'rahul@iit.ac.in', role: 'Student', department: 'Computer Science', lastActive: '2 mins ago' },
        { id: 'u_2', name: 'Dr. Anita Desai', email: 'anita.d@iit.ac.in', role: 'Instructor', department: 'Electrical Eng', lastActive: '1 hr ago' },
        { id: 'u_3', name: 'Priya Patel', email: 'priya.p@iit.ac.in', role: 'Student', department: 'Mechanical Eng', lastActive: '5 hours ago' },
      ]
    });
  });

  app.get('/api/tenant/analytics', async (req, res) => {
    await mockApiDelay(600);
    res.json({
      status: 'ok',
      data: {
        activeUsers: 8420,
        avgEngagementTime: '2h 15m',
        topCourses: ['Data Structures AI Accelerated', 'VLSI Design Lab'],
        flaggedContent: 2
      }
    });
  });

  app.get('/api/search', async (req, res) => {
    await mockApiDelay(300);
    const q = req.query.q as string;
    res.json({
      status: 'ok',
      data: [
        { title: `Result for ${q || 'Empty'} 1`, type: 'Course', url: '#' },
        { title: `Result for ${q || 'Empty'} 2`, type: 'User', url: '#' },
      ]
    });
  });

  app.get('/api/notifications', async (req, res) => {
    await mockApiDelay(400);
    res.json({
      status: 'ok',
      data: [
        { id: 'n1', title: 'System Update', message: 'Mentora v2.1 deployed successfully.', read: false, time: '10m ago' },
        { id: 'n2', title: 'New Tenant Provisioned', message: 'NIT Trichy workspace created in 42s.', read: false, time: '1h ago' },
        { id: 'n3', title: 'High AI Usage Alert', message: 'Tenant Stanford usage spike detected.', read: true, time: '1d ago' },
      ]
    });
  });

  // 3. Learning Experience (Student/Instructor)
  app.get('/api/learning/dashboard', async (req, res) => {
    await mockApiDelay(500);
    res.json({
      status: 'ok',
      data: {
        upcomingClasses: [
          { id: 'c_1', title: 'Advanced Cloud Architecture', time: '10:00 AM', instructor: 'Dr. Smith', type: 'Live' },
          { id: 'c_2', title: 'AI Ethics', time: '2:00 PM', instructor: 'Prof. Miller', type: 'VOD' }
        ],
        recentNotes: [
          { id: 'n_1', title: 'Distributed Systems Lecture 4 - Cornell Notes', generated: 'Yesterday' }
        ],
        progress: 68
      }
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
