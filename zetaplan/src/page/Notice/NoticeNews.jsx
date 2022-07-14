import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
import '../../css/Notice/noticeNews.css';

const NoticeNews = ({ title, sub }) => {
  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className='notice-detail-title'>뉴스</h2>
      </div>
      <DetailFooter />
    </div>
  );
};

export default NoticeNews;
