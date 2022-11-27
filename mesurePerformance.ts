/**
 * Mesures the performance of a given proccess in seconds
 * @param proccess the proccess to be mesured: callback function
 */
const mesurePerformance = (proccess: () => void): void => {
    const startTime = performance.now()
    proccess()
    const endTime = performance.now()

    const howLongDidItTake = (endTime - startTime) / 1000 // in seconds
    console.log(`It took ${howLongDidItTake.toFixed(6)} seconds`)
}

export default mesurePerformance
