/* 컨설팅 실적 디테일 */

import React from 'react';
import DetailFooter from '../../../component/Detail/DetailFooter';
import NoticeHeader from '../../../component/Detail/NoticeHeader';
/* import { useState, useEffect } from 'react'; */
import '../NoticeList.css';
/* import { useNavigate } from 'react-router-dom'; */

const NoticeInfoDetail = ({ title, sub }) => {
  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='NoticeInfoDetail'>
        <div id='SubInner'>
          <h2 className='notice-title'>컨설팅 실적 세부페이지</h2>
        </div>
        <DetailFooter />
      </div>
    </div>
  );
};

export default NoticeInfoDetail;
