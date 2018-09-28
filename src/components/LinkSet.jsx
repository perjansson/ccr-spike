import React from 'react'
import Link from './Link'

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const LinkSet = ({ references = {}, children }) => (
  <div style={style}>{references.links.map(children)}</div>
)

export default LinkSet
