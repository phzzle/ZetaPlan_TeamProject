import React from "react";
import "./IndustryDetail.css";
import DetailFooter from "../../Detail/DetailFooter";
import IndustryHeader from "../../Detail/IndustryHeader";
import {useParams} from "react-router-dom";

const IndustryDetail = ({data}) => {
  let {id} = useParams();

  return (
    <div id="IndustryDetail">
      <IndustryHeader title="Industry" sub="거래정보" />
      <div id="SubInner">
        <div className="company-title-container">
          <h2 className="company-title">거래정보</h2>
          <div className="company-title-line"></div>
        </div>
        <div className="detail-container">
          <div className="detail-container-header">
            <div className="detail-container-header-title">{data[id].title}</div>
            <div className="detail-container-header-content">
              <div>
                <span className="detail-container-header-view">조회수 : {data[id].view}</span>
                <span className="detail-container-header-author">작성자 : {data[id].author}</span>
              </div>
              <div>
                <span className="detail-container-header-date">{data[id].date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryDetail;
