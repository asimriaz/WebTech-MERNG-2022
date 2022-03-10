console.log(`first`)

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => console.log(`second, ${json.name}`))

console.log(`third`)