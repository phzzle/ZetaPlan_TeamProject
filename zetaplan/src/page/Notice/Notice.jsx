import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
import '../../css/Notice/noticeNotice.css';
import NoticeList from '../../component/Notice/NoticeList';
const Notice = ({ title, sub }) => {
  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='Notice'>
        <div id='SubInner'>
          <div className='company-title-container'>
            <h2 className='company-title'>공지사항</h2>
            <div className='company-title-line'></div>
            <NoticeList />
          </div>
        </div>
        <DetailFooter />
      </div>
    </div>
  );
};

export default Notice;
