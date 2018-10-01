const dataEntities = {
  'urn:hbo:page:series-family': {
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

  'urn:hbo:grid:series-family-a-z': {
    body: {
      header: {
        label: 'All Family Series',
      },
      references: {
        items: [],
      },
    },
  },
}

export default id => (dataEntities[id] ? dataEntities[id].body : undefined)
