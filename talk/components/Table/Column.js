import React from 'react'
import styled from 'styled-components'

const ColumnStyle = styled.div`
  padding: 1rem;
  box-sizing: border-box;

  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: calc(100vw / 10);
    font-size: 16px;
    list-style: none;
    padding: 4px;
  }
`

export function Column({ title, children }) {
  return (
    <ColumnStyle>
      <b>{title}</b>
      {children}
    </ColumnStyle>
  )
}