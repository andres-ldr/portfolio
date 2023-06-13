import React, { useEffect, useState } from 'react';
import Grid from './Grid';

import Tab from './Tab';
import Project from '../models/Project';

interface PortfolioPanelProps {
  projects: Project[];
}

const PortfolioPanel: React.FC<PortfolioPanelProps> = ({ projects }) => {
  const [allProjects, setAllProjects] = useState<Project[]>(projects);
  const [varList, setVarList] = useState<Project[]>(projects);

  const [typesList, setTypesList] = useState<string[]>();
  const [tabSelectedId, setTabSelectedId] = useState(0);

  useEffect(() => {
    const getTypes = () => {
      const arr = allProjects.map((e) => e.type);
      const set = new Set(arr);
      setTypesList(Array.from(set));
    };
    getTypes();
  }, []);

  const onFilterHandler = (type: string, id: number) => {
    setTabSelectedId(id);
    if (type === 'All') {
      setVarList(allProjects);
    } else {
      const newArr = allProjects.filter((p) => p.type === type);
      setVarList(newArr);
    }
  };

  return (
    <div className='mt-20'>
      <div className='w-full flex justify-center space-x-12 items-center p-3 text-xl font-semibold max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3 '>
        <Tab
          id={0}
          label={'All'}
          clickHandler={onFilterHandler}
          isSelected={tabSelectedId === 0}
        />
        {typesList?.map((e) => (
          <Tab
            key={typesList.indexOf(e)}
            id={typesList.indexOf(e) + 1}
            label={e}
            clickHandler={onFilterHandler}
            isSelected={tabSelectedId === typesList.indexOf(e) + 1}
          />
        ))}
        <Tab
          id={-1}
          label={'Others'}
          clickHandler={onFilterHandler}
          isSelected={tabSelectedId === -1}
        />
      </div>

      <Grid projects={varList} />
    </div>
  );
};

export default PortfolioPanel;
