import { ApplicationRecord } from "../models/application-record";
import { TreeNode } from "../models/tree-node";

export const buildTree = (data: TreeNode[]): TreeNode[] => {
  const hashTable = Object.create(null);
  data.forEach(aData => hashTable[aData.id] = {...aData, childNodes: []});
  const dataTree: any[] = [];
  data.forEach(aData => {
    if(aData.parentId) hashTable[aData.parentId].childNodes.push(hashTable[aData.id])
    else dataTree.push(hashTable[aData.id])
  });
  return dataTree;
}


export const createTreeItems = (data: ApplicationRecord[]) => {
  const nodeMap = new Map<string, TreeNode>();
  data.forEach((aData) => {
    if (nodeMap.get(aData.BCAP1) == null) {
      nodeMap.set(aData.BCAP1, { id: aData.BCAP1, name: aData.BCAP1})
    }
    if (nodeMap.get(aData.BCAP2) == null) {
      nodeMap.set(aData.BCAP2, { id: aData.BCAP2, name: aData.BCAP2, parentId: aData.BCAP1 })
    }
    if (nodeMap.get(aData.BCAP3) == null) {
      nodeMap.set(aData.BCAP3, { id: aData.BCAP3, name: aData.BCAP3, parentId: aData.BCAP2 })
    }
  });

  return Array.from(nodeMap).map(([key, value]) => value);
}