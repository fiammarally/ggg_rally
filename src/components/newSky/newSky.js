import React from "react"
import Item from "./item"

// images
import Bottle from "./img/bottle.svg"
import Jug from "./img/jug.svg"
import Screw from "./img/screw.svg"
import Cork from "./img/cork.svg"
import Glass from "./img/glass.svg"

class NewSky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: []
    }
  }
  componentDidMount() {
    const temp_moves = [];
    const many = this.props.how;
    for (let i = 0; i < many; i++) {
      const rotation = Math.floor((Math.round(Math.random()) * 2 - 1) * 600);
      const fromX = Math.floor((Math.random() * window.innerWidth));
      const fromY = Math.floor((Math.random() * window.innerHeight * 3));
      const toX = Math.floor((Math.random() * window.innerWidth) * (Math.round(Math.random()) * 2 - 1));
      const toY = Math.floor((Math.random() * window.innerHeight * 3) * (Math.round(Math.random()) * 2 - 1));
      temp_moves.push({
        rotation,
        fromX,
        fromY,
        toX,
        toY,
      });
    }
    this.setState({
      moves: temp_moves
    })
  }
  render() {
    const items = {
      0: Bottle,
      1: Jug,
      2: Screw,
      3: Cork,
      4: Glass,
    }

    const outerStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '-1',
      margin: '0',
      padding: '0',
      width: '100%',
      height: 'calc(3.4 * 100vh)',
      overflow: 'hidden',
      // inset css only for this project
      boxShadow: 'inset 0px -20px 40px rgba(0, 0, 0, 0.15)',
    }

    return (
      <div style={outerStyle} id="sky">
        {this.state.moves.map((e, i) => {
          const conditional = Math.floor(Math.random() * 5);

          return <Item
            what={items[conditional]}
            from={[e.fromX, e.fromY]}
            to={[e.toX, e.toY]}
            rotation={e.rotation}
            key={i}
          />
        })}
      </div>
    );
  }
}

export default NewSky;