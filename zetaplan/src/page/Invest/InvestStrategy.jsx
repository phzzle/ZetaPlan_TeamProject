import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';


const InvestStrategy = ({ title, sub }) => {
  return (
    <div id='InvestStrategy'>
      <InvestHeader title={title} sub={sub} />
      <div id='SubInner'>
        <section className="invest-title-container">
          <h2 className="invest-title">전략수립</h2>
          <div className="invest-title-line"></div>
        </section>
        <div className='image-container'>
          <img src="/img/Invest/strategy.png" alt="" />
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default InvestStrategy;