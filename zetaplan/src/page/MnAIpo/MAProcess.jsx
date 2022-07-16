import React, {useState} from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";
import "./../../css/MnAIpo/mnaprocess.css";
import MnaProcess1 from "./../../component/MnaIpo/MnaProcess/MnaProcess1";
import MnaProcess2 from "./../../component/MnaIpo/MnaProcess/MnaProcess2";
import {MNA_PROCESS_DATA} from "./../../component/MnaIpo/MnaProcess/MnaData";

const MAProcess = ({title, sub}) => {
  const [content, setContent] = useState("first");

  const buttonValueSetting = e => {
    const {name} = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <MnaProcess1 />,
    second: <MnaProcess2 />,
  };

  return (
    <div id="mnaprocess">
      <MAHeader title={title} sub={sub} />
      <div id="SubInner">
        <section className="mnaipo-maprocess-section1">
          <div className="mnaipo-maprocess-title-container">
            <h2 className="mnaipo-maprocess-title">M&A 절차 및 컨설팅 과정</h2>
            <div className="mnaipo-maprocess-title-line"></div>
          </div>
        </section>
        <section className="mnaipo-iporesult-section">
          <div>
            <nav className="detail-tab-lists">
              {MNA_PROCESS_DATA.map(data => {
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

export default MAProcess;
