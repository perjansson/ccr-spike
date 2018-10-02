import React from 'react'
import Item from './Item'
import { layout } from './style'

const style = {
  container: {
    ...layout.block,
    alignItems: 'flex-start',
    overflowY: 'scroll',
    padding: '20px',
    background: '#262626',
  },
  trayContainer: {
    display: 'flex',
    flexDirection: 'row',
    background: '#262626',
    overflowY: 'scroll',
  },
  item: {
    height: '140px',
    margin: '5px',
  },
  fancyItem: {
    background: '#E75480',
    height: '365px',
  },
}

const Tray = ({ references: { items }, style: trayStyle }) => (
  <div style={style.container}>
    <div style={style.trayContainer}>
      {items.map((item, i) => (
        <Item
          key={i}
          {...item}
          tabIndex="0"
          style={{
            ...style.item,
            ...(trayStyle === 'FANCY' ? style.fancyItem : {}),
          }}
        />
      ))}
    </div>
  </div>
)

export default Tray
