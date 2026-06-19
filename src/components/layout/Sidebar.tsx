import { Link, useLocation } from 'react-router-dom';
import { Home, User, PlusCircle, Zap } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Feed', icon: Home },
  { to: '/profile/u1', label: 'Profile', icon: User },
  { to: '/create', label: 'Create Post', icon: PlusCircle },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-60 shrink-0 border-r border-border h-screen sticky top-0 px-4 py-6 flex flex-col gap-8">
      <div className="flex items-center gap-2 px-2">
        <Zap className="w-6 h-6 text-primary" />
        <span className="font-bold text-lg text-zinc-100">DevPulse</span>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-zinc-400 hover:bg-surface hover:text-zinc-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}