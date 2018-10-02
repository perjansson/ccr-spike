import React from 'react'

const style = {
  container: {
    border: '10px solid #262626',
    padding: '5px',
  },
  block: {
    marginBottom: '60px',
  },
}

const Page = ({ references = {}, children }) => (
  <div style={style.container}>
    {references.items.map(itemId => (
      <div key={itemId} style={style.block}>
        {children(itemId)}
      </div>
    ))}
  </div>
)

export default Page
