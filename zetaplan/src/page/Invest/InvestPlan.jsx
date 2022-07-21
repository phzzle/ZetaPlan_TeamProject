import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';
import '../../css/Invest/investPlan.css'


const InvestPlan = ({ title, sub }) => {
  return (
    <div id='InvestPlan'>
      <div id='Suninner'>
        <InvestHeader title={title} sub={sub} />
        <div id='SubInner'>
          <section className="invest-title-container">
            <h2 className="invest-title">사업계획서/IR</h2>

          </section>
          <div className='investplan-image-container'>
            <h2 className='company-road-part'>투자 IR 사업계획서 </h2>
            <img src="/img/Invest/plan.png" alt="" />
          </div>
          <div className='analysis'>
            <section className='section'>
              <h2 className='company-road-part'>기업분석</h2>
              <p>체크리스트 진단을 통해 종합적인 기업분석 전략보고서가 만들어지고, 내부적으로 임직원이 향후 기업의 향방 및 진로를 결정하는데 보다 도움이 될 수 있도록 구성합니다.</p>
              <p>기업성공 전략계획 수립</p>
              <p>기업의 IR을 위한 기본 사업계획서 작성</p>
              <p>기업지원을 위한 기초자료로 활용</p>
            </section>
            <section className='section'>
              <h3 className='company-road-part'>작성주체</h3>
              <p> [기업+파트너+기타] →단계별로 각 주체가 관련 내용 확인하여 최종완성</p>
            </section>
            <section className='section'>
              <h3 className='company-road-part'>작성기간</h3>
              <p>1~2개월 소요</p>
            </section>
            <section className='section s4'>
              <table>
                <tr>
                  <td>기업요약</td>
                  <td>외부환경/내부역량/사업전략</td>
                  <td>재무분석</td>
                  <td>기업 발전을 위한 제안</td>
                </tr>
                <tr>
                  <td rowSpan={4}>– 보유기술
                    <br />– 회사현황
                    <br />– 사업추진 단계
                    <br />– 사업화 발전 계획</td>
                  <td rowSpan={4}>– 분석요약
                    <br /> – 기준에 따른 평점제시
                    <br />– 파트별 분석내용 활용법
                    <br /> – 기술분석 및 기술가치평가</td>
                  <td rowSpan={4}>– 추정재무제표
                    <br /> – 기업 활용 재무프로그램제시
                    <br />– 투자유치를 위한 기업가치평가</td>
                  <td rowSpan={4}>– 기술개발로드맵
                    <br /> – 사업화로드맵
                    <br /> – 성공을 위한 분석자 및 전문컨설턴트의 의견</td>
                </tr>
              </table>
            </section>
          </div>
        </div>
        <DetailFooter />
      </div>
    </div>
  );
};

export default InvestPlan;