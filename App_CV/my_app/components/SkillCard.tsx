import React from 'react';

type SkillCardProps = {
  title: string;
  skills: string[]; // Une simple liste de textes
};

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="mr-2 text-blue-500 font-bold">•</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}