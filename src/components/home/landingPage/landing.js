import React, { Component } from 'react';
import './landing.css';
import LeadForm from './leadform/leadform';
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.showQuestion = this.showQuestion.bind(this);
    this.collectData = this.collectData.bind(this);
  }
  showQuestion(){
      this.props.showQuestion();
  }

  collectData(data){
    this.props.collectData(data);
  }

  render() {
    return (
        <div className="page_0 t1-landing">
            <div className="t1-landing-inner t1-overlay">
                <section className="t1-landing-mid">
                    <div className="t1-heading">
                        Test your Knowledge with this quiz
                    </div>
                    <div className="t1-subheading">
                        Prepare yourself for an adventurous ride
                    </div>
                    <LeadForm showQuestion={this.showQuestion} collectData={this.collectData}/>
                </section>
            </div>
        </div>
    );
  }
}

export default LandingPage;
