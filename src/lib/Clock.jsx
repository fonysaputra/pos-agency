import React, { Component } from 'react'
import { Clock } from 'react-clock'
class Clocks extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
    }
  }
  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000)
  }
  render() {
    return (
      <div
        style={{
          marginTop: 40,
        }}
      >
        <Clock value={this.state.date} size={190} />
      </div>
    )
  }
}

export default Clocks
