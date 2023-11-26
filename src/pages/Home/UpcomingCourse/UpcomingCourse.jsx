/* import { FaGraduationCap } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import img1 from  "../../../assets/course/web.jpg";
import img2 from  "../../../assets/course/app-d.jpg"

import img3 from  "../../../assets/course/data.jpg"
import img4 from  "../../../assets/course/digital-marketing-course.jpg"


const UpcomingCourse = () => {
    const images = [img1, img2, img3, img4]
    
    return (
        <div className="text-center">
            <h2 className="uppercase font-bold text-3xl ">Upcoming Courses</h2>
            <div className="flex items-center mx-auto">
                <span className="border-2"></span><FaGraduationCap className="text-3xl " /><span className="border-2"></span>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    images.map(img=><SwiperSlide key={img}> </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default UpcomingCourse; */



import { FaGraduationCap } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/course/web.jpg';
import img2 from '../../../assets/course/app-d.jpg';
import img3 from '../../../assets/course/data.jpg';
import img4 from '../../../assets/course/digital-marketing-course.jpg';

const UpcomingCourse = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="text-center max-w-5xl mx-auto space-y-5 mb-10">
      <h2 className="uppercase font-bold text-3xl">Upcoming Courses</h2>
      <div className="flex items-center mx-auto">
        <span className="border-2"></span>
        <FaGraduationCap className="text-3xl flex mx-auto" />
        <span className="border-2"></span>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-40"
      >
        {images.map((img, index) => (
          <SwiperSlide className='w-40 h-36' key={index}>
            <img  src={img} alt={`Course ${index + 1}`} className="w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UpcomingCourse;
