/* 문의하기 */
import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';

const NoticeInquiry = ({ title, sub }) => {
  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='SubInner'>
        <div className='company-title-container'>
          <h2 className='company-title'>문의하기</h2>
          <div className='company-title-line'></div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default NoticeInquiry;
