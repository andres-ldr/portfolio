import { TypeAnimation } from 'react-type-animation';
import { setColor } from './CardProjectContent';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const box = useRef(null);

  useGSAP(() => {
    gsap.from(box.current, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: 'power3.out',
      delay: 0.5,
    });
  }, []);

  return (
    <div className='w-screen md:h-screen'>
      <div className='max-container flex flex-wrap pt-40 gap-10 md:items-start md:relative h-full w-full'>
        <div className='flex flex-col gap-5 md:w-1/2'>
          {/* Name container */}
          <div className='h-[6rem]'>
            <TypeAnimation
              className='text-3xl md:text-5xl font-bold'
              sequence={[
                'Hi, I am Andrés 👋',
                1000,
                'Hi, I am a Software\n Developer',
                1000,
              ]}
              wrapper='h1'
              speed={20}
              repeat={Infinity}
              style={{ whiteSpace: 'pre-line' }}
              omitDeletionAnimation={true}
            />
          </div>
          {/* Summary paragraph */}
          <h4 className='text-sm md:text-base pt-8 leading-6'>
            Highly motivated and adaptable software developer with 1 year of
            hands-on experience in designing and maintaining mobile and web
            applications. Proficient in utilizing atomic design methodology and
            test-driven development for streamlined development and optimal
            performance.
          </h4>
          <div className='flex flex-wrap gap-2'>
            <span
              className={`font-semibold rounded-lg ${setColor(
                'React'
              )} py-1 px-4 text-xs flex items-center`}
            >
              React
            </span>
            <span
              className={`font-semibold rounded-lg ${setColor(
                'Jquery'
              )} py-1 px-4 text-xs flex items-center`}
            >
              Jquery
            </span>
            <span
              className={`font-semibold rounded-lg ${setColor(
                'TailwindCSS'
              )} py-1 px-4 text-xs flex items-center`}
            >
              TailwindCSS
            </span>
            <span
              className={`font-semibold rounded-lg ${setColor(
                'Next.js'
              )} py-1 px-4 text-xs flex items-center`}
            >
              Next.js
            </span>
            <span
              className={`font-semibold rounded-lg ${setColor(
                'Node.js'
              )} py-1 px-4 text-xs flex items-center`}
            >
              Node.js
            </span>
            <span
              className={`font-semibold rounded-lg ${setColor(
                'Django'
              )} py-1 px-4 text-xs flex items-center`}
            >
              Django
            </span>
            <span
              className={`font-semibold rounded-lg ${setColor(
                'dotnetcore'
              )} py-1 px-4 text-xs flex items-center`}
            >
              .NET Core
            </span>
            <span
              className={`font-semibold rounded-lg ${setColor(
                'GraphQL'
              )} py-1 px-4 text-xs flex items-center`}
            >
              GraphQL
            </span>
            <span
              className={`font-semibold rounded-lg ${setColor(
                'MongoDB'
              )} py-1 px-4 text-xs flex items-center`}
            >
              MongoDB
            </span>
            <span
              className={`font-semibold rounded-full ${setColor(
                'PostgreSQL'
              )} py-1 px-4 text-xs flex items-center`}
            >
              PostgreSQL
            </span>
            <span
              className={`font-semibold rounded-lg ${setColor(
                'AWS'
              )} py-1 px-4 text-xs flex items-center`}
            >
              AWS EC2
            </span>
            <span
              className={`font-semibold rounded-lg ${setColor(
                'Docker'
              )} py-1 px-4 text-xs flex items-center`}
            >
              Docker
            </span>
            <span
              className={`font-semibold rounded-lg ${setColor(
                'terminal'
              )} py-1 px-4 text-xs flex items-center`}
            >
              Terminal
            </span>
          </div>
          {/* CTA buttons */}
          <div className='flex pt-12 gap-4 items-center justify-center md:justify-start'>
            <a
              href='../../public/files/resume.pdf'
              target='_blank'
              rel='noreferrer'
              className='text-sm md:text-base border py-2 px-4 rounded-lg font-bold transition hover:bg-slate-400 hover:text-slate-900'
            >
              Get my resume
            </a>
          </div>
        </div>
        <div className='pt-10 md:flex-1' ref={box}>
          <img
            src='../../public/images/rocket.png'
            alt=''
            className='object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
