import { VirtualComponent, VirtualAttributes } from '.';

export interface IComponent {
  identifier: string;
  element: string;
  attributes?: VirtualAttributes;
  constructor?: Function;
  componentDidMount?: Function;
  shouldComponentUpdate?: Function;
  children: VirtualComponent[];
}

export const createComponent = (component: IComponent): VirtualComponent => {
  let __state = {};
  let __props = {};
  const setState = async function() {};
  const constructor = component.constructor || async function() {};
  const componentDidMount = component.componentDidMount || async function() {};
  const shouldComponentUpdate = component.shouldComponentUpdate || async function() {};
  const children = component.children || [];
  return {
    identifier: Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 5),
    nodeName: component.element,
    attributes: component.attributes || {},
    children: component.children || [],
  };
};
