import React, {useState} from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";
import "./../../css/MnAIpo/iporesult.css";
import {IPO_RESULT_DATA} from "../../component/MnaIpo/IpoResult/IpoData";
import IpoResult1 from "./../../component/MnaIpo/IpoResult/IpoResult1";
import IpoResult2 from "./../../component/MnaIpo/IpoResult/IpoResult2";
import IpoResult3 from "./../../component/MnaIpo/IpoResult/IpoResult3";
import IpoResult4 from "./../../component/MnaIpo/IpoResult/IpoResult4";

const IpoResult = ({title, sub}) => {
  const [content, setContent] = useState("first");

  const buttonValueSetting = e => {
    const {name} = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <IpoResult1 />,
    second: <IpoResult2 />,
    third: <IpoResult3 />,
    fourth: <IpoResult4 />,
  };

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
        <section className="mnaipo-iporesult-section">
          <div>
            <nav className="detail-tab-lists">
              {IPO_RESULT_DATA.map(data => {
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

export default IpoResult;
