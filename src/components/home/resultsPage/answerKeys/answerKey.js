import React, { Component } from 'react';
import './answerKey.css';
class AnswerKey extends Component {
  constructor(props) {
    super(props);
    this.correctAnswer = '';
    this.yourAnswer = '';
    this.props.question.options.forEach(function(option){
        if(option.answer)
            this.correctAnswer = option.value;
        if(option.selected)
            this.yourAnswer = option.value;
    }.bind(this))
  }

  render() {
    return (
        <div class="t1-result-small-section">
            <div class="t1-result-small-container">
                <div class="t1-result-value">Q.{this.props.question.title}</div>
                <div class="t1-result-heading">{this.correctAnswer}</div>
                <div class="t1-result-subheading">{this.yourAnswer}</div>
            </div>
        </div>
    );
  }
}

export default AnswerKey;
