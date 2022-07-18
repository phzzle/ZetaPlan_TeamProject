import React from "react";
import "./../../../css/MnAIpo/mnaprocess.css";

const MnaProcess1 = () => {
  return (
    <div id="mnaprocess" className="mnaprocess1">
      <section className="mnaipo-maprocess-section">
        <span className="mnaipo-maprocess-part">일반적인 절차</span>
        <div className="mnaipo-maprocess-part-general"></div>
      </section>
      <section className="mnaipo-maprocess-section">
        <span className="mnaipo-maprocess-part">중개기관을 통한 절차</span>
        <div className="mnaipo-maprocess-part-broker"></div>
      </section>
    </div>
  );
};

export default MnaProcess1;
