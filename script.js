// Question 31
// function getObjectKeys(keys){
//     return Object.keys(keys)
// } 
//     const user  = {
//         name :'Kenan',
//         surname:'Akbarly',
//         PostalCode:1099,
//         address:{
//             country:'Ireland',
//             city:'Dublin'
//         }
//     }

// Question 32
const user1  = {
            name :'Kenan',
            surname:'Akbarly',
            PostalCode:1099,
            address:{
                country:'Ireland',
                city:'Dublin'
            }
        }

//         function getCloneObject(object){
//             let user2 = {...object};
//             return user2
//         }
// console.log(getCloneObject(user1))
 
// console.log(getObjectKeys(user))
// Question 33

// function getObjectStrings (object){
//     let value = Object.keys(object);
    
//       for (let answer of value){

//           if(typeof answer !=='string'){
//               return false
//           }
//       }
//    return true
// }
// console.log(getObjectStrings(user1))

// Question 34

// function getNewObject(giveName,giveSurname,giveAge){
//     const newObject ={
//         name:giveName,
//         suurname:giveSurname,
//         age:giveAge
//     }
//     return newObject
// }
// console.log(getNewObject('Kenan','Akbarly',35))
// Question 35

// function deleteObjectProporty(element,deleteKey){
//     delete element[deleteKey]
//     return element

// }
// console.log(deleteObjectProporty(user1,'name'))
// Question 36
// function getObjectLength(object){
//     const getLength = Object.keys(object).length;
//     return getLength;
// }
// console.log("Object Length: "+ getObjectLength(user1))
// Question 37
// function noneHasOwnProperty(object,own){
//     if(own in object){
//         return true
//     }
//     return false
// }
// console.log(noneHasOwnProperty(user1,'address'))

// Queation 38
// function question38 (){
    
//     let myArray = [1,2,4,3,5,7,8];
//     let netice = myArray.pop();
//     return netice;
// }
// console.log(question38())
// Question 39
// let array = [1,2,3,4,5,6,7,8,9];
// function getClonaArray(arr){
//     let clone = [...arr]
//     return clone
// }
// console.log(getClonaArray( array))

// Question 40

// function question40(myArray,n){
//     let netice = myArray.slice(0,n);
//     return netice
    
// }

// console.log(question40( [1,3,4,5,6,],4))

// Question 41
// function question41(myArray,n){
    
//     let len = myArray.length;
//     let netice = myArray.slice(n,len);
//     return netice
    
// }

// console.log(question41( [1,3,4,5,6],2))

// Question 42
// function question42(){
    
//     myArray = ["Kenan","Yusif","Subhan"];
//     console.log(`${myArray}`)
// }
// question42()

// Question 44
const myArray = [1,2,3,4,5,6,7,8,9]
// function removeSinglePlace(array){
//     const newarray = [];
    
//     for(let i=1;i<array.length ;i=i+2){
//         newarray.push(array[i])
//     }
//     return newarray
// }
// console.log(removeSinglePlace(myArray))

function getIndex(array,index){
    const newArr = [];
    for(let i=0;i <index;i++)
    {
      newArr.push(array[i])
    }
    return newArr
}
console.log(getIndex(myArray,2))



