export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // This 'task' is block-scoped, so it won't overwrite the outer 'task'
    let task2 = false; // This 'task2' is also block-scoped, so it won't overwrite the outer 'task2'
  }

  return [task, task2]; // Returns the values of the outer 'task' and 'task2'
}
