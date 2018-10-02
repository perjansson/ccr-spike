import React from 'react'
import { storiesOf, addDecorator, configure } from '@storybook/react'

import { DataEntitiesProvider } from '../DataEntitiesContext'
import DataEntityComponent from '../DataEntityComponent'

import { addDataEntities } from '../util/dataEntityStore'
import mockLinks from './mock/links.json'
import mockLinkset from './mock/linkset.json'
import mockGrid from './mock/grid.json'
import mockTrays from './mock/trays.json'
import mockPage from './mock/page.json'
import mockText from './mock/text.json'

// Initialize with mocked data entities from backend
const dataEntities = addDataEntities(
  mockLinks,
  mockLinkset,
  mockGrid,
  mockTrays,
  mockPage,
  mockText,
)

const WithContext = story => (
  <DataEntitiesProvider>{story()}</DataEntitiesProvider>
)

storiesOf('DataEntityComponent', module)
  .addDecorator(WithContext)
  .add('Link', () => <DataEntityComponent id={'urn:hbo:link:series-all'} />)
  .add('Linkset', () => <DataEntityComponent id={'urn:hbo:linkset:series'} />)
  .add('Tray', () => (
    <DataEntityComponent id={'urn:hbo:tray:series-family-standard'} />
  ))
  .add('Grid', () => (
    <DataEntityComponent id={'urn:hbo:grid:series-family-a-z'} />
  ))
  .add('Page with multiple components', () => (
    <DataEntityComponent id={'urn:hbo:page:series-family'} />
  ))
