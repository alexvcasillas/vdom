import { IComponent } from '.';
import { isListener } from '../utils';

// tslint:disable-next-line:interface-name
export interface VirtualAttributes {
  [key: string]: Object | EventListener;
}

// tslint:disable-next-line:interface-name
export interface VirtualComponent {
  identifier: string;
  nodeRef?: Element;
  nodeName: string;
  state?: Object;
  attributes?: VirtualAttributes;
  children: VirtualComponent[];
}

export const createVirtualComponent = (component: VirtualComponent, reference: Element): VirtualComponent => {
  const listeners = new Map<string, Function>();
  if (!component) throw new Error(`You need to pass a Component to create it's virtual instance.`);
  const virtualInstance: VirtualComponent = {
    identifier: component.identifier,
    nodeRef: reference,
    nodeName: component.nodeName,
    attributes: component.attributes || {},
    children: component.children || [],
  };
  if (virtualInstance.attributes) {
    const { attributes } = virtualInstance;
    Object.keys(attributes).forEach(name => {
      if (isListener(name)) {
        console.log('Attribute is a listener');
        const eventType: string = name.toLowerCase().substring(2);
        const eventListener = attributes[name];
        if (typeof eventListener !== 'function') return;
        reference.addEventListener(eventType, eventListener);
        listeners.set(eventType, eventListener);
      }
    });
  }
  return virtualInstance;
};
