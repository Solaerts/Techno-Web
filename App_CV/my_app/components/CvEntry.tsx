import React from 'react';

type CvEntryProps = {
  title: string;
  date: string;
  location?: string; 
  description?: string;
};

export default function CvEntry({ title, date, location, description }: CvEntryProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {location && (
            <span className="text-md text-blue-600 font-medium block mt-1">
              {location}
            </span>
          )}
        </div>
        <span className="text-sm text-gray-500 font-semibold bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0 whitespace-nowrap">
          {date}
        </span>
      </div>
      
      {description && (
        <p className="text-gray-600 mt-3 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}