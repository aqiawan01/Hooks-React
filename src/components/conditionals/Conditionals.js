import React, { useState } from 'react'

const Conditionals = () => {
    const [isLoggendIn, setIsLoggendIn] = useState(true);
    let message;
    if(isLoggendIn){
        message = "Wellcome, Zino"
    } else {
        message = "Wellcome, Guest"
    }
  return (
    <div>
      {/* <h1 className="--text-center --p2">Wellcome Guest!</h1> */}
      <h1 className="--text-center --p2">{message}</h1>
    </div>
  )
}

export default Conditionals;

// If Else Conditionals