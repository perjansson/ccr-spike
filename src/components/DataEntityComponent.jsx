import React from 'react'

import { DataEntitiesConsumer } from '../DataEntitiesContext'

const DataEntityComponent = ({ id }) => (
  <DataEntitiesConsumer>
    {({ getComponent, getEntityData }) => {
      const Component = getComponent(id)
      const data = getEntityData(id)

      return (
        <Component {...data}>
          {childId => <DataEntityComponent id={childId} key={childId} />}
        </Component>
      )
    }}
  </DataEntitiesConsumer>
)

export default DataEntityComponent
