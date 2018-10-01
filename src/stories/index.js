import React from 'react'
import { storiesOf, addDecorator, configure } from '@storybook/react'

import { DataEntitiesProvider } from '../DataEntitiesContext'
import DataEntityComponent from '../DataEntityComponent'

const WithContext = story => (
  <DataEntitiesProvider>{story()}</DataEntitiesProvider>
)

storiesOf('DataEntityComponent', module)
  .addDecorator(WithContext)
  .add('Link', () => <DataEntityComponent id={'urn:hbo:link:series-all'} />)
  .add('Linkset', () => <DataEntityComponent id={'urn:hbo:linkset:series'} />)
  .add('Grid', () => (
    <DataEntityComponent id={'urn:hbo:grid:series-family-a-z'} />
  ))
  .add('Page with multiple components', () => (
    <DataEntityComponent id={'urn:hbo:page:series-family'} />
  ))
