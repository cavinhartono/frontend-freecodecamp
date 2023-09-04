const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

// Change code below this line
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (state) => {
      dispatch(addMessage(state));
    },
  };
};
