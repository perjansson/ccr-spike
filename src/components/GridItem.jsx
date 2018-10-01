import React from 'react'
import { layout, typography } from './style'

const style = {
  margin: '10px',
  height: '200px',
  width: '200px',
  background: '#fff',
}

const GridItem = ({ label }) => (
  <div style={style}>
    <img src="https://via.placeholder.com/200x200" />
  </div>
)

export default GridItem
