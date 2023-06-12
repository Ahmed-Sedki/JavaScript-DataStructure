class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

    indexOf(item) {
        let index = 0
        for (let i = 0; i < this.length; i++)
        {
            if (item !== this.data[i]){
                index++
            } else {
                return index
            }
        }

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
console.log(newArray.indexOf("is"))