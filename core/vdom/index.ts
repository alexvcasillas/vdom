import { Component } from '../models/component.model';

export class VDOM {
  components: Component[] = [];
  addComponent(component: Component): void {
    console.log('[VDOM@addComponent]');
    console.log('Component to add: ', component);
    console.log('----');
    if (component.parent) {
      const parentComponent = this.components.filter(
        parentComponent => parentComponent.identifier === component.parent
      )[0];
      if (!parentComponent.children) parentComponent.children = [];
      parentComponent.children.push(component);
      return;
    }
    this.components.push(component);
  }
  updateComponent(component: Component): void {
    console.log('[VDOM@updateComponent]');
    console.log('Component to update: ', component);
    console.log('----');
    if (component.parent) {
      console.log('The component has a parent!');
      const parentComponent = this.components.filter(
        parentComponent => parentComponent.identifier === component.parent
      )[0];
      console.log('Parent component: ', parentComponent);
      console.log('----');
      if (!parentComponent.children) parentComponent.children = [];
      parentComponent.children.map(childrenComponent => {
        if (childrenComponent.identifier === component.identifier) {
          console.log('Component to update: ', childrenComponent);
          Object.assign(childrenComponent, component);
          console.log('Component after update: ', childrenComponent);
        }
      });
      console.log('----');
      return;
    }
    console.log(`Component doesn't have a parent!`);
    this.components.map(searchComponent => {
      if (searchComponent.identifier === component.identifier) {
        console.log('Component to update: ', searchComponent);
        Object.assign(searchComponent, component);
        console.log('Component after update: ', searchComponent);
      }
    });
    console.log('----');
  }
  removeComponent(component: Component): void {}
  renderVDOM() {
    return JSON.stringify(this.components, null, 2);
  }
}
