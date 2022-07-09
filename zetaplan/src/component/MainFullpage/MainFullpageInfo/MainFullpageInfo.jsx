import React from 'react';
import './mainFullpageInfo.css';
import { ImArrowRight2 } from 'react-icons/im';

const MainFullpageInfo = () => {
  return (
    <div id='fullpageInfo'>
      <div id='MainInner'>
        <div className='main-info-box'>
          <div className='main-info-title-box'>
            <h2 className='main-info-title'>
              BUSINESS
              <span>사업소개</span>
            </h2>
          </div>
          <div className='fullpageInfo-boxs'>
            <div className='ir-box' id='navy'>
              <h2>투자IR</h2>
              <p className='info-detail'>
                국,내외 투자기관 네트워크로 최적의 IR 지원
              </p>
              <div className='detail-box'>
                <a href='#'>
                  <p>
                    <ImArrowRight2 /> 자세히보기
                  </p>
                </a>
              </div>
            </div>
            <div className='ir-box' id='ivy'>
              <h2>M&A</h2>
              <p className='info-detail'>
                {' '}
                제휴 네트워크의 IB, 로펌, 회계법인으로 구성된 <br /> 최고의 M&A
                팀
              </p>
              <div className='detail-box'>
                <a href='#'>
                  <p>
                    {' '}
                    <ImArrowRight2 fill='rgb(43, 53, 64)' /> 자세히보기{' '}
                  </p>
                </a>
              </div>
            </div>
            <div className='ir-box' id='navy'>
              <h2>IPO</h2>
              <p className='info-detail'>
                체계적인 분석으로 최적의 IPO 절차 컨설팅 제공{' '}
              </p>
              <div className='detail-box'>
                <a href='#'>
                  <p>
                    <ImArrowRight2 /> 자세히보기
                  </p>
                </a>
              </div>
            </div>
            <div className='ir-box' id='ivy'>
              <h2>해외진출</h2>
              <p className='info-detail'>단계별 KEY Module 해법제공</p>
              <div className='detail-box'>
                <a href='#'>
                  <p>
                    <ImArrowRight2 fill='rgb(43, 53, 64)' /> 자세히보기
                  </p>
                </a>
              </div>
            </div>
            <div className='ir-box' id='navy'>
              <h2>경영컨설팅</h2>
              <p className='info-detail'>
                `비용의 최소화 및 이익의 최대화`를 실현하는 <br /> 비즈니스
                서비스 컨설팅{' '}
              </p>
              <div className='detail-box'>
                <a href='#'>
                  <p>
                    <ImArrowRight2 /> 자세히보기
                  </p>
                </a>
              </div>
            </div>
            <div className='ir-box' id='ivy'>
              <h2>서브사업</h2>
              <div className='detail-box'>
                <a href='#'>
                  <p>
                    <ImArrowRight2 fill='rgb(43, 53, 64)' /> 자세히보기
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFullpageInfo;
