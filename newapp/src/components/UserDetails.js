import React, { useState } from "react";

const UserDetails = ({ user = {} }) => {
  const [h1Text, setH1Text] = useState("This is Demo component");
  return (
    <div>
      <h3>{user.name}</h3>
      <h5>
        Email: {user.email}
        <br />
        Phone number: {user.phoneNumber}
      </h5>
      <h1>{h1Text}</h1>
      <button
        onClick={() => {
          setH1Text("This is Cipher Schools")
        }}
      >
        Click Me!
      </button>
    </div>
  );
};

export default UserDetails;
