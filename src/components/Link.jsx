import React from 'react'
import { layout, typography } from './style'

const style = { ...typography.medium }

const Link = ({ label = '[default label]' }) => <div style={style}>{label}</div>

export default Link
