import { VirtualComponent } from '../models/virtual-component.model';

export class VDOM {
  VirtualComponents: VirtualComponent[] = [];
  addVirtualComponent(VirtualComponent: VirtualComponent): void {
    console.log('[VDOM@addVirtualComponent]');
    console.log('VirtualComponent to add: ', VirtualComponent);
    console.log('----');
    if (VirtualComponent.parent) {
      const parentVirtualComponent = this.VirtualComponents.filter(
        parentVirtualComponent => parentVirtualComponent.identifier === VirtualComponent.parent,
      )[0];
      if (!parentVirtualComponent.children) parentVirtualComponent.children = [];
      parentVirtualComponent.children.push(VirtualComponent);
      return;
    }
    this.VirtualComponents.push(VirtualComponent);
  }
  updateVirtualComponent(VirtualComponent: VirtualComponent): void {
    console.log('[VDOM@updateVirtualComponent]');
    console.log('VirtualComponent to update: ', VirtualComponent);
    console.log('----');
    if (VirtualComponent.parent) {
      console.log('The VirtualComponent has a parent!');
      const parentVirtualComponent = this.VirtualComponents.filter(
        parentVirtualComponent => parentVirtualComponent.identifier === VirtualComponent.parent,
      )[0];
      console.log('Parent VirtualComponent: ', parentVirtualComponent);
      console.log('----');
      if (!parentVirtualComponent.children) parentVirtualComponent.children = [];
      parentVirtualComponent.children.map(childrenVirtualComponent => {
        if (childrenVirtualComponent.identifier === VirtualComponent.identifier) {
          console.log('VirtualComponent to update: ', childrenVirtualComponent);
          Object.assign(childrenVirtualComponent, VirtualComponent);
          console.log('VirtualComponent after update: ', childrenVirtualComponent);
        }
      });
      console.log('----');
      return;
    }
    console.log(`VirtualComponent doesn't have a parent!`);
    this.VirtualComponents.map(searchVirtualComponent => {
      if (searchVirtualComponent.identifier === VirtualComponent.identifier) {
        console.log('VirtualComponent to update: ', searchVirtualComponent);
        Object.assign(searchVirtualComponent, VirtualComponent);
        console.log('VirtualComponent after update: ', searchVirtualComponent);
      }
    });
    console.log('----');
  }
  removeVirtualComponent(VirtualComponent: VirtualComponent): void {}
  renderVDOM() {
    return JSON.stringify(this.VirtualComponents, null, 2);
  }
}
