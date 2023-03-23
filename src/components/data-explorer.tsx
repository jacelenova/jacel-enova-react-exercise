import { Filters } from './filter/filters';
import { Applications } from './application/applications';
import { NavigationTree } from './tree/navigation-tree';
import './data-explorer.css';

export const DataExplorer = () => {
  return (
    <div className='data-explorer'>
      <div className='header'>
        <h1 className='margin-top-0'>React Coding Exercise</h1>
      </div>
      <div className='container'>
        <div className='sidebar'>
          <NavigationTree></NavigationTree>
          <Filters></Filters>
        </div>
        <div className='border-right'></div>
        <div className='main'>
          <Applications></Applications>
        </div>
      </div>
    </div>
  )
}