import { VirtualComponent } from '../models/virtual-component.model';

const VDOM = {
  // Here we will store our virtual components
  virtualComponents: new Map<string, VirtualComponent>(),
  // Here we will store the listeners for our virtual components
  virtualListeners: new Map<string, Function>(),
  getParentComponent(virtualComponent: VirtualComponent): VirtualComponent {
    return virtualComponent;
  },
  addVirtualComponent(virtualComponent: VirtualComponent): VirtualComponent {
    console.log(`[VirtualDOM@addVirtualComponent]`);
    this.virtualComponents.set(virtualComponent.identifier, virtualComponent);
    this.virtualListeners.set(virtualComponent.identifier, () => {
      console.log('Virtual component listener called');
    });
    return virtualComponent;
  },
  updateVirtualComponent(virtualComponent: VirtualComponent): VirtualComponent {
    return virtualComponent;
  },
  deleteVirtualComponent(virtualComponent: VirtualComponent): VirtualComponent {
    return virtualComponent;
  },
  virtualDOM(): Map<string, VirtualComponent> {
    return this.virtualComponents;
  },
  createElement(virtualComponent: VirtualComponent, mountPoint: Element): Element {
    console.log(`[VirtualDOM@createElement]`);
    console.log('Element to be created: ', virtualComponent);
    const element = document.createElement(virtualComponent.nodeName);
    element.innerText = virtualComponent.identifier;
    if (virtualComponent.children) {
      console.log('The component has children !!');
      virtualComponent.children.forEach(children => {
        console.log('Children: ', children);
        this.createElement(children, element);
      });
    }
    mountPoint.appendChild(element);
    return element;
  },
  render(virtualComponent: VirtualComponent, mount: Element): void {
    console.log(`[VirtualDOM@render]`);
    console.log('Component to render: ', virtualComponent);
    console.log('Mount point: ', mount);
    this.createElement(virtualComponent, mount);
  }
};

export { VDOM };
