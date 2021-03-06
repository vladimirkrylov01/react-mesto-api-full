export const BASE_URL = 'https://api.krylov.students.nomoredomains.work'
// export const BASE_URL = 'http://localhost:3001'

function handleResponse(res) {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(res.status)
}

export function register(email, password) {
    return fetch(`${BASE_URL}/signup`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
        .then(handleResponse)
}

export function authorize(email, password) {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
        .then(handleResponse)
}

export function checkToken(jwt) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${jwt}`
        }
    })
        .then(handleResponse)
}

