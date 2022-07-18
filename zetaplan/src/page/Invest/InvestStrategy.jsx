import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';
import '../../css/Invest/investStrategy.css'


const InvestStrategy = ({ title, sub }) => {
  return (
    <div id='InvestStrategy'>
      <InvestHeader title={title} sub={sub} />
      <div id='SubInner'>
        <section className="invest-title-container">
          <h2 className="invest-title">전략수립</h2>
          <div className="invest-title-line"></div>
        </section>
        <div className='image-container-strategy'>
          <h3> 기업진단 및 기업전략 분석자문</h3>
          <img src="/img/Invest/strategy01.png" alt="" />
        </div>
        <div className='image-container-strategy'>
          <h3> 재무분석 및 투자유치 IR 컨설팅</h3>
          <img src="/img/Invest/strategy02.png" alt="" />
        </div>
      </div>


      <DetailFooter />
    </div>
  );
};

export default InvestStrategy;