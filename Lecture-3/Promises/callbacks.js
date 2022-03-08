function first(callback) {
    console.log(`first Function`)
    callback();
}

function second(callback) {
    fetch('https://jsonplaceholder.typicode.com/users/2')
        .then(response => response.json())
        .then(json => console.log(`second Function, ${json.name}`))
        .then(()=> callback())
}

function third() {
    console.log(`third Function`);
    //callback()
}

first(function(){
    second(function(){
        third()
    })
})