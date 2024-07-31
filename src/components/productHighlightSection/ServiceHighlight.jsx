import React from 'react'

const ServiceHighlight = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className='bg-slate-950 rounded-full p-6 border-8 border-gray-300'>
    {icon}
    </div>
    <h5 className="font-bold mt-2">{title}</h5>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

export default ServiceHighlight