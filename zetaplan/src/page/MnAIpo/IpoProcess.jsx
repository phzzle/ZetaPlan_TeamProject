import React, {useState} from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";
import "./../../css/MnAIpo/ipoprocess.css";
import {IPO_PROCESS_DATA} from "./../../component/MnaIpo/IpoProcess/IpoProcessData";
import IpoProcess1 from "../../component/MnaIpo/IpoProcess/IpoProcess1";
import IpoProcess2 from "../../component/MnaIpo/IpoProcess/IpoProcess2";

const IpoProcess = ({title, sub}) => {
  const [content, setContent] = useState("first");

  const buttonValueSetting = e => {
    const {name} = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <IpoProcess1 />,
    second: <IpoProcess2 />,
  };

  return (
    <div id="ipoprocess">
      <MAHeader title={title} sub={sub} />
      <div id="SubInner">
        <section className="mnaipo-ipoprocess-section1">
          <div className="mnaipo-ipoprocess-title-container">
            <h2 className="mnaipo-ipoprocess-title">IPO 절차 및 컨설팅 과정</h2>
            <div className="mnaipo-ipoprocess-title-line"></div>
          </div>
        </section>
        <section className="mnaipo-ipoprocess-section">
          <div>
            <nav className="detail-tab-lists">
              {IPO_PROCESS_DATA.map(data => {
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

export default IpoProcess;
