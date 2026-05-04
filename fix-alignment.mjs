import fs from 'fs';

const files = [
  'src/pages/TenantAdminSettings.tsx',
  'src/pages/TenantAdminDashboard.tsx',
  'src/pages/TenantAdminUsers.tsx',
  'src/pages/TenantAdminCourses.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/className="space-y-6 max-w-\[1400px\]"/g, 'className="space-y-6 w-full max-w-[1600px]"');
  fs.writeFileSync(file, content);
});

console.log('Update layout classes applied.');
