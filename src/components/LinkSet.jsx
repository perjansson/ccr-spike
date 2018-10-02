import React from 'react'
import { layout } from './style'

const style = {
  ...layout.block,
  flexDirection: 'row',
}

const LinkSet = ({ references = {}, children }) => (
  <div style={style}>{references.links.map(children)}</div>
)

export default LinkSet
