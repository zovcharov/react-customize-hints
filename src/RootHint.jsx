import React from 'react'

import Display from './components/Display/Display.jsx'
import Hint from './components/Hint/Hint.jsx'

export default class RootHint extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showHint: false
    }
  }

  onHover = (e) => {
    this.setState({
      showHint: true
    })
  }

  onHoverOut = () => {
    this.setState({
      showHint: false
    })
  }

  render() {
    return (
      <div className="b-hint-wrapper">
        <div onMouseOver={this.onHover} onMouseOut={this.onHoverOut}>
          { this.props.children } 
        </div>
        <Display isVisible={this.state.showHint}>
          <Hint innerText='Это подсказка' />
        </Display>        
      </div>      
    )
  }
}