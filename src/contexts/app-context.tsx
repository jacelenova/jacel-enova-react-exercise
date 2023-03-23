import { createContext, useEffect, useState } from "react";
import { buildTree, createTreeItems } from "../helpers/utils";
import { ApplicationRecord } from "../models/application-record";
import { TreeNode } from "../models/tree-node";
import { getApplicationData } from "../services/application-service";

interface AppContextState {
  appData?: ApplicationRecord[],
  appDataTree?: TreeNode[],
  selectedTreeNode?: TreeNode,
  setSelectedTreeNode: (node: TreeNode) => void,
  minSpendingValue: number,
  maxSpendingValue: number,
  spendingValue: number;
  setSpendingValue: (val: number) => void,
}

export const AppContext = createContext<AppContextState>(
  {
    setSelectedTreeNode: (node: TreeNode) => {},
    minSpendingValue: 0,
    maxSpendingValue: 0,
    spendingValue: 0,
    setSpendingValue: (val: number) => {}
  }
);

export const AppContextProvider: React.FC = ({children}) => {
  const [appData, setAppData] = useState<ApplicationRecord[]>([]);
  const [appDataTree, setAppDataTree] = useState<TreeNode[]>([]);
  const [selectedTreeNode, setSelectedTreeNode] = useState<TreeNode>();
  const [minSpendingValue, setMinSpendingValue] = useState(0);
  const [maxSpendingValue, setMaxSpendingValue] = useState(0);
  const [spendingValue, setSpendingValue] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const appData = await getApplicationData();
      setAppData(appData);
    }

    getData();
  }, []);

  useEffect(() => {
    if (appData != null) {
      let treeItems = createTreeItems(appData);
      treeItems.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      const tree = buildTree(treeItems);
      if (tree.length) {
        setSelectedTreeNode(tree[0]);
      }
      setAppDataTree(tree);
    }
  }, [appData])

  useEffect(() => {
    if (appData != null) {
      const spendingRange = appData.reduce((acc, cur) => {
        return [
          Math.min(cur.spend, acc[0]),
          Math.max(cur.spend, acc[1])
        ];
      }, [0, 0])

      setMinSpendingValue(spendingRange[0])
      setMaxSpendingValue(spendingRange[1]);
    } 
  }, [appData]);

  const defaultValue = {
    appData,
    appDataTree,
    selectedTreeNode,
    setSelectedTreeNode,
    minSpendingValue: minSpendingValue,
    maxSpendingValue: maxSpendingValue,
    spendingValue,
    setSpendingValue
  };

  return (
    <AppContext.Provider value={defaultValue}>
      {children}
    </AppContext.Provider>
  )
}