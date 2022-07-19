import React from "react";
import "./IndustryDetail.css";
import DetailFooter from "../../Detail/DetailFooter";
import IndustryHeader from "../../Detail/IndustryHeader";
import {useState, useEffect} from "react";

const IndustryDetail = ({title, sub}) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/data/techTrade_detail.json")
      .then(res => res.json())
      .then(res => setDetails(res));
  }, []);

  return (
    <div id="IndustryDetail">
      <IndustryHeader title={title} sub={sub} />
      <div id="SubInner">
        <div className="company-title-container">
          <h2 className="company-title">거래정보</h2>
          <div className="company-title-line"></div>
        </div>
        <div className="detail-container">
          <div className="detail-container-header">
            {[...details].map(({id, title, author, date, view, content}) => {
              return (
                <h1 className="detail-container-title" key={id}>
                  {title}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryDetail;
