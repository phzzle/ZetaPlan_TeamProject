import React from 'react';
import AbroadHeader from '../../component/Detail/AbroadHeader';
import DetailFooter from '../../component/Detail/DetailFooter';

const AbroadInfo = ({title, sub}) => {
  return (
    <div>
      <AbroadHeader title={title} sub={sub} />
      <DetailFooter />
    </div>
  );
};

export default AbroadInfo;