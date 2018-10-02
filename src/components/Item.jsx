import React from 'react'
import { layout } from './style'

const style = {
  container: {
    margin: '20px',
    width: '200px',
  },
  label: {
    ...layout.block,
  },
}

const Item = ({ label, src, ...rest }) => (
  <div style={style.container} {...rest}>
    <img src={src} />
    <div style={style.label}>{label}</div>
  </div>
)

export default Item
