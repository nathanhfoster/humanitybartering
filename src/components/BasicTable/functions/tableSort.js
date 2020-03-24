import { isType } from "../../../helpers"

const tableSort = (data, sort, sortKey, sortUp) => {
  //JSON.parse(JSON.stringify(data))

  const sortedData = [...data].sort((a, b) => {
    if (sort) {
      return sort(a, b, sortUp)
    } else {
      const aValue = a[sortKey]
      const bValue = b[sortKey]
      let valueType = null

      if (typeof aValue === typeof bValue) {
        valueType = typeof aValue
      }

      // console.log("valueType: ", valueType)

      if (valueType === isType.STRING) {
        return sortUp
          ? bValue.localeCompare(aValue)
          : aValue.localeCompare(bValue)
      } else if (valueType === isType.NUMBER || valueType === isType.BOOLEAN) {
        return sortUp ? bValue - aValue : aValue - bValue
      } else if (Array.isArray(aValue)) {
        return sortUp
          ? bValue.join().localeCompare(aValue.join())
          : aValue.join().localeCompare(bValue.join())
      } else if (valueType === isType.OBJECT) {
        // console.log(aValue)
        // console.log("OBJECT")
      }
    }
  })

  return sortedData
}

export default tableSort
