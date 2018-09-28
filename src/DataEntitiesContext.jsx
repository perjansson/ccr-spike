import { createContext } from 'react'

const DataEntitiesContext = createContext({ dataEntites: {} })

export const DataEntitiesProvider = DataEntitiesContext.Provider
export const DataEntitiesConsumer = DataEntitiesContext.Consumer
