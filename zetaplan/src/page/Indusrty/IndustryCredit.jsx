import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';

const IndustryCredit = ({title, sub}) => {
  return (
    <div>
      <IndustryHeader title={title} sub={sub} />
      <DetailFooter />
    </div>
  );
};

export default IndustryCredit;