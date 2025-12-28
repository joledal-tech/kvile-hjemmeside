
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'positive' | 'negative';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'positive' }) => {
  const textColor = variant === 'positive' ? '#231f20' : '#ffffff';
  
  return (
    <svg 
      className={className}
      id="Layer_1" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 123"
    >
      <path fill={textColor} d="M80.31,67V30.63h7.13v18l31.67-18h11.4L100.93,47.18,132.09,67H120L94.16,51l-6.72,3.77V67Z"/>
      <path fill={textColor} d="M147.94,30.63h8.8l18.49,29,18.69-29h7.68L177.93,67h-6.42Z"/>
      <path fill={textColor} d="M225,67V30.63h7.13V67Z"/>
      <path fill={textColor} d="M262.82,30.63H270v31h31.87V67h-39Z"/>
      <path fill={textColor} d="M326.17,67V30.63h40.88v5.25H333.3v9.93h21.18v5.24H333.3V61.79h36.45V67Z"/>
      <text 
        transform="translate(80.22 87.71)" 
        fill={textColor} 
        style={{ fontSize: '15.61px', fontFamily: 'Eurostile-Bol, Eurostile', letterSpacing: '0.31em' }}
      >
        H<tspan style={{ letterSpacing: '0.33em' }}>Y</tspan>
        <tspan style={{ letterSpacing: '0.33em' }}>T</tspan>
        <tspan style={{ letterSpacing: '0.3em' }}>T</tspan>
        <tspan style={{ letterSpacing: '0.3em' }}>E </tspan>
        <tspan style={{ letterSpacing: '0.31em' }}>V</tspan>
        <tspan style={{ letterSpacing: '0.3em' }}>ED S</tspan>
        <tspan style={{ letterSpacing: '0.28em' }}>K</tspan>
        <tspan style={{ letterSpacing: '0.3em' }}>OG OG </tspan>
        <tspan style={{ letterSpacing: '0.25em' }}>V</tspan>
        <tspan style={{ letterSpacing: '0.3em' }}>ANN</tspan>
      </text>
      <polygon fill="#176533" points="29.39 17.84 58.14 67.13 20.56 67.13 29.39 17.84"/>
      <polygon fill="#3953a4" points="54.31 109.32 33.7 74 60.63 74 54.31 109.32"/>
    </svg>
  );
};

export default Logo;
