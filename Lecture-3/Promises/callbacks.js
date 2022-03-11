function first(callback) {
    console.log(`first`);
    callback();
}

function second(callback) {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(json => console.log(`second, ${json.name}`))
        .then(()=> callback())
}

function third() {
    console.log(`third`);
}

first(function(){
    second(function(){
        third()
    })
})


