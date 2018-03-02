export interface Component {
  identifier: string;
  nodeName: string;
  attributes?: object;
  parent?: string;
  children?: Component[];
}
