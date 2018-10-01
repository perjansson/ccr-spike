import React from 'react'
import Link from './Link'
import { layout } from './style'

const style = {
  ...layout.block,
}

const LinkSet = ({ references = {}, children }) => (
  <div style={style}>{references.links.map(children)}</div>
)

export default LinkSet
