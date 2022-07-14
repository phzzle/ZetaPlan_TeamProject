import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';


const InvestPlan = ({ title, sub }) => {
  return (
    <div>
      <div id='InvestPlan'>
        <InvestHeader title={title} sub={sub} />
        <div id='SubInner'>
          <section className="invest-title-container">
            <h2 className="invest-title">사업계획서/IR</h2>
            <div className="invest-title-line"></div>
          </section>
          <div className='image-container'>
            <img src="/img/Invest/plan.png" alt="" />
          </div>
        </div>
        <DetailFooter />
      </div>
    </div>
  );
};

export default InvestPlan;