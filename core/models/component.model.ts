export interface Component {
  state: object;
  componentDidMount(): void;
  shouldComponentUpdate(): void;
  render(): void;
}
