/* 공지사항 디테일 */

import React from 'react';
import DetailFooter from '../../../component/Detail/DetailFooter';
import NoticeHeader from '../../../component/Detail/NoticeHeader';
/* import { useState, useEffect } from 'react'; */
import '../NoticeList.css';
/* import { useNavigate } from 'react-router-dom'; */

const NoticeDetail = ({ title, sub }) => {
  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='NoticeDetail'>
        <div id='SubInner'>
          <div className='company-title-container'>
            <h2 className='company-title'>공지사항 세부페이지</h2>
            <div className='company-title-line'></div>
            안녕
          </div>
        </div>
        <DetailFooter />
      </div>
    </div>
  );
};

export default NoticeDetail;
