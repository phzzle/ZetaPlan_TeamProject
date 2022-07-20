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
          <table>
            <thead>
              <tr>
                <th>{data[id - 1].title}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="detail-container-header-content">
                  <div>
                    <span className="detail-container-header-view">조회수 : {data[id - 1].view}</span>
                    <span className="detail-container-header-author">작성자 : {data[id - 1].author}</span>
                  </div>
                  <div>
                    <span className="detail-container-header-date">{data[id - 1].date}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{data[id - 1].content}</td>
              </tr>
              <tr>
                <td>다음글</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryDetail;
