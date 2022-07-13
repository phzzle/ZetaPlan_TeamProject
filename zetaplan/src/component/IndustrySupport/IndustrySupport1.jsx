import React from 'react';
import './../../css/Indusrty/industrySupport.css';

const IndustrySupport1 = () => {
  return (
    <div id='IndustrySupport1'>
      <h6 className='industry-support1-sub'>기술금융의 목적</h6>
      <p className='industry-support1-des'>기술금융은 기업의 재무정보 이외에 기술정보를 추가로 고려함으로써 신용도 판단 예측 의 정확성을 높이고,<br /> 담보력이 부족한 벤처창업기업을 대상으로 기술평가 전문기관의 기 술성∙사업성 평가를 통해 금융기관의 사업화 자금 대출 및 펀드운용사의 투자를 지원함으로써,<br /> 중소기업 및 벤처・창업기업의 성장을 지원하고 개발기술의 사업화를 추진하는 데 목적이 있다.</p>
      <img src="/img/Industry/IndustrySupport/IndustrySupport1.png" alt="" />
      <span className='industry-support1-refer'>* TCB : Tech Credit Bureau (기술신용평가기관)</span>
      <span className='industry-support1-refer'>* TDB : Tech Data Base(기술금융데이터베이스)</span>
      <span className='industry-support1-refer'>* IP : Intellectual Property(지적(지식)재산권 : 특허, 실용신안 디자인, 상표, 저작권 등)</span>
      <h6 className='industry-support1-sub'>기술금융의 지원방식</h6>
      <p className='industry-support1-des last-des'>기술금융의 지원방식은 TCB 전문기관을 통한 기술력 등급의 평가 대출과 기업이 보유한 지적재산권의 가치를 평가하여 지원하는<br />특허권담보대출, 우수 지식재산권의 보유한 기업의 IP사업화 보증, 지적재산권의 판매 후 자금을 조달하고 독점적인 사용권한을 갖는 방식인<br />세일앤드라이센스백(Sale & License back)을 통한 지적재산권 유동화 방식과, 보유한 우수한 기술력과 지적재산권의 평가를 통한 IP우수기업 투자하는 형태 등 크게 4 가지 형태로 나누어진다.</p>
    </div>
  );
};

export default IndustrySupport1;