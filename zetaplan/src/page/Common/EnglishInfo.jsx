/* global kakao */
import React, {useEffect} from "react";
import DetailFooter from "../../component/Detail/DetailFooter";
import Header from "../../component/Header/Header";

const EnglishInfo = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.475698, 126.881645),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(37.475698, 126.881645);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div className="EnglishInfo">
      <Header />
      <div id="SubInner">
        <div className="EnglishInfo-header">
          <section>
            <h1>公司信息</h1>
            <div>
              Zeta Plan
              Investment株式会社成立于2006年，是专门提供风险投资、技术转让、M&A、经营咨询，及海外支持服务的投资咨询公司。
            </div>
            <div>
              中国、亚洲、欧洲和美国正在对大韩民国的生物、IT、环境、能源、医疗、高科技机械、航空、农产品、水产品、媒体、内容、汽车、半导体、高新技术、高级制造技术的商业化、技术转让具体实施投资。
            </div>
            <div>
              尤其是，Zeta Plan
              Investment株式会社与风险事业协会的15,000家公司、中小企业创新协会的15,000家公司、产业及技术开发协会的30,000家公司签订了促进优质技术支持、世界技术商业化、技术转让服务的合同。
            </div>
          </section>
        </div>
        <div className="EnglishInfo-container">
          <section>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/LYPC6ElHa_s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </section>
          <section className="company-road-map-wrap">
            <div id="map" style={{width: "800px", height: "400px"}}></div>
          </section>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default EnglishInfo;
