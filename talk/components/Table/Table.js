import React from 'react'
import styled from 'styled-components'

const TableStyle = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  max-width: 100vw;
  max-height: 80vh;
  
  * {
  }

  div:nth-of-type(odd) {
    background-color: #022D4F;
  }
  
  div:nth-of-type(even) {
    background-color: #02223C;
  }
`

export function Table({ children }) {
  return (
    <TableStyle>
      {children}
    </TableStyle>
  )
}