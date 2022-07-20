/* 문의하기 */

import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import './NoticeList.css';
import BoardSearch5 from '../../component/Search/BoardSearch5';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NoticeInquiry = ({ title, sub, id }) => {
  const [lists, setLists] = useState([]);
  const LIST_PER_PAGE = 20; // 한장에 보여질 리스트 수
  const [page, setPage] = useState(1); // 페이지
  const startNum = (page - 1) * LIST_PER_PAGE; // 0 10 20 30
  const endNum = startNum + LIST_PER_PAGE; // 10 20 30 40
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/qa.json')
      .then((response) => response.json())
      .then((response) => setLists(response));
  }, []);

  const goToNoticeInquiryDetail = (id) => {
    navigate(`/notice/inquiry/detail/NoticeInquiryDetail`);
  };

  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='NoticeInquiry'>
        <div id='SubInner'>
          <h2 className='notice-title'>문의하기</h2>
          <div className='board-search-container'>
            <form method='post' name='search' action='/notice'>
              <table className='pull-right'>
                <tr>
                  <td></td>
                  <td>
                    <BoardSearch5 />
                  </td>
                  <td></td>
                </tr>
              </table>
            </form>
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
                .slice(startNum, endNum)
                .reverse()
                .map(({ num, title, author, date, view, link }) => {
                  return (
                    <li className='board-lists' key={num}>
                      {/* <a href={link}> */}
                      <span className='id-name'>{num}</span>
                      <span
                        className='list-title'
                        onClick={() => goToNoticeInquiryDetail(id)}
                      >
                        {title}
                      </span>
                      <span className='list-author'>{author}</span>
                      <span className='list-date'>{date}</span>
                      <span className='list-view'>{view}</span>
                      {/* </a> */}
                    </li>
                  );
                })}
            </ul>
            <Link to='/notice/inquiryform'>
              <button className='inquireBtn'>문의하기</button>
            </Link>
            <Pagination
              total={lists.length}
              page={page}
              setPage={setPage}
              LIST_PER_PAGE={LIST_PER_PAGE}
            />
          </div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default NoticeInquiry;
