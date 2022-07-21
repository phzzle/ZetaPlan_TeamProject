/* 컨설팅 실적 디테일 */

import React from 'react';
import DetailFooter from '../../../component/Detail/DetailFooter';
import NoticeHeader from '../../../component/Detail/NoticeHeader';
/* import { useState, useEffect } from 'react'; */
import '../NoticeList.css';
import { useParams } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom'; */

const NoticeInfoDetail = ({ infoData }) => {
  let { id } = useParams();

  const showContent = (data) => {
    if (data === "이미지") {
      return <img className='detail-sample-img' src='/img/common/sample_img.jpg' alt="샘플 이미지" />
    } else {
      return data;
    }
  }

  return (
    <div>
      <NoticeHeader title="Notice" sub="컨설팅 실적" />
      <div id='NoticeInfoDetail'>
        <div id='SubInner'>
          <div className='company-title-container'>
            <h2 className='company-title'>컨설팅 실적 세부페이지</h2>
          </div>
          <div>
            <span>{infoData[id - 1].title}</span>
          </div>
        </div>
        <DetailFooter />
      </div>
    </div>
  );
};

export default NoticeInfoDetail;
