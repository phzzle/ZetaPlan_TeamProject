import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';

const NoticeColumn = ({title, sub}) => {
  return (
    <div>
      <NoticeHeader title={title} sub={sub}/>
      <DetailFooter />
    </div>
  );
};

export default NoticeColumn;