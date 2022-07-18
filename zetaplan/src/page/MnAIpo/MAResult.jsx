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
            <div className="mnaipo-maresult-title-line"></div>
          </div>
          <section className="mnaipo-maresult-section">
            <span className="mnaipo-maresult-part">M&A 기법 및 성과</span>
            <div className="mnaipo-maresult-part-img"></div>
          </section>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default MAResult;
