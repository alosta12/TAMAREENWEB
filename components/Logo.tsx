import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon'; // 'full' = TAMAREN text + icon, 'icon' = just the 3 bars
  colored?: boolean; // If true, uses brand colors. If false, might be white/black (useful for footer/headers)
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'full', colored = true }) => {
  // ==============================================================================
  // 🟢 IMAGE SETUP
  // ==============================================================================
  
  // Using the direct Imgur link provided to ensure it loads immediately.
  const logoUrl = "https://i.imgur.com/PkLebdo.png"; 
  const iconUrl = "https://i.imgur.com/BaP54Ru.png";
  
  // ==============================================================================

  const [error, setError] = useState(false);
  // We assume custom logo exists if we have a path, but onError will flip this if file is missing
  const hasCustomLogo = !error && logoUrl.length > 0;

  const barColor = colored ? "bg-brand-500" : "bg-current";
  const textColor = colored ? "text-white" : "text-current";

  // The 3-bar icon mark (Fallback if image fails to load)
  const IconMark = () => (
    <div className="flex flex-col justify-center gap-[20%] h-full w-full">
      <div className={`h-[20%] w-full ${barColor} rounded-full`}></div>
      <div className={`h-[20%] w-full ${barColor} rounded-full`}></div>
      <div className={`h-[20%] w-full ${barColor} rounded-full`}></div>
    </div>
  );

  // 1. RENDER ICON VARIANT
  if (variant === 'icon') {
    if (hasCustomLogo) {
      return (
        <img 
          src={iconUrl} 
          alt="Tamareen Icon" 
          className={`object-contain ${className}`} 
          style={{ maxHeight: '100%', maxWidth: '100%' }}
          onError={(e) => {
            setError(true);
            e.currentTarget.style.display = 'none'; // Hide broken image
          }}
        />
      );
    }
    return (
      <div className={`${className}`}>
        <IconMark />
      </div>
    );
  }

  // 2. RENDER FULL LOGO VARIANT
  if (hasCustomLogo) {
    return (
      <img 
        src={logoUrl} 
        alt="Tamareen Logo" 
        className={`object-contain ${className}`} 
        style={{ maxHeight: '100%', maxWidth: '100%' }}
        onError={(e) => {
          setError(true);
          e.currentTarget.style.display = 'none'; // Hide broken image
        }}
      />
    );
  }

  // 3. FALLBACK TEXT LOGO (Shown if images are missing or failed to load)
  return (
    <div className={`flex items-center gap-[0.1em] select-none ${className}`}>
      <span className={`font-black tracking-tighter leading-none ${textColor}`}>TAMAR</span>
      {/* Scalable Icon container relative to text size */}
      <div className="flex flex-col justify-center gap-[0.2em] h-[0.75em] w-[0.75em] mx-[0.05em]">
          <div className={`h-[0.18em] w-full ${barColor} rounded-sm`}></div>
          <div className={`h-[0.18em] w-full ${barColor} rounded-sm`}></div>
          <div className={`h-[0.18em] w-full ${barColor} rounded-sm`}></div>
      </div>
      <span className={`font-black tracking-tighter leading-none ${textColor}`}>N</span>
    </div>
  );
};

export default Logo;