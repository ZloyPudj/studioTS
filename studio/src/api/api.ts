/*const BASE_URL = 'http://localhost:3001/api'

export const request = async <T>(
    url: string,
    method: string,
    body?: unknown
): Promise<T> => {
    const token = localStorage.getItem('token')

    const res = await fetch(BASE_URL + url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: body ? JSON.stringify(body) : undefined
    })

    if (!res.ok) {
        throw new Error('Ошибка запроса')
    }

    return res.json()
}*/