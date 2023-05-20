import React, { Fragment, useEffect, useState } from 'react';
import Grid from './Grid';

interface TabProps {
  id: number;
  label: string;
  clickHandler: (type: string, id: number) => void;
  isSelected: boolean;
}

interface Project {
  id: string;
  name: string;
  stack: string[];
  goals: string[];
  images: string[];
  link_repo: string;
  link_app: string;
  type: string;
}

interface PortfolioList {
  projectsList: Project[];
}

const Tab: React.FC<TabProps> = ({ id, label, clickHandler, isSelected }) => {
  return (
    <h5
      onClick={() => clickHandler(label, id)}
      className={`p-2 cursor-pointer hover-underline-animation transition ${
        isSelected ? 'text-white bg-black rounded-md' : 'rounded-full'
      }`}
    >
      {label}
    </h5>
  );
};

const PortfolioPanel: React.FC<PortfolioList> = ({ projectsList }) => {
  const [totalProjects, setTotalProjects] = useState(projectsList);
  const [typesList, setTypesList] = useState<string[]>();
  const [varList, setVarList] = useState(projectsList);
  const [tabSelectedId, setTabSelectedId] = useState(0);

  useEffect(() => {
    const getTypes = () => {
      const arr = projectsList.map((e) => e.type);
      const set = new Set(arr);
      setTypesList(Array.from(set));
    };
    getTypes();
  }, []);

  const onFilterList = (type: string, id: number) => {
    setTabSelectedId(id);
    if (type === 'All') {
      setVarList(totalProjects);
    } else {
      const newArr = totalProjects.filter((p) => p.type === type);
      setVarList(newArr);
    }
  };

  return (
    <div className='mt-20'>
      <div className='w-full flex justify-center space-x-12 items-center p-3 text-xl font-semibold'>
        <Tab
          id={0}
          label={'All'}
          clickHandler={onFilterList}
          isSelected={tabSelectedId === 0}
        />
        {typesList?.map((e) => (
          <Tab
            id={typesList.indexOf(e) + 1}
            label={e}
            clickHandler={onFilterList}
            isSelected={tabSelectedId === typesList.indexOf(e) + 1}
          />
        ))}
        <Tab
          id={-1}
          label={'Others'}
          clickHandler={onFilterList}
          isSelected={tabSelectedId === -1}
        />
      </div>

      <Grid projectsList={varList} />
    </div>
  );
};

export default PortfolioPanel;
