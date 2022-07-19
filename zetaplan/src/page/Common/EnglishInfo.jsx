/* global kakao */
import React, { useEffect } from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import Header from '../../component/Header/Header';

const EnglishInfo = () => {
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.475698, 126.881645),
      level: 3
    };
    
    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.475698, 126.881645); 
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
          <div id="map" style={{width:"800px", height:"400px"}}></div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default EnglishInfo;