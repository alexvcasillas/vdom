import { Component } from '../models/component.model';

export const RDOM: Object = {
  render(component: Component, container: any, callback?: Function) {
    console.log('[DOM@renderElement]');
    console.log('Component to render: ', JSON.stringify(component, null, 2));
  },
};
