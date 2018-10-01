import React, { createContext } from 'react'

import dataEntityStore from './util/dataEntityStore'
import dataEntityComponentMapper from './util/dataEntityComponentMapper'

const DataEntitiesContext = createContext({})

export const DataEntitiesProvider = ({ children }) => {
  return (
    <DataEntitiesContext.Provider
      value={{
        getDataEntity: dataEntityStore,
        getComponent: dataEntityComponentMapper,
      }}
    >
      {children}
    </DataEntitiesContext.Provider>
  )
}

export const DataEntitiesConsumer = DataEntitiesContext.Consumer
