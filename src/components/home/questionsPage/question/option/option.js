import React, { Component } from 'react';
import './option.css';

class Option extends Component {
  constructor(props) {
    super(props);
    this.changeQuestion = this.changeQuestion.bind(this);
  }

  changeQuestion(){
    this.props.changeQuestion(this.props.option_key);
  }

  render() {
    return (
        <div className="radio-outer" tabindex="0">
            <label for={this.props.option_key} className="control control--radio lable-style no-icon">
                <span>{this.props.text}</span>
                <input type="radio" name={this.props.radioname} id={this.props.option_key} onChange={this.changeQuestion}/>
                <div className="control__indicator">
                </div>
            </label>
        </div>
    );
  }
}

export default Option;
