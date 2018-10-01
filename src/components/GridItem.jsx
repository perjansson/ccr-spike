import React from 'react'
import { layout, typography } from './style'

const style = {
  margin: '10px',
  height: '200px',
  width: '200px',
  background: '#fff',
}

const GridItem = ({ label, ...rest }) => (
  <div style={style} {...rest}>
    <img src="https://via.placeholder.com/200x200" />
  </div>
)

export default GridItem
