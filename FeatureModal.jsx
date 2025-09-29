import React from 'react';

export const FeatureModal = ({isOpen, isClose, work}) => {
  return (
    <div className ="fixed inset-0 z-50 flex items-center justify-center bg-black/50" > 
          <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-2xl w-full p-6"> 
            <button onClick ={onClose} className =""> 
                ✕
            </button>
          </div>
    </div>
  )
}

