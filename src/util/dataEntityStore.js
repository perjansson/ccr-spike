import { is, omit } from 'ramda'

let dataEntities = {}

const updateDataEntities = (dataEntities, ...newDataEntities) => ({
  ...dataEntities,
  ...newDataEntities.reduce(
    (memo, dataEntity) => ({
      ...memo,
      ...(is(Array, dataEntity)
        ? {
            ...memo,
            ...updateDataEntities(dataEntities, ...dataEntity),
          }
        : { ...memo, [dataEntity.id]: dataEntity }),
    }),
    {},
  ),
})

export const addDataEntities = (...newDataEntities) => {
  dataEntities = updateDataEntities(dataEntities, ...newDataEntities)
}

export default id => (dataEntities[id] ? dataEntities[id].body : undefined)
