import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import SearchForm from './../Search/SearchForm';
import Hamburger from '../Hamburger/Hamburger';

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const activeMenu = () => {
    active === false ? setActive(true) : setActive(false);
  }

  return (
    <header id='Header'>
      <div id='MainInner'>
        <div className='header-left'><a href='/'>LOGO</a></div>
        <div className='header-nav-wrap'>
          <nav className='header-nav'>
            <ul className='main-nav'>
              <li className="main-nav-list">
                <Link to='/company'>Company</Link>
                <div className='main-sub-nav'>
                  <div  className='main-sub-box'>
                    <div className='main-sub-nav-left'></div>
                    <div className='main-sub-nav-wrap'>
                    <ul className='main-sub-nav-ul'>
                      <li className="sub-nav-star"><div className='navStar'></div></li>
                      <li><Link to='/company'>기업소개</Link></li>
                      <li><Link to='/company/ci'>CI</Link></li>
                      <li><Link to='/company/manpower'>Manpower</Link></li>
                      <li><Link to='/company/collabo'>협력기관</Link></li>
                      <li><Link to='/company/history'>연혁</Link></li>
                      <li><Link to='/company/road'>오시는 길</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                      <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li>
                          M&A
                          <ul className='main-sub-detail-nav'>
                            <li><Link to='/mna'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 개요</Link></li>
                            <li><Link to='/mna/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 성과</Link></li>
                            <li><Link to='/mna/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 프로세스</Link></li>
                          </ul>
                        </li>
                        <li>
                          <div className='main-sub-nav-ipo'>IPO</div>
                            <ul className='main-sub-detail-nav'>
                              <li><Link to='/ipo'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 개요</Link></li>
                              <li><Link to='/ipo/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 성과</Link></li>
                              <li><Link to='/ipo/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 프로세스</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/invest'>경영 컨설팅</Link></li>
                        <li><Link to='/invest/result'>투자 개요/사례</Link></li>
                        <li><Link to='/invest/plan'>사업계획서/IR</Link></li>
                        <li><Link to='/invest/strategy'>전략수립</Link></li>
                        <li><Link to='/invest/empowerment'>역량강화</Link></li>
                        <li><Link to='/invest/process'>투자 컨설팅 과정</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/abroad'>해외 진출 사업</Link></li>
                        <li><Link to='/abroad/case'>해외 진출 지원</Link></li>
                        <li><Link to='/abroad/process'>해외 지사 사업</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/industry'>산업 별 이슈</Link></li>
                        <li><Link to='/industry/confirm'>기업/기술 인증</Link></li>
                        <li><Link to='/industry/transfer'>기술 이전</Link></li>
                        <li><Link to='/industry/trade'>기술 거래</Link></li>
                        <li><Link to='/industry/value'>가치 평가</Link></li>
                        <li><Link to='/industry/credit'>신용 평가</Link></li>
                        <li><Link to='/industry/support'>지원 사업</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/notice'>공지사항</Link></li>
                        <li><Link to='/notice/news'>뉴스</Link></li>
                        <li><Link to='/notice/support'>기업지원정보</Link></li>
                        <li><Link to='/notice/info'>컨설팅 실적</Link></li>
                        <li><Link to='/notice/inquiry'>문의하기</Link></li>
                        <li><Link to='/notice/request'>상담신청</Link></li>
                    </ul>
                    </div>
                    <div className='main-sub-nav-left'></div>
                  </div>
                </div>
              </li>
              <li className="main-nav-list">
                <Link to='/mna'>M&A/IPO</Link>
                <div className='main-sub-nav'>
                  <div  className='main-sub-box'>
                    <div className='main-sub-nav-left'></div>
                    <div className='main-sub-nav-wrap'>
                    <ul className='main-sub-nav-ul'>
                      <li className="sub-nav-star"><div className='navStar'></div></li>
                      <li><Link to='/company'>기업소개</Link></li>
                      <li><Link to='/company/ci'>CI</Link></li>
                      <li><Link to='/company/manpower'>Manpower</Link></li>
                      <li><Link to='/company/collabo'>협력기관</Link></li>
                      <li><Link to='/company/history'>연혁</Link></li>
                      <li><Link to='/company/road'>오시는 길</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                      <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li>
                          M&A
                          <ul className='main-sub-detail-nav'>
                            <li><Link to='/mna'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 개요</Link></li>
                            <li><Link to='/mna/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 성과</Link></li>
                            <li><Link to='/mna/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 프로세스</Link></li>
                          </ul>
                        </li>
                        <li>
                          <div className='main-sub-nav-ipo'>IPO</div>
                            <ul className='main-sub-detail-nav'>
                              <li><Link to='/ipo'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 개요</Link></li>
                              <li><Link to='/ipo/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 성과</Link></li>
                              <li><Link to='/ipo/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 프로세스</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/invest'>경영 컨설팅</Link></li>
                        <li><Link to='/invest/result'>투자 개요/사례</Link></li>
                        <li><Link to='/invest/plan'>사업계획서/IR</Link></li>
                        <li><Link to='/invest/strategy'>전략수립</Link></li>
                        <li><Link to='/invest/empowerment'>역량강화</Link></li>
                        <li><Link to='/invest/process'>투자 컨설팅 과정</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/abroad'>해외 진출 사업</Link></li>
                        <li><Link to='/abroad/case'>해외 진출 지원</Link></li>
                        <li><Link to='/abroad/process'>해외 지사 사업</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/industry'>산업 별 이슈</Link></li>
                        <li><Link to='/industry/confirm'>기업/기술 인증</Link></li>
                        <li><Link to='/industry/transfer'>기술 이전</Link></li>
                        <li><Link to='/industry/trade'>기술 거래</Link></li>
                        <li><Link to='/industry/value'>가치 평가</Link></li>
                        <li><Link to='/industry/credit'>신용 평가</Link></li>
                        <li><Link to='/industry/support'>지원 사업</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/notice'>공지사항</Link></li>
                        <li><Link to='/notice/news'>뉴스</Link></li>
                        <li><Link to='/notice/support'>기업지원정보</Link></li>
                        <li><Link to='/notice/info'>컨설팅 실적</Link></li>
                        <li><Link to='/notice/inquiry'>문의하기</Link></li>
                        <li><Link to='/notice/request'>상담신청</Link></li>
                    </ul>
                    </div>
                    <div className='main-sub-nav-left'></div>
                  </div>
                </div>
              </li>
              <li className="main-nav-list">
                <Link to='/invest'>투자/경영</Link>
                <div className='main-sub-nav'>
                  <div  className='main-sub-box'>
                    <div className='main-sub-nav-left'></div>
                    <div className='main-sub-nav-wrap'>
                    <ul className='main-sub-nav-ul'>
                      <li className="sub-nav-star"><div className='navStar'></div></li>
                      <li><Link to='/company'>기업소개</Link></li>
                      <li><Link to='/company/ci'>CI</Link></li>
                      <li><Link to='/company/manpower'>Manpower</Link></li>
                      <li><Link to='/company/collabo'>협력기관</Link></li>
                      <li><Link to='/company/history'>연혁</Link></li>
                      <li><Link to='/company/road'>오시는 길</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                      <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li>
                          M&A
                          <ul className='main-sub-detail-nav'>
                            <li><Link to='/mna'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 개요</Link></li>
                            <li><Link to='/mna/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 성과</Link></li>
                            <li><Link to='/mna/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 프로세스</Link></li>
                          </ul>
                        </li>
                        <li>
                          <div className='main-sub-nav-ipo'>IPO</div>
                            <ul className='main-sub-detail-nav'>
                              <li><Link to='/ipo'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 개요</Link></li>
                              <li><Link to='/ipo/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 성과</Link></li>
                              <li><Link to='/ipo/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 프로세스</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/invest'>경영 컨설팅</Link></li>
                        <li><Link to='/invest/result'>투자 개요/사례</Link></li>
                        <li><Link to='/invest/plan'>사업계획서/IR</Link></li>
                        <li><Link to='/invest/strategy'>전략수립</Link></li>
                        <li><Link to='/invest/empowerment'>역량강화</Link></li>
                        <li><Link to='/invest/process'>투자 컨설팅 과정</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/abroad'>해외 진출 사업</Link></li>
                        <li><Link to='/abroad/case'>해외 진출 지원</Link></li>
                        <li><Link to='/abroad/process'>해외 지사 사업</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/industry'>산업 별 이슈</Link></li>
                        <li><Link to='/industry/confirm'>기업/기술 인증</Link></li>
                        <li><Link to='/industry/transfer'>기술 이전</Link></li>
                        <li><Link to='/industry/trade'>기술 거래</Link></li>
                        <li><Link to='/industry/value'>가치 평가</Link></li>
                        <li><Link to='/industry/credit'>신용 평가</Link></li>
                        <li><Link to='/industry/support'>지원 사업</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/notice'>공지사항</Link></li>
                        <li><Link to='/notice/news'>뉴스</Link></li>
                        <li><Link to='/notice/support'>기업지원정보</Link></li>
                        <li><Link to='/notice/info'>컨설팅 실적</Link></li>
                        <li><Link to='/notice/inquiry'>문의하기</Link></li>
                        <li><Link to='/notice/request'>상담신청</Link></li>
                    </ul>
                    </div>
                    <div className='main-sub-nav-left'></div>
                  </div>
                </div>
              </li>
              <li className="main-nav-list">
                <Link to='/abroad'>Abroad</Link>
                <div className='main-sub-nav'>
                  <div  className='main-sub-box'>
                    <div className='main-sub-nav-left'></div>
                    <div className='main-sub-nav-wrap'>
                    <ul className='main-sub-nav-ul'>
                      <li className="sub-nav-star"><div className='navStar'></div></li>
                      <li><Link to='/company'>기업소개</Link></li>
                      <li><Link to='/company/ci'>CI</Link></li>
                      <li><Link to='/company/manpower'>Manpower</Link></li>
                      <li><Link to='/company/collabo'>협력기관</Link></li>
                      <li><Link to='/company/history'>연혁</Link></li>
                      <li><Link to='/company/road'>오시는 길</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                      <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li>
                          M&A
                          <ul className='main-sub-detail-nav'>
                            <li><Link to='/mna'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 개요</Link></li>
                            <li><Link to='/mna/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 성과</Link></li>
                            <li><Link to='/mna/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 프로세스</Link></li>
                          </ul>
                        </li>
                        <li>
                          <div className='main-sub-nav-ipo'>IPO</div>
                            <ul className='main-sub-detail-nav'>
                              <li><Link to='/ipo'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 개요</Link></li>
                              <li><Link to='/ipo/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 성과</Link></li>
                              <li><Link to='/ipo/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 프로세스</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/invest'>경영 컨설팅</Link></li>
                        <li><Link to='/invest/result'>투자 개요/사례</Link></li>
                        <li><Link to='/invest/plan'>사업계획서/IR</Link></li>
                        <li><Link to='/invest/strategy'>전략수립</Link></li>
                        <li><Link to='/invest/empowerment'>역량강화</Link></li>
                        <li><Link to='/invest/process'>투자 컨설팅 과정</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/abroad'>해외 진출 사업</Link></li>
                        <li><Link to='/abroad/case'>해외 진출 지원</Link></li>
                        <li><Link to='/abroad/process'>해외 지사 사업</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/industry'>산업 별 이슈</Link></li>
                        <li><Link to='/industry/confirm'>기업/기술 인증</Link></li>
                        <li><Link to='/industry/transfer'>기술 이전</Link></li>
                        <li><Link to='/industry/trade'>기술 거래</Link></li>
                        <li><Link to='/industry/value'>가치 평가</Link></li>
                        <li><Link to='/industry/credit'>신용 평가</Link></li>
                        <li><Link to='/industry/support'>지원 사업</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/notice'>공지사항</Link></li>
                        <li><Link to='/notice/news'>뉴스</Link></li>
                        <li><Link to='/notice/support'>기업지원정보</Link></li>
                        <li><Link to='/notice/info'>컨설팅 실적</Link></li>
                        <li><Link to='/notice/inquiry'>문의하기</Link></li>
                        <li><Link to='/notice/request'>상담신청</Link></li>
                    </ul>
                    </div>
                    <div className='main-sub-nav-left'></div>
                  </div>
                </div>
              </li>
              <li className="main-nav-list">
                <Link to='/industry'>Industry</Link>
                <div className='main-sub-nav'>
                  <div  className='main-sub-box'>
                    <div className='main-sub-nav-left'></div>
                    <div className='main-sub-nav-wrap'>
                    <ul className='main-sub-nav-ul'>
                      <li className="sub-nav-star"><div className='navStar'></div></li>
                      <li><Link to='/company'>기업소개</Link></li>
                      <li><Link to='/company/ci'>CI</Link></li>
                      <li><Link to='/company/manpower'>Manpower</Link></li>
                      <li><Link to='/company/collabo'>협력기관</Link></li>
                      <li><Link to='/company/history'>연혁</Link></li>
                      <li><Link to='/company/road'>오시는 길</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                      <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li>
                          M&A
                          <ul className='main-sub-detail-nav'>
                            <li><Link to='/mna'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 개요</Link></li>
                            <li><Link to='/mna/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 성과</Link></li>
                            <li><Link to='/mna/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 프로세스</Link></li>
                          </ul>
                        </li>
                        <li>
                          <div className='main-sub-nav-ipo'>IPO</div>
                            <ul className='main-sub-detail-nav'>
                              <li><Link to='/ipo'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 개요</Link></li>
                              <li><Link to='/ipo/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 성과</Link></li>
                              <li><Link to='/ipo/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 프로세스</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/invest'>경영 컨설팅</Link></li>
                        <li><Link to='/invest/result'>투자 개요/사례</Link></li>
                        <li><Link to='/invest/plan'>사업계획서/IR</Link></li>
                        <li><Link to='/invest/strategy'>전략수립</Link></li>
                        <li><Link to='/invest/empowerment'>역량강화</Link></li>
                        <li><Link to='/invest/process'>투자 컨설팅 과정</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/abroad'>해외 진출 사업</Link></li>
                        <li><Link to='/abroad/case'>해외 진출 지원</Link></li>
                        <li><Link to='/abroad/process'>해외 지사 사업</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/industry'>산업 별 이슈</Link></li>
                        <li><Link to='/industry/confirm'>기업/기술 인증</Link></li>
                        <li><Link to='/industry/transfer'>기술 이전</Link></li>
                        <li><Link to='/industry/trade'>기술 거래</Link></li>
                        <li><Link to='/industry/value'>가치 평가</Link></li>
                        <li><Link to='/industry/credit'>신용 평가</Link></li>
                        <li><Link to='/industry/support'>지원 사업</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/notice'>공지사항</Link></li>
                        <li><Link to='/notice/news'>뉴스</Link></li>
                        <li><Link to='/notice/support'>기업지원정보</Link></li>
                        <li><Link to='/notice/info'>컨설팅 실적</Link></li>
                        <li><Link to='/notice/inquiry'>문의하기</Link></li>
                        <li><Link to='/notice/request'>상담신청</Link></li>
                    </ul>
                    </div>
                    <div className='main-sub-nav-left'></div>
                  </div>
                </div>
              </li>
              <li className="main-nav-list">
                <Link to='/notice'>Notice</Link>
                <div className='main-sub-nav'>
                  <div  className='main-sub-box'>
                    <div className='main-sub-nav-left'></div>
                    <div className='main-sub-nav-wrap'>
                    <ul className='main-sub-nav-ul'>
                      <li className="sub-nav-star"><div className='navStar'></div></li>
                      <li><Link to='/company'>기업소개</Link></li>
                      <li><Link to='/company/ci'>CI</Link></li>
                      <li><Link to='/company/manpower'>Manpower</Link></li>
                      <li><Link to='/company/collabo'>협력기관</Link></li>
                      <li><Link to='/company/history'>연혁</Link></li>
                      <li><Link to='/company/road'>오시는 길</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                      <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li>
                          M&A
                          <ul className='main-sub-detail-nav'>
                            <li><Link to='/mna'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 개요</Link></li>
                            <li><Link to='/mna/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 성과</Link></li>
                            <li><Link to='/mna/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />M&A 프로세스</Link></li>
                          </ul>
                        </li>
                        <li>
                          <div className='main-sub-nav-ipo'>IPO</div>
                            <ul className='main-sub-detail-nav'>
                              <li><Link to='/ipo'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 개요</Link></li>
                              <li><Link to='/ipo/result'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 성과</Link></li>
                              <li><Link to='/ipo/process'><MdKeyboardArrowRight size="1rem" fill="#2C3540" />IPO 프로세스</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/invest'>경영 컨설팅</Link></li>
                        <li><Link to='/invest/result'>투자 개요/사례</Link></li>
                        <li><Link to='/invest/plan'>사업계획서/IR</Link></li>
                        <li><Link to='/invest/strategy'>전략수립</Link></li>
                        <li><Link to='/invest/empowerment'>역량강화</Link></li>
                        <li><Link to='/invest/process'>투자 컨설팅 과정</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/abroad'>해외 진출 사업</Link></li>
                        <li><Link to='/abroad/case'>해외 진출 지원</Link></li>
                        <li><Link to='/abroad/process'>해외 지사 사업</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/industry'>산업 별 이슈</Link></li>
                        <li><Link to='/industry/confirm'>기업/기술 인증</Link></li>
                        <li><Link to='/industry/transfer'>기술 이전</Link></li>
                        <li><Link to='/industry/trade'>기술 거래</Link></li>
                        <li><Link to='/industry/value'>가치 평가</Link></li>
                        <li><Link to='/industry/credit'>신용 평가</Link></li>
                        <li><Link to='/industry/support'>지원 사업</Link></li>
                    </ul>
                    <ul className='main-sub-nav-ul'>
                        <li className="sub-nav-star"><div className='navStar'></div></li>
                        <li><Link to='/notice'>공지사항</Link></li>
                        <li><Link to='/notice/news'>뉴스</Link></li>
                        <li><Link to='/notice/support'>기업지원정보</Link></li>
                        <li><Link to='/notice/info'>컨설팅 실적</Link></li>
                        <li><Link to='/notice/inquiry'>문의하기</Link></li>
                        <li><Link to='/notice/request'>상담신청</Link></li>
                    </ul>
                    </div>
                    <div className='main-sub-nav-left'></div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className='header-right'>
          <button className='lang-box'>
            <IoEarth size="1rem" fill='#efefef' />KOR
            <div className='lang-list'>
              <Link to='/' className='lang'>KOR</Link>
              <Link to='/english' className='lang'>ENG</Link>
              <Link to='/china' className='lang'>CH</Link>
            </div>
          </button>
          <SearchForm />
          <button onClick={activeMenu} className='header-hamburger-btn'><TiThMenu size="2rem" fill='#efefef' /></button>
          <Hamburger state={active} />
        </div>
      </div>
    </header>
  );
};

export default Header;