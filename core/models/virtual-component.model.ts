export interface VirtualComponent {
  identifier: string;
  nodeName: string;
  state?: object;
  attributes?: object;
  parent?: string;
  children?: VirtualComponent[];
}
