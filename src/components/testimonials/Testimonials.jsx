import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/any.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR,
    name: 'name',
    review: '고객 리뷰를 작성하는 위치입니다. 아무내용이나 써줬다면 입력을 해놓는 창입니다. 추후에는 연동되는 기능으로  data를 불러오는 방법으로 사용할 예정인 부분인 것입니다.'
  },
  {
    avatar: AVTR,
    name: 'name',
    review: '고객 리뷰를 작성하는 위치입니다. 아무내용이나 써줬다면 입력을 해놓는 창입니다. 추후에는 연동되는 기능으로  data를 불러오는 방법으로 사용할 예정인 부분인 것입니다.'
  },
  {
    avatar: AVTR,
    name: 'name',
    review: '고객 리뷰를 작성하는 위치입니다. 아무내용이나 써줬다면 입력을 해놓는 창입니다. 추후에는 연동되는 기능으로  data를 불러오는 방법으로 사용할 예정인 부분인 것입니다.'
  },
  {
    avatar: AVTR,
    name: 'name',
    review: '고객 리뷰를 작성하는 위치입니다. 아무내용이나 써줬다면 입력을 해놓는 창입니다. 추후에는 연동되는 기능으로  data를 불러오는 방법으로 사용할 예정인 부분인 것입니다.'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials