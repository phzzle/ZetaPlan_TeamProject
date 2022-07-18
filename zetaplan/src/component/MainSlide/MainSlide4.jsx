import React from 'react';
import { Link } from 'react-router-dom';
import { GrNext } from "react-icons/gr";

const MainSlide4 = () => {
  return (
    <div id='MainSlide4'>
      <div className='main-slide-wrap'></div>
      <span className='main-slide-by'>ZetaPlanInvestment</span>
      <h2 className='main-slide-title'>다양한 솔루션으로 성공 지원</h2>
      <Link to='/notice/request' className='main-slide-btn'><GrNext size='30px' />More</Link>
    </div>
  );
};

export default MainSlide4;