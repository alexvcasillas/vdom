import { VirtualComponent, createVirtualComponent } from '../models/virtual-component.model';
import { camelCaseToDash, CSSProperties, isUnitlessNumber, standardAttributes, isListener } from '../utils';

const VDOM = {
  virtualComponents: new Map<string, VirtualComponent>(),
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
      // Check for a valid standard attribute
      if (standardAttributes.hasOwnProperty(attribute)) {
        // Check for style
        if (attribute === 'style') {
          // Here we will build the inline style string
          let styleString: string = '';
          Object.keys(attributes[attribute]).forEach(cssProperty => {
            // Is this a number property?
            const numberProp = typeof attributes[attribute][cssProperty] === 'number';
            // Build the string with each of the properties
            styleString += `${camelCaseToDash(cssProperty)}: ${attributes[attribute][cssProperty]}${
              numberProp && !isUnitlessNumber.hasOwnProperty(cssProperty) ? 'px' : ''
            };`;
          });
          element.setAttribute(attribute, styleString);
        } else {
          // Regular attribute, just set it
          element.setAttribute(attribute, attributes[attribute]);
        }
      } else {
        console.log(`${attribute} is not a valid standard property. Maybe is a custom prop`);
      }
    });
  },
  /**
   * This method creates a virtual component and mounts it
   * at the given mount point.
   * @param virtualComponent Virtual Component to create
   * @param mountPoint Mount point of the given Virtual Component
   */
  createElement(virtualComponent: VirtualComponent | string, mountPoint: Element | Text): void {
    let element: Element | Text;
    const id = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 5);
    // Check for a plain #text element
    if (typeof virtualComponent === 'string') {
      element = document.createTextNode(virtualComponent);
      mountPoint.appendChild(element);
      return;
    }
    // Create the element
    element = document.createElement(virtualComponent.nodeName);
    // Set the vdom-key attribute (development only)
    element.setAttribute('vdom-key', id);
    this.setElementAttributes(element, virtualComponent.attributes);
    // Check if this virtual component has childrens
    if (virtualComponent.children) {
      // If it does, iterate though each of them
      virtualComponent.children.forEach(children => {
        // Recursively call the createElement with the children and the mount point
        this.createElement(children, element);
      });
    }
    const theComponent = createVirtualComponent(
      {
        ...virtualComponent,
      },
      element,
    );
    // this.virtualComponents.set(id, Object.assign({ identifier: id, nodeRef: element }, virtualComponent));
    this.virtualComponents.set(id, theComponent);
    // Append this element to the mount point
    mountPoint.appendChild(element);
  },
  /**
   * This method starts the creation process of the Virtual DOM Tree
   * @param virtualComponent Virtual Component to render
   * @param mount Mount point of the given Virtual Component
   */
  render(virtualComponent: VirtualComponent, mount: Element): void {
    // Call the create element with the virtual component and the mount point
    this.createElement(virtualComponent, mount);
  },
};

export { VDOM };
