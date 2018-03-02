import { Component } from '../models/component.model';

export const renderElement = (component: Component) => {
  console.log('[DOM@renderElement]');
  console.log('Component to render: ', JSON.stringify(component, null, 2));
};
