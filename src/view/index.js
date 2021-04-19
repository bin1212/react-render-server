import React from "react";
import { connect } from "react-redux";
import * as TodoAction from "../store/actions";
import { bindActionCreators } from "redux";

class Home extends React.Component {
  state = {
    num: 1,
  };
  add = () => {
    this.setState({ num: this.state.num + 1 });
    this.props.setCounter()
  };
  render() {
    console.log(this.props, "client");
    return (
      <div>
        {this.state.num}
        <span onClick={this.add}>+</span>
      </div>
    );
  }
}
function mapStatesToProps(state) {
  return state.counter;
}
function mapDispatchProps(dispatch) {
  const { setCounter } = bindActionCreators(TodoAction, dispatch);
  return {
    setCounter,
  };
}
Home = connect(mapStatesToProps, mapDispatchProps)(Home);
export default Home;
