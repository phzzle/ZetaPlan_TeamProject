import React from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";
import "./../../css/MnAIpo/mnaprocess.css";

const MAProcess = ({title, sub}) => {
  return (
    <div id="mnaprocess">
      <MAHeader title={title} sub={sub} />
      <div id="SubInner">
        <section className="mnaipo-maprocess-section1">
          <div className="mnaipo-maprocess-title-container">
            <h2 className="mnaipo-maprocess-title">M&A 컨설팅 과정</h2>
            <div className="mnaipo-maprocess-title-line"></div>
          </div>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default MAProcess;
