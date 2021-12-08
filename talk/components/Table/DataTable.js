import React from 'react'
import styled from 'styled-components'

const DataTableStyle = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  font-size: 50%;
  max-width: 100vw;
  max-height: 80vh;
  
  * {
    padding: 0.1em;
  }

  th {
  color: #a7c947;
  padding: 0.3em;
  }

  tr:nth-of-type(odd) {
    background-color: #022D4F;
    color: #a6a6a6;
  }
  
  tr:nth-of-type(even) {
    background-color: #02223C;
    color: #a6a6a6;
  }
`

export function DataTable({ children }) {
  return (
    <DataTableStyle>
      {children}
    </DataTableStyle>
  )
}