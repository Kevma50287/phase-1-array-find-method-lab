// code your solution here
const record = [
    { year: "2015", result: ""},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]
//Functions receives array of objects as argument
const superbowlWin = (array) => {

    //isWin is a function representing the boolean
    const isWin = (object) => {
        return object.result === 'W';
    }

    //findWin returns result of the find function 
    const findWin = array.find(isWin)

    //if findWin is not undefined, return the year property, else return undefined
    if (findWin) {
        return findWin.year
    } else {
        return undefined
    }
    
}

superbowlWin(record)