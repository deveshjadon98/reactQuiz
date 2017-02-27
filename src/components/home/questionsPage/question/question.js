import React, { Component } from 'react';
import './question.css';
import Option from './option/option';

class Question extends Component {
  constructor(props) {
    super(props);
    this.changeQuestion = this.changeQuestion.bind(this);
  }

  changeQuestion(option_key){
    let data = {option_key : option_key , question_key : this.props.question_key};
    this.props.changeQuestion(data);
  }

  render() {
    return (
        <div className="t1-ques-inner">
            <div className="t1-ques-head">
                Q.{this.props.question_key} {this.props.name}?
            </div>
            <div className="t1-ques-component">
                <div className="question-components">
                    <div className="full-width np text-center">
                        <div className="check-comp">
                            {this.props.options.map((option,index) => <Option key={index} option_key={index} text={option.value} radioname={this.props.question_key} changeQuestion={this.changeQuestion}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Question;
