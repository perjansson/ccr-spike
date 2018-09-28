import React, { createContext } from 'react'
import componentMapper from './componentMapper'

const DataEntitiesContext = createContext({})

export const DataEntitiesProvider = ({ intialDataEntries, children }) => {
  const dataEntities = intialDataEntries

  return (
    <DataEntitiesContext.Provider
      value={{
        dataEntities: intialDataEntries,
        getDataEntity: id =>
          dataEntities[id] ? dataEntities[id].body : undefined,
        getComponent: componentMapper,
      }}
    >
      {children}
    </DataEntitiesContext.Provider>
  )
}

export const DataEntitiesConsumer = DataEntitiesContext.Consumer
