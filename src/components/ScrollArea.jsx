import React, { ReactNode } from 'react';



export const ScrollArea = ({ children, className = '' }) => {
  return (
    <div className={`overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ${className}`}>
      {children}
    </div>
  );
};