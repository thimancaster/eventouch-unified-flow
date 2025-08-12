import React from "react";

interface MacbookMockupProps {
  embedUrl: string;
}

const MacbookMockup: React.FC<MacbookMockupProps> = ({ embedUrl }) => {
  return (
    <div className="relative mx-auto w-full max-w-[860px]">
      {/* Screen + Bezel */}
      <div className="relative mx-auto aspect-[16/10] w-full rounded-[22px] border border-border bg-card shadow-premium">
        {/* Camera dot */}
        <div className="absolute top-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-muted-foreground/50" />

        {/* Screen content */}
        <iframe
          src={embedUrl}
          title="EvenTouch Landing Preview"
          className="absolute inset-0 m-[10px] rounded-[14px] border border-border bg-background"
          loading="lazy"
        />
      </div>

      {/* Base/Keyboard deck */}
      <div className="pointer-events-none mx-auto -mt-1 h-5 w-[94%] rounded-b-[18px] border-t border-border bg-muted/60 shadow-inner" />
      {/* Foot */}
      <div className="pointer-events-none mx-auto mt-1 h-1.5 w-24 rounded-full bg-muted/50" />
    </div>
  );
};

export default MacbookMockup;
