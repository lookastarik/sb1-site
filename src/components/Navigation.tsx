import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
  setCurrentSection: (section: number) => void;
}

export function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const totalSections = 3;

  const handleNavigation = (direction: 'up' | 'down') => {
    const newSection = direction === 'up' 
      ? Math.max(currentSection - 1, 0)
      : Math.min(currentSection + 1, totalSections - 1);
    setCurrentSection(newSection);
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-4">
      <button
        onClick={() => handleNavigation('up')}
        disabled={currentSection === 0}
        className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
      
      <div className="flex flex-col gap-2 items-center">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSection === index 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      <button
        onClick={() => handleNavigation('down')}
        disabled={currentSection === totalSections - 1}
        className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}