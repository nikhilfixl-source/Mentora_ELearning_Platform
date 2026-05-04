import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Notifications() {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/notifications')
      .then(res => res.json())
      .then(data => {
        setNotifications(data.data);
      });
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative ml-2">
          <Bell className="h-5 w-5 text-slate-600" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-sm text-slate-500">No notifications.</div>
        ) : (
          notifications.map(notification => (
            <DropdownMenuItem key={notification.id} className="items-start flex flex-col p-3">
              <div className="flex w-full justify-between items-center mb-1">
                <span className={`font-semibold text-sm ${!notification.read ? 'text-slate-900' : 'text-slate-500'}`}>
                  {notification.title}
                </span>
                <span className="text-xs text-slate-400">{notification.time}</span>
              </div>
              <p className="text-sm text-slate-600 line-clamp-2">{notification.message}</p>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
