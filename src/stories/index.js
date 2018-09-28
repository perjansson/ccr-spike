import React from 'react'

import { storiesOf } from '@storybook/react'

import { DataEntitiesProvider } from '../DataEntitiesContext'
import DataEntityTemplate from '../DataEntityTemplate'

const dataEntities = {
  'urn:hbo:page:onelink': {
    body: {
      references: {
        items: ['urn:hbo:link:series-all'],
      },
    },
  },
  'urn:hbo:page:onelinkset': {
    body: {
      references: {
        items: ['urn:hbo:linkset:series'],
      },
    },
  },
  'urn:hbo:page:allcomponents': {
    body: {
      references: {
        items: [
          'urn:hbo:linkset:series',
          'urn:hbo:text:series-family-title',
          'urn:hbo:carousel:series-family-featured',
          'urn:hbo:tray:series-family-collection1',
          'urn:hbo:grid:series-family-a-z',
          'urn:hbo:tray:series-family-collection2',
        ],
      },
    },
  },

  'urn:hbo:linkset:series': {
    body: {
      references: {
        links: [
          'urn:hbo:link:series-all',
          'urn:hbo:link:series-latino',
          'urn:hbo:link:series-international',
          'urn:hbo:link:series-family',
        ],
      },
    },
  },

  'urn:hbo:link:series-all': {
    body: {
      label: 'All',
      references: {
        target: 'urn:hbo:page:series-all',
      },
    },
  },
  'urn:hbo:link:series-latino': {
    body: {
      label: 'Latino',
      references: {
        target: 'urn:hbo:page:series-latino',
      },
    },
  },
  'urn:hbo:link:series-international': {
    body: {
      label: 'International',
      references: {
        target: 'urn:hbo:page:series-international',
      },
    },
  },
  'urn:hbo:link:series-family': {
    body: {
      label: 'Family',
      references: {
        target: 'urn:hbo:page:series-family',
      },
    },
  },

  'urn:hbo:text:series-family-title': {
    body: {
      value: 'Family Series',
    },
  },

  'urn:hbo:tray:series-family-collection1': {
    body: {
      style: 'STANDARD',
      references: {
        items: [],
        target: 'urn:hbo:page:series-family-all',
      },
    },
  },
  'urn:hbo:tray:series-family-collection2': {
    body: {
      style: 'FANCY',
      references: {
        items: [],
        target: 'urn:hbo:page:series-family-all',
      },
    },
  },
}

const WithContext = storyFn => (
  <DataEntitiesProvider intialDataEntries={dataEntities}>
    {storyFn()}
  </DataEntitiesProvider>
)

storiesOf('DataEntityTemplate/Page', module)
  .addDecorator(WithContext)
  .add('with 1 link', () => {
    const id = 'urn:hbo:page:onelink'
    return <DataEntityTemplate id={id} />
  })
  .add('with 1 linkset', () => {
    const id = 'urn:hbo:page:onelinkset'
    return <DataEntityTemplate id={id} />
  })
  .add('with multiple components', () => {
    const id = 'urn:hbo:page:allcomponents'
    return <DataEntityTemplate id={id} />
  })
