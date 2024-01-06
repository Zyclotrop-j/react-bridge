import React from 'react18';
import React17 from 'react17';
import ReactDOM17 from 'react-dom17';
import './index.css';
import App from './App';
import App17 from './App17';
import reportWebVitals from './reportWebVitals';
import Bridge from './Bridge';


class Noop extends React.Component {
  render() {return null;}
}
const r17root = React17.createElement('div', {}, [
  React17.createElement(App17),
  React17.createElement(Bridge, { someprop: "-----!!!", element: 'span', scope: 'my-uniqueid' }, (props) => <><Noop ref={() => console.log("app started")} />{props.someprop}<App /></>)
]);
ReactDOM17.render(r17root, document.getElementById('root'));





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
