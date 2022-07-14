import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';

const InvestSummary = ({ title, sub }) => {
  return (
    <div>
      <InvestHeader title={title} sub={sub} />
      <div id='SubInner'>
        <section className="invest-title-container">
          <h2 className="invest-title">투자개요/사례</h2>
          <div className="invest-title-line"></div>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default InvestSummary;