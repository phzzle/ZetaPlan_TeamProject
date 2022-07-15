import React from 'react';
import AbroadHeader from '../../component/Detail/AbroadHeader';
import DetailFooter from '../../component/Detail/DetailFooter';

const AbroadProcess = ({title, sub}) => {
  return (
    <div>
      <AbroadHeader title={title} sub={sub} />

      <div id="SubInner">
        <h2 className="detail-title">해외지사 사업</h2>
      </div>

      <DetailFooter />
    </div>
  );
};

export default AbroadProcess;