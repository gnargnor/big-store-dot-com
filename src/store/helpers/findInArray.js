module.exports = (ID, Array) => {
  console.log(ID, Array);
  let returnedArray = Array.filter((itemInArray) => {
    return itemInArray.id === ID;
  })
  let foundItem = returnedArray[0];
  return foundItem;
}