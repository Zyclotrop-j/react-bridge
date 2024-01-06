import React from 'react18';
import React17 from 'react17';
import ReactDOM from 'react-dom18/client';

export default class Bridge extends React17.Component {
    constructor(props) {
      super(props);
      this.container = document.createElement(props.element ?? 'div');
      this.root18 = ReactDOM.createRoot(this.container, { identifierPrefix: props.scope });
      this.myRef = React17.createRef();
      this.refresh = this.refresh.bind(this);
    }
    componentDidMount() {
      this.refresh();
    }
    componentDidUpdate() {
      this.refresh();
    }
    componentWillUnmount() {
      this.container.parentElement.removeChild(this.container);
      this.root18.unmount();
    }
    refresh() {
      this.myRef.current.appendChild(this.container);
      this.root18.render(<React.StrictMode>{React.createElement(this.props.children, this.props)}</React.StrictMode>);
    }
    render() {
      return React17.createElement(props.element ?? 'div', {ref: this.myRef });
    }
  }