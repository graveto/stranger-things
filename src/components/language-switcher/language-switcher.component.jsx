import React from "react";

class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'english'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state)
  }

  render() {
    return (
        <label>
          Pick your favorite language:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="english">English</option>
            <option value="upsidedownerish">Upsidedownerish</option>
          </select>
        </label>
    );
  }
}

export default LanguageSwitcher;
