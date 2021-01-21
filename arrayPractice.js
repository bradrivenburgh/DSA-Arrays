const Memory = require('./memory.js');

const memory = new Memory();

class Array {
  constructor() {
    this.length = 0; // length of array
    this._capacity = 0; // maximum length of array
    this.ptr = memory.allocate(this.length); // memory address
  }

  push(value) {
    // Check if there is memory available
    if (this.length >= this._capacity) {
      // triple the capacity of array;
      this._resize( (this.length + 1) * Array.SIZE_RATIO);
    }
    // Set the value to ptr + length (e.g., 0 + 1) expanding array
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    // Store current pointer
    const oldPtr = this.ptr;
    // Create a new ptr and block of memory
    this.ptr = memory.allocate(size);
    // Check if there is enough memory
    if (this.ptr == null) {
      throw new Error('Out of memory');
    }
    // copy data to new start location (this.ptr)
    // beginning at old start location (oldPtr)
    // for the length of size (e.g., size == 3 could be 
    // indexes 0, 1, 2)
    memory.copy(this.ptr, oldPtr, size);
    // Delete the old start location of memory block (oldPtr)
    memory.free(oldPtr);
    // Set the new capacity
    this._capacity = size;
  }

  get(index) {
    // Check to see if index retrieving is in array
    if (index < 0 || index >= this.length) {
      throw new Error('Index error')
    }
    // Return value starting at beginning of memory block
    // plus the index (e.g., get(0 + 1));
    return memory.get(this.ptr + index);
  }

  pop() {
    // Check to see if array has data to return
    if (this.length === 0) {
      throw new Error('Index error')
    }
    // Store the value of the last index in memory block
    const value = memory.get(this.ptr + this.length - 1);
    // Decrease the length of the array (but not capacity)
    this.length--;
    // Return value
    return value;
  }

  insert(index, value) {
    // Check to see if inserting in valid position
    if (index < 0 || index >= this.length) {
      throw new Error('Index error')
    }
    // Check to see if the array is at maximum capacity
    // and run _resize if it is
    if (this.length >= this.capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    // Shift data in memory block forward by the index and one
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    // Save the value at the specified index
    memory.set(this.ptr + index, value);
    // Increase the length of the array
    this.length++;
  }

  remove(index) {
    // Check to see if inserting in valid position
    if (index < 0 || index >= this.length) {
      throw new Error('Index error')
    }
    // If it is remove it and shift data backwards one index
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index);
    // Decrease the size of the array
    this.length--;
  }
}

Array.SIZE_RATIO = 3;

function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();

  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    arr.remove(0);
  }
  arr.push('tauhida');
  const string = arr.get(0);
  console.log(string);
  console.log(arr);
}

// Question 2.0
// length: 1, capacity: 3, memory address: 0

// Question 2.1
// length: 6, capacity: 12, memory address: 3
/* 
Explanation: After pushing the first value (3), the array
resized, allocated a new block of memory, and set the
pointer to a memory address triple the length of array
at the time of resizing (1).  Similarly, after pushing the
third value (15), the capacity again triples (4 * 3) to 12 via the
_resize method, a new memory block is reserved that starts at
memory address 3.
*/

// Question 3
// length: 3, capacity: 12, memory address: 3
/* 
Explanation: The value of the last array index is returned.  The
length of the array is decreased by one for each pop() call
*/

// Question 4
// NaN
/*
  Explanation for NaN: It only accepts values typed Number.  Best guess is because the 
  array is allocated space using the Memory module, which is an instance 
  of the Float64Array constructor which creates a typed array.

  Explanation for _resize method: It allocates a new contiguous block of memory
  when the current capacity is equal to the current length of the array.  Values
  in the current array are copied (from the current pointer up to the new pointer)
  to the new memory block and the capacity of the new memory block is increased
  by a factor of n.
*/

console.log(main());