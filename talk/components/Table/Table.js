import React from 'react'
import styled from 'styled-components'

const TableStyle = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  max-width: 100vw;
  max-height: 60vh;

  * {
  }

  div:nth-of-type(odd) {
    background-color: lightblue;
  }
  
  div:nth-of-type(even) {
    background-color: #efefef;
  }
`

export function Table({ children }) {
  return (
    <TableStyle>
      {children}
    </TableStyle>
  )
}