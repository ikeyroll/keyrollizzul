
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square, FileText, Folder, Monitor, Power, ArrowLeft, Disc, HelpCircle, User } from 'lucide-react';
import { PROJECTS, SKILLS } from '../constants';
import { Project } from '../types';

type XPState = 'confirm' | 'login' | 'welcome' | 'desktop';

interface WindowState {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  content: React.ReactNode;
  icon?: React.ReactNode;
  width?: number;
  height?: number;
}

// Helper to detect mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};

// --- XP Window Component ---
const WindowFrame: React.FC<{ 
  win: WindowState, onClose: () => void, onMinimize: () => void, onFocus: () => void 
}> = ({ win, onClose, onMinimize, onFocus }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      onPointerDown={onFocus}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: win.isMinimized ? 0 : 1, opacity: win.isMinimized ? 0 : 1, y: win.isMinimized ? 500 : 0 }}
      style={{ zIndex: win.zIndex, width: win.width || 600, height: win.height || 400 }}
      className="absolute top-20 left-10 md:left-40 flex flex-col overflow-hidden xp-window-shadow font-tahoma bg-[#ECE9D8] rounded-t-lg"
    >
      {/* Title Bar - XP Blue Gradient */}
      <div 
        className="h-8 bg-xp-header flex items-center justify-between px-2 select-none cursor-default rounded-t-lg shadow-sm"
        onDoubleClick={() => { /* Maximize logic */ }}
      >
        <div className="flex items-center gap-2 text-white text-[13px] font-bold drop-shadow-md">
          {win.icon} <span className="pt-0.5">{win.title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={(e) => { e.stopPropagation(); onMinimize(); }} className="w-5 h-5 bg-[#245EDC] hover:brightness-110 rounded-[3px] flex items-center justify-center text-white border border-white/30 shadow-inner"><Minus size={10} strokeWidth={4} /></button>
          <button className="w-5 h-5 bg-[#245EDC] hover:brightness-110 rounded-[3px] flex items-center justify-center text-white border border-white/30 shadow-inner opacity-60"><Square size={8} strokeWidth={3} /></button>
          <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="w-5 h-5 bg-[#E04238] hover:bg-[#ff5549] rounded-[3px] flex items-center justify-center text-white border border-white/30 shadow-inner"><X size={12} strokeWidth={4} /></button>
        </div>
      </div>
      
      {/* Menu Bar / Toolbar Placeholder */}
      <div className="h-6 bg-[#ECE9D8] border-b border-[#D8D2BD] flex items-center px-2">
         <span className="text-xs text-gray-600 mr-3">File</span>
         <span className="text-xs text-gray-600 mr-3">Edit</span>
         <span className="text-xs text-gray-600 mr-3">View</span>
         <span className="text-xs text-gray-600">Help</span>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white overflow-auto p-4 cursor-default border border-[#D8D2BD] m-1">
        {win.content}
      </div>
    </motion.div>
  );
};

const DesktopIcon = ({ label, icon, onClick }: { label: string, icon: React.ReactNode, onClick: () => void }) => (
  <motion.div 
    drag
    dragMomentum={false}
    onDoubleClick={onClick}
    className="w-24 flex flex-col items-center gap-1 cursor-pointer p-2 border border-transparent hover:bg-[#316AC5]/20 hover:border-[#316AC5]/30 active:bg-[#316AC5]/40 rounded group"
  >
    <div className="w-10 h-10 flex items-center justify-center drop-shadow-xl">
      {icon}
    </div>
    <span className="text-white text-[11px] text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-snug font-tahoma">
      {label}
    </span>
  </motion.div>
);

