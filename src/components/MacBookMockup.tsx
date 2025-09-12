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
      <div className="relative perspective-1000">
        {/* MacBook Lid */}
        <div className="relative transform rotate-x-12">
          {/* Outer Bezel */}
          <div className="relative bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 p-4 rounded-t-2xl shadow-2xl">
            {/* Inner Screen Area */}
            <div className="relative bg-black p-2 rounded-lg overflow-hidden">
              {/* Screen Content */}
              <div className="relative bg-black rounded overflow-hidden aspect-[16/10]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-10 shadow-lg"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full overflow-hidden rounded">
                  {children}
                </div>
                
                {/* Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            {/* Apple Logo */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 opacity-20">
              <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* MacBook Base/Keyboard */}
        <div className="relative bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 p-4 rounded-b-3xl shadow-2xl -mt-1">
          {/* Keyboard Area */}
          <div className="bg-gray-700 rounded-lg p-6 mb-4">
            {/* Keyboard Keys Grid */}
            <div className="grid grid-cols-14 gap-1">
              {Array.from({ length: 56 }).map((_, i) => (
                <div key={i} className="bg-gray-600 rounded w-2 h-2"></div>
              ))}
            </div>
          </div>
          
          {/* Trackpad */}
          <div className="mx-auto w-20 h-12 bg-gray-600 rounded-lg shadow-inner"></div>
        </div>
        
        {/* Base Shadow */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-80 h-20 bg-black/20 rounded-full blur-2xl"></div>
      </div>
    </motion.div>
  );
};

export default MacBookMockup;