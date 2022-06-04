export const transform = payload => {
    // how to convert objects from firebase to array of objects with id
    let x = Object.keys(payload)
    let y = Object.values(payload)
    let temp = []
    for (let i = 0; i < x.length; i++) {
        temp.push({
            id: x[i],
            ...y[i]
        })
    }
    return temp
}
export const textToCSV = str => str.trim().split("\n").map(x => x.split(","))

export const convertToQuiz = a => ({
    title: a[0],
    q: a[1],
    a: a[2],
    b: a[3],
    c: a[4],
    d: a[5],
    ca: a[6],
})
export const uniqueBy = (a, key) => {
    let b = a.map(x => x[key])
    b = Array.from(new Set(b))
    return b
}

export const countBy = (a, val, key) => {
    return a.filter(x => x[key] === val)
}
export const fillAnswersFromAutomation = state => {
    return state.map(x => !x?.ans ? ({ ...x, ans: "0" }) : x)
}