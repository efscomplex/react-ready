export const toAnimateCss = (effectName) =>
   `animate__animated animate__${effectName}`

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

export const uniqness = (str) => Array.from(new Set(str.split(' '))).join(' ')

export const sortByLabel = (collection, items) => {
   let newCollection = collection.map((item) => item.label)
   let orderedCollection = []
   newCollection.forEach((item) => {
      let index = items.indexOf(item)
      orderedCollection.push(collection[index])
   })
   return orderedCollection
}

export const capitalize = (str) => {
   if (typeof str !== 'string') return str
   const first = str[0].toUpperCase()
   return str.length > 1
      ? first + str.slice(1)
      : first
}