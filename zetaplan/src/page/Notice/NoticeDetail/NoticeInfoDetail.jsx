/* 컨설팅 실적 디테일 */

import React from 'react';
import DetailFooter from '../../../component/Detail/DetailFooter';
import NoticeHeader from '../../../component/Detail/NoticeHeader';
/* import { useState, useEffect } from 'react'; */
import '../NoticeList.css';
/* import { useNavigate } from 'react-router-dom'; */

const NoticeInfoDetail = ({ infodata }) => {
  return (
    <div>
      <NoticeHeader title="Notice" sub="컨설팅 실적" />
      <div id='NoticeInfoDetail'>
        <div id='SubInner'>
          <div className='company-title-container'>
            <h2 className='company-title'>컨설팅 실적 세부페이지</h2>
            <div className='company-title-line'></div>
            안녕
          </div>
        </div>
        <DetailFooter />
      </div>
    </div>
  );
};

export default NoticeInfoDetail;
