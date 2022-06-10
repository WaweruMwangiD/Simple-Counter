import React, { Component } from 'react'
import './counter.css'

export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0,
        }
    }
    
    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset = () => {
        this.setState({
            count:  0
        })
    }


  render() {
    return (
      <div>
        <button onClick={this.increase} className='counter_button'>Increment</button>
        <button onClick={this.decrease} className='counter_button'>Decrement</button>
        <button onClick={this.reset} className='counter_button'>Reset</button>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
