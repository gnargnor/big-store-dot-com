module.exports = (ID, Array) => {
  let returnedArray = Array.filter((itemInArray) => {
    return itemInArray.id === ID;
  })
  let foundItem = returnedArray[0];
  return foundItem;
}