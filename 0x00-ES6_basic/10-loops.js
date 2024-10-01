export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
   // Use the index to modify the original array
    array[array.indexOf(value)] = appendString + value; 
  }

  return array;
}
