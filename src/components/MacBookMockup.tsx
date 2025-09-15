import { motion } from "framer-motion";

interface MacBookMockupProps {
  children: React.ReactNode;
  className?: string;
}

const MacBookMockup = ({ children, className = "" }: MacBookMockupProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
       {/* MacBook Base */}
       <div className="relative" style={{ perspective: '1000px' }}>
         {/* MacBook Lid */}
         <div className="relative" style={{ transform: 'rotateX(15deg) rotateY(-2deg)' }}>
           {/* Outer Bezel */}
           <div className="relative bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 p-3 rounded-t-2xl shadow-2xl border border-slate-300">
             {/* Inner Screen Area */}
             <div className="relative bg-black p-1 rounded-lg overflow-hidden">
               {/* Screen Content */}
               <div className="relative bg-black rounded overflow-hidden aspect-[16/10] min-h-[200px]">
                 {/* Screen Content */}
                 <div className="w-full h-full overflow-hidden rounded bg-gradient-to-b from-background to-muted/20">
                   {children}
                 </div>
                 
                 {/* Screen Reflection */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
               </div>
             </div>
             
             {/* Apple Logo */}
             <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 opacity-30">
               <div className="w-full h-full bg-gradient-to-b from-slate-200 to-slate-400 rounded-full"></div>
             </div>
           </div>
         </div>
         
         {/* MacBook Base/Keyboard */}
         <div className="relative bg-gradient-to-b from-slate-400 via-slate-500 to-slate-600 p-3 rounded-b-3xl shadow-2xl -mt-1">
           {/* Keyboard Area */}
           <div className="bg-slate-700 rounded-lg p-4 mb-3">
             {/* Keyboard Keys Grid */}
             <div className="grid grid-cols-12 gap-0.5">
               {Array.from({ length: 48 }).map((_, i) => (
                 <div key={i} className="bg-slate-600 rounded w-1.5 h-1.5"></div>
               ))}
             </div>
           </div>
           
           {/* Trackpad */}
           <div className="mx-auto w-16 h-10 bg-slate-600 rounded-lg shadow-inner border border-slate-500"></div>
         </div>
         
         {/* Base Shadow */}
         <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-72 h-16 bg-black/30 rounded-full blur-2xl"></div>
       </div>
    </motion.div>
  );
};

export default MacBookMockup;