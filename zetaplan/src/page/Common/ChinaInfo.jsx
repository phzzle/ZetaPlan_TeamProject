/* global kakao */
import React, { useEffect } from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import Header from '../../component/Header/Header';

const ChinaInfo = () => {
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(39.96654428204684, 116.38673476630021),
      level: 3
    };
    
    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(39.96654428204684, 116.38673476630021); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, [])

  return (
    <div>
      <Header />
      <div id='SubInner'>
        <div className='company-road-map-wrap'>
          <img id='map' src="/img/common/china_map.png" alt="" />
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default ChinaInfo;