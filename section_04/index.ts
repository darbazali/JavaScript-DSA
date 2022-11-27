/**
 * Write a function that takes a string as input and returns counts of each character in the string
 *
 * Examples
 *  charCount("aaaa") // {a: 4}
 *  charCount("Hello") // {h: 1, e: 1, ll: 2, o: 1}
 *
 * Complex Examples
 *  charCount("My phone number is 060818938") // should retun ?
 *  charCount("Hello hi") // shold return ?
 *
 * Empty Inputs
 *  charCount() // should return ?
 *
 * Invalid Inputs
 *  charCount(1234) // should return 0, null, {}, or ?
 */

import mesurePerformance from "../mesurePerformance"

type RetrunType = Record<string, number>

const charCount = (str: string): RetrunType => {
    // Create an object to save char counts
    const result: RetrunType = {}

    // Iterate over the string
    for (let i: number = 0; i < str.length; i++) {
        const char: string = str[i].toLowerCase()

        if (char.match(/[a-z0-9]/)) {
            // if the char is a number/letter AND is a key of object, add 1 to it
            if (result[char] > 0) {
                result[char]++
            }
            // if the char is a number/letter AND is not a key of object, add to the object and add 1 to it
            else {
                result[char] = 1
            }
        }

        // if the car is something else (space, symobles, etc) don't do any thing.
    }

    // Return the object
    return result
}

/**
 * Checks a character string if it's a lowercase string or a number
 * @param char a single character string
 * @returns boolean
 */
const isAlphaNumeric = (char: string): boolean => {
    const code = char.charCodeAt(0)
    if (
        !(code > 47 && code < 58) && // numerice (0-9)
        !(code > 96 && code < 123) // lower alphabets (a-z)
    ) {
        return false
    }
    return true
}

const charCountRefactored = (str: string): RetrunType => {
    const object: RetrunType = {}

    for (let char of str) {
        char = char.toLowerCase()

        if (isAlphaNumeric(char)) {
            object[char] = ++object[char] || 1
        }
    }

    return object
}

mesurePerformance(() => charCountRefactored("My phone number is 060818938"))
