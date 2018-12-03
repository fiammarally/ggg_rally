import React from "react"
import { Motion, spring, presets } from "react-motion"

class Burger extends React.Component {
  constructor() {
    super()
    
    this.state = {
      toggle: false
    }
  }
  
  handleClick() {
    this.setState({toggle: !this.state.toggle})
  }
  
  render() {
    const style = {
      overflow: 'visible',
      cursor: 'pointer',
      height: '60px',
      color: '#888',
      float: 'right',
      zIndex: '999',
      // disable touch highlighting on devices
      WebkitTapHighlightColor: "#333",
    }
    
    return (
      <svg 
        viewBox="0 0 96 96"
        height="1em"
        onClick={this.handleClick.bind(this)}
        style={style}
      >
        <Motion 
          style={{
            x: spring(this.state.toggle ? 1 : 0, presets.wobbly ),
            y: spring(this.state.toggle ? 0: 1, presets.wobbly ),
          }}
        >
          {({ x, y }) =>
            <g 
              id="navicon" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              >
              <line 
                transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`} 
                x1="7" y1="26" x2="89" y2="26" 
              />
              <line 
                transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`} 
                x1="7" y1="70" x2="89" y2="70" 
              />
              <line 
                transform={`translate(${x * -96})`} 
                opacity={y} 
                x1="7" y1="48" x2="89" y2="48"
              />
            </g>
          }
        </Motion>
      </svg>
    )
  }
}

export default Burger;
