import React from "react";
import "./IndustryDetail.css";
import DetailFooter from "../../Detail/DetailFooter";
import IndustryHeader from "../../Detail/IndustryHeader";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

const IndustryDetail = ({title, sub}) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("/data/techTrade_detail.json")
      .then(res => res.json())
      .then(data => setLists(data));
  });

  let {num} = useParams;

  return (
    <div id="IndustryDetail">
      <IndustryHeader title={title} sub={sub} />
      <div id="SubInner">
        <div className="company-title-container">
          <h2 className="company-title">거래정보</h2>
          <div className="company-title-line"></div>
        </div>
        <div className="detail-container">
          {[...lists].map(({num, title, author, date, view, content}) => {
            return <div className="detail-container-header"></div>;
          })}
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryDetail;
