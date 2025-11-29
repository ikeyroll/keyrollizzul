import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ExternalLink, ChevronRight, Github, Linkedin, Mail, Phone, Calendar, MapPin, Briefcase } from 'lucide-react';
import { PROJECTS, SKILLS, EXPERIENCE, MY_NAME, MY_ROLE } from '../constants';
import { Project } from '../types';

const SectionHeader = ({ title }: { title: string }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold mb-10 text-center text-slate-800 dark:text-slate-100"
  >
    {title}
  </motion.h2>
);

// Fixed: Explicitly typed as React.FC to allow 'key' prop usage in parent
const ProjectCard: React.FC<{ project: Project; onOpen: (p: Project) => void }> = ({ project, onOpen }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-100 dark:border-slate-700 flex flex-col h-full"
  >
    <div className="h-40 bg-gradient-to-br from-blue-500 to-indigo-600 p-6 flex items-center justify-center">
      <h3 className="text-white text-xl font-bold text-center">{project.title}</h3>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 flex-1">{project.shortDescription}</p>
      <button 
        onClick={() => onOpen(project)}
        className="mt-auto flex items-center justify-center gap-2 w-full py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-white rounded-lg transition-colors font-medium text-sm"
      >
        View Case Study <ChevronRight size={16} />
      </button>
    </div>
  </motion.div>
);

const CaseStudyModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  if (!project) return null;
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{project.role}</p>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              Close
            </button>
          </div>
          
          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            {project.fullDescription.split('\n\n').map((para, i) => {
              const [label, content] = para.includes(':') ? para.split(':') : ['', para];
              if (label && content) {
                return (
                  <div key={i}>
                    <strong className="block text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-1">{label}</strong>
                    <p>{content.trim()}</p>
                  </div>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-end">
             <button onClick={onClose} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Close Case Study</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const NormalView = () => {
  const [activeSkillTab, setActiveSkillTab] = useState('project');
  const [projectFilter, setProjectFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === projectFilter || p.tags.includes(projectFilter));

  const categories = ['All', 'Government', 'Education', 'AI & Data', 'IoT & Hardware', 'Web Apps'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Tech Project Coordinator who turns ideas into <span className="text-blue-600">working systems</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
              I manage software, AI and IoT projects for Malaysian clients, navigating the journey from first discussion to successful launch.
            </p>
            
            <div className="flex flex-wrap gap-8 mb-10">
              {[
                { label: 'Client Projects', val: '2+ Years' },
                { label: 'Projects Shipped', val: '10+' },
                { label: 'Leadership Roles', val: '8+' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.val}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all"
              >
                View Projects
              </button>
              <a 
                href="/documents/Khairol_Izzul_CV.pdf" 
                download="Khairol_Izzul_CV.pdf"
                className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl font-semibold transition-all flex items-center gap-2"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
             <div className="relative z-10 w-full aspect-square max-w-md mx-auto bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-slate-800 dark:to-slate-700 rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center">
                 <img 
                   src="/images/profile.png" 
                   alt="Profile" 
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.onerror = null;
                     target.alt = 'Profile image failed to load';
                   }}
                 />
             </div>
             {/* Floating Card */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-4 md:-left-10 z-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs"
             >
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Current Status</span>
               </div>
               <p className="font-semibold text-slate-800 dark:text-white text-sm">Open to PM roles in Malaysia & Remote</p>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Technical & Management Skills" />
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {SKILLS.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveSkillTab(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSkillTab === cat.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeSkillTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-800"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {SKILLS.find(s => s.id === activeSkillTab)?.skills.map((skill, i) => (
                <div key={i} className="px-4 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Selected Projects" />
          
          <div className="flex overflow-x-auto pb-4 gap-2 mb-8 md:justify-center no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  projectFilter === cat 
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map(p => (
                <ProjectCard key={p.id} project={p} onOpen={setSelectedProject} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Professional Experience" />
          <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-0 md:pl-10 space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="absolute -left-[41px] md:-left-[51px] top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 shadow-sm"></div>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-1 block">{exp.period}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Let's talk about your next project" />
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300">
                I'm currently looking for opportunities to apply my project management and technical skills. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5" /> khairol.izzul@example.com
                </a>
                <a href="#" className="flex items-center gap-3 text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" /> LinkedIn Profile
                </a>
                <a href="#" className="flex items-center gap-3 text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors">
                  <Github className="w-5 h-5" /> GitHub Profile
                </a>
                <a href="#" className="flex items-center gap-3 text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors">
                  <Phone className="w-5 h-5" /> +60 12 345 6789
                </a>
              </div>
            </div>

            <form className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"></textarea>
              </div>
              <button type="button" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};