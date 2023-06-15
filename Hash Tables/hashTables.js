//https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
//https://www.miraclesalad.com/webtools/md5.php
//https://en.wikipedia.org/wiki/Hash_table
//https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(associative_array)
let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function () {
        console.log('ahhhhhh!');
    }
};

user.age;
user.spell = 'abra kadabra';
user.scream()

  //Map --> Gives you some order
  //Set --> No duplicate keys

//##########################################################################################################################################
//Create a hash table class from scratch
// HashTable class
class HashTable {
    // constructor accepts a size and creates an array of that size
    constructor(size){
      // Create new array of given size
      this.data = new Array(size);
    }

    // This is a private method used to generate a hash from the provided key
    _hash(key) {
      let hash = 0;
      // iterate through characters in the key
      for (let i =0; i < key.length; i++){
          // Create a hash based on the character codes of the key
          // and the index, then get the remainder of the division by the data array length
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    // set method adds a new element to the hash table
    set(key, value) {
      // Get the address in our storage for this key
      let address = this._hash(key);
      // If there's nothing at this address, start a new array
      if (!this.data[address]) {
        this.data[address] = [];
      }
      // Push the key-value pair into the array at this address
      this.data[address].push([key, value]);
      // Return the entire hash table
      return this.data;
    }

    // get method retrieves the value for a given key from the hash table
    get(key){
      // Get the address in our storage for this key
      const address = this._hash(key);
      // Get the bucket at this address
      const currentBucket = this.data[address]
      if (currentBucket) {
        // Iterate through bucket
        for(let i = 0; i < currentBucket.length; i++){
          // Check if key of current pair matches the search key
          if(currentBucket[i][0] === key) {
            // If match is found, return the value
            return currentBucket[i][1]
          }
        }
      }
      // If no match found, return undefined
      return undefined;
    }
}

/*
//another way
class HashTable {
    constructor(size){
      this.data = new Array(size);
    }

    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }

    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = new Map();
      }
      this.data[address].set(key, value);
      return this.data;
    }

    get(key) {
      const address = this._hash(key);
      const currentBucket = this.data[address];
      if (currentBucket) {
        return currentBucket.get(key);
      }
      return undefined;
    }
}
*/
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')