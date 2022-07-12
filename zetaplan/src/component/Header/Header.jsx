import React from 'react';
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header id='Header'>
      <div id='MainInner'>
        <div className='header-left'><Link to='/'>LOGO</Link></div>
        <div className='header-nav-wrap'>
          <nav className='header-nav'>
          <ul className='main-nav'>
              <li className="main-nav-list">
                <Link to='company/info'>Company</Link>
                <div className='main-sub-nav'>
                  <ul className='main-sub-nav-ul'>
                    <li className="sub-nav-star"><div className='navStar'></div></li>
                    <li><Link to='/company/info'>기업소개</Link></li>
                    <li><Link to='/company/ci'>CI</Link></li>
                    <li><Link to='/company/manpower'>Manpower</Link></li>
                    <li><Link to='/company/collabo'>협력기관</Link></li>
                    <li><Link to='/company/history'>연혁</Link></li>
                    <li><Link to='/company/road'>오시는 길</Link></li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-list">
                <Link to='/mna'>M&A/IPO</Link>
                <div className='main-sub-nav'>
                  <ul className='main-sub-nav-ul'>
                    <li className="sub-nav-star"><div className='navStar'></div></li>
                    <li>
                      <Link to='/mna'>M&A</Link>
                      <ul className='main-sub-detail-nav'>
                        <li><Link to='/mna/summary'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 개요</Link></li>
                        <li><Link to='/mna/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 성과</Link></li>
                        <li><Link to='/mna/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 컨설팅 과정</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to='/ipo'>IPO</Link>
                      <ul className='main-sub-detail-nav'>
                        <li><Link to='/ipo/summary'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 개요</Link></li>
                        <li><Link to='/ipo/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 성과</Link></li>
                        <li><Link to='/ipo/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 컨설팅 과정</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-list">
                <Link to='/invest'>Invest</Link>
                <div className='main-sub-nav'>
                  <ul className='main-sub-nav-ul'>
                    <li className="sub-nav-star"><div className='navStar'></div></li>
                    <li><Link to='/invest'>투자 개요/사례</Link></li>
                    <li><Link to='/invest/plan'>사업계획서/IR</Link></li>
                    <li><Link to='/invest/strategy'>전략수립</Link></li>
                    <li><Link to='/invest/empowerment'>역량강화</Link></li>
                    <li><Link to='/invest/process'>투자 컨설팅 과정</Link></li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-list">
                <Link to='/abroad'>Abroad</Link>
                <div className='main-sub-nav'>
                  <ul className='main-sub-nav-ul'>
                    <li className="sub-nav-star"><div className='navStar'></div></li>
                    <li><Link to='/abroad'>해외 지사 소개</Link></li>
                    <li><Link to='/abroad/case'>해외 진출 사례</Link></li>
                    <li><Link to='/abroad/process'>해외진출 컨설팅</Link></li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-list">
                <Link to='/industry'>Industry</Link>
                <div className='main-sub-nav'>
                  <ul className='main-sub-nav-ul'>
                    <li className="sub-nav-star"><div className='navStar'></div></li>
                    <li><Link to='/industry'>산업 별 이슈</Link></li>
                    <li><Link to='/industry/support'>지원사업</Link></li>
                    <li><Link to='/industry/confirm'>기업 인증</Link></li>
                    <li><Link to='/industry/transfer'>기술 이전</Link></li>
                    <li><Link to='/industry/trade'>기술 거래</Link></li>
                    <li><Link to='/industry/value'>가치 평가</Link></li>
                    <li><Link to='/industry/credit'>신용 평가</Link></li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-list">
                <Link to='/notice'>Notice</Link>
                <div className='main-sub-nav'>
                  <ul className='main-sub-nav-ul'>
                    <li className="sub-nav-star"><div className='navStar'></div></li>
                    <li><Link to='/notice'>공지사항</Link></li>
                    <li><Link to='/notice/news'>뉴스</Link></li>
                    <li><Link to='/notice/column'>칼럼</Link></li>
                    <li><Link to='/notice/info'>문의안내</Link></li>
                    <li><Link to='/notice/inquiry'>문의하기</Link></li>
                    <li><Link to='/notice/request'>상담신청</Link></li>
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