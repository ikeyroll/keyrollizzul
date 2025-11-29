
import React from 'react';
import { ViewMode } from '../types';
import { Layout, Monitor, Map, Sun, Moon } from 'lucide-react';

interface SwitcherProps {
  current: ViewMode;
  set: (m: ViewMode) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const ViewSwitcher = ({ current, set, isDark, toggleTheme }: SwitcherProps) => {
  // Hide switcher in XP mode to ensure full immersion
  if (current === 'winxp') return null;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center items-center px-4 pointer-events-none">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border border-slate-200 dark:border-slate-700 p-1.5 rounded-full flex gap-1 pointer-events-auto">
        
        <button
          onClick={() => set('normal')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            current === 'normal' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Layout size={16} /> <span className="hidden sm:inline">Normal</span>
        </button>

        <button
          onClick={() => set('winxp')}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Monitor size={16} /> <span className="hidden sm:inline">Windows XP</span>
        </button>

        <button
          onClick={() => set('journey')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            current === 'journey' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Map size={16} /> <span className="hidden sm:inline">Journey</span>
        </button>

        <div className="w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>

        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

      </div>
    </div>
  );
};
