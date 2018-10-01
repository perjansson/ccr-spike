import React from 'react'
import { layout } from './style'

const style = {
  ...layout.block,
  height: '150px',
  background: '#262626',
}

const Tray = ({ style: trayStyle }) => (
  <div style={style}>
    TRAY WITH STYLE &nbsp;
    <strong>
      <em>{trayStyle}</em>
    </strong>
  </div>
)

export default Tray
