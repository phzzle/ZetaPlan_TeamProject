import React from 'react';
import { Link } from 'react-router-dom';
import { GrNext } from "react-icons/gr";

const MainSlide3 = () => {
  return (
    <div id='MainSlide3'>
      <div className='main-slide-wrap'></div>
      <span className='main-slide-by'>ZetaPlanInvestment</span>
      <h2 className='main-slide-title'>약 2,600개사 컨설팅 진행</h2>
      <Link to='/notice/info' className='main-slide-btn'><GrNext size='30px' />More</Link>
    </div>
  );
};

export default MainSlide3;