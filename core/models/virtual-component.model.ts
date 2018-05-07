// tslint:disable-next-line:interface-name
export interface VirtualComponent {
  identifier: string;
  nodeName: string;
  state?: Object;
  attributes?: Object;
  children?: VirtualComponent[];
}

export const Component = {
  __state: {},
  __props: {},
  async setState(state: Object | Function): Promise<Object> {
    console.log('setState called !!');
    console.log('Received: ', state);
    // Check if the state is being setted as a function
    if (typeof state === 'function') {
      // Execute the function to get the state
      const result = await state();
      // Assign the new state changes
      this.__state = Object.assign({}, { ...this.__state }, { ...result });
      // Return the current state after changes
      return this.__state;
    }
    // Assign the new state changes
    this.__state = Object.assign({}, { ...this.__state }, { ...state });
    // Return the current state after changes
    return this.__state;
  },
  async constructor() { },
  async componentDidMount() { },
  async shouldComponentUpdate() { },
  async render() {
    console.log('Original render called');
  }
};
