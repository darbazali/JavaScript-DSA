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

console.log(charCount("aaaa")) //   {a: 4}
console.log(charCount("Hello")) //  { H: 1, e: 1, l: 2, o: 1 }
console.log(charCount("My phone number is 060818938"))
