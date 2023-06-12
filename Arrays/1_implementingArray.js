// Define MyArray class
class MyArray {
    // Constructor gets called when a new instance of the class is created
    constructor() {
        this.length = 0; // Initialize length of array to 0
        this.data = {};  // Initialize empty data object
    }

    // Method to get an item from array given an index
    get(index) {
        return this.data[index] // Return the data at the specified index
    }

    // Method to add an item to the end of array
    push(item) {
        this.data[this.length] = item // Add item at the current length (which is the end of array)
        this.length++ // Increment the length
        return this.length // Return the new length
    }

    // Method to remove an item from the end of array
    pop() {
        const lastItem = this.data[this.length - 1] // Store the last item
        delete this.data[this.length - 1] // Delete the last item
        this.length-- // Decrement the length
        return lastItem // Return the removed item
    }

    // Method to delete an item at a specific index
    deleteAtIndex(index) {
        const item = this.data[index]; // Store the item to be deleted
        this.shiftItems(index); // Shift the items after the deleted item to fill the gap
        return item; // Return the deleted item
    }

    // Helper method to shift items after a certain index
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1] // Copy the next item to the current index
        }
        delete this.data[this.length - 1] // Delete the last item which has now been shifted
        this.length-- // Decrement the length
    }

    // Method to find the index of an item
    indexOf(item) {
        let index = 0 // Initialize the index to 0
        for (let i = 0; i < this.length; i++) // Loop through the data
        {
            if (item !== this.data[i]) { // If the item does not match the current item
                index++ // Increment the index
            } else { // If the item matches the current item
                return index // Return the index
            }
        }
        // Item not found
        return -1
    }
}


const newArray = new MyArray();
newArray.push("Hi")
newArray.push("My")
newArray.push("Name")
newArray.push("is")
newArray.push("Ahmed")
newArray.deleteAtIndex(1)
console.log(newArray)
console.log(newArray.indexOf("iss"))