export const WindowsView = ({ onExit }: { onExit: () => void }) => {
  const isMobile = useIsMobile();
  const [status, setStatus] = useState<XPState>('confirm');
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [nextZ, setNextZ] = useState(10);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  // Content Generators
  const openPdf = () => addWindow({ 
    id: 'cv', 
    title: 'Khairol_Izzul_CV.pdf - Viewer', 
    content: (
      <div className="w-full h-full">
        <iframe 
          src="/documents/Khairol_Izzul_CV.pdf" 
          className="w-full h-full border-0"
          title="CV Viewer"
        >
          Your browser does not support PDFs. Please download the PDF to view it: 
          <a href="/documents/Khairol_Izzul_CV.pdf">Download CV</a>
        </iframe>
      </div>
    ), 
    icon: <FileText size={14} />,
    width: 900,
    height: 700
  });
  
  const openProjects = () => addWindow({ 
    id: 'projects', 
    title: 'My Projects', 
    width: 700,
    icon: <Folder size={14} />,
    content: (
      <div className="grid grid-cols-4 gap-4">
        {PROJECTS.map(p => (
          <div key={p.id} onClick={() => openProjectDetail(p)} className="flex flex-col items-center hover:bg-blue-50 p-2 cursor-pointer group">
            <Folder className="w-12 h-12 text-[#F2C811] fill-[#F2C811] mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-xs text-center leading-tight text-gray-700 group-hover:text-blue-600">{p.title}</span>
          </div>
        ))}
      </div>
    )
  });

  const openProjectDetail = (p: Project) => addWindow({
    id: `proj-${p.id}`,
    title: p.title,
    width: 500,
    height: 500,
    icon: <FileText size={14} />,
    content: (
      <div className="space-y-4 font-tahoma text-sm">
        <h2 className="text-xl font-bold text-gray-800">{p.title}</h2>
        <div className="p-3 bg-[#FFFFE1] border border-[#D8D2BD] rounded flex gap-2">
           <User size={16} className="text-gray-500 mt-0.5" />
           <span><strong>Role:</strong> {p.role}</span>
        </div>
        <p className="whitespace-pre-line leading-relaxed text-gray-800">{p.fullDescription}</p>
        <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
           {p.tags.map(t => <span key={t} className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded border border-blue-200">{t}</span>)}
        </div>
      </div>
    )
  });

  const openSkills = () => addWindow({
    id: 'skills',
    title: 'System Information',
    width: 480,
    icon: <Monitor size={14} />,
    content: (
      <div className="font-tahoma text-xs">
        <div className="flex gap-4 mb-6">
           <Monitor size={48} className="text-blue-500" />
           <div>
              <p className="font-bold text-lg">System:</p>
              <p>Microsoft Windows XP</p>
              <p>Professional</p>
              <p>Version 2025 (Service Pack 3)</p>
           </div>
        </div>
        
        {SKILLS.map(s => (
          <div key={s.id} className="mb-4">
            <strong className="block mb-1 text-gray-800 border-b border-gray-300 pb-0.5">{s.title}</strong>
            <ul className="list-disc pl-5 text-gray-600 mt-1 space-y-0.5">
              {s.skills.map(sk => <li key={sk}>{sk}</li>)}
            </ul>
          </div>
        ))}
      </div>
    )
  });

  const openManual = () => addWindow({
    id: 'manual',
    title: 'User Manual - Notepad',
    width: 450,
    height: 350,
    icon: <FileText size={14} />,
    content: (
      <div className="font-mono text-sm bg-white h-full">
        <p className="mb-4">*** WELCOME TO WINDOWS XP MODE ***</p>
        
        <p className="mb-2">How to navigate:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Double-click desktop icons to open programs.</li>
          <li>Drag windows by the blue title bar.</li>
          <li>Click 'Start' to see the menu.</li>
          <li>Use 'Shut Down' to return to normal portfolio view.</li>
        </ul>

        <p className="mb-2">Tips:</p>
        <ul className="list-disc pl-5 mb-4">
           <li>Check "My Projects" folder for case studies.</li>
           <li>"System Info" lists my technical skills.</li>
        </ul>

        <p>Enjoy the nostalgia!</p>
        <p>- Khairol</p>
      </div>
    )
  });

  // Window Manager Logic
  const addWindow = (win: Partial<WindowState> & { id: string, title: string, content: React.ReactNode }) => {
    setWindows(prev => {
      const exists = prev.find(w => w.id === win.id);
      if (exists) {
        return prev.map(w => w.id === win.id ? { ...w, isMinimized: false, zIndex: nextZ + 1 } : w);
      }
      return [...prev, { isOpen: true, isMinimized: false, zIndex: nextZ + 1, ...win } as WindowState];
    });
    setNextZ(z => z + 1);
  };

  const closeWindow = (id: string) => setWindows(prev => prev.filter(w => w.id !== id));
  
  const focusWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: nextZ + 1, isMinimized: false } : w));
    setNextZ(z => z + 1);
  };

  const toggleMinimize = (id: string) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) return { ...w, isMinimized: !w.isMinimized };
      return w;
    }));
  };

  const handleLogin = () => {
    setStatus('welcome');
    setTimeout(() => {
        setStatus('desktop');
        // Auto open manual on first load
        setTimeout(openManual, 800);
    }, 2000);
  };

  // Mobile Guard
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-8 max-w-sm text-center">
          <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Desktop Only Experience</h2>
          <p className="text-gray-600 mb-2">Windows XP mode is optimized for mouse and keyboard. Please switch back to normal view.</p>
          <p className="text-gray-500 mb-6 text-sm">P.S. If you're using a laptop and still see this message, try expanding your window for a better experience.</p>
          <button onClick={onExit} className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium">Back to Normal View</button>
        </div>
      </div>
    );
  }

  // 1. Warning Modal
  if (status === 'confirm') {
    return (
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-xl p-8 max-w-md text-center shadow-2xl">
          <h2 className="text-2xl font-bold mb-2">Enter Windows XP Mode?</h2>
          <p className="text-gray-600 mb-6">This is an interactive retro simulation. You will be taken to a login screen.</p>
          <div className="flex gap-4">
            <button onClick={onExit} className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
            <button onClick={() => setStatus('login')} className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Start Windows</button>
          </div>
        </motion.div>
      </div>
    );
  }

  // 2. Login Screen
  if (status === 'login') {
      return (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#003399] flex flex-col font-tahoma"
          >
             <div className="h-24 bg-[#003399] border-b-[3px] border-white/20"></div>
             <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#5A7EDC] to-[#003399] relative overflow-hidden">
                {/* Decorative Line */}
                <div className="absolute top-10 bottom-10 left-1/2 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                
                <div className="flex w-full max-w-3xl items-center">
                   {/* Left Side */}
                   <div className="w-1/2 text-right pr-12">
                      <div className="text-white text-5xl font-bold tracking-tighter mb-4 drop-shadow-lg">
                         Windows <span className="text-4xl font-normal italic">xp</span>
                      </div>
                      <p className="text-white/80 text-xl font-medium">To begin, click your user name</p>
                   </div>
                   
                   {/* Right Side */}
                   <div className="w-1/2 pl-12">
                      <button 
                         onClick={handleLogin}
                         className="flex items-center gap-4 p-3 rounded hover:bg-[#F0C344]/20 hover:ring-2 ring-white/30 transition-all group w-64"
                      >
                         <div className="w-16 h-16 bg-yellow-400 rounded border-4 border-[#F0C344] flex items-center justify-center shadow-lg group-hover:brightness-110">
                            <User size={32} className="text-white" />
                         </div>
                         <div className="text-left">
                            <div className="text-white text-xl font-bold">Khairol</div>
                            <div className="text-blue-200 text-sm">Project Manager</div>
                         </div>
                      </button>
                   </div>
                </div>

                <div className="absolute bottom-10 left-10 flex gap-4">
                    <button onClick={onExit} className="flex flex-col items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-b from-red-400 to-red-600 rounded flex items-center justify-center shadow-lg group-hover:brightness-110 border border-white/50">
                            <Power size={18} className="text-white" />
                        </div>
                        <span className="text-white text-sm font-bold shadow-black drop-shadow-md">Turn Off</span>
                    </button>
                </div>
             </div>
             <div className="h-24 bg-[#003399] border-t-[3px] border-white/20"></div>
          </motion.div>
      )
  }

  // 3. Welcome Loading
  if (status === 'welcome') {
      return (
        <div className="fixed inset-0 z-50 bg-[#003399] flex items-center justify-center font-tahoma">
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border-4 border-white/30 border-t-white animate-spin"></div>
                <div className="text-white text-2xl font-bold italic tracking-wide">Welcome</div>
            </div>
        </div>
      )
  }

  // 4. Desktop
  return (
    <div className="fixed inset-0 z-40 bg-[#3B89E7] overflow-hidden select-none font-tahoma">
      {/* Bliss-ish Background is handled by CSS class or style */}
      <div className="absolute inset-0 bg-xp-bliss"></div>
      
      {/* Rolling Hills (CSS Shape approximation) */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#75B837] rounded-tl-[50%_100%] rounded-tr-[50%_30%] transform scale-110 translate-y-10 origin-bottom"></div>

      {/* Desktop Icons Area */}
      <div className="absolute inset-0 p-4 flex flex-col flex-wrap content-start gap-6 pb-12 z-0">
        <DesktopIcon label="My CV.pdf" icon={<FileText className="w-6 h-6 text-white fill-red-500" />} onClick={openPdf} />
        <DesktopIcon label="My Projects" icon={<Folder className="w-8 h-8 text-yellow-400 fill-yellow-400" />} onClick={openProjects} />
        <DesktopIcon label="Keyroll Info" icon={<Monitor className="w-8 h-8 text-blue-200 fill-blue-600" />} onClick={openSkills} />
        <DesktopIcon label="User Manual" icon={<HelpCircle className="w-8 h-8 text-blue-100 fill-blue-500" />} onClick={openManual} />
      </div>

      {/* Windows */}
      <AnimatePresence>
        {windows.map(win => (
          <WindowFrame 
            key={win.id} 
            win={win} 
            onClose={() => closeWindow(win.id)}
            onMinimize={() => toggleMinimize(win.id)}
            onFocus={() => focusWindow(win.id)}
          />
        ))}
      </AnimatePresence>

      {/* Start Menu (XP Style) */}
      <AnimatePresence>
        {startMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-10 left-0 w-80 bg-white rounded-t-lg shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-[#245EDC]"
            style={{ height: '400px' }}
          >
            {/* Header */}
            <div className="h-14 bg-gradient-to-b from-[#245EDC] to-[#3982F5] flex items-center px-3 gap-3">
               <div className="w-10 h-10 bg-yellow-100 rounded border-2 border-white overflow-hidden shadow">
                   <User size={36} className="text-gray-400 mt-1 ml-0.5" />
               </div>
               <span className="text-white font-bold text-lg shadow-black drop-shadow-sm">Khairol</span>
            </div>
            
            {/* Body */}
            <div className="flex-1 flex">
               {/* Left (White) */}
               <div className="w-1/2 bg-white p-2 flex flex-col gap-1">
                  <div className="text-[10px] text-gray-500 font-bold px-1 mb-1">Pinned</div>
                  <button onClick={() => { openProjects(); setStartMenuOpen(false); }} className="flex items-center gap-2 p-1.5 hover:bg-[#2F71CD] hover:text-white rounded transition-colors text-left group">
                      <Folder size={20} className="text-yellow-500 fill-yellow-500" />
                      <div className="flex flex-col">
                         <span className="text-sm font-bold">Projects</span>
                         <span className="text-[10px] text-gray-400 group-hover:text-blue-100">My portfolio</span>
                      </div>
                  </button>
                  <button onClick={() => { openSkills(); setStartMenuOpen(false); }} className="flex items-center gap-2 p-1.5 hover:bg-[#2F71CD] hover:text-white rounded transition-colors text-left group">
                      <Monitor size={20} className="text-blue-600" />
                      <div className="flex flex-col">
                         <span className="text-sm font-bold">Skills</span>
                         <span className="text-[10px] text-gray-400 group-hover:text-blue-100">System info</span>
                      </div>
                  </button>
                  <div className="my-1 border-t border-gray-200"></div>
                  <button onClick={() => { openManual(); setStartMenuOpen(false); }} className="flex items-center gap-2 p-1.5 hover:bg-[#2F71CD] hover:text-white rounded transition-colors text-left">
                      <HelpCircle size={18} className="text-blue-400" />
                      <span className="text-xs">User Manual</span>
                  </button>
               </div>
               
               {/* Right (Blue) */}
               <div className="w-1/2 bg-[#D3E5FA] border-l border-[#95BDEE] p-2 flex flex-col text-[#18396D]">
                  <button className="flex items-center gap-2 p-1 hover:bg-[#2F71CD] hover:text-white rounded mb-1">
                     <span className="text-xs font-bold">My Documents</span>
                  </button>
                  <button className="flex items-center gap-2 p-1 hover:bg-[#2F71CD] hover:text-white rounded mb-1">
                     <span className="text-xs font-bold">My Recent Documents</span>
                  </button>
                  <button className="flex items-center gap-2 p-1 hover:bg-[#2F71CD] hover:text-white rounded mb-1">
                     <span className="text-xs font-bold">My Pictures</span>
                  </button>
                  <button className="flex items-center gap-2 p-1 hover:bg-[#2F71CD] hover:text-white rounded mb-1">
                     <span className="text-xs font-bold">My Music</span>
                  </button>
               </div>
            </div>

            {/* Footer */}
            <div className="h-10 bg-gradient-to-b from-[#3882F0] to-[#245EDC] flex items-center justify-end px-3 gap-3">
               <button onClick={onExit} className="flex items-center gap-1.5 text-white hover:brightness-110">
                  <div className="bg-[#E99400] p-1 rounded-sm shadow-sm border border-white/30"><Power size={12}/></div>
                  <span className="text-xs">Log Off</span>
               </button>
               <button onClick={onExit} className="flex items-center gap-1.5 text-white hover:brightness-110">
                  <div className="bg-[#D22D22] p-1 rounded-sm shadow-sm border border-white/30"><Power size={12}/></div>
                  <span className="text-xs">Turn Off Computer</span>
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-xp-taskbar flex items-center z-50 border-t-2 border-[#3781ED] shadow-md">
        {/* Start Button */}
        <button 
          onClick={() => setStartMenuOpen(!startMenuOpen)}
          className={`h-full px-2 pl-0 flex items-center transition-all ${startMenuOpen ? 'brightness-90' : 'hover:brightness-110'}`}
        >
          <div className="h-[90%] w-24 bg-gradient-to-b from-[#388E3C] to-[#2E7D32] rounded-r-2xl rounded-tl-lg ml-0 flex items-center justify-center gap-1 border-r-2 border-b-2 border-[#1B5E20] shadow-[inset_1px_1px_0_rgba(255,255,255,0.4)]">
             <div className="grid grid-cols-2 gap-[1px] transform rotate-12">
                <div className="w-1 h-1 bg-[#F35325]"></div><div className="w-1 h-1 bg-[#81BC06]"></div>
                <div className="w-1 h-1 bg-[#05A6F0]"></div><div className="w-1 h-1 bg-[#FFBA08]"></div>
             </div>
             <span className="text-white font-bold italic text-lg shadow-black drop-shadow-sm pr-1 font-sans">start</span>
          </div>
        </button>
        
        <div className="w-[1px] h-[80%] bg-[#18429E] mx-1"></div>

        {/* Quick Launch (Fake) */}
        <div className="flex gap-2 px-2 mr-2">
            <Monitor size={14} className="text-blue-200" />
            <Folder size={14} className="text-yellow-200" />
        </div>
        
        <div className="w-[1px] h-[80%] bg-white/20 mx-1"></div>

        {/* Open Windows List */}
        <div className="flex-1 flex gap-1 overflow-x-auto px-1">
          {windows.map(win => (
            <div 
              key={win.id}
              onClick={() => win.isMinimized ? focusWindow(win.id) : toggleMinimize(win.id)}
              className={`h-[26px] mt-[2px] px-3 min-w-[120px] max-w-[160px] rounded flex items-center gap-2 cursor-pointer transition-colors ${
                  !win.isMinimized 
                  ? 'bg-[#1D4EBF] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)] text-gray-200' 
                  : 'bg-[#3C81F3] hover:bg-[#5FA0FA] shadow-md text-white'
              }`}
            >
              {win.icon}
              <span className="text-xs truncate font-tahoma">{win.title}</span>
            </div>
          ))}
        </div>

        {/* System Tray */}
        <div className="h-full bg-[#1292E4] pl-2 pr-3 flex items-center gap-2 border-l border-[#0F307D] shadow-[inset_1px_0_5px_rgba(0,0,0,0.2)]">
           <ArrowLeft size={14} onClick={onExit} className="text-white cursor-pointer hover:scale-110" title="Back to Normal"/>
           <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-[8px] text-white font-bold border border-white/40">EN</div>
           <span className="text-white text-xs">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  );
};
