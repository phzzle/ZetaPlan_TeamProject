import React from 'react';
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { WiStars } from "react-icons/wi";
import './header.css';

const Header = () => {
  return (
    <header id='Header'>
      <div id='MainInner'>
        <div className='header-left'><a href="#">LOGO</a></div>
        <div className='header-nav-wrap'>
          <nav className='header-nav'>
          <ul className='main-nav'>
              <li className="main-nav-list">
                <a href='#'>Company</a>
                <div className='main-sub-nav'>
                  <ul className='main-sub-nav-ul'>
                    <li className="sub-nav-num">1</li>
                    <li><a href="#">기업소개</a></li>
                    <li><a href="#">CI</a></li>
                    <li><a href="#">Manpower</a></li>
                    <li><a href="#">협력기관</a></li>
                    <li><a href="#">연혁</a></li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-list">
                <a href='#'>M&A/IPO</a>
                <div className='main-sub-nav'>
                  <ul className='main-sub-nav-ul'>
                    <li className="sub-nav-num sub-nav-num2">2</li>
                    <li>
                      <a href="#">M&A</a>
                      <ul className='main-sub-detail-nav'>
                        <li><a href="#"><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 개요</a></li>
                        <li><a href="#"><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 성과</a></li>
                        <li><a href="#"><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 컨설팅 과정</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">IPO</a>
                      <ul className='main-sub-detail-nav'>
                        <li><a href="#"><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 개요</a></li>
                        <li><a href="#"><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 성과</a></li>
                        <li><a href="#"><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 컨설팅 과정</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-list">
                <a href='#'>Invest</a>
                <div className='main-sub-nav'>
                  <ul className='main-sub-nav-ul'>
                    <li className="sub-nav-num sub-nav-num3">3</li>
                    <li><a href="#">투자 개요/사례</a></li>
                    <li><a href="#">사업계획서/IR</a></li>
                    <li><a href="#">전략수립</a></li>
                    <li><a href="#">역량강화</a></li>
                    <li><a href="#">투자 컨설팅 과정</a></li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-list">
                <a href='#'>Abroad</a>
                <div className='main-sub-nav'>
                  <ul className='main-sub-nav-ul'>
                    <li className="sub-nav-num sub-nav-num4">4</li>
                    <li><a href="#">해외 지사 소개</a></li>
                    <li><a href="#">해외 진출 사례</a></li>
                    <li><a href="#">해외진출 컨설팅</a></li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-list">
                <a href='#'>Industry</a>
                <div className='main-sub-nav'>
                  <ul className='main-sub-nav-ul'>
                    <li className="sub-nav-num sub-nav-num5">5</li>
                    <li><a href="#">산업 별 이슈</a></li>
                    <li><a href="#">지원사업</a></li>
                    <li><a href="#">기업 인증</a></li>
                    <li><a href="#">기술 이전</a></li>
                    <li><a href="#">기술 거래</a></li>
                    <li><a href="#">가치 평가</a></li>
                    <li><a href="#">신용 평가</a></li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-list">
                <a href='#'>Notice</a>
                <div className='main-sub-nav'>
                  <ul className='main-sub-nav-ul'>
                    <li className="sub-nav-num sub-nav-num6">6</li>
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">뉴스</a></li>
                    <li><a href="#">칼럼</a></li>
                    <li><a href="#">문의안내</a></li>
                    <li><a href="#">문의하기</a></li>
                    <li><a href="#">상담신청</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className='header-right'>
          <button className='lang-box'>
            <IoEarth size="1rem" />KOR
            <ul>
              <li>KOR</li>
              <li>ENG</li>
              <li>CH</li>
              <li>JP</li>
            </ul>
          </button>
          <div className='search-box'>
            <input type="text" placeholder='검색어를 입력하세요.'/>
            <button><FaSearch size="1.2rem" fill='#2c3540'/></button>
          </div>
          <button><TiThMenu size="2rem" /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;