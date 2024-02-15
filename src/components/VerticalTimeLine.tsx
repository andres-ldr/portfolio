import vtl from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { setColor } from './CardProjectContent';

const VerticalTimeLineComponent = () => {
  return (
    <vtl.VerticalTimeline lineColor=''>
      <vtl.VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{
          background: 'rgb(30 41 59)',
          color: '#fff',
        }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(30 41 59)' }}
        date='December 2023 - present'
        iconStyle={{ background: 'rgb(30 41 59)', color: '#fff' }}
        icon={
          <a
            href='https://eepic.ca'
            target='_blank'
            rel='noreferrer'
            className='w-full h-full flex items-center rounded-full'
          >
            <img
              src='https://eepic.ca/_next/static/media/logo_full_primary_color.f4ec7235.svg'
              alt='eepic'
              className='object-contain w-full h-full rounded-full'
            />
          </a>
        }
        visible={true}
      >
        <h3 className='text-base md:text-lg vertical-timeline-element-title'>
          Full-Stack web developer
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Vancouver, CA</h4>
        <div className='flex flex-wrap gap-2 pt-2'>
          <span
            className={`font-semibold rounded-lg ${setColor(
              'React'
            )} py-1 px-4 text-xs flex items-center`}
          >
            React
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
              'GraphQL'
            )} py-1 px-4 text-xs flex items-center`}
          >
            GraphQL
          </span>
          <span
            className={`font-semibold rounded-lg ${setColor(
              'Apollo'
            )} py-1 px-4 text-xs flex items-center`}
          >
            Apollo
          </span>
          <span
            className={`font-semibold rounded-full ${setColor(
              'PostgreSQL'
            )} py-1 px-4 text-xs flex items-center`}
          >
            PostgreSQL
          </span>
        </div>
        <details className='pt-5 cursor-pointer'>
          <summary>Duties:</summary>
          <p>
            - Develop React components for a friendly and consistent user
            experience.
          </p>
          <p>
            - Improve the database schema to ensure a consistent relation
            between entities.
          </p>
        </details>
      </vtl.VerticalTimelineElement>
      <vtl.VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{
          background: 'rgb(30 41 59)',
          color: '#fff',
        }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(30 41 59)' }}
        date='March 2022 - July 2022'
        iconStyle={{ background: 'rgb(30 41 59)', color: '#fff' }}
        icon={
          <div className='w-full h-full flex items-center rounded-full'>
            <img
              src='../../public/images/jppjm.jpg'
              alt='aria'
              className='object-cover w-full h-full rounded-full'
            />
          </div>
        }
        visible={true}
      >
        <h3 className='text-base md:text-lg vertical-timeline-element-title'>
          Frontend Software developer intern
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>France</h4>
        <div className='flex flex-wrap gap-2 pt-2'>
          <span
            className={`font-semibold rounded-lg ${setColor(
              'flutter'
            )} py-1 px-4 text-xs flex items-center`}
          >
            Flutter
          </span>
          <span
            className={`font-semibold rounded-lg ${setColor(
              'php'
            )} py-1 px-4 text-xs flex items-center`}
          >
            PHP
          </span>
          <span
            className={`font-semibold rounded-lg ${setColor(
              'symfony'
            )} py-1 px-4 text-xs flex items-center`}
          >
            Symfony
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
              'TDD'
            )} py-1 px-4 text-xs flex items-center`}
          >
            TDD
          </span>
          <span
            className={`font-semibold rounded-lg ${setColor(
              'devops'
            )} py-1 px-4 text-xs flex items-center`}
          >
            CI/CD
          </span>
        </div>
        <details className='pt-5 cursor-pointer'>
          <summary>Duties:</summary>
          <p>
            Implemented React interface to create multiple components for faster
            rendering for Web App Version of apps that we worked on as a proof
            of concept for future deployments.
          </p>
          <p>
            Streamlined the development process by converting design
            requirements for five user stories into efficient, high-quality
            Flutter code using atomic design methodology.
          </p>
          <p>
            Spearheaded the introduction of a highly requested feature, allowing
            administrators to deploy a version of the application to each museum
            with ease and efficiency.
          </p>
          <p>
            Optimized the app's deployment by setting up a continuous
            integration and deployment system, which promptly launches the app
            to both the Play Store and App Store after a successful test run,
            all while adhering to a robust test-driven development methodology.
          </p>
          <p>
            Pioneered the incorporation of new, innovative features, including a
            QR code reader, audio player, and map of the museum, giving users a
            unique and informative experience.
          </p>
        </details>
      </vtl.VerticalTimelineElement>
      <vtl.VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{
          background: 'rgb(30 41 59)',
          color: '#fff',
        }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(30 41 59)' }}
        date='March 2021 - June 2021'
        iconStyle={{ background: 'rgb(30 41 59)', color: '#fff' }}
        icon={
          <div className='w-full h-full flex items-center rounded-full'>
            <img
              src='../../public/images/logo_catid.jpg'
              alt='catid'
              className='object-cover w-full h-full rounded-full'
            />
          </div>
        }
        visible={true}
      >
        <h3 className='text-base md:text-lg vertical-timeline-element-title'>
          Mobile developer intern
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Mexico</h4>
        <div className='flex flex-wrap gap-2 pt-2'>
          <span
            className={`font-semibold rounded-lg ${setColor(
              'csharp'
            )} py-1 px-4 text-xs flex items-center`}
          >
            C#
          </span>
          <span
            className={`font-semibold rounded-lg ${setColor(
              'unity'
            )} py-1 px-4 text-xs flex items-center`}
          >
            Unity
          </span>
          <span
            className={`font-semibold rounded-lg ${setColor(
              'AR'
            )} py-1 px-4 text-xs flex items-center`}
          >
            AR
          </span>
          <span
            className={`font-semibold rounded-lg ${setColor(
              'blender'
            )} py-1 px-4 text-xs flex items-center`}
          >
            Blender
          </span>
        </div>
        <details className='pt-5 cursor-pointer'>
          <summary>Duties:</summary>
          <p>
            Developed a visually stunning user interface and efficiently
            translated it into Unity objects, creating a seamless user
            experience.
          </p>
          <p>
            Produced and animated an array of 3D and MP3 assets for the app's
            content, ensuring engaging and high-quality content.
          </p>
          <p>
            Integrated a QR code reader feature, allowing users to easily access
            specific assets by scanning the codes, boosting user engagement and
            satisfaction.
          </p>
          <p>
            Wrote custom scripts to add interactivity to 3D objects, leading to
            an immersive user experience while maintaining optimal performance.
          </p>
        </details>
      </vtl.VerticalTimelineElement>
    </vtl.VerticalTimeline>
  );
};
export default VerticalTimeLineComponent;
