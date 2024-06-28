// Write a function that takes an array of daily temperatures and returns an array where each element is the number of 
// days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// > dailyTemperatures([70, 70, 70, 75])
// > [3, 2, 1, 0]

// > dailyTemperatures([90, 80, 70, 60])
// > [0, 0, 0, 0]

// > dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
// > [1, 1, 4, 2, 1, 1, 0, 0]


// if a < b push 


function giveMeSunshine(dailyTemps) {
    let daysUntilWarmth = []

    for (let i = 0; i <= dailyTemps.length; i++) {
        let counter = 0
        if (dailyTemps[i] < dailyTemps[i + 1]) {
            daysUntilWarmth.push(1)
        } else if (dailyTemps[i] > dailyTemps[i + 1]) { // we need to stop and enter into another conditional here that can begin to count number of days until it finds a greater number.
            counter +=1
            console.log(counter)
            daysUntilWarmth.push(0)
        }  
    } return daysUntilWarmth
}

dailyTemps = [73, 74, 75, 71, 69, 72, 76, 73]

console.log(giveMeSunshine(dailyTemps))