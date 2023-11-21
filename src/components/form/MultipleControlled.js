import React, { useState } from 'react'

const MultipleControlled = () => {

    // const [name, setName] = useState("");
    // const [job, setJob] = useState("");
    const [person, setPerson] = useState({name: "", job: "", comapny: ""});

    const handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      setPerson({...person, [name]: value})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newUser = person
      console.log(newUser);
      setPerson({name: "", job: "", comapny: ""})
    };
    return (
      <div className="--bg-primary --mh-100vh">
        <h1 className="--text-light --text-center">Multiple Controlled Inputs</h1>
        <div className="--flex-center">
          <div className="--card --bg-light  --width-500px  --flex-center">
            <form onSubmit={handleSubmit} className="--form-control">
               <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={person.name} onChange={handleChange} />
               </div>
               <div>
                <label htmlFor="job">Job: </label>
                <input type="text" name="job" value={person.job}  onChange={handleChange} />
               </div>

               <div>
                <label htmlFor="comapny">Comapny: </label>
                <input type="text" name="comapny" value={person.comapny}  onChange={handleChange} />
               </div>
               <button type="submit" className="--btn --btn-block">Submit User</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default MultipleControlled