import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

class App extends Component {
 constructor(props){
   super(props);
   this.state = {
     text: ' '
   }
 }

 addReminder() {
   this.props.addReminder(this.state.text);
 }

 renderReminders() {
   const { reminders } = this.props;
 }

  render() {
    return (
       <div className="App">
       <div className="title">
        Reminder Pro
      </div>
      <div className="form-inline">
      <div className="form-group">
     <input
      className="form-control"
      placeholder="I hav to..."
      onChange={event => this.setState({ text: event.target.value })}
      />
      </div>
      { this.renderReminders() }
      <button
      type="button"
      className="btn btn-success"
      onClick={() => this.addReminder()}
      >
       Add Reminder
       </button>
      </div>
       </div>
    )
  }
}

function mapStateToProps(state) {
return {
  reminders: state
}
}

export default connect(mapStateToProps,  { addReminder }) (App);
