import React, { useState } from 'react';
import './Conditionals3.css';

// Ternary Operator
const Conditionals3 = () => {
    const [isLoggendIn, setIsLoggendIn] = useState(false);
    const toggleLogin = () => {
        setIsLoggendIn(!isLoggendIn);
    }
  return (
    <>
    <div className={isLoggendIn ? "user" : "guest"}>

    {/* {isLoggendIn &&  
      <h1 className="--text-center --p2">Wellcome, Zino</h1>
    } */}
    {isLoggendIn ? (
       <h5 className="--text-center --p2">Wellcome, Zino</h5> 
    ) : ( 
       <h5 className="--text-center --p2">Wellcome, Guest</h5>
    )}
    </div>
    <div className="--center-all">
       <button className="--btn --btn-primary" onClick={toggleLogin}>
        {isLoggendIn ? "Logout" : "Login"}
       </button>
    </div>
    </>
  )
}

export default Conditionals3;
