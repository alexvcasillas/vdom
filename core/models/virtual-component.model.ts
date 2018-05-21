import { IComponent } from '.';
import { isListener } from '../utils';

// tslint:disable-next-line:interface-name
export interface VirtualAttributes {
  [key: string]: Object | EventListener;
}

// tslint:disable-next-line:interface-name
export interface VirtualComponent {
  identifier: string;
  nodeName: string;
  state?: Object;
  attributes?: VirtualAttributes;
  children: VirtualComponent[];
  listeners: Map<string, EventListener>;
}

export function removeVirtualComponentListeners(virtualComponent: VirtualComponent) {
  virtualComponent.listeners.forEach((listener, event) => {});
}

export const createVirtualComponent = (virtualComponent: VirtualComponent, reference: Element): VirtualComponent => {
  if (!virtualComponent) throw new Error(`You need to pass a Virtual Component to create it's virtual instance.`);
  const virtualInstance: VirtualComponent = {
    identifier: virtualComponent.identifier,
    nodeName: virtualComponent.nodeName,
    attributes: virtualComponent.attributes || {},
    children: virtualComponent.children || [],
    listeners: virtualComponent.listeners,
  };
  if (virtualInstance.attributes) {
    const { attributes, listeners } = virtualInstance;
    Object.keys(attributes).forEach(name => {
      if (isListener(name)) {
        console.log('Attribute is a listener');
        const eventType: string = name.toLowerCase().substring(2);
        const eventListener = attributes[name];
        if (typeof eventListener !== 'function') return;
        if (reference.nodeType === Node.ELEMENT_NODE) {
          reference.addEventListener(eventType, eventListener);
        }
        listeners.set(eventType, eventListener);
      }
    });
  }
  return virtualInstance;
};
