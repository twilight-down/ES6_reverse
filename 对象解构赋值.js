let obj = {
    id: 1,
    name: 'andy',
    age: 10
}
let id = 0
const { id: id1, name, sex = 0 } = obj
console.log(id1, name, sex);