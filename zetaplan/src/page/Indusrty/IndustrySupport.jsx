import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';

const IndustrySupport = ({title, sub}) => {
  return (
    <div id='IndustrySupport'>
      <IndustryHeader title={title} sub={sub} />
      <div id='SubHeader'>
        <h2>지원 사업</h2>
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustrySupport;