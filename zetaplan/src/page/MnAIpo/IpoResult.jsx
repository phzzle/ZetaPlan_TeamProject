import React from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";
import "./../../css/MnAIpo/iporesult.css";

const IpoResult = ({title, sub}) => {
  return (
    <div id="iporesult">
      <MAHeader title={title} sub={sub} />
      <div id="SubInner">
        <section className="mnaipo-iporesult-section1">
          <div className="mnaipo-iporesult-title-container">
            <h2 className="mnaipo-iporesult-title">IPO 성과</h2>
            <div className="mnaipo-iporesult-title-line"></div>
          </div>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default IpoResult;
