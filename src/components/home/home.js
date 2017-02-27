import React, { Component } from 'react';
import './home.css';
import LandingPage from './landingPage/landing';
import QuestionsPage from './questionsPage/questions';
import ResultsPage from './resultsPage/results';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { landing:true, questions:false, result:false, userData : '',questionsData:''};
    this.showQuestion = this.showQuestion.bind(this);
    this.showResult = this.showResult.bind(this);
    this.collectUserData = this.collectUserData.bind(this);
    this.collectQuestionsData = this.collectQuestionsData.bind(this);
  }
  showQuestion(){
      this.setState({landing:false,questions:true});
  }

  showResult(){
      this.setState({landing:false,questions:false,result:true});
  }

  collectUserData(data){
      this.setState({userData : data});
  }

  collectQuestionsData(data){
    this.setState({questionsData : data});
    setTimeout(function(){
        console.log("MEANINGFUL DATA",this.state);

    }.bind(this),2000);
  }

  render() {
    return (
        <div className="main">
            <div className="t1">
                { this.state.landing ? <LandingPage showQuestion={this.showQuestion} collectData={this.collectUserData}/> : '' }
                { this.state.questions ? <QuestionsPage showResult={this.showResult} collectData={this.collectQuestionsData}/> : '' }
                { this.state.result ? <ResultsPage userData={this.state.userData} questionsData={this.state.questionsData}/> : '' }
            </div>
        </div>
    );
  }
}

export default Home;
