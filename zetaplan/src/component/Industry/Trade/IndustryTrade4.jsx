/* 기술거래의 거래정보 */

import React from "react";
import {useState, useEffect} from "react";
import {IoIosSearch} from "react-icons/io";
import Pagination from "./Pagination";
import "./IndustryTrade4.css";

const IndustryTrade4 = () => {
  const [lists, setLists] = useState([]);
  const LIST_PER_PAGE = 20; // 한장에 보여질 리스트 수
  const [page, setPage] = useState(1); // 페이지
  const startNum = (page - 1) * LIST_PER_PAGE; // 0 10 20 30
  const endNum = startNum + LIST_PER_PAGE; // 10 20 30 40

  useEffect(() => {
    fetch("/data/techTrade.json")
      .then(res => res.json())
      .then(data => setLists(data));
  }, []);

  return (
    <div>
      <div id="IndustryTrade">
        <section className="industry-trade-section">
          <span className="industry-trade-part">거래정보</span>
          <p className="industry-trade-part-txt"></p>
        </section>
        <section>
          <div class="board-search-container">
            <form method="post" name="search" action="/notice">
              <table class="pull-right">
                <tr>
                  <td>
                    <select class="board-search-selector" name="searchField">
                      <option value="0">전체</option>
                      <option value="bbs-title">제목</option>
                      <option value="bbs-content">내용</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="input-box"
                      placeholder="검색어를 입력하세요."
                      name="searchText"
                      maxlength="100"
                    />
                    <button type="submit" class="btn btn-success">
                      <IoIosSearch size={"25px"} />
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          </div>

          <div className="list-box">
            <div className="board-lists title">
              <span className="id-name">번호</span>
              <span className="list-title">제목</span>
              <span className="list-author">작성자</span>
              <span className="list-date">날짜</span>
              <span className="list-view">조회수</span>
            </div>
            <ul className="notice-list">
              {[...lists]
                .reverse()
                .slice(startNum, endNum)
                .reverse()
                .map(({num, title, author, date, view, link}) => {
                  return (
                    <li className="board-lists" key={num}>
                      <a href={link}>
                        <span className="id-name">{num}</span>
                        <span className="list-title">{title}</span>
                        <span className="list-author">{author}</span>
                        <span className="list-date">{date}</span>
                        <span className="list-view">{view}</span>
                      </a>
                    </li>
                  );
                })}
            </ul>
            <a href="/login">
              <button className="login-button">LogIn</button>
            </a>
            <Pagination total={lists.length} page={page} setPage={setPage} LIST_PER_PAGE={LIST_PER_PAGE} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndustryTrade4;
