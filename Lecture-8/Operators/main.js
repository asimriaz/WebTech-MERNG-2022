let showEmployees = function(role, ...emps){
    console.log(`Role >> ${role}`)
    console.log(emps)
    for(let i in emps){
        console.log(emps[i]);
    }
}

let role = 'Manager'

let friends = ['Andrew', 'Bob', 'Paul']

showEmployees(role, 'Smith')
showEmployees(role, 'Smith', 'Peter')
showEmployees(role, 'Smith', 'Peter', 'Bill', ...friends)