import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';


const InvestProcess = ({ title, sub }) => {
  return (
    <div id='InvestProcess'>
      <InvestHeader title={title} sub={sub} />
      <div id='SubInner'>
        <section className="invest-title-container">
          <h2 className="invest-title">투자 컨설팅 과정</h2>
          <div className="invest-title-line"></div>
        </section>
        <div className='image-container'>
          <img src="/img/Invest/process.png" alt="" />
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default InvestProcess;