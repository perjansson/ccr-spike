import React from 'react'
import ReactDOM from 'react-dom'

import { DataEntitiesProvider } from './DataEntitiesContext'
import DataEntityComponent from './components/DataEntityComponent'

import { addDataEntities } from './util/dataEntityStore'
import mockLinks from './stories/mock/links.json'
import mockLinkset from './stories/mock/linkset.json'
import mockCarousel from './stories/mock/carousel.json'
import mockGrid from './stories/mock/grid.json'
import mockTrays from './stories/mock/trays.json'
import mockPage from './stories/mock/page.json'
import mockText from './stories/mock/text.json'

// Initialize with mocked data entities from backend
addDataEntities(
  mockLinks,
  mockLinkset,
  mockCarousel,
  mockGrid,
  mockTrays,
  mockPage,
  mockText,
)

const renderApp = () => {
  ReactDOM.render(
    <DataEntitiesProvider>
      <DataEntityComponent id={'urn:hbo:page:series-family'} />
    </DataEntitiesProvider>,
    document.getElementById('root'),
  )
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/DataEntityComponent', () => {
    renderApp()
  })
}

renderApp()
