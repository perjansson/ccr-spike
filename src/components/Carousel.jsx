import React from 'react'
import Carousel from 'nuka-carousel'
import Item from './Item'
import { layout } from './style'

const style = {
  container: {
    ...layout.block,
    padding: '20px',
    background: '#262626',
  },
  item: {
    ...layout.block,
  },
}

const WrappedCarousel = ({ references: { items } }) => (
  <div style={style.container}>
    <Carousel autoplay>
      {items.map((item, i) => (
        <Item key={i} {...item} tabIndex="0" style={style.item} />
      ))}
    </Carousel>
  </div>
)

export default WrappedCarousel
