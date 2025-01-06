import React from 'react';
import Project from '../models/Project';

interface ContentProps {
  project: Project;
}

export const setColor = (techName: string) => {
  switch (techName) {
    case 'React':
      return 'bg-blue-600';
    case 'Next.js':
      return 'bg-slate-200 text-slate-950';
    case 'Node.js':
      return 'bg-green-500 text-slate-950';
    case 'Express':
      return 'bg-green-700';
    case 'MongoDB':
      return 'bg-green-900';
    case 'Firebase':
      return 'bg-yellow-600';
    case 'TypeScript':
      return 'bg-blue-700';
    case 'JavaScript':
      return 'bg-yellow-600';
    case 'Python':
      return 'bg-yellow-800';
    case 'Django':
      return 'bg-green-900';
    case 'HTML':
      return 'bg-red-500';
    case 'CSS':
      return 'bg-blue-900';
    case 'Tailwind CSS':
      return 'bg-blue-300';
    case 'Sass':
      return 'bg-pink-500';
    case 'Bootstrap':
      return 'bg-purple-700';
    case 'Material-UI':
      return 'bg-blue-200';
    case 'php':
      return 'bg-purple-700';
    case 'Redux':
      return 'bg-purple-700';
    case 'GraphQL':
      return 'bg-pink-700';
    case 'Apollo':
      return 'bg-purple-700';
    case 'Docker':
      return 'bg-blue-800';
    case 'Kubernetes':
      return 'bg-blue-900';
    case 'Jest':
      return 'bg-red-700';
    case 'Cypress':
      return 'bg-green-700';
    case 'Jasmine':
      return 'bg-purple-700';
    case 'symfony':
      return 'bg-black text-white';
    case 'flutter':
      return 'bg-blue-700';
    case 'Enzyme':
      return 'bg-blue-700';
    case 'unity':
      return 'bg-black text-white';
    case 'csharp':
      return 'bg-indigo-700';
    case 'Git':
      return 'bg-red-700';
    case 'GitHub':
      return 'bg-black';
    case 'GitLab':
      return 'bg-orange-500';
    case 'blender':
      return 'bg-yellow-700';
    case 'Jenkins':
      return 'bg-red-700';
    case 'Travis CI':
      return 'bg-black';
    case 'Circle CI':
      return 'bg-green-700';
    case 'Heroku':
      return 'bg-purple-700';
    case 'Netlify':
      return 'bg-blue-700';
    case 'Vercel':
      return 'bg-black';
    case 'AWS':
      return 'bg-yellow-700';
    case 'Azure':
      return 'bg-blue-700';
    case 'Google Cloud':
      return 'bg-blue-700';
    case 'DigitalOcean':
      return 'bg-blue-700';
    case 'Nginx':
      return 'bg-green-700';
    case 'Apache':
      return 'bg-red-700';
    case 'PM2':
      return 'bg-blue-700';
    case 'Supervisor':
      return 'bg-black';
    case 'Systemd':
      return 'bg-blue-700';
    case 'Puppet':
      return 'bg-yellow-700';
    case 'Chef':
      return 'bg-red-700';
    case 'Ansible':
      return 'bg-blue-700';
    case 'Terraform':
      return 'bg-purple-700';
    case 'Packer':
      return 'bg-yellow-700';
    case 'Vagrant':
      return 'bg-blue-700';
    case 'VirtualBox':
      return 'bg-blue-700';
    case 'VMware':
      return 'bg-blue-700';
    case 'KVM':
      return 'bg-blue-700';
    case 'dotnetcore':
      return 'bg-indigo-700';
    case 'PostgreSQL':
      return 'bg-blue-900';
    case 'Jquery':
      return 'bg-blue-900';
    case 'TailwindCSS':
      return 'bg-sky-700';
    case 'Web sockets':
      return 'bg-gray-700 text-gray-200';
    case 'terminal':
      return 'bg-gray-700 text-gray-200';
    default:
      return 'bg-gray-500';
  }
};
const CardProjContent: React.FC<ContentProps> = ({
  project: { name, stack, link_app, link_repo },
}) => {
  return (
    <div className='flex flex-col items-center gap-8 px-5 py-10 backdrop-opacity-10 bg-slate-700/30 shadow-sm shadow-violet-800 rounded-md hover:shadow-lg hover:shadow-violet-800  transition duration-300 ease-in-out'>
      <h4 className='text-lg font-semibold uppercase text-center'>{name}</h4>
      <div className='flex justify-center flex-wrap gap-3'>
        {stack.map((el) => (
          <span
            key={el}
            className={`font-semibold rounded-lg ${setColor(
              el
            )} py-1 px-4 text-xs flex items-center`}
          >
            {el}
          </span>
        ))}
      </div>
      <div className='flex flex-col w-full gap-2'>
        {link_app ? (
          <a
            href={link_app}
            target='_blank'
            rel='noreferrer'
            className='w-full px-4 py-2 font-semibold bg-slate-800 text-slate-200 rounded-md text-center transition hover:bg-indigo-600'
          >
            Demo
          </a>
        ) : null}
        {link_repo ? (
          <a
            href={link_repo}
            target='_blank'
            rel='noreferrer'
            className='w-full px-4 py-2 font-semibold bg-slate-800 text-slate-200 rounded-md text-center transition hover:bg-indigo-600'
          >
            Source code
          </a>
        ) : null}
      </div>
      {/* <a href={`/portfolio/${id}`}>Know more</a> */}
    </div>
  );
};

export default CardProjContent;
