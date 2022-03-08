function first() {
    console.log(`first Function`)
}

function second() {
    fetch('https://jsonplaceholder.typicode.com/users/2')
        .then(response => response.json())
        .then(json => console.log(`second Function, ${json.name}`))
}

function third() {
    console.log(`third Function`);
}