import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search User..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="text"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
