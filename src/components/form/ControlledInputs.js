import React, { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, job);
    setName("");
    setJob("");
  };
  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">Controlled Inputs</h1>
      <div className="--flex-center">
        <div className="--card --bg-light  --width-500px  --flex-center">
          <form onSubmit={handleSubmit} className="--form-control">
             <div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
             </div>
             <div>
              <label htmlFor="job">job: </label>
              <input type="text" name="job" value={job}  onChange={(e) => setJob(e.target.value)} />
             </div>
             <button type="submit" className="--btn --btn-block">Submit User</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ControlledInputs