import React from 'react'

const style = {
  border: '10px solid #262626',
  padding: '5px',
}

const Page = ({ references = {}, children }) => (
  <div style={style}>{references.items.map(children)}</div>
)

export default Page
