import React from 'react'
import ReactDOM from 'react-dom'

import RootHint from './RootHint.jsx'

class UIKit extends React.Component {
  render() {
    return (
      <RootHint>
        <span>Наведи на меня</span>
      </RootHint>
    )
  }
}

ReactDOM.render(<UIKit />, document.getElementById('root'))