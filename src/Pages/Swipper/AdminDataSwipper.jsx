import React from 'react'
import { BsBuildingFill,BsPersonVideo3,BsFillPersonFill,BsClipboardCheckFill,BsChevronCompactDown ,BsChevronCompactUp} from "react-icons/bs";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const AdminDataSwipper = () => {
  return (
    <div>
        <div className="mt-2">
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={40}
      slidesPerView={3}
      autoplay={true}

    >
      <SwiperSlide>
      <div className="row shadow mb-3 p-2 mx-1 pb-4">
        <div className="col">
          <span className='text-primary fs-4 '><BsBuildingFill /></span>
        </div>
        <div className="col text-end">
          <span className='btn btn-primary rounded-pill'>2% <BsChevronCompactDown/></span>
        </div>
        <div className="row"><span className='fs-4 fw-bold p-2 mx-2'>0</span></div>
        <div className="row mb-4 fw-bold text-secondary"><span>Total Registred Campus</span></div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="row shadow p-2 mx-1 mb-3 pb-4">
        <div className="col">
          <span className='text-primary fs-4 '><BsClipboardCheckFill /></span>
        </div>
        <div className="col text-end">
          <span className='btn btn-success rounded-pill'>2% <BsChevronCompactUp/></span>
        </div>
        <div className="row"><span className='fs-4 fw-bold p-2 mx-2'>0</span></div>
        <div className="row mb-4 fw-bold text-secondary"><span>Total Registred Corporate</span></div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="row shadow  p-2 mx-1 mb-3 pb-4">
        <div className="col">
          <span className='text-primary fs-4 '><BsPersonVideo3 /></span>
        </div>
        <div className="col text-end">
          <span className='btn btn-success rounded-pill'>2% <BsChevronCompactUp/></span>
        </div>
        <div className="row"><span className='fs-4 fw-bold p-2 mx-2'>0</span></div>
        <div className="row mb-4 fw-bold text-secondary"><span>Unique Visitor</span></div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="row shadow  p-2 mx-1 mb-3 pb-4">
        <div className="col">
          <span className='text-primary fs-4 '><BsBuildingFill /></span>
        </div>
        <div className="col text-end">
          <span className='btn btn-danger rounded-pill'>2% <BsChevronCompactDown/></span>
        </div>
        <div className="row"><span className='fs-4 fw-bold p-2 mx-2'>0</span></div>
        <div className="row mb-4 fw-bold text-secondary"><span>Total Registred Student</span></div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="row shadow  p-2 mx-1 mb-3 pb-4">
        <div className="col">
          <span className='text-primary fs-4 '><BsFillPersonFill /></span>
        </div>
        <div className="col text-end">
          <span className='btn btn-danger rounded-pill'>2% <BsChevronCompactDown/></span>
        </div>
        <div className="row"><span className='fs-4 fw-bold p-2 mx-2'>0</span></div>
        <div className="row mb-4 fw-bold text-secondary"><span>Total Registred Campus</span></div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="row shadow  p-2 mx-1 mb-3 pb-4">
        <div className="col">
          <span className='text-primary fs-4 '><BsBuildingFill /></span>
        </div>
        <div className="col text-end">
          <span className='btn btn-danger rounded-pill'>2% <BsChevronCompactDown/></span>
        </div>
        <div className="row"><span className='fs-4 fw-bold p-2 mx-2'>0</span></div>
        <div className="row mb-4 fw-bold text-secondary"><span>Total Registred Campus</span></div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="row shadow  p-2 mx-1 mb-3 pb-4">
        <div className="col">
          <span className='text-primary fs-4 '><BsBuildingFill /></span>
        </div>
        <div className="col text-end">
          <span className='btn btn-danger rounded-pill'>2% <BsChevronCompactDown/></span>
        </div>
        <div className="row"><span className='fs-4 fw-bold p-2 mx-2'>0</span></div>
        <div className="row mb-4 fw-bold text-secondary"><span>Total Registred Campus</span></div>
      </div>
      </SwiperSlide>

      
    </Swiper>
        </div>
    </div>
  )
}

export default AdminDataSwipper