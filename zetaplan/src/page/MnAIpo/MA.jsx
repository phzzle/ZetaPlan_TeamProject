import React from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";
import "./../../css/MnAIpo/mna.css";

const MA = ({title, sub}) => {
  return (
    <div id="ma">
      <MAHeader title={title} sub={sub} />
      <div id="SubInner">
        <section className="mnaipo-ma-section1">
          <div className="mnaipo-ma-title-container">
            <h2 className="mnaipo-ma-title">M&A</h2>
            <div className="mnaipo-ma-title-line"></div>
          </div>
        </section>
        <section className="mnaipo-ma-section">
          <span className="mnaipo-ma-part">M&A 란</span>
          <div>
            M&A란 합병(Mergers)과 인수(Acquisitions)가 합성된 용어로 기업이 다른 기업을 합병하거나 매수하는 일을
            뜻합니다.
          </div>
        </section>
        <section className="mnaipo-ma-section">
          <span className="mnaipo-ma-part">M&A의 형태</span>
          <div>
            M&A의 형태는 합병(Mergers), 삼각합병(Triangular merger), 소규모 합병, 역 합병(Reverse mergers),
            분할(Span-off), 주식교환(Swap), 영업양수도, 자산부채이전(P&A), 인수개발(A&D), LBO(Leveraged Buyout) 로
            나뉩니다.
          </div>
        </section>
        <section className="mnaipo-ma-section">
          <span className="mnaipo-ma-part">M&A의 분류</span>
        </section>
        <section className="mnaipo-ma-section">
          <span className="mnaipo-ma-part">M&A의 목적</span>
          <div>
            <div>
              <h1>경영전략적 동기</h1>
              <ul>
                <li> 지속적 성장 : 내적성장의 한계를 탈피하여 외부자원의 인수· 합병을 통해 외적성장</li>
                <li> 효율의 극대화 : 비수익 사업부문의 처분을 통해 주력사업에 집중</li>
                <li> 세계화 추구 : 무역마찰이나 환율변동을 피하기 위해 해외에 생산/판매 거점을 확보</li>
                <li>첨단기술의 도입 : 기술의 라이프사이클이 짧아짐에 따라 R&D 비용과 시간을 절감</li>
              </ul>
            </div>
            <div>
              <h1>영업적 동기</h1>
              <ul>
                <li> 위험분산 효과 : 동종 기업간의 M&A로 생산규모가 확대되어 직간접 생산비 절감</li>
                <li> 자금조달 능력확대 : 수평적 M&A를 통해 시장점유율을 증가시키고 경쟁력을 강화</li>
                <li> 조세절감 : 진입 시간과 비용을 줄이고 진입장벽에 따른 마찰을 감소</li>
              </ul>
            </div>
            <div>
              <h1>재무적 동기</h1>
              <ul>
                <li> 위험분산 효과 : 사업다각화가 이루어져 경제환경 변화에 따른 적응력 제고</li>
                <li> 자금조달 능력확대 : 기업규모가 커지고 파산위험이 줄거나 부채비율 낮은 기업을 인수할 경우</li>
                <li> 자본이득 실현 : 저평가 기업을 레버리지를 일으켜 인수후에 정상화시켜 재매각</li>
                <li> 조세절감 : 흑자기업과 적자기업이 합병함으로써 이월결손금으로 인한 조세혜택</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default MA;
