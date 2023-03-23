export interface TreeNode {
  id: string | number,
  name: string,
  parentId?: string | number,
  isSelected?: boolean,
  childNodes?: TreeNode[];
}