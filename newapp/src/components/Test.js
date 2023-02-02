// import React, {Component} from "react";
// import "./test.css"

// class Test extends Component {
//   state = { isLoggedIn: false };

//   render(){
//     return(
//       <div>
//         {!this.state.isLoggedIn ? (
//           <h1>You are not Logged In!</h1>
//         ):(
//           <h1>
//             Congratulations, you are logged in!
//           </h1>
//         )} 
//         <button onClick={(e) => this.setState({isLoggedIn: !this.state.isLoggedIn})} >Login!</button>
//       </div>
//     );
//   }
// }

// export default Test;





import React from "react";
import PropTypes from "prop-types";

const Test = ({ name = "", setName }) => {
  return (
    <>
      <h1> The name is: {name}</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

Test.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func,
}

export default Test;






