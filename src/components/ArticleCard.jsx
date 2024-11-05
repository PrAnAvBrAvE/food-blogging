import React from 'react';

const ArticleCard = ({ title, description, image }) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-300"
      style={{ width: '381px', height: '554px' }} 
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-64 rounded-lg mb-4"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-3" dangerouslySetInnerHTML={{ __html: title }} />
        {/* Render the description as HTML */}
        <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: description }} />
        <button className="border border-black rounded-full px-6 py-2 mt-2 text-black bg-transparent">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;