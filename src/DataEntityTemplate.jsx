import React from 'react'

import { DataEntitiesConsumer } from './DataEntitiesContext'

import Page from './components/Page'
import LinkSet from './components/LinkSet'
import Link from './components/Link'

class ComponentMapping {
  static mapping = {
    page: Page,
    linkset: LinkSet,
    link: Link,
  }

  static getById(id = '') {
    return ComponentMapping.mapping[id.split(':')[2]]
  }
}

const DataEntityTemplate = ({ id }) => (
  <DataEntitiesConsumer>
    {({ dataEntities }) => {
      const Component = ComponentMapping.getById(id)
      return (
        <Component key={id} {...dataEntities[id].body}>
          {childId => <DataEntityTemplate id={childId} />}
        </Component>
      )
    }}
  </DataEntitiesConsumer>
)

export default DataEntityTemplate
