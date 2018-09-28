import React from 'react'

import { storiesOf } from '@storybook/react'

import { DataEntitiesProvider } from '../DataEntitiesContext'
import DataEntityTemplate from '../DataEntityTemplate'

const dataEntities = {
  'urn:hbo:page:series1': {
    body: {
      references: {
        items: ['urn:hbo:link:series-all'],
      },
    },
  },
  'urn:hbo:page:series2': {
    body: {
      references: {
        items: ['urn:hbo:linkset:series'],
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
}

const WithContext = storyFn => (
  <DataEntitiesProvider value={{ dataEntities }}>
    {storyFn()}
  </DataEntitiesProvider>
)

storiesOf('DataEntityTemplate/Page', module)
  .addDecorator(WithContext)
  .add('with one Link Entity', () => {
    const id = 'urn:hbo:page:series1'
    return <DataEntityTemplate id={id} />
  })
  .add('with one LinkSet Entity', () => {
    const id = 'urn:hbo:page:series2'
    return <DataEntityTemplate id={id} />
  })
