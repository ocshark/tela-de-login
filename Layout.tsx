import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Início', path: '/' },
    { icon: User, label: 'Perfil', path: '/profile' },
    { icon: Settings, label: 'Ajustes', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-3 glass-panel border-t border-primary/5 shadow-liquid">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center px-6 py-2 rounded-2xl transition-all duration-300 active:scale-90",
              isActive ? "bg-primary/10 text-primary" : "text-on-surface-variant/60 hover:text-primary"
            )}
          >
            <item.icon className={cn("w-6 h-6 mb-1", isActive && "fill-current")} />
            <span className="text-[11px] font-bold tracking-wide uppercase">{item.label}</span>
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-primary/5 rounded-2xl -z-10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Atmospheric Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10 hidden lg:block">
          <img
            src="https://picsum.photos/seed/liquid/800/800?blur=10"
            alt=""
            className="w-full h-full object-cover rounded-bl-[200px]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 opacity-10 hidden lg:block">
          <img
            src="https://picsum.photos/seed/abstract/800/800?blur=10"
            alt=""
            className="w-full h-full object-cover rounded-tr-[150px]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <main className={cn("relative z-10", !isLoginPage && "pb-32")}>
        {children}
      </main>

      {!isLoginPage && <BottomNav />}
    </div>
  );
}
