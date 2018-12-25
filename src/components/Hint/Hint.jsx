import React from 'react'
import styled from 'styled-components'

const StyledHint = styled.div`
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  top: 50px;  
`;

const StyledTriangle = styled.div`
  display: relative;

  &:after {
    content: ''; 
    position: absolute;
    left: 20px; 
    top: -40px;
    border: 20px solid transparent; 
    border-bottom: 20px solid rgba(0, 0, 0, 0.75);
  }
`

import './hint.scss' 

export default function Hint (props) {
  return (
    <StyledHint>
      <StyledTriangle />
      {props.innerText}
    </StyledHint>
  )
}