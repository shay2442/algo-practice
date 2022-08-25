import { useState } from "react";
import "./App.css";
// import { ageToVote } from './utils'

function App() {
  const myArray = ["apple", "orange", "banana"];

  const myList = myArray.map((item) => <p>{item}</p>);

  const sortList = myArray.sort(function (a, b) {
    return a.item - b.item;
  });

  console.log(sortList);

  // var ageToVoteTest =

  // function ageTest(canVote) {
  //   return (canVote ? "Go vote!" : 'Cannot vote'  )
  // }

  // console.log(ageTest(true))

  // function ageToVote() {
  //   if(age >= 18){
  //   return (<div>"You can vote"</div>)
  //   }

  // }
  let users = [
    { name: "Charlie", age: 5 },
    { name: "Bailey", age: 3 },
    { name: "Shay", age: 35 },
  ];

  const whichUsersCanVote = (users) => {
    return users.map((user) => ageToVote(user.age, user.name));
  };

  const ageToVote = (userAge, name = "You", requiredAge = 18) => {
    if (userAge >= requiredAge) {
      return <p>{name} can vote!</p>;
    } else {
      return <p>{name} cannot vote.</p>;
    }
  };

  const canVote = (users) => {
users.filter((user) => user.age >= 18);
  };

  // console.log(ageToVote(19))

  const arr = [1, 7, 5, 9, 10];

  var sorted = arr.sort();
  // console.log(sorted)

  var sortArrInOrder = arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(sortArrInOrder)

  const myGirls = ["Cecilie", "Lone"];
  const myBoys = ["Emil", "Tobias", "Linus"];

  const myChildren = myGirls.concat(myBoys);
  // console.log(myChildren)

  let students = [
    { name: "Mosh", matric: 170102131, birthDate: "July 11, 2001" },
    { name: "Smith", matric: 170102011, birthDate: "May 25, 2000" },
    { name: "Rowe", matric: 170102100, birthDate: "November 12, 2003" },
  ];
  // students.sort(function (a, b) {
  //   let p = new Date(a.birthDate),
  //        q = new Date(b.birthDate);
  //    return p - q;
  // });

  // console.log(students);

  var sortByNames = students.sort(function (a, b) {
    return a.name - b.name;
  });
  // console.log(sortByNames)

  // var sortNames = students.sort

  const initialValue = 0;
  const numbersSum = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  //  console.log(numbersSum)

  arr.pop(0);
  // console.log(arr)

  var str = "I love to go on walks.";
  var strSplit = str.split(" ", 3);
  // console.log(strSplit);
  console.log("canVote", canVote);
  return (
    <div className="App">
      <h1>hello world</h1>
      <h1>{numbersSum}</h1>
      <p>{myList}</p>
      {/* <p>{ageTest(true)}</p> */}

      <h1>{whichUsersCanVote(users)}</h1>
      {/* {canVote.map((user) => {
        return <p>{user.name}</p>;
      })} */}
    </div>
  );
}

export default App;
