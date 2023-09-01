// - MyComponent should render a div element.
// - console.log should be called in componentWillMount.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log("Jika");
    // Change code above this line
  }
  render() {
    return <div />;
  }
}
