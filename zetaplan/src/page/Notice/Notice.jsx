import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
import '../../css/Notice/noticeNotice.css';

const Notice = ({ title, sub }) => {
  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className='notice-detail-title'>공지사항</h2>
      </div>
      <DetailFooter />
    </div>
  );
};

export default Notice;
