import React from 'react'
import { layout, typography } from './style'

const style = {
  ...layout.block,
  ...typography.large,
}

const Text = ({ value = '[default value]' }) => <div style={style}>{value}</div>

export default Text
