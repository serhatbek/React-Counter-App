class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">React Counter</h1>

        <div className="counter-app">
          <button onClick={this.increment} className="btn">
            +
          </button>
          <button onClick={this.decrement} className="btn">
            -
          </button>
          <h2 className="count-result">{this.state.count}</h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.counter-app'));
