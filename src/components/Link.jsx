import React from 'react'
import { layout, typography } from './style'

const style = { ...typography.small }

const Link = ({ label = '[default label]', references: { target } }) => (
  <a style={style} href={target}>
    {label}
  </a>
)

export default Link
