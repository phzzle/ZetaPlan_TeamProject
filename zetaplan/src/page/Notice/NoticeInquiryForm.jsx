import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';

const NoticeInquiryForm = ({ title, sub }) => {
  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id="SubInner">
        <h2 className="company-title">
          문의하기
        </h2>
        <form action="">
          
        </form>
      </div>
      <DetailFooter />
    </div>
  );
};

export default NoticeInquiryForm;