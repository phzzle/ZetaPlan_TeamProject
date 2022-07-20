/* 공지사항 디테일 */

import React from 'react';
import DetailFooter from '../../../component/Detail/DetailFooter';
import NoticeHeader from '../../../component/Detail/NoticeHeader';
import '../NoticeList.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NoticeDetail = ({ title, sub }) => {
  let { id } = useParams();
  const [lists, setLists] = useState(null);

  const getNoticeDetailData = async () => {
    let url = `/data/tradeInformation.json/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setLists(data);
  };
  useEffect(() => {
    getNoticeDetailData();
  }, []);
  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='NoticeDetail'>
        <div id='SubInner'>
          <h2 className='notice-title'>공지사항 세부페이지</h2>
          <div>
            <span>{title}</span>
          </div>
        </div>
        <DetailFooter />
      </div>
    </div>
  );
};

export default NoticeDetail;
