import React, { Component } from 'react';
import './leadform.css';
class LeadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email : '',
        name : ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    let storage = {
        name : this.state.name,
        email : this.state.email
    };
    // localStorage.setItem('lead',JSON.stringify(storage));
    if(this.state.name != '' && this.state.email != ''){
        this.props.collectData(storage);
        this.props.showQuestion();
    }
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div className="t1-landing-leadform">
                <div className="t1-leadform-field">
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleName}/>
                </div>
                <div className="t1-leadform-field">
                    <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                </div>
            </div>
            <div className="t1-button">
                <input type="submit" className="landing-btn sliding-next" value="Get Started"/>
            </div>
        </form>
    );
  }
}

export default LeadForm;
