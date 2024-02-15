import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperComponent = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width! > 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  }, [size.width]);
  // useEffect(() => {
  //   function handleResize() {
  //     const width = window.innerWidth;
  //     if (width > 768) {
  //       setSlidesPerView(2);
  //     } else {
  //       setSlidesPerView(1);
  //     }
  //   }

  //   handleResize();

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      // spaceBetween={30}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay, EffectCoverflow, Navigation]}
      className='flex-1'
      effect='coverflow'
      coverflowEffect={{
        rotate: 50,
        stretch: 50,
        depth: 0,
        modifier: 1,
      }}
      navigation={{
        nextEl: '.slideNext',
        prevEl: '.slidePrev',
      }}
    >
      <SwiperSlide className='my-8 max-w-[95%] sm:max-w-[40%] md:max-w-[95%] lg:max-w-[40%] xl:max-w-[35%]'>
        <div className='h-[22rem] flex flex-col justify-center items-center p-5 text-center rounded-3xl bg-cover bg-center bg-blur-md bg-slate-900 select-none shadow-lg shadow-indigo-900'>
          <h3 className='text-base sm:text-xl font-semibold'>
            Frontend development
          </h3>
          <p className='pt-5 text-sm leading-6'>
            Creation of responsive and user-friendly websites using technologies
            such as HTML, CSS, JavaScript, and frameworks like React and
            Next.js.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='my-8 max-w-[95%] sm:max-w-[40%] md:max-w-[95%] lg:max-w-[40%] xl:max-w-[35%]'>
        <div className='h-[22rem] flex flex-col justify-center items-center p-5 text-center rounded-3xl bg-cover bg-center bg-blur-md bg-slate-900 select-none shadow-lg shadow-indigo-900'>
          <h3 className='text-base sm:text-xl font-semibold'>
            Backend development
          </h3>
          <p className='pt-5 text-sm leading-6'>
            Building robust server-side applications and APIs using frameworks
            like Express.js, Django, .Net Core, along with SQL and NO-SQL
            databases,
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='my-8 max-w-[95%] sm:max-w-[40%] md:max-w-[95%] lg:max-w-[40%] xl:max-w-[35%]'>
        <div className='h-[22rem] flex flex-col justify-center items-center p-5 text-center rounded-3xl bg-cover bg-center bg-blur-md bg-slate-900 select-none shadow-lg shadow-indigo-900'>
          <h3 className='text-base  sm:text-xl font-semibold'>
            Cloud Solutions
          </h3>
          <p className='pt-5 text-sm leading-6'>
            Developing cloud-based applications and migrating existing systems
            to cloud platforms like AWS for scalability, reliability, and
            cost-efficiency.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='my-8 max-w-[95%] sm:max-w-[40%] md:max-w-[95%] lg:max-w-[40%] xl:max-w-[35%]'>
        <div className='h-[22rem] flex flex-col justify-center items-center p-5 text-center rounded-3xl bg-cover bg-center bg-blur-md bg-slate-900 select-none shadow-lg shadow-indigo-900'>
          <h3 className='text-base sm:text-xl font-semibold'>
            Quality Assurance and Testing
          </h3>
          <p className='pt-5 text-sm leading-6'>
            Ensuring the reliability, functionality, and performance of software
            through comprehensive testing processes, including automated
            testing, manual testing, and performance testing.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='my-8 max-w-[95%] sm:max-w-[40%] md:max-w-[95%] lg:max-w-[40%] xl:max-w-[35%]'>
        <div className='h-[22rem] flex flex-col justify-center items-center p-5 text-center rounded-3xl bg-cover bg-center bg-blur-md bg-slate-900 select-none shadow-lg shadow-indigo-900'>
          <h3 className='text-base sm:text-xl font-semibold'>
            Mantainance and support
          </h3>
          <p className='pt-5 text-sm leading-6'>
            Providing ongoing maintenance, updates, and technical support to
            ensure the smooth operation and longevity of software applications.
          </p>
        </div>
      </SwiperSlide>
      <div className='flex gap-4'>
        <button className='slidePrev text-4xl font-bold transition hover:text-indigo-900'>
          &#8592;
        </button>
        <button className='slideNext text-4xl font-bold transition hover:text-indigo-900'>
          &#8594;
        </button>
      </div>
    </Swiper>
  );
};

export default SwiperComponent;
