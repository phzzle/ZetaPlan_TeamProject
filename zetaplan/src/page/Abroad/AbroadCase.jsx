import React from 'react';
import AbroadHeader from '../../component/Detail/AbroadHeader';
import DetailFooter from '../../component/Detail/DetailFooter';

const AbroadCase = ({title, sub}) => {
  return (
    <div>
      <AbroadHeader title={title} sub={sub} />

      <div id='SubInner'>
        <h2 className="detail-title">해외진출 지원</h2>
        
      </div>

      <DetailFooter />
    </div>
  );
};

export default AbroadCase;