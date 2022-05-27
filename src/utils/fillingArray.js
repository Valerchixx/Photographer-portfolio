function fillingArray(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i += 1) {
    array.push(false);
  }
  return array;
}

export default fillingArray;
