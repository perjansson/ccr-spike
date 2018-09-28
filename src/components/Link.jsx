import React from 'react'

const style = {
  padding: '0 20px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: '14px',
  fontStyle: 'normal',
  lineHeight: '40px',
  textDecoration: 'none',
  letterSpacing: '1.5px',
  color: 'rgb(240, 240, 240)',
}

const Link = ({ label = '[default label]' }) => <div style={style}>{label}</div>

export default Link
