import './navigation-tree.css';
import { useContext } from 'react';
import { AppContext } from '../contexts/app-context';
import { TreeItem } from './tree-item';
import { FlexColumn } from './flex/flex-column';

export const NavigationTree = () => {
  const { appDataTree } = useContext(AppContext);

  return (
    <FlexColumn>
      <div className='nav-label'>Navigation</div>
      <div>
        {
          appDataTree?.map((node) => {
            return <TreeItem key={node.id} data={node} ></TreeItem>
          })
        }
      </div>
    </FlexColumn>
  )
}