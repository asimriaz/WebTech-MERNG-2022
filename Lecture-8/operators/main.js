let showEmployees = function(role, ...args){
    console.log(args)
    for(let i in args){
        console.log(args[i])
    }
}

let role = 'Manager'

let emps = ['Tim', 'Clark', 'Kent']

showEmployees(role, 'Peter')
showEmployees(role, 'Peter', 'Bob')
showEmployees(role, 'Peter', 'Bob', 'Smith', ...emps)