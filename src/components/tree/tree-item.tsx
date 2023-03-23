import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/app-context';
import { TreeNode } from '../../models/tree-node';
import './tree-item.css';

export const TreeItem = ({data}: {data: TreeNode}) => {
  const { setSelectedTreeNode, selectedTreeNode} = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [arrowClass, setArrowClass] = useState("");
  const [hasChild, setHasChild] = useState(false);

  const arrowClick = () => {
    if (hasChild) {
      setIsOpen(!isOpen);
    }
  }

  const nodeClick = () => {
    setSelectedTreeNode(data);
  }

  const nodeDoubleClick = () => {
    if (hasChild) {
      setIsOpen(!isOpen);
    }
  }

  useEffect(() => {
    setHasChild((data.childNodes && data.childNodes.length > 0) || false);
  }, [data]);

  useEffect(() => {
    if (hasChild && isOpen) {
      setArrowClass('arrow-down');
    } else if (hasChild && !isOpen) {
      setArrowClass("arrow-right");
    }
  }, [hasChild, isOpen]);

  return (
    <div className={`tree-item ${data.parentId ? 'child-tree-item' : ''}`}>
      <div className='tree-row'>
        <div className={arrowClass} onClick={() => arrowClick()}></div>
        <div className={`tree-label ${!hasChild && 'no-child'}  ${selectedTreeNode?.id === data?.id ? 'underline' : ''}`}
          onClick={() => nodeClick()}
          onDoubleClick={() => nodeDoubleClick()}
        >
            {data.id}
        </div>
      </div>
      {isOpen && data.childNodes && data.childNodes.map((node) => {
        return <TreeItem key={node.id} data={node} ></TreeItem>
      })}
    </div>
  )
}