import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';

const InvestStrategy = ({title, sub}) => {
  return (
    <div>
      <InvestHeader title={title} sub={sub}/>
      <DetailFooter />
    </div>
  );
};

export default InvestStrategy;