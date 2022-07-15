import React, {useState} from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";
import "./../../css/MnAIpo/mnaresult.css";
import MaResult1 from "../../component/MnaIpo/MaResult/MaResult1";
import MaResult2 from "../../component/MnaIpo/MaResult/MaResult2";
import {RESULT_DATA} from "../../component/MnaIpo/MaResult/ResultData";

const MAResult = ({title, sub}) => {
  const [content, setContent] = useState("first");

  const buttonValueSetting = e => {
    const {name} = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <MaResult1 />,
    second: <MaResult2 />,
  };

  return (
    <div id="maresult">
      <MAHeader title={title} sub={sub} />
      <div id="SubInner">
        <section className="mnaipo-maresult-section1">
          <div className="mnaipo-maresult-title-container">
            <h2 className="mnaipo-maresult-title">M&A 절차 및 성과</h2>
            <div className="mnaipo-maresult-title-line"></div>
          </div>
        </section>
        <section className="mnaipo-maresult-section">
          <div>
            <nav className="detail-tab-lists">
              {RESULT_DATA.map(data => {
                return (
                  <button
                    className={content === data.name ? "detail-tab-list active" : "detail-tab-list"}
                    onClick={buttonValueSetting}
                    name={data.name}
                    key={data.id}
                  >
                    {data.text}
                  </button>
                );
              })}
            </nav>
            {content && <div className="detail-tab-content ">{selectComponent[content]}</div>}
          </div>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default MAResult;
