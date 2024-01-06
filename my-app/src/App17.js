import React17 from 'react17';

class App extends React17.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 }
  }
  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 600)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return `Hello 17 - ${this.state.counter}`
  }
}

export default App;
