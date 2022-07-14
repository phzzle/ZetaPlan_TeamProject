import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';
import './../../css/Indusrty/industryTrade.css'
import IndustryTrade1 from '../../component/Industry/Trade/IndustryTrade1';
import IndustryTrade2 from '../../component/Industry/Trade/IndustryTrade2';
import IndustryTrade3 from '../../component/Industry/Trade/IndustryTrade3';
import IndustryTrade4 from '../../component/Industry/Trade/IndustryTrade4';




const IndustryTrade = ({title, sub}) => {
  return (
    <div id='Trade'>
      <IndustryHeader title={title} sub={sub} />
      <div id='SubInner'>
        <section className="industry-trade-section1">
            <div className="industry-trade-title-container">
              <h2 className="industry-trade-title">기술거래</h2>
              <div className="industry-trade-title-line"></div>
            </div>
        </section>
        <IndustryTrade1 />
        <IndustryTrade2 />
        <IndustryTrade3 />
        <IndustryTrade4 />
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryTrade;