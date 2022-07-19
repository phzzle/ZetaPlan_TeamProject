/* 공지사항 디테일*/

import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
import { useState, useEffect } from 'react';
import './NoticeList.css';

const Notice = ({ title, sub }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch('/data/tradeInformation_detail.json')
      .then((response) => response.json())
      .then((response) => setLists(response));
  }, []);

  const newsListData = list1.filter(
    (item, index) => index < 4
  ); /* 인덱스 4개만 뽑기 */
  const InvestListData = list2.filter((item, index) => index < 4);
  const PolicyInfoListData = list3.filter((item, index) => index < 4);
  const ConsultingListData = list4.filter((item, index) => index < 4);

  const newsList = newsListData.map((item) => {
    return <NewsItem key={item.id} item={item} />;
  }); /* 4개 뽑은걸 돌려서 title이랑 date만 뽑기 */
  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='Notice'>
        <div id='SubInner'>
          <div className='company-title-container'>
            <h2 className='company-title'>공지사항</h2>
            <div className='company-title-line'></div>
          </div>
          <div className='list-box'>
            <div className='board-lists title'>
              <span className='id-name'>번호</span>
              <span className='list-title'>제목</span>
              <span className='list-author'>작성자</span>
              <span className='list-date'>날짜</span>
              <span className='list-view'>조회수</span>
            </div>
            <ul className='notice-list'>
              {[...lists]
                .reverse()
                .map(({ num, title, author, date, view, link, content }) => {
                  return (
                    <li className='board-lists' key={num}>
                      <a href={link}>
                        {/* <span className='id-name'>{num}</span> */}
                        {/*                         <span className='list-title'>{title}</span>
                        <span className='list-author'>{author}</span>
                        <span className='list-date'>{date}</span>
                        <span className='list-view'>{view}</span> */}
                        <span className=''>{content}</span>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default Notice;
