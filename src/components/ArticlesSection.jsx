import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ArticleCard from './ArticleCard';
import { articles } from '../data/articles';

const ArticlesSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8" style={{ color: 'rgba(14, 35, 104, 1)' }}>Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
            <span className="text-gray-600">1/2</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;