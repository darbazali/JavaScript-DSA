/**
 * Compairs 2 arrays of numbers, returns ture if every value in arr1 has
 * it's corresponding value squared in the arr2
 * @param arr1 an array of numbers
 * @param arr2 an array of numbers
 * @returns boolean value
 * @time O(n^2)
 * @space O(1)
 */
const same = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) return false

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }

        arr2.splice(correctIndex, 1)
    }

    return true
}

// exmaples
console.log(same([1, 2, 3], [1, 4, 9])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // false (must be same frequency)
