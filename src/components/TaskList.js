import React from 'react'
import Task from './Task'

const TaskList = () => {
  return (
    <div className="container">
        <h2>List Of Tasks</h2>
        <ul className="--text-p --fw-bold">
           <Task name="Task 1" isCompleted={true} />
           <Task name="Task 2" isCompleted={false} />
           <Task name="Task 3" isCompleted={true} />
        </ul>
       
    </div>
  )
}

export default TaskList