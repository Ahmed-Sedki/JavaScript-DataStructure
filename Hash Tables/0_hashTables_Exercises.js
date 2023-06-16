//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

const inputArray = [2,5,1,2,3,5,1,2,4]

function firstRecurringCharacter(inputArray) {
    let map = {};
    for (let i = 0; i < inputArray.length; i++) {
        if (map[inputArray[i]] !== undefined) {
            return inputArray[i];
        } else {
            map[inputArray[i]] = i;
        }
    }
    return undefined;
}

console.log(firstRecurringCharacter(inputArray));
