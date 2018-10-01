import React from 'react'

import { DataEntitiesConsumer } from './DataEntitiesContext'

const DataEntityComponent = ({ id }) => (
  <DataEntitiesConsumer>
    {({ getComponent, getDataEntity }) => {
      const Component = getComponent(id)
      const data = getDataEntity(id)

      return (
        <Component {...data}>
          {childId => <DataEntityComponent id={childId} key={childId} />}
        </Component>
      )
    }}
  </DataEntitiesConsumer>
)

export default DataEntityComponent
