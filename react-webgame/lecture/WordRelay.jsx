const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "남열",
    value: "",
    result: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "딩동댕",
        word: this.state.value,
        value: "",
      });
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
    }
    this.input.focus();
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <h1>{this.state.word}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
