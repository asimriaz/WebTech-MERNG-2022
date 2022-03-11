function first(num) {
    return new Promise((resolve, reject)=>{
        if((num % 2) === 0){
            resolve(`first: Even Number`)
        }else{
            reject(`Odd number are not allowed`)
        }
    })
}

function second() {
    return new Promise((resolve, reject)=>{
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(json => resolve(`second, ${json.name}`))
    })
}

function third() {
    return new Promise((resolve, reject)=>{
        resolve(`third`)
    })
}

first(5)
.then(data => console.log(data)).catch(err => console.log(err))
.then(()=> second()
            .then(data => console.log(data))
            .then(()=> third().then(data => console.log(data)))
)