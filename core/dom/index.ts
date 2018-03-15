import { VirtualComponent } from '../models';

const RDOM = {
  render(virtualTree: VirtualComponent[] | VirtualComponent, container: Element, callback?: Function) {
    console.log('[DOM@renderElement]');
    console.log('Vitual Tree: ', virtualTree);
    if (Array.isArray(virtualTree)) {
      virtualTree.forEach((vComponent: VirtualComponent) => {
        const element = document.createElement(vComponent.nodeName);
        element.innerText = vComponent.identifier;
        container.appendChild(element);
        if (vComponent.children) {
          this.render(vComponent.children, element);
        }
      });
    }
  },
};

export { RDOM };
