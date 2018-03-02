import { VDOM } from '../core/vdom';
import { renderElement } from '../core/dom';
import { Component } from '../core/models/component.model';

const vDOM = new VDOM();

const componentOne: Component = {
  identifier: '1',
  nodeName: 'p',
  attributes: {
    style: [{ fontFamily: 'Open Sans, sans-serif', fontSize: 14 }]
  }
};
const componentTwo: Component = {
  identifier: '2',
  nodeName: 'div'
};
const componentThree: Component = {
  identifier: '3',
  nodeName: 'div',
  attributes: {
    items: ['Spain', 'California']
  },
  parent: componentOne.identifier
};

vDOM.addComponent(componentOne);
vDOM.addComponent(componentTwo);
vDOM.addComponent(componentThree);

vDOM.updateComponent({ ...componentOne, nodeName: 'div' });
vDOM.updateComponent({ ...componentThree, nodeName: 'h1' });

console.log(vDOM.renderVDOM());

renderElement(componentOne);
