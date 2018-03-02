export abstract class Component {
  private state: object;
  private props: object;
  componentDidMount?(): void;
  shouldComponentUpdate?(): boolean;
  abstract render(): void;
}
