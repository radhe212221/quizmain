import axios from 'axios'
const url1 = "https://quizmaster-c5446-default-rtdb.firebaseio.com/quiz"
const url2 = "https://quizmaster-c5446-default-rtdb.firebaseio.com/users"
const url3 = "https://quizmaster-c5446-default-rtdb.firebaseio.com/teacher"
const url4 = "https://quizmaster-c5446-default-rtdb.firebaseio.com/results"
const url5 = "https://quizmaster-c5446-default-rtdb.firebaseio.com/logs"
const url6 = "https://quizmaster-c5446-default-rtdb.firebaseio.com/exams"

export const _get = async url => {
    let res = axios.get(url).then(res => res.data).catch(e => null)
    return res
}
export const _post = async (url, payload) => {
    let res = axios.post(url, payload).then(res => res.data.name).catch(e => null)
    return res
}
export const _patch = async (url, payload) => {
    let res = axios.patch(url, payload).then(res => res.data).catch(e => null)
    return res
}
export const _delete = async (url) => {
    let res = axios.delete(url).then(res => res.data).catch(e => null)
    return res
}




// quiz_url-url1
export const createQuiz = async payload => {
    let res = _post(`${url1}.json`, payload).then(d => ({ ...payload, id: d })).catch(e => null)
    return res
}
export const createUser = async payload => {
    let res = _post(`${url2}.json`, payload).then(d => ({ ...payload, id: d })).catch(e => null)
    return res
}
export const completeExam = async payload => {
    let res = _post(`${url6}.json`, payload).then(d => ({ ...payload, id: d })).catch(e => null)
    return res
}

export const listQuiz = async () => {
    let res = _get(`${url1}.json`)
    return res
}
