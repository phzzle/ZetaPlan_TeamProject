import React from 'react';
import './mainFullpageInfo.css';
import { ImArrowRight2 } from 'react-icons/im';
import {AiOutlineBank, AiOutlineBarChart, AiOutlineFileText, AiOutlineLineChart} from 'react-icons/ai';
import {IoMdAirplane} from 'react-icons/io';
import AOS from "aos"; 
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { GrNext } from 'react-icons/gr';

const MainFullpageInfo = () => {
  useEffect(() => {
    AOS.init({
        duration : 2000
    });
});
 
  return (
    <div id='fullpageInfo'>
      <div id='MainInner'>

        <div className="main-info-container">
        <div className='main-info-title-box'>
            <h2 className='main-info-title'>
              <span> BUSINESS</span>
              사업소개
            </h2>
          </div>
        <div className='main-info-box'>
        <div class="layout_section main_business">
                    <ul class="business_list"  data-aos='fade-up'>
                        <li>
                            <div class="business_cont">
                              <AiOutlineLineChart id="info-icons"/>
                                <p>투자IR</p>
                                <p className='big-txt'> 334 <span className='small-txt'>건</span></p>
                            </div>
                            <div class="business_box">
                                <a href="/business/building/overview.do" class="business_link">
                                    <div class="business_link_img">
                                       {/*  <img src="/resource/images/main/main_business_img01.jpg" alt="건축사업"> */}
                                    </div>
                                    <dl>
                                        <dt>투자IR</dt>
                                        <dd>
                                        국,내외 투자기관 네트워크로 <br />
                                        최적의 IR을 지원합니다
                                        </dd>
                                    </dl>
                                </a>
                            </div>
                        </li> 
                        <li>
                            <div class="business_cont">
                            <AiOutlineBank id="info-icons" />
                                <p>M&A</p>
                                <p className='big-txt'> 334 <span className='small-txt'>건</span></p>
                            </div>
                            <div class="business_box">
                                <a href="/business/house/overview.do" class="business_link">
                                    <div class="business_link_img">
                                        {/* <img src="#" alt="주택사업"> */}
                                    </div>
                                    <dl>
                                        <dt>M&A</dt>
                                        <dd>
                                        제휴 네트워크의 IB, 로펌, <br /> 회계법인으로
                                        구성된  <br /> 최고의 M&A 팀 
                                        </dd>
                                    </dl>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="business_cont">
                            <AiOutlineBarChart id="info-icons"/>
                                <p>IPO</p>
                                <p className='big-txt'> 334 <span className='small-txt'>건</span></p>
                            </div>
                            <div class="business_box">
                                <a href="/business/civil/overview.do" class="business_link">
                                    <div class="business_link_img">
                                      {/*   <img src="/resource/images/main/main_business_img03.jpg" alt="토목사업"> */}
                                    </div>
                                    <dl>
                                        <dt>IPO</dt>
                                        <dd>
                                        체계적인 분석으로 <br />
                                        최적의 IPO 절차 컨설팅을 제공합니다
                                        </dd>
                                    </dl>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="business_cont">
                            <IoMdAirplane id="info-icons"/>
                                <p>해외진출</p>
                                <p className='big-txt'> 334 <span className='small-txt'>건</span></p>
                            </div>
                            <div class="business_box">
                                <a href="/business/plant/overview.do" class="business_link">
                                    <div class="business_link_img">
                                       {/*  <img src="/resource/images/main/main_business_img04.jpg" alt="플랜트사업"> */}
                                    </div>
                                    <dl>
                                        <dt>해외진출</dt>
                                        <dd>
                                        단계별 KEY Module 해법제공<br />
                                       
                                        </dd>
                                    </dl>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="business_cont">
                            <AiOutlineFileText id="info-icons"/>
                                <p>경영컨설팅</p>
                                <p className='big-txt'> 334 <span className='small-txt'>건</span></p>
                            </div>
                            <div class="business_box">
                                <a href="/business/plant/overview.do" class="business_link">
                                    <div class="business_link_img">
                                       {/*  <img src="/resource/images/main/main_business_img04.jpg" alt="플랜트사업"> */}
                                    </div>
                                    <dl>
                                        <dt>경영컨설팅</dt>
                                        <dd>
                                        `비용의 최소화 및 이익의 최대화` <br />
                                        실현하는 비즈니스 컨설팅
                                        </dd>
                                    </dl>
                                </a>
                            </div>
                        </li>
                    </ul>
          <ul className='sub-ul'>
            <li className='sub-li'>
            <div className='detail-box'>
                <a href='/industry/trade'>
                  <p>
                   <span id='sub-detail'>기술거래 <GrNext size='1.8rem' id='more-icon' fill='#efefef' /> </span>
                  </p>
                </a>
              </div>
            </li>
            <li className='sub-li'>
            <div className='detail-box'>
                <a href='/industry/value'>
                  <p>
                   <span id='sub-detail'>가치평가 <GrNext size='1.8rem' fill='#efefef' id='more-icon'/></span>
                  </p>
                </a>
              </div>
            </li>
            <li className='sub-li'>
            <div className='detail-box'>
                <a href='/industry/credit'>
                  <p>
                   <span id='sub-detail'>신용평가 <GrNext size='1.8rem' fill='#efefef' id='more-icon'/></span>
                  </p>
                </a>
              </div>
            </li>
            <li className='sub-li'>
            <div className='detail-box'>
                <a href='/industry/confirm'>
                  <p>
                   <span id='sub-detail'>기업인증 <GrNext size='1.8rem' fill='#efefef' id='more-icon'/></span>
                  </p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MainFullpageInfo;
