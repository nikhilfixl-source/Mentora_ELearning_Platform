import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      setOpen(false);
      return;
    }

    const timer = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
          setResults(data.data);
          setOpen(true);
        });
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="hidden sm:flex relative max-w-md w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <Input 
            type="search" 
            placeholder="Search Mentora..." 
            className="w-64 pl-9 bg-slate-50"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-64" onInteractOutside={() => setOpen(false)}>
        {results.length === 0 ? (
          <div className="p-3 text-center text-sm text-slate-500">No results found.</div>
        ) : (
          results.map((result, idx) => (
            <DropdownMenuItem key={idx} className="flex flex-col items-start p-2 cursor-pointer">
              <span className="font-medium text-sm">{result.title}</span>
              <span className="text-xs text-slate-500">{result.type}</span>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
