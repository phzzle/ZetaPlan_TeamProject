import React from 'react';
import CompanyHeader from '../../component/Detail/CompanyHeader';
import DetailFooter from '../../component/Detail/DetailFooter';
import '../../css/Company/CompanyManpower.css';

const CompanyManpower = ({ title, sub }) => {
  return (
    <div>
      <CompanyHeader title={title} sub={sub} />
      <div id='ManPowerSubInner' className='company-manpower-container'>
        <h1 className='manpower-title'>
          제타플랜 인베스트의 얼굴들을 소개합니다.
        </h1>
        <ul className='manpower-box'>
          <a href='#'>
            <li className='manpower-image'>
              <span>김미나</span>
              <span>대표 컨설턴트</span>
              <div className='manpower-image-cover'></div>
            </li>
          </a>
          <li className='manpower-image'>
            <span>홍현권</span>
            <span>대표 컨설턴트</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>임용택</span>
            <span>책임 컨설턴트 / 이사</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>송성호</span>
            <span>책임 컨설턴트 / 이사</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>이보형</span>
            <span>책임 컨설턴트 / 이사</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>기 철</span>
            <span>책임 컨설턴트 / 이사</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>권혁장</span>
            <span>책임 컨설턴트 / 이사</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>허병무</span>
            <span>책임 컨설턴트 / 이사</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>최근영</span>
            <span>책임 컨설턴트</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>임성진</span>
            <span>책임 컨설턴트</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>편은범</span>
            <span>수석 컨설턴트</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>김왕용</span>
            <span>수석 컨설턴트 / 고문</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>전병우</span>
            <span>수석 컨설턴트 / 고문</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>엄성식</span>
            <span>수석 컨설턴트 / 이사</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>이경진</span>
            <span>수석 컨설턴트</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>조영성</span>
            <span>책임 컨설턴트 / 이사</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>정순암</span>
            <span>전무이사</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>박민경</span>
            <span>선임 컨설턴트</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>김보람</span>
            <span>컨설턴트</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>최성용</span>
            <span>컨설턴트</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>이슬비</span>
            <span>컨설턴트</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>정모철</span>
            <span>중국</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>Xia Wenhuan</span>
            <span>중국</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>Zhao Xieruo</span>
            <span>중국</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>Nguyen Dinh Nam</span>
            <span>베트남</span>
            <div className='manpower-image-cover'></div>
          </li>
          <li className='manpower-image'>
            <span>Nguyen Viet Khoa</span>
            <span>베트남</span>
            <div className='manpower-image-cover'></div>
          </li>
        </ul>
      </div>
      <DetailFooter />
    </div>
  );
};

export default CompanyManpower;
