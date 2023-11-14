import React, { useState } from 'react'

const UseState = () => {
    const [text, setText]  = useState("Hello World!!!");

    const handleClick = () => {
        setText("Text Change!!!");
    }
  return (
    <section className="--flex-center --100vh">
    <div className="container --center-all">
      <h3>React Page</h3>
      <h1>{text}</h1>
      <button className="--btn --btn-primary --btn-lg" onClick={handleClick}>
        Change Text
      </button>
    </div>
  </section>
  )
}

export default UseState