import React, { Component } from 'react';
import './results.css';
import AnswerKey from './answerKeys/answerKey';
import { Chart } from 'react-google-charts';
class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { answerKeys : false };
    this.correctQuestions = 0;
    this.questions = this.props.questionsData;
    this.props.questionsData.forEach(function(question){
       question.options.forEach(function(option){
            if(option.answer && option.answer === option.selected){
                this.correctQuestions++;
            }
        }.bind(this))        
    }.bind(this))
    this.incorrectQuestions = this.props.questionsData.length - this.correctQuestions ;
    console.log("correct questions",this.correctQuestions,this.incorrectQuestions);
    this.showAnswerKeys = this.showAnswerKeys.bind(this);
  }

  showAnswerKeys(){
      this.setState({answerKeys : true});
  }

  render() {
    return (
        <div className="page_2 t1-result">
            <div className="t1-result-main t1-overlay">
                <section className="t1-result-top">
                    <div className="t1-result-topheading">
                        Here's your detailed performance:
                    </div>
                    <div className="t1-result-inner">
                        { this.state.answerKeys ? this.questions.map((question) => <AnswerKey key={question.toString()} question={question} /> ) : ''}
                        { this.state.answerKeys ? '' : <Chart
                            chartType="BarChart"
                            data={[['Type', 'Count',{"role":"style"}], ["Correct", this.correctQuestions,"green"], ["Incorrect", this.incorrectQuestions,"red"]]}
                            options={{}}
                            graph_id="BarChart"
                            width="100%"
                            height="400px"
                            legend_toggle
                            /> }
                    </div>      
                </section>
                <div className="t1-button">
                    <input type="submit" onClick={this.showAnswerKeys} className="landing-btn sliding-next" value="See Answer Keys"/>
                </div>
            </div>
        </div>
    );
  }
}

export default ResultsPage;
