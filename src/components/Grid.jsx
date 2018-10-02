import React, { Fragment } from 'react'
import Item from './Item'
import { layout, typography } from './style'

const style = {
  container: {
    ...layout.block,
    padding: '20px',
    background: '#262626',
  },
  header: {
    marginTop: '20px',
    marginBottom: '20px',
    ...typography.medium,
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    gridGap: '30px',
    background: '#262626',
  },
  item: {
    height: '245px',
  },
}

const Grid = ({ header, references: { items } }) => (
  <div style={style.container}>
    <div style={style.header}>{header.label}</div>
    <div style={style.gridContainer}>
      {items.map((item, i) => (
        <Item key={i} {...item} tabIndex="0" style={item} />
      ))}
    </div>
  </div>
)

export default Grid
