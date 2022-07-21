/* global kakao */
import React, {useEffect} from "react";
import DetailFooter from "../../component/Detail/DetailFooter";
import Header from "../../component/Header/Header";
import "./EnglishInfo.css";

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
    <div id="EnglishInfo">
      <Header />
      <div id="SubInner">
        <section className="EnglishInfo-section1" id="EnglishInfo-section">
          <h1 className="EnglishInfo-section-title">About Us</h1>
          <div className="EnglishInfo-section-bar"></div>
          <div className="EnglishInfo-section1-img"></div>
          <div className="EnglishInfo-section1-img-line"></div>
          <ul className="EnglishInfo-section1-content">
            <li>
              <span className="bold">Zeta Plan Investment Co, Ltd. </span> was established in 2006 as a investment
              consulting company specializing in Venture Investment, Technology Transfer, M&A, Management Consulting,
              and support services perform overseas. South Korea’s Bio, IT, Environment, Energy, Medical, High-tech
              Machinery, Aerospace, Agri-Food, Marine Fisheries, Media, Content, Automobiles, Semiconductors with
              early-stage investments in high technology, advanced manufacturing technology commercialization,
              technology transfer the work is carried out systematically as China, Asia, Europe and the United States.
            </li>
            <li>
              Particularly Zeta Plan Investment Co, Ltd. Korea Venture Business Association 15,000 companies, Technology
              Small Business Innovation Association 15,000 companies, Industry and Technology Development Association
              30,000 companies, owned concluded an agreement for the excellent technical support global technology
              commercialization and technology transfer services promoting.
            </li>
          </ul>
        </section>
        <section className="EnglishInfo-section2" id="EnglishInfo-section">
          <h1 className="EnglishInfo-section-title">Focus on Technology Transfer</h1>
          <div className="EnglishInfo-section-bar"></div>
          <div className="EnglishInfo-section2-content">
            <div>
              Zeta Plan Investment Co, Ltd. has been a focus on promoting technology transfer business between Korea and
              China. <br /> South Korea and China in the demand for technology and supply technology to perform
              technology transfer and identify the role negotiation channels between the two countries.
            </div>
          </div>
          <div>
            <div className="bold"> - Global Technology Transfer Network China and World Wide</div>
            <div className="EnglishInfo-section2-content-img-have">
              <div className="EnglishInfo-section2-content-img"></div>
              <ul className="EnglishInfo-section2-content-img-right">
                <li>Zeta Plan Investment Co, Ltd. is to form a global Technology Transfer network to 15 countries. </li>
                <li>
                  And a global technology transfer, especially Beijing, Tianjin, Shanghai, Qingdao, Zhejiang, Wenzhou
                  and Hong Kong, has established a cooperative network for technology Transfer.
                </li>
              </ul>
            </div>
            <div className="EnglishInfo-section2-content-img-worldwide"></div>
          </div>
        </section>
        <section className="EnglishInfo-section3" id="EnglishInfo-section">
          <h1 className="EnglishInfo-section-title">Our Clients</h1>
          <div className="EnglishInfo-section-bar"></div>
          <dl>
            <dt>- Public Clients</dt>
            <dd className="EnglishInfo-section3-public-img"></dd>
            <dt>- Company Clients</dt>
            <dd className="EnglishInfo-section3-company-img"></dd>
            <dt>- University Clients</dt>
            <dd className="EnglishInfo-section3-univ-img"></dd>
          </dl>
        </section>
        <section className="EnglishInfo-section4" id="EnglishInfo-section">
          <h1 className="EnglishInfo-section-title">Business Area</h1>
          <div className="EnglishInfo-section-bar"></div>
        </section>
        <section className="company-road-map-wrap">
          <div id="map" style={{width: "800px", height: "400px"}}></div>
        </section>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LYPC6ElHa_s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <DetailFooter />
    </div>
  );
};

export default EnglishInfo;
