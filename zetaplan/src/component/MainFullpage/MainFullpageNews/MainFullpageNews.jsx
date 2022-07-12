import React, { useState, useEffect } from 'react';
import './MainFullpageNews.css';
import { FaBullhorn } from 'react-icons/fa';
import { GrDocumentPerformance } from 'react-icons/gr';
import { BsPlusLg } from 'react-icons/bs';
import { IoBusinessSharp, IoNewspaperSharp } from 'react-icons/io5';

import NewsItem from './NewsItem';
import InvestItem from './InvestItem';
import PolicyInfoItem from './PolicyInfoItem';
import ConsultingItem from './ConsultingItem';

const MainFullpageNews = () => {
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  const [list4, setList4] = useState([]);

  useEffect(() => {
    fetch('/data/newsList.json')
      .then((response) => response.json())
      .then((response) => setList1(response.newsList));
  }, []);

  useEffect(() => {
    fetch('/data/tradeInformation.json')
      .then((response) => response.json())
      .then((response) => setList2(response.tradeInformation));
  }, []);

  useEffect(() => {
    fetch('/data/policyinfo.json')
      .then((response) => response.json())
      .then((response) => setList3(response.policyinfo));
  }, []);

  useEffect(() => {
    fetch('/data/consulting.json')
      .then((response) => response.json())
      .then((response) => setList4(response.consulting));
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

  const InvestList = InvestListData.map((item) => {
    return <InvestItem key={item.id} item={item} />;
  });

  const PolicyinfoList = PolicyInfoListData.map((item) => {
    return <PolicyInfoItem key={item.id} item={item} />;
  });
  const ConsultingList = ConsultingListData.map((item) => {
    return <ConsultingItem key={item.id} item={item} />;
  });

  return (
    <div id='FullpageNews'>
      <div id='newsMainInner'>
        <div className='content-box'>
          <h2 className='section-title'>
            새소식<span>News</span>
          </h2>
          <div className='board-box'>
            <div className='board'>
              <h3 className='news-title'>
                {/* <FaBullhorn fill='#2C3540' size='36px' className='news-icon' /> */}
                <p>공지사항</p>
              </h3>
              <div className='board-list'>{InvestList}</div>
              <a href='http://zetaplan.com/ma/ma-deal-info/'>
                <BsPlusLg className='more-icon' />
              </a>
            </div>
            <div className='board'>
              <h3 className='news-title'>
                {/* <IoNewspaperSharp
                  size='36px'
                  fill='#2C3540'
                  className='news-icon'
                /> */}
                <p>뉴스</p>
              </h3>
              <div className='board-list'>{newsList}</div>

              <a href='http://zetaplan.com/category/news/'>
                <BsPlusLg className='more-icon' />
              </a>
            </div>

            <div className='board'>
              <h3 className='news-title'>
                {/* <IoBusinessSharp
                  size='36px'
                  fill='#2C3540'
                  className='news-icon'
                /> */}
                <p>기업지원정보</p>
              </h3>
              <div className='board-list'>{PolicyinfoList}</div>
              <a href='http://zetaplan.com/business-support-information/'>
                <BsPlusLg className='more-icon' />
              </a>
            </div>

            <div className='board'>
              <h3 className='news-title'>
                {/* <GrDocumentPerformance
                  fill='#2C3540'
                  size='36px'
                  className='news-icon'
                /> */}
                <p>컨설팅 실적</p>
              </h3>
              <div className='board-list'>{ConsultingList}</div>
              <a href='http://zetaplan.com/performance-consulting/'>
                <BsPlusLg className='more-icon' />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* MainInner */}
    </div> /* FullpageNews */
  );
};

export default MainFullpageNews;
