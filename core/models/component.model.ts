export abstract class Component {
  private state: object;
  private props: object;
  abstract componentDidMount(): void;
  abstract shouldComponentUpdate(): boolean;
  abstract render(): void;
}
