import React from 'react';
import { Link } from 'react-router-dom';
import { GrNext } from "react-icons/gr";
import './mainSlide.css';

const MainSlide1 = () => {
  return (
    <div id='MainSlide1'>
      <div className='main-slide-wrap'></div>
      <span className='main-slide-by'>ZetaPlanInvestment</span>
      <div className='main-slide-title'>ZETA PLAN</div>
      <Link to='/company' className='main-slide-btn'><GrNext size='30px' />More</Link>
    </div>
  );
};

export default MainSlide1;