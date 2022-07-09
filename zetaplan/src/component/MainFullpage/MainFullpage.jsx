import React from 'react';
import Header from '../Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './mainFullpage.css';
import ChatBox from '../ChatBox/ChatBox';

const MainFullpage = () => {
  return (
    <div id='FullpageMain'>
      <Header />
      <div className='swiper-wrap'>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0} // 슬라이더 사이 마진
        slidesPerView={1} // 한 번에 보여지는 슬라이더
        loop={true} // 반복
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')} // 슬라이더를 넘길때 마다 호출
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper">
          <SwiperSlide className='swiper-slide'><img src="./img/mainFullpage/mainFullpageMain/mainbanner0.png" alt="메인 슬라이드 1" /></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src="./img/mainFullpage/mainFullpageMain/mainbanner1.png" alt="메인 슬라이드 2" /></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src="./img/mainFullpage/mainFullpageMain/mainbanner2.png" alt="메인 슬라이드 3" /></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src="./img/mainFullpage/mainFullpageMain/mainbanner3.png" alt="메인 슬라이드 4" /></SwiperSlide>
        </Swiper>
        <ChatBox />
      </div>
    </div>
  );
};

export default MainFullpage;
