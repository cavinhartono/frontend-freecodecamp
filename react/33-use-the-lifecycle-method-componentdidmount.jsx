// - MyComponent should render a div element which wraps an h1 tag.
// - Component state should be updated with a timeout function in componentDidMount.
// - The h1 tag should render the activeUsers value from MyComponent's state

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: {this.state.activeUsers} </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
