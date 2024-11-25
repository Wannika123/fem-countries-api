// format pathname of the web url ex. south-korea
export function formatPathName(name: string) {
    return name.toLowerCase().replace(/\s+/g, '-');
}

// format the API url ex. south%20korea
export function formatQuery(query: string) {
    return query.split('-').join('%20')
}

export function capitalized(str: string) {
    const arr = str.split('')
    arr[0] = arr[0].toUpperCase() 
    return arr.join('')
}