const { log, clear } = console
clear()

type CharRecord = Record<string, number>

/**
 * Anagaram challenge
 * @param str1 string
 * @param str2 string
 * @returns boolean
 * @time O(n)
 * @space O(n)
 */
const validAngaram = (str1: string, str2: string): boolean => {
    // early return
    if (str1.length !== str2.length) return false
    if (str1.length === 0 && str2.length === 0) return true

    // count chars of each string
    const charCount: CharRecord = {}

    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1
    }

    for (let char of str2) {
        if (!charCount[char]) return false
        else charCount[char] -= 1
    }

    return true
}

log(validAngaram("", "")) // true
log(validAngaram("cinema", "iceman")) // true
log(validAngaram("rat", "car")) // false
log(validAngaram("aaz", "zza")) // false
log(validAngaram("awesome", "awesom")) // false
