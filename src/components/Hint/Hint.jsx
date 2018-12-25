import React from 'react'

import './hint.scss'

export default function Hint (props) {
  return (
    <div className="b-hint">
      {props.innerText}
    </div>
  )
}