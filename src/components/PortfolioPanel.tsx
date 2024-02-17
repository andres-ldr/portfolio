import React, { useEffect, useState } from 'react';

import StackGrid from 'react-stack-grid';
import Project from '../models/Project';
import CardProjContent from './CardProjectContent';

interface PortfolioPanelProps {
  projects: Project[];
}

const PortfolioPanel: React.FC<PortfolioPanelProps> = ({ projects }) => {
  const [listOfProjects, setListOfProjects] = useState(projects);
  const [columnWidth, setColumnWidth] = useState('25%');
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const filterTypes = () => {
      const projectTypes = projects.map((project) => project.type);
      const uniqueTypes = [...new Set(projectTypes)];
      setTypes(uniqueTypes);
    };
    filterTypes();
  }, [projects]);

  const filterProjects = (filter: string) => {
    if (filter === 'all') {
      setListOfProjects(projects);
    } else {
      setListOfProjects(
        projects.filter((project) => project.type.includes(filter))
      );
    }
  };

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width > 768) {
        setColumnWidth('33.33%');
      } else if (width > 640) {
        setColumnWidth('50%');
      } else {
        setColumnWidth('100%');
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='relative pt-20'>
      <div className='flex flex-wrap justify-center gap-4'>
        <button
          className='font-bold rounded-2xl hover:bg-indigo-950 transition py-2 px-4'
          onClick={() => filterProjects('all')}
        >
          All
        </button>
        {types.map((el) => (
          <button
            className='font-bold rounded-2xl hover:bg-indigo-950 transition py-2 px-4'
            onClick={() => filterProjects(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <div className='pt-16'>
        <StackGrid
          columnWidth={columnWidth}
          gutterWidth={20}
          gutterHeight={20}
          className=''
        >
          {listOfProjects.map((project) => (
            <CardProjContent
              key={project.id}
              project={project}           />
          ))}
        </StackGrid>
      </div>
    </div>
  );
};

export default PortfolioPanel;
