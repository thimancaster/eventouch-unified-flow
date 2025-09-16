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
        y: [0, -8, 0],
        rotateY: [0, 2, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* MacBook Container with perspective */}
      <div className="relative" style={{ perspective: '1200px' }}>
        {/* MacBook Screen */}
        <div 
          className="relative bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 p-3 rounded-t-2xl shadow-2xl"
          style={{ 
            transform: 'rotateX(8deg) rotateY(-5deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Screen Bezel */}
          <div className="relative bg-black p-1 rounded-xl overflow-hidden shadow-inner">
            {/* Actual Screen */}
            <div className="relative bg-black rounded-lg overflow-hidden aspect-[16/10] min-h-[280px]">
              <div className="w-full h-full overflow-hidden rounded-lg bg-gradient-to-br from-background via-background to-muted/30">
                {children}
              </div>
              
              {/* Screen Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/3 to-transparent pointer-events-none rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-white/5 pointer-events-none rounded-lg"></div>
            </div>
          </div>
          
          {/* Apple Logo */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 opacity-30">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-600">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>
        </div>
        
        {/* MacBook Base */}
        <div 
          className="relative bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 px-4 py-3 rounded-b-2xl shadow-2xl -mt-1"
          style={{ 
            transform: 'rotateX(-2deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Keyboard */}
          <div className="bg-gray-800 rounded-lg p-4 mb-3 shadow-inner">
            <div className="grid grid-cols-15 gap-0.5 mb-1">
              {/* Function Keys */}
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={`f-${i}`} className="bg-gray-700 rounded h-1.5 shadow-sm"></div>
              ))}
            </div>
            <div className="grid grid-cols-15 gap-0.5 mb-1">
              {/* Number Row */}
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={`n-${i}`} className="bg-gray-700 rounded h-2 shadow-sm"></div>
              ))}
            </div>
            <div className="grid grid-cols-14 gap-0.5 mb-1">
              {/* QWERTY Row */}
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={`q-${i}`} className="bg-gray-700 rounded h-2 shadow-sm"></div>
              ))}
            </div>
            <div className="grid grid-cols-13 gap-0.5 mb-1">
              {/* ASDF Row */}
              {Array.from({ length: 13 }).map((_, i) => (
                <div key={`a-${i}`} className="bg-gray-700 rounded h-2 shadow-sm"></div>
              ))}
            </div>
            <div className="grid grid-cols-12 gap-0.5">
              {/* ZXCV Row */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`z-${i}`} className="bg-gray-700 rounded h-2 shadow-sm"></div>
              ))}
            </div>
          </div>
          
          {/* Trackpad */}
          <div className="mx-auto w-20 h-12 bg-gray-700 rounded-lg shadow-inner border border-gray-600"></div>
        </div>
        
        {/* Enhanced Shadow */}
        <div 
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-80 h-16 bg-black/30 rounded-full blur-2xl"
          style={{ transform: 'rotateX(90deg) translateZ(-30px)' }}
        ></div>
      </div>
    </motion.div>
  );
};

export default MacBookMockup;