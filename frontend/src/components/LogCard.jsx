import React from 'react';

const LogCard = ({ log }) => {
   
  return (
    <div className="bg-[#fff] shadow-md rounded-lg p-4 m-4">
      <img src={`http://localhost:5000/uploads/${log.logImage}`} alt="Card" className="w-32 h-32 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-2">{log.tripName}</h2>
      <p className="text-gray-600 mb-2">{log.description}</p>
      <p className="text-gray-500 mb-2">{log.location}</p>
      <p className="text-gray-400">{log.date}</p>
    </div>
  );
};

export default LogCard;
