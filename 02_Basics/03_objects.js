//object nesting
const regularUser = {
    fullname : {
        username:{  
            firstName: 'John',
            lastName: 'Doe'
         }
     }
    }

   console.log(regularUser.fullname.username.firstName) // John

const obj1 = {1: 'one', 2: 'two'};
const obj2 = {3: 'three', 4: 'four'};

const obj3 = {obj1, obj2};
console.log(obj3) // {obj1: {1: 'one', 2: 'two'}, obj2: {3: 'three', 4: 'four'}}    

const mergedObj = {...obj1, ...obj2};
console.log(mergedObj) // {1: 'one', 2: 'two', 3: 'three', 4: 'four'}