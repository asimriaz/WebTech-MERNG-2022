function first() {
    console.log(`first`)
}

function second() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(json => console.log(`second, ${json.name}`))
}

function third() {
    console.log(`third`);
}