
import {useState} from 'react'
import './App.css';

function App() {

  const arr=[1,7,5,9,10]

  var sorted = arr.sort()
  // console.log(sorted)

  var sortArrInOrder = arr.sort(function(a,b) {
    return a-b
  })
  // console.log(sortArrInOrder)

  const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys)
console.log(myChildren)

//   let students = [
//     {name: 'Mosh', matric: 170102131, birthDate: "July 11, 2001"},
//     {name: 'Smith', matric: 170102011, birthDate: "May 25, 2000"},
//     {name: 'Rowe', matric: 170102100, birthDate: "November 12, 2003"}
// ];
// students.sort(function (a, b) {
//   let p = new Date(a.birthDate),
//        q = new Date(b.birthDate);
//    return p - q;
// });

// console.log(students);

// var sortByNames = students.sort(function(a,b) {
//   return a.name - b.name
// })
// console.log(sortByNames)

  const initialValue=0
  const numbersSum= arr.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  //  console.log(numbersSum)

  arr.pop(0)
  // console.log(arr)

  var str = "I love to go on walks.";
  var strSplit = str.split(" ", 3 );
  // console.log(strSplit);



  return (
    <div className="App">
      <h1>hello world</h1>
      <h1>{numbersSum}</h1>
    </div>
  );
}

export default App;
