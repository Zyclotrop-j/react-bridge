import React from 'react18';
import ReactDOM from 'react-dom18/client';
import React17 from 'react17';
import ReactDOM17 from 'react-dom17';
import './index.css';
import App from './App';
import App17 from './App17';
import reportWebVitals from './reportWebVitals';

class Bridge extends React17.Component {
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
    return React17.createElement('div', {ref: this.myRef, element: 'span', scope: 'my-uniqueid' });
  }
}

class Noop extends React.Component {
  render() {return null;}
}
const r17root = React17.createElement('div', {}, [
  React17.createElement(App17),
  React17.createElement(Bridge, { someprop: "!!!" }, (props) => <><Noop ref={() => console.log("app started")} />{props.someprop}<App /></>)
]);
ReactDOM17.render(r17root, document.getElementById('root'));





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
