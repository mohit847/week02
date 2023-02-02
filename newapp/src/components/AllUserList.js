// eslint-disable-next-line
import React, { useState } from "react";
import UserDetails from "./UserDetails";
import Test from "./Test";

// const AllUserList = () => {
//   let allUser = [
//     { name: "John", email: "jon@gmail.com", phoneNumber: "+91 9854675123" },
//     { name: "shreya", email: "shreya@gmail.com", phoneNumber: "+91 7845695487" },
//     { name: "prince", email: "prince@gmail.com", phoneNumber: "+91 9548774586" },
//   ];

// return(
//     <div>
//         <UserDetails user={allUser[0]} />
//         <UserDetails user={allUser[1]} />
//         <UserDetails user={allUser[2]} />
//     </div>
// )
// };


// functional based component 

const AllUserList = () => {
  // eslint-disable-next-line
  const [state, setState] = useState({
    name: "Priyansh",
  });

  let allUser = [
    { name: "John", email: "jon@gmail.com", phoneNumber: "+91 9854675123" },
    {
      name: "shreya",
      email: "shreya@gmail.com",
      phoneNumber: "+91 7845695487",
    },
    {
      name: "prince",
      email: "prince@gmail.com",
      phoneNumber: "+91 9548774586",
    },
  ];
// eslint-disable-next-line
  let setStateName = (name) =>{
    setState({...state, name});
  }

  return (
    <div>
      <Test name = {state.name} setName={5} />
      {allUser.map((user, index) => (
        <UserDetails key={index} user={user} />
      ))}
    </div>
  );
};

// const AllUserList = () => {// eslint-disable-next-line
//   const [state, setState] = useState({name: "priyansh"}); //xyz is an array which contain 2 things , xyz[0] is s tate and xyz[1] is setter function

//   return(
//     <h1>The name is {state.name} </h1>
//   )
// };

export default AllUserList;
