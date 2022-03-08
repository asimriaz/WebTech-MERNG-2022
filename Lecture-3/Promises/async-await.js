function first() {
    console.log(`first Function`)
}

async function second() {
    await fetch('https://jsonplaceholder.typicode.com/users/2')
        .then(response => response.json())
        .then(json => console.log(`second Function, ${json.name}`))
}

function third() {
    console.log(`third Function`);
}

(async()=>{
    first()
    await second()
    third()
})()

