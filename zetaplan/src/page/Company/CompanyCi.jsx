import React from "react";
import CompanyHeader from "../../component/Detail/CompanyHeader";
import DetailFooter from "../../component/Detail/DetailFooter";
import "./../../css/Company/companyCi.css";

const CompanyCi = ({title, sub}) => {
  return (
    <div id="companyCi">
      <CompanyHeader title={title} sub={sub} />
      <div id="SubInner">
        <section>
          <div className="logo"></div>
          <div className="logo_content">
            <div className="logo_content_top">제타플랜의 CI는 다음과 같은 의미가 있습니다.</div>
            <div className="logo_content_middle">
              Zeta는 하늘의 중심이 되는 큰곰자리(Big Bear, 北斗七星)의 여섯 번째 별을 의미하며, <br />
              그리스어에서 여섯 번째별 미자르(Mizar)星을 의미합니다. <br />
              북두칠성의 여섯 번째를 개양(開陽) 또는 무곡(武曲), 천심(天心) 이라 칭하는데, <br /> 가장 큰 권위와 힘을
              가지고 인간에게 복을 가져다는 주는 별자리입니다.
            </div>
            <div className="logo_content_bottom">
              <a href="./../../../public/img/common/logo_png" download>
                <button className="download">(주) 제타플랜 CI 다운로드</button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div>CI 적용 색상규정</div>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default CompanyCi;
