import React, { useState } from 'react'

// Logical And (&&) Operator
const Conditionals2 = () => {
    const [isLoggendIn, setIsLoggendIn] = useState(false);
   
  return (
    <div>
    {isLoggendIn &&  <h1 className="--text-center --p2">Wellcome, Zino</h1>}
    {!isLoggendIn &&  <h1 className="--text-center --p2">Wellcome, Guest</h1>}
    </div>
  )
}

export default Conditionals2;
