// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {isTimeStartAndPause: true, number: 25, seconds: 59}

  onStartAndPause = () => {
    const {number, seconds} = this.state
    const isTimerCompleted = seconds === number * 60

    if (isTimerCompleted) {
      this.setState({seconds: 0})
    }
    if (isTimerCompleted) {
      this.clearTimerInterval()
    } else {
      this.intervelId = setInterval(this.incrementSeconds, 1000)
    }
    this.setState(prevState => ({
      isTimeStartAndPause: !prevState.isTimeStartAndPause,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => ({number: prevState.number - 1}))
  }

  onIncrement = () => {
    this.setState(prevState => ({number: prevState.number + 1}))
  }

  incrementSeconds = () => {
    this.setState(prevState => ({seconds: prevState.seconds - 1}))
  }

  render() {
    const {isTimeStartAndPause, number, seconds} = this.state
    const image = isTimeStartAndPause
      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    const startOrAltText = isTimeStartAndPause ? 'pause icon' : 'play icon'
    return (
      <div className="bg-container">
        <div className="timer-display-container">
          <div className="elapsed-time-container">
            <h1>{`${number}:${seconds}`}</h1>
            <p>Running</p>
          </div>
        </div>
        <h1 className="main-heading">Digital Timer</h1>
        <div className="show-container">
          <button
            className="button"
            type="button"
            onClick={this.onStartAndPause}
          >
            <img src={image} alt={startOrAltText} className="pause-image" />
            <p className="start-pause">
              {isTimeStartAndPause ? 'Start' : 'Pause'}
            </p>
          </button>
          <button className="button" type="button" onClick={this.onReset}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
              alt={startOrAltText}
              className="reset-image"
            />
            <p className="start-pause">Reset</p>
          </button>
        </div>
        <div className="set-time-container">
          <p className="time-limit">Set Time Limit</p>
          <div className="increment-decrement-container">
            <button
              className="increment-button"
              type="button"
              onClick={this.onDecrement}
            >
              -
            </button>
            <button className="number-button" type="button">
              {number}
            </button>
            <button
              className="increment-button"
              type="button"
              onClick={this.onIncrement}
            >
              +
            </button>
          </div>
                  
        </div>
      </div>
    )
  }
}
export default DigitalTimer
