import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
class ContentCalendar extends React.Component {
  state = {
    date: new Date(),
  }
  onChange = (date) => this.setState({ date })
  render() {
    return (
      <div style={{ padding: '5%' }}>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    )
  }
}

export default ContentCalendar
