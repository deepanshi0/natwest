// src/components/RecentSearches.js
import React from 'react';
import './recent.css';
const RecentSearches = ({ searches, onSearch }) => {
  return (
    <div className="recent-searches">
    <p className='recent-list'>Recent Searches</p>
      <ul className='lisitem'>
        {searches.map((search, index) => (
          <li className='listitem' key={index} onClick={() => onSearch(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
