import React, { PureComponent } from "react";

//PureComponent는 새로운 객체나 배열을 만들어야 ShouldComponentUpdate 자동으로 해준다.
class Test extends PureComponent {
  state = {
    array: [],
  };

  onClick = () => {
    this.setState({
      array: [...this.state.array, 1],
    });
  };

  render() {
    console.log("렌더링", this.state);
    return (
      <div>
        <button onClick={this.onClick}></button>
      </div>
    );
  }
}
