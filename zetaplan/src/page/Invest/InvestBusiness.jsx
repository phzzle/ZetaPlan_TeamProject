import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';


const InvestBusiness = ({ title, sub }) => {
  return (
    <div id='InvestBusiness'>
      <InvestHeader title={title} sub={sub} />
      <div id='SubInner'>
        <section className="invest-title-container">
          <h2 className="invest-title">경연컨설팅</h2>
          <div className="invest-title-line"></div>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default InvestBusiness;