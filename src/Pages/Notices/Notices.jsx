import React from 'react'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Notices = () => {
  return (
    <div>
       <div className="mt-3">
            <div className="container text-center row">
                <div className="col-7 mt-1">
                    <span className='fs-6 fw-bold'>Important Notes</span>
                </div>
                <div className="col-4">
                   <div className="row gap-2">
                    <div className="col-5"><span className='btn border'><FaAngleLeft/></span></div>
                    <div className="col-5"><span className='btn border'><FaAngleRight/></span></div>
                   </div>
                </div>
            </div>
        </div>
        <br />
{/* COURSEL OR SWIPER FOR IMPORTANT NOTICE IS HERE FORM SWIPERJS */}
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={5}
      slidesPerView={1}
      autoplay={true}
    >
      <SwiperSlide>
        <div className="shadow p-1 border">
        <h6 className='text-truncate fw-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h6>
         <p className='text-secondary'>20 Hours ago</p>
         <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
        <div className="row">
            <div className="col btn shadow border mx-3 mt-3 mb-3">View Notes</div>
            <div className="col btn shadow  mx-3 mt-3 mb-3">Dismiss</div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="shadow p-1 border">
        <h6 className='text-truncate fw-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h6>
         <p className='text-secondary'>20 Hours ago</p>
         <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
        <div className="row">
            <div className="col btn shadow border mx-3 mt-3 mb-3">View Notes</div>
            <div className="col btn shadow  mx-3 mt-3 mb-3">Dismiss</div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="shadow p-1 border">
        <h6 className='text-truncate fw-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h6>
         <p className='text-secondary'>20 Hours ago</p>
         <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
        <div className="row">
            <div className="col btn shadow border mx-3 mt-3 mb-3">View Notes</div>
            <div className="col btn shadow  mx-3 mt-3 mb-3">Dismiss</div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="shadow p-1 border">
        <h6 className='text-truncate fw-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h6>
         <p className='text-secondary'>20 Hours ago</p>
         <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
        <div className="row">
            <div className="col btn shadow border mx-3 mt-3 mb-3">View Notes</div>
            <div className="col btn shadow  mx-3 mt-3 mb-3">Dismiss</div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="shadow p-1 border">
        <h6 className='text-truncate fw-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h6>
         <p className='text-secondary'>20 Hours ago</p>
         <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
        <div className="row">
            <div className="col btn shadow border mx-3 mt-3 mb-3">View Notes</div>
            <div className="col btn shadow  mx-3 mt-3 mb-3">Dismiss</div>
        </div>
        </div>
      </SwiperSlide>
    
    </Swiper>
{/* SWIPER SECTION END HERE   */}
    </div>
  )
}

export default Notices