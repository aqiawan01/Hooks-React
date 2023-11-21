import React, { useEffect, useRef } from 'react';

// Target DOM node/element
// Preserve values during re-render

const UncontrolledInputs = () => {
  const nameInputRef = useRef(null);
  const jobInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enterdName = nameInputRef.current.value;
    const enterdJob = jobInputRef.current.value;
     console.log(enterdName, enterdJob);
  };
  useEffect(() => {
    nameInputRef.current.focus();
    jobInputRef.current.focus();
  }, [])
  // console.log(nameInputRef);
  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">UncontrolledInputs Inputs</h1>
      <div className="--flex-center">
        <div className="--card --bg-light  --width-500px  --flex-center">
          <form onSubmit={handleSubmit} className="--form-control">
             <div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" ref={nameInputRef} />
             </div>
             <div>
              <label htmlFor="job">job: </label>
              <input type="text" name="job" ref={jobInputRef} />
             </div>
             <button type="submit" className="--btn --btn-block">Submit User</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UncontrolledInputs