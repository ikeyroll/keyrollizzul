import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JOURNEY_STATIONS } from '../constants';
import { Station } from '../types';
import { School, Code, Rocket, Award, Users, MapPin } from 'lucide-react';

const icons = {
  school: School,
  code: Code,
  rocket: Rocket,
  award: Award,
  users: Users
};

export const JourneyView = () => {
  const [activeStation, setActiveStation] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-2xl mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-800 dark:text-white">My Journey Map</h2>
        
        {/* The Line */}
        <div className="absolute left-[28px] md:left-1/2 top-20 bottom-10 w-1 md:-ml-0.5 bg-slate-300 dark:bg-slate-700 rounded-full">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-full bg-blue-500 rounded-full origin-top"
            />
        </div>

        {/* Stations */}
        <div className="space-y-16">
          {JOURNEY_STATIONS.map((station, index) => {
            const Icon = icons[station.iconType];
            const isLeft = index % 2 === 0;
            const isOpen = activeStation === station.id;

            return (
              <div key={station.id} className={`relative flex items-center md:justify-center ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Node on the line */}
                <motion.button
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                  viewport={{ once: true }}
                  onClick={() => setActiveStation(isOpen ? null : station.id)}
                  className={`absolute left-0 md:left-1/2 md:-ml-4 z-10 w-14 h-14 md:w-8 md:h-8 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-600 scale-125' : 'bg-slate-400 hover:bg-blue-400'}`}
                >
                  <span className="md:hidden text-white"><Icon size={20} /></span>
                </motion.button>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`ml-20 md:ml-0 md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8 md:text-left'}`}
                >
                  <div 
                    className={`cursor-pointer group ${isOpen ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                    onClick={() => setActiveStation(isOpen ? null : station.id)}
                  >
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm block mb-1">{station.year}</span>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">{station.title}</h3>
                    <p className="text-slate-500 text-sm">{station.subtitle}</p>
                  </div>

                  {/* Expanded Detail */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
                      >
                        <div className="p-4">
                           <ul className={`space-y-2 text-sm text-slate-600 dark:text-slate-300 ${isLeft ? 'md:text-right' : ''}`}>
                             {station.points.map((pt, i) => (
                               <li key={i} className="flex items-center gap-2 md:justify-end">
                                 {!isLeft && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 md:hidden"></span>}
                                 {pt}
                                 {isLeft && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 hidden md:inline-block"></span>}
                               </li>
                             ))}
                           </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
            <p className="text-slate-500">End of current line. Next station: <span className="text-blue-600 font-bold">Your Team?</span></p>
        </div>

      </div>
    </div>
  );
};
