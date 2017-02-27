import React, { Component } from 'react';
import './questions.css';
import Question from './question/question';
class QuestionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        questions : [
            {
                title : 'Who Plays Tennis',
                key : '1',
                show : true,
                options : [
                    { answer : true, selected : false , value : 'Rohan Bopanna'},
                    { answer : false, selected : false , value : 'Simon Katich'},
                    { answer : false, selected : false , value : 'Heath Streak'},
                    { answer : false, selected : false , value : 'Michael Phelps'},
                ]
            },
            {
                title : 'Select the odd one out',
                key : '2',
                show : false,
                options : [
                    { answer : false, selected : false , value : 'Manchester United FC'},
                    { answer : true, selected : false , value : 'Barcelona FC'},
                    { answer : false, selected : false , value : 'Swansea FC'},
                    { answer : false, selected : false , value : 'Norwich City FC'},
                ]
            },
            {
                title : 'Al Pachino won academy award for best actor for which movie',
                key : '3',
                show : false,
                options : [
                    { answer : false, selected : false , value : 'Scarface'},
                    { answer : false, selected : false , value : 'The Godfather'},
                    { answer : false, selected : false , value : 'The Insomniac'},
                    { answer : true, selected : false , value : 'Scent of a woman'},
                ]
            },
            {
                title : 'What is the world record for successive test match wins in cricket',
                key : '4',
                show : false,
                options : [
                    { answer : true, selected : false , value : '16'},
                    { answer : false, selected : false , value : '17'},
                    { answer : false, selected : false , value : '18'},
                    { answer : false, selected : false , value : '19'},
                ]
            },
            {
                title : 'Who was the last player to win Ballond`or before ronaldo and messi',
                key : '5',
                show : false,
                options : [
                    { answer : false, selected : false , value : 'Zinedine Zidane'},
                    { answer : true, selected : false , value : 'Ricardo Kaka'},
                    { answer : false, selected : false , value : 'Zlatan Ibrahmovic'},
                    { answer : false, selected : false , value : 'Wayne Rooney'},
                ]
            },

        ] 
    };
    this.changeQuestion = this.changeQuestion.bind(this);
  }

  changeQuestion(data){
    this.questions = JSON.parse(JSON.stringify(this.state.questions));
    this.showResult = false;
    this.questions = this.questions.map(function(question,index){
        if(question.key == data.question_key){
            question.show = false;
            question.options = question.options.map(function(option,index){
                if (data.option_key == index){
                    console.log("changing",data.option_key,index);
                    option.selected = true;
                }
                return option;
            })
            if(index < this.questions.length -1)
                this.questions[index + 1].show = true;
            else{
                this.showResult = true;
            }
        }
        return question;
    }.bind(this));
    this.setState({questions : this.questions});
    if(this.showResult){
        this.props.collectData(this.questions);    
        this.props.showResult();
    }
    // console.log("questions state",this.state.questions);
  }

  render() {
    return (
        <div className="page_1 t1-question">
            <div className="t1-landing-inner t1-overlay">
                <section className="t1-question-mid">
                    <div className="t1-question-slider">
                        <div className="t1-slider">
                            <div className="t1-slider-nav">
                            </div>
                            <div className="t1-slider-question slide-1" data-slide="1">
                                <div className="t1-slider-section">
                                    <form>
                                        {
                                            this.state.questions.map((question) => 
                                                question.show ? <Question key={question.key} question_key={question.key} name={question.title} options={question.options} changeQuestion={this.changeQuestion}/> : ''
                                            )
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
  }
}

export default QuestionsPage;
