import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon'; // 'full' = TAMAREN text + icon, 'icon' = just the 3 bars
  colored?: boolean; // If true, uses brand colors. If false, might be white/black (useful for footer/headers)
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'full', colored = true }) => {
  // ==============================================================================
  // 🟢 PASTE YOUR LINKS HERE (Option 1 or Option 2)
  // ==============================================================================
  
  // Instructions: 
  // 1. Upload to https://imgbb.com/ and get the "Direct Link" (ends in .png)
  // 2. OR Convert to Base64 at https://www.base64-image.de/ and paste the long string here.
  
  const logoUrl = ""; // e.g. "https://i.ibb.co/..." or "data:image/png;base64,..."
  const iconUrl = ""; // e.g. "https://i.ibb.co/..."
  
  // ==============================================================================

  const [error, setError] = useState(false);
  const hasCustomLogo = !error && logoUrl.length > 5 && iconUrl.length > 5;

  const barColor = colored ? "bg-brand-500" : "bg-current";
  const textColor = colored ? "text-white" : "text-current";

  // The 3-bar icon mark (Fallback)
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
          onError={() => setError(true)}
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
        onError={() => setError(true)}
      />
    );
  }

  // 3. FALLBACK TEXT LOGO
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