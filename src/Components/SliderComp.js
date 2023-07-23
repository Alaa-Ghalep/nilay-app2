import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Style/MyStyle.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from'../Images/slide1.png';
import slide2 from'../Images/slide2.png';
import slide3 from'../Images/slide3.png';
import slide4 from'../Images/slide4.png';
import slide5 from'../Images/slide5.png';
import '../Style/MyStyle.css';
// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function SliderComp() {
  const { t} = useTranslation();

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty('--progress', 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="  mySwiper"
      >
        <SwiperSlide className=''>
        <img class="d-block w-100 " src={slide1}/>

        </SwiperSlide>
        <SwiperSlide>
        <img class="d-block w-100 " src={slide2}/>
        </SwiperSlide>
     
      
        <SwiperSlide>
          <img class="d-block w-100" src={slide3}/>

        </SwiperSlide>
        <SwiperSlide>
          <img  class="d-block w-100" src={slide4}/>

        </SwiperSlide>
        <SwiperSlide>
          <img  class="d-block w-100" src={slide5} />

        </SwiperSlide>
       
        <div className='Slide' >
    <div  className='text-center text-white '
     data-aos='zoom-in'
    data-aos-duration="2000"
    data-aos-once="true">
   
    <h1 className='shewants'>{t('shewants')}</h1>
<button className='btn px-4 py-2 mt-4 fw-bold shadow-none downloadnow' style={{color:'#491D4D',backgroundColor:'#fff',borderRadius:5,}}>{t('downloadnow')}</button>
</div>
</div>
      </Swiper>
    </>
  );
}
