import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='w-screen h-screen relative'>
      <Shapes />
      <div className='max-container relative h-full w-full'>
        <div className='absolute top-1/3 w-1/2'>
          {/* Name container */}
          <div className='h-[6rem]'>
            <TypeAnimation
              className='text-5xl font-bold'
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
            />
          </div>
          {/* Summary paragraph */}
          <h4 className='pt-8 leading-7'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Asperiores, maiores debitis est suscipit delectus impedit aliquam,
            dolorem id nulla beatae quibusdam exercitationem hic sequi incidunt
            commodi blanditiis distinctio reprehenderit modi.
          </h4>
          {/* CTA buttons */}
          <div className='flex pt-8 gap-4'>
            <a
              href='#'
              className='border py-2 px-6 rounded-lg font-bold transition hover:bg-slate-400 hover:text-slate-900'
            >
              Get my resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const Shapes = () => {
  return (
    <div className='absolute w-screen'>
      <div className='bg-shape-1 bg-red-500 opacity-50'></div>
      <div className='bg-shape-2 bg-blue-500 opacity-50'></div>
      <div className='bg-shape-3 bg-purple-500 opacity-50'></div>
    </div>
  );
};
