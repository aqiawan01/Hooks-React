import React, { useState } from 'react';
import {peopleData} from '../../people-data.js';
import {BiTrash} from 'react-icons/bi';

 
const UseStateArray = () => {
  const [people , setPeople] = useState(peopleData);
  const removePerson = (id) => {
    const newPeople =  people.filter((person) => person.id != id);
    setPeople(newPeople);
  }

  return (
      <section className="--flex-center --100vh --bg-primary">
         <div className="container">
            <h1 className="--color-white">UseState In Array</h1>
            {people.map((person) => {
                const {id, name} = person;
                return (
                   <div key={id} className="--flex-between --bg-light --my --card">
                    <h2>{person.name}</h2>
                    <BiTrash  color="red" size={22} onClick={() => removePerson(id)}  />
                   </div>
                );
            })}
            <button className="--btn --btn-danger" onClick={ () => setPeople([])}>
               Clear All
            </button>
         </div> 
      </section>

  )
}

export default UseStateArray