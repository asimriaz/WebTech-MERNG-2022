function first (){
    console.log(`first`);
}
async function second(){
    await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(json => console.log(`second, ${json.name}`))
}

function third(){
    console.log(`third`);
}
(async()=>{
    first();
    await second();
    third();
})()

