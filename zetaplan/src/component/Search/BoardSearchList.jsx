import React from 'react';

const BoardSearchList = ({data}) => {
  return (
    <li className='search-lists'>
      <a href="/" className='search-list'>
        <span className='inner-search-sub'>{data.sub}</span>
        <span className='inner-search-num'>{data.num}</span>
        <span className='inner-search-title'>{data.title}</span>
        <span className='inner-search-date'>{data.date}</span>
      </a>
    </li>
  );
};

export default BoardSearchList;