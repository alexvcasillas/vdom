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
  /**
   * This method sets all of the attributes from the virtual component
   * to the DOM element.
   * @param element DOM Element to add attributes to
   * @param virtualComponent Virtual Component that contains all the attributes to be added
   */
  setElementAttributes(element: Element, attributes: any): void {
    if (!attributes) return;
    Object.keys(attributes).forEach((attribute: any) => {
      // Do something with attributes ...
    });
  },
  /**
   * This method creates a virtual component and mounts it
   * at the given mount point.
   * @param virtualComponent Virtual Component to create
   * @param mountPoint Mount point of the given Virtual Component
   */
  createElement(virtualComponent: VirtualComponent, mountPoint: Element): void {
    console.log(`[VirtualDOM@createElement]`);
    // Create the element
    const element = document.createElement(virtualComponent.nodeName);
    // Set the vdom-key attribute (development only)
    element.setAttribute('vdom-key', virtualComponent.identifier);
    this.setElementAttributes(element, virtualComponent.attributes);
    // Check if this virtual component has childrens
    if (virtualComponent.children) {
      // If it does, iterate though each of them
      virtualComponent.children.forEach(children => {
        // Recursively call the createElement with the children and the mount point
        this.createElement(children, element);
      });
    }
    // Append this element to the mount point
    mountPoint.appendChild(element);
  },
  /**
   * This method starts the creation process of the Virtual DOM Tree
   * @param virtualComponent Virtual Component to render
   * @param mount Mount point of the given Virtual Component
   */
  render(virtualComponent: VirtualComponent, mount: Element): void {
    console.log(`[VirtualDOM@render]`);
    // Call the create element with the virtual component and the mount point
    this.createElement(virtualComponent, mount);
  }
};

export { VDOM };
