import './App.css';
import React, { Component } from 'react';
import TopPanel from './components/TopPanel';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      startTime: '10:00',
      endDate: new Date(),
      endTime: '10:00',
      size: 7
    }
  }

  onStartDateChange = newValue => {
    console.log("CHANGE")
    this.setState({startDate: newValue})
  }

  onStartTimeChange = newValue => {
      this.setState({startTime: newValue})
  }

  onEndDateChange = newValue => {
      this.setState({endDate: newValue})
  }

  onEndTimeChange = newValue => {
      this.setState({endTime: newValue})
  }

  onSizeChange = newValue => {
      this.setState({size: newValue})
  }

  render() {
    return (
      <div class="body">
        <div class="header">
          <TopPanel
            startDate={this.state.startDate}
            startTime={this.state.startTime}
            endDate={this.state.endDate}
            endTime={this.state.endTime}
            size={this.state.size}
            onStartDateChange={this.state.onStartDateChange}
            onStartTimeChange={this.state.onStartTimeChange}
            onEndDateChange={this.state.onEndDateChange}
            onEndTimeChange={this.state.onEndTimeChange}
            onSizeChange={this.state.onSizeChange}
          />
        </div>
        <div class="main-content">
          Main content
        </div>
        <div class="footer">
          Image
        </div>
      </div>
    );
  }
}

export default App;