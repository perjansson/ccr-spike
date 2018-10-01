import React from 'react'
import { layout } from './style'

const style = {
  ...layout.block,
  height: '500px',
  background: '#262626',
}

const Grid = ({ header, references: { items } }) => (
  <div style={style}>{header.label}</div>
)

export default Grid
