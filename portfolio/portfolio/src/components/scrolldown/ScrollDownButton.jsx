import React from 'react';
import './ScrollDownButton.css';

const ScrollDownButton = ({ 
  targetId = null, 
  text = "Down",
  scrollTo = "bottom", // 'bottom', 'element', or 'offset'
  offset = 0,
  className = "",
  buttonColor = "rgb(20, 20, 20)",
  hoverColor = "rgba(255, 160, 252, 1)",
  shadowColor = "rgba(255, 160, 247, 0.25)"
}) => {
  
  const handleClick = () => {
    if (scrollTo === 'element' && targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = offset;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        return;
      }
    }
    
    if (scrollTo === 'offset') {
      window.scrollBy({ top: offset || 500, behavior: 'smooth' });
      return;
    }
    
    // Default: scroll to bottom
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  const buttonStyle = {
    '--button-color': buttonColor,
    '--hover-color': hoverColor,
    '--shadow-color': shadowColor,
  };

  return (
    <button 
      className={`scroll-down-button ${className}`}
      onClick={handleClick}
      style={buttonStyle}
      aria-label={text}
      title={text}
    >
      <svg className="svgIcon" viewBox="0 0 384 512">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>
    </button>
  );
};

export default ScrollDownButton;