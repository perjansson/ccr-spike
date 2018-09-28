import React from 'react'

import { DataEntitiesConsumer } from './DataEntitiesContext'

const DataEntityTemplate = ({ id }) => (
  <DataEntitiesConsumer>
    {({ getComponent, getDataEntity }) => {
      const Component = getComponent(id)
      const data = getDataEntity(id)

      return (
        Component && (
          <Component {...data}>
            {childId => <DataEntityTemplate id={childId} key={childId} />}
          </Component>
        )
      )
    }}
  </DataEntitiesConsumer>
)

export default DataEntityTemplate
