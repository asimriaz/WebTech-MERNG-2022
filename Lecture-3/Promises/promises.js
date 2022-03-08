function first() {
    return new Promise((resolve, reject)=>{
        resolve(`first Function`)
    })
}

function second() {
    return new Promise((resolve, reject)=>{
        fetch('https://jsonplaceholder.typicode.com/users/2')
            .then(response => response.json())
            .then(json => resolve(`second Function, ${json.name}`))
    })
}

function third() {
    return new Promise((resolve, reject)=>{
        resolve(`third Function`);
    })
}

// first()
// .then(data => console.log(data))
// .then(()=> second()
//             .then(data => console.log(data))
//             .then(()=> third()
//                         .then(data => console.log(data))))

Promise.all([
    first().then(data => console.log(data)),
    second().then(data => console.log(data)),
    third().then(data => console.log(data)),
])



