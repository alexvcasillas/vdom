// tslint:disable-next-line:interface-name
export interface VirtualComponent {
  identifier: string;
  nodeName: string;
  state?: object;
  attributes?: object;
  children?: VirtualComponent[];
}
