import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({getData}) => {
  const [text, setText] = useState();
  const [todoo,settodoo]=useState([])
  function handleChange(e){
    setText(e.target.value)
  }
  function handleclick(){
    settodoo([...todoo,text])
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input placeholder="Add Tast..." data-cy="add-task-input" type="text" onChange={handleChange}/>
      <button data-cy="add-task-button" onClick={handleclick}><h1>+</h1></button>
           <div>{todoo.map((item)=>{
             <input type="Checkbox" />
             return <div key={item.id}>{item}</div>
           })}</div> 
    </div>
  );
};

export default AddTask;
