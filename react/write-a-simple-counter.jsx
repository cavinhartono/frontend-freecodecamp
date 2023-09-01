// - Counter should return a div element which contains three buttons with text content in this order Increment!, Decrement!, Reset.
// - The state of Counter should initialize with a count property set to 0.
// - Clicking the increment button should increment the count by 1.
// - Clicking the decrement button should decrement the count by 1.
// - Clicking reset to 0.

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState((state) => ({
      count: ++state.count,
    }));
  }

  decrement() {
    this.setState((state) => ({
      count: --state.count,
    }));
  }

  reset() {
    this.setState({
      count: 0,
    });
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}
