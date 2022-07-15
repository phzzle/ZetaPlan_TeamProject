import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';

const IndustryTransfer = ({title, sub}) => {
  return (
    <div>
      <IndustryHeader title={title} sub={sub} />
      <div id='SubInner'>
        <div className="company-title-container">
          <h2 className="company-title">기술이전</h2>
          <div className="company-title-line"></div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryTransfer;