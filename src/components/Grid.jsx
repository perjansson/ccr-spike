import React, { Fragment } from 'react'
import GridItem from './GridItem'
import { layout, typography } from './style'

const style = {
  container: {
    ...layout.block,
    padding: '20px',
    background: '#262626',
  },
  header: {
    marginTop: '20px',
    ...typography.medium,
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    gridGap: '5px',
    background: '#262626',
  },
}

const Grid = ({ header, references: { items } }) => (
  <div style={style.container}>
    <div style={style.header}>{header.label}</div>
    <div style={style.gridContainer}>
      {items.map((item, i) => (
        <GridItem key={i} {...item} tabIndex="0" />
      ))}
    </div>
  </div>
)

export default Grid
