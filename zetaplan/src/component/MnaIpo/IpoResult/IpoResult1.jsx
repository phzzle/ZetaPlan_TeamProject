import React from "react";
import "./../../../css/MnAIpo/iporesult.css";

const IpoResult1 = () => {
  return (
    <div id="IpoResult1">
      <section className="mnaipo-ma-section">
        <span className="mnaipo-ma-part">유가증권시장 개요</span>
        <div>
          유가증권시장은 거래소법 제2조 1항은 ‘유가증권시장이라 함은 유가증권의 매매거래를 위하여 한국증권선물거래소가
          개설하는 코스닥시장 이외의 시장을 말한다’라고 규정하고 있으며, 유가증권시장에 상장시 법인은 수익성, 규모,
          재무건전성 및 유통가능성에 대한 거래소(KRX : Korea EXchange)가 정하는 일정한 요건을 충족하면 상장이
          가능합니다.
        </div>
      </section>
      <section className="mnaipo-ma-section">
        <span className="mnaipo-ma-part"> 코스피(KOSPI ; Korean Composite Stock Price Index)</span>
        <div>
          코스피란 증권거래소에 유가증권시장에 상장된 기업종목을 대상으로 산출되며, 산출방 법은 1980년 1월 4일을
          기준으로 이날 종합주가지수를 100으로 정하고, 개별종목의 주가에 상장주식수를 가중한 기준시점의 시가총액과
          비교시점의 시가총액을 대비하여 산출합니다.
        </div>
        <div>★ KOSPI = 비교시점의 시가총액 / 기준시점의 시가총액 × 100</div>
      </section>
      <section className="mnaipo-ma-section">
        <span className="mnaipo-ma-part"> 상장 요건</span>
        <div>
          코스피란 증권거래소에 유가증권시장에 상장된 기업종목을 대상으로 산출되며, 산출방 법은 1980년 1월 4일을
          기준으로 이날 종합주가지수를 100으로 정하고, 개별종목의 주가에 상장주식수를 가중한 기준시점의 시가총액과
          비교시점의 시가총액을 대비하여 산출합니다.
        </div>
        <div>★ KOSPI = 비교시점의 시가총액 / 기준시점의 시가총액 × 100</div>
      </section>
    </div>
  );
};

export default IpoResult1;
