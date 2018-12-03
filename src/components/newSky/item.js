import React from "react"

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        transform: `translate(${this.props.from[0]}px, ${this.props.from[1]}px) rotate(${Math.random() * 360}deg)`,
      }
    }
  }

  componentDidMount() {
    const movingStyle = `translate(${this.props.to[0]}px, ${this.props.to[1]}px) rotate(${this.props.rotation}deg)`;
    const time = 20;
    setTimeout(() => {
      this.setState({
        style: {
          position: 'absolute',
          zIndex: '-1',
          transform: movingStyle,
          transition: `transform ${time}s ease-out`,
          width: '200px',
          height: '200px',
          overflow: 'visible',
          willChange: 'transform',
        }
      });
    }, 1);
    setInterval(() => {
      const movingStyle = `translate(${Math.random() * window.innerHeight * 3.1}px, ${Math.random() * window.innerWidth * 1.1}px) rotate(${Math.random() * 360}deg)`;
      this.setState({
        style: {
          position: 'absolute',
          zIndex: '-1',
          transform: movingStyle,
          transition: `transform ${time}s ease-out`,
          width: '200px',
          height: '200px',
          overflow: 'visible',
          willChange: 'transform',
        }
      });
    }, time * 1000);
  }

  render() {
    const style = this.state.style;

    return (
      <div style={style}>
        <img srcSet={this.props.what} alt="lol" />
      </div>
    );
  }
}

export default Item;