import React from 'react'

const Page = ({ references = {}, children }) => (
  <div
    style={{
      height: '100%',
      border: '10px solid gray',
      padding: '20px',
    }}
  >
    {references.items.map(children)}
  </div>
)

export default Page
