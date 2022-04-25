let showEmployees = function(role, ...emps){
    console.log(emps)
    for(let i in emps){
        console.log(emps[i]);
    }
}

let role = 'Manager'
let friends = ['Smith', 'Andrew', 'Nathan']
showEmployees(role, 'Bob')
showEmployees(role, 'Bob', 'Robert')
showEmployees(role, 'Bob', 'Robert', 'Bil', ...friends) 