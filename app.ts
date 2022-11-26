/**
 * Adds a number from 1 up to n
 * @param n any number grater than zero
 * @returns a number
 * @time O(n)
 * @space O(1)
 */
const addUpTo = (n: number): number => {
    let total: number = 0

    for (let i: number = 1; i <= n; i++) {
        total += i
    }

    return total
}

console.log(addUpTo(10000)) // 50005000

/**
 * Adds a number from 1 up to n, enhanced version
 * @param n any number grater than zero
 * @returns a number
 * @time O(1)
 * @space O(1)
 */
const addUpToFaster = (n: number): number => (n * (n + 1)) / 2

console.log(addUpToFaster(10000)) // 50005000
