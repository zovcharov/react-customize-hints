import React from 'react'
import styled from 'styled-components'

const StyledHint = styled.div`
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 10px;
  border-radius: 10px;
`;

import './hint.scss' 

export default function Hint (props) {
  return (
    <StyledHint>
      {props.innerText}
    </StyledHint>
  )
}