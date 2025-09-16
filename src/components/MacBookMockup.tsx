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
        {/* MacBook Screen Lid */}
        <div 
          className="relative bg-gradient-to-b from-gray-500 via-gray-600 to-gray-800 p-4 rounded-t-3xl shadow-2xl"
          style={{ 
            transform: 'rotateX(8deg) rotateY(-3deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Screen Bezel */}
          <div className="relative bg-black p-1.5 rounded-2xl overflow-hidden shadow-inner">
            {/* Actual Screen */}
            <div className="relative bg-black rounded-xl overflow-hidden aspect-[16/10] min-h-[320px]">
              <div className="w-full h-full overflow-hidden rounded-xl bg-gradient-to-br from-background via-background to-muted/20">
                {children}
              </div>
              
              {/* Screen Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/2 to-transparent pointer-events-none rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-white/4 pointer-events-none rounded-xl"></div>
            </div>
          </div>
          
          {/* Apple Logo */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 opacity-20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>
        </div>
        
        {/* MacBook Base */}
        <div 
          className="relative bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 px-6 py-4 rounded-b-3xl shadow-2xl -mt-2"
          style={{ 
            transform: 'rotateX(-1deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Keyboard Area */}
          <div className="bg-gray-900 rounded-xl p-5 mb-4 shadow-inner">
            {/* Function Keys Row */}
            <div className="grid grid-cols-12 gap-1 mb-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`f-${i}`} className="bg-gray-800 rounded h-2 shadow-sm border border-gray-700"></div>
              ))}
            </div>
            
            {/* Number Row */}
            <div className="grid grid-cols-13 gap-1 mb-2">
              {Array.from({ length: 13 }).map((_, i) => (
                <div key={`n-${i}`} className="bg-gray-800 rounded h-2.5 shadow-sm border border-gray-700"></div>
              ))}
            </div>
            
            {/* QWERTY Row */}
            <div className="grid grid-cols-13 gap-1 mb-2">
              {Array.from({ length: 13 }).map((_, i) => (
                <div key={`q-${i}`} className="bg-gray-800 rounded h-2.5 shadow-sm border border-gray-700"></div>
              ))}
            </div>
            
            {/* ASDF Row */}
            <div className="grid grid-cols-12 gap-1 mb-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`a-${i}`} className="bg-gray-800 rounded h-2.5 shadow-sm border border-gray-700"></div>
              ))}
            </div>
            
            {/* ZXCV Row */}
            <div className="grid grid-cols-10 gap-1 mb-3">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={`z-${i}`} className="bg-gray-800 rounded h-2.5 shadow-sm border border-gray-700"></div>
              ))}
            </div>
            
            {/* Spacebar */}
            <div className="flex justify-center">
              <div className="bg-gray-800 rounded h-2.5 w-32 shadow-sm border border-gray-700"></div>
            </div>
          </div>
          
          {/* Trackpad */}
          <div className="mx-auto w-24 h-16 bg-gray-800 rounded-xl shadow-inner border border-gray-700"></div>
        </div>
        
        {/* Enhanced Drop Shadow */}
        <div 
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-20 bg-black/40 rounded-full blur-3xl"
          style={{ transform: 'rotateX(90deg) translateZ(-40px)' }}
        ></div>
      </div>
    </motion.div>
  );
};

export default MacBookMockup;