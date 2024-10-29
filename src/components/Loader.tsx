import React from 'react';

export function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-t-blue-500 border-blue-200 rounded-full animate-spin mb-4"></div>
        <p className="text-white text-lg">Loading scene...</p>
      </div>
    </div>
  );
}