import React from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";
import "./../../css/MnAIpo/mnaresult.css";

const MAResult = ({title, sub}) => {
  return (
    <div id="maresult">
      <MAHeader title={title} sub={sub} />
      <div id="SubInner">
        <section className="mnaipo-maresult-section1">
          <div className="mnaipo-maresult-title-container">
            <h2 className="mnaipo-maresult-title">M&A 성과</h2>
          </div>
          <section className="mnaipo-maresult-section">
            <span className="mnaipo-maresult-part">M&A 성과 결정 요인 및 성과</span>
            <div>
              <div className="mnaipo-maresult-part-header">
                <div>M&A 절차</div>
                <div>M&A 성과 결정 요인</div>
                <div>M&A의 성과</div>
              </div>
              <div className="mnaipo-maresult-part-main">
                <div className="mnaipo-maresult-part-main-left">
                  <div>M&A 팀의 구성</div>
                  <div>전략적 검토</div>
                  <div>재무적인 기업가치의 평가</div>
                  <div>M&A 조건에 대한 협상</div>
                  <div>PMI</div>
                </div>
                <div className="mnaipo-maresult-part-main-center">
                  <div>
                    <dl>
                      <dt>전략적 의사결정 요인</dt>
                      <dd>최고경영자의 의사결정 스타일</dd>
                      <dd>M&A의 경험 유무</dd>
                      <dd>사전조사의 철저여부</dd>
                      <dd>인수기업과 피인수기업의 상호의존성</dd>
                      <dd>인수의사결정과정의 합리성</dd>
                    </dl>
                  </div>
                  <div>
                    <dl>
                      <dt>PMI 관리상의 요인</dt>
                      <dd>절차적 통합의 성공여부</dd>
                      <dd>실질적 통합의 성공여부</dd>
                      <dd>경영 및 사회문화적 통합의 성공 여부</dd>
                    </dl>
                  </div>
                </div>
                <div className="mnaipo-maresult-part-main-right">
                  <div>
                    <dl>
                      <dt>성과</dt>
                      <dd>새로운 가치창출</dd>
                      <dd>전략적 성과와 재무적 성과</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default MAResult;
