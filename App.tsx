
import React, { useState, useEffect } from 'react';
import { ViewMode } from './types';
import { NormalView } from './components/NormalView';
import { WindowsView } from './components/WindowsView';
import { JourneyView } from './components/JourneyView';
import { ViewSwitcher } from './components/ViewSwitcher';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('normal');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme Init
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Theme Toggle Effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Load View Mode
  useEffect(() => {
    const saved = localStorage.getItem('viewMode') as ViewMode;
    if (saved && saved !== 'winxp') {
      setViewMode(saved);
    }
  }, []);

  // Save View Mode
  const handleSetView = (mode: ViewMode) => {
    setViewMode(mode);
    if (mode !== 'winxp') {
      localStorage.setItem('viewMode', mode);
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <ViewSwitcher 
        current={viewMode} 
        set={handleSetView} 
        isDark={isDarkMode} 
        toggleTheme={() => setIsDarkMode(!isDarkMode)} 
      />

      <AnimatePresence mode="wait">
        {viewMode === 'normal' && (
          <motion.div 
            key="normal"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NormalView />
          </motion.div>
        )}

        {viewMode === 'winxp' && (
          <motion.div 
            key="winxp"
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40"
          >
            <WindowsView onExit={() => handleSetView('normal')} />
          </motion.div>
        )}

        {viewMode === 'journey' && (
          <motion.div 
            key="journey"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            <JourneyView />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
