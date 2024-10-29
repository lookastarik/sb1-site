import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-white text-center">
        <div className="mb-4">
          <div className="w-16 h-16 border-4 border-t-white border-opacity-25 rounded-full animate-spin"></div>
        </div>
        <p className="text-xl font-light">Loading Experience...</p>
      </div>
    </div>
  );
}