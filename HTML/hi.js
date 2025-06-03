

let arr = [2,3,4,5,6]

let copy = JSON.parse( JSON.stringify(arr))

// console.log(arr)

copy.push(100)

console.log(copy)
console.log(arr)



let msg =(a,...b)=>{

    console.log(a,b)
}

msg(1,2,3,4,5,6,7)



class Person
{
    constructor(pname,age,sal)
    {
         this.pname = pname
         this.age = age
         this.sal = sal
         
    }
}

let p = new Person("rahul",21,10000)

console.log(p)