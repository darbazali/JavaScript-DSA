/**
 * Compares 2 arrays, returns true if all elements of arr1 match the
 * corresponding squared numbers an the arr2
 * @param arr1 array of numbers
 * @param arr2 array of numbers
 * @returns boolean
 * @time O(n)
 * @space O(n)
 */

type FrequencyCounterType = Record<string, number>

const sameRefactored = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) return false

    const frequencyCounter1: FrequencyCounterType = {}
    const frequencyCounter2: FrequencyCounterType = {}

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        const squaredKey = Number(key) ** 2
        if (!(squaredKey in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[squaredKey] !== frequencyCounter1[key]) {
            return false
        }
    }

    return true
}

console.log(sameRefactored([1, 2, 3], [1, 4, 9])) // true
console.log(sameRefactored([1, 2, 3], [1, 9])) // false
console.log(sameRefactored([1, 2, 1], [4, 4, 1])) // false (must be same frequency)
