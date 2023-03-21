import React from "react";
import { useAuthContext } from "./hook/useAuthContext";
const Summary = ({quizCount, summary}) =>{
  const {correct, wrong} = summary;
  const {user} = useAuthContext();
    return(
    <div className="text-center">
         { quizCount === correct && (
          <>
           <span style={{ fontSize:60 }}>😯</span>
           <br/>
           {user !== null && (
           <p className="text-purple">{user.email}</p>
           )}
           <br/>
           <h3 className="text-purple">All the answer is correct</h3>
           </>
         )}
         { quizCount === wrong &&(
          <>
          <span style={{ fontSize:60 }}>😭</span>
          <br/>
          {user !== null && (
           <p className="text-purple">{user.email}</p>
           )}
           <br/>
          <h3 className="text-danger">All the answer is wrong</h3>
          </>
         )}
         { wrong > 0 &&  correct > 0 &&(
          <>
           <span style={{fontSize:60}}>🙁</span>
            <br/>
            {user !== null && (
           <p className="text-purple">{user.email}</p>
           )}
           <br/>
            <span className="text-danger"> {correct} is correct and  {wrong} is wrong</span> 
          </>
         )}
         <br/>
      <a href="http://localhost:3000" className="mt-5 btn bg-purple text-white">Test Again</a>
    </div>
    )
}
export default Summary;