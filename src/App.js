// import { useState } from 'react';
import './App.css';
import ContactList from './ContactList.js'
function App() {

 

  
// const inputObject = Contact
//   const output = inputObject.map(user => user);
//   const URL = inputObject.map(user => user.pictureUrl);

//   let SR =(output.sort(sortByName));
// console.log(SR[1].pictureUrl);
//   // console.log(Name);
//   // console.log(Url);
//   // console.log(Pop);
// console.log(URL);


//   function sortByName(a, b) {
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     return 0;

// }

  
  return (
    <div className="App">
    <ContactList />
  </div>
  );
}

export default App;
