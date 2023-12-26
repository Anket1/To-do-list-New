import React,{useState} from 'react';
import './App.css';
import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';

function App() {
  const [isComplteScreen,setIsCompleteScreen] = useState(false);
  const [allTodos,setTodos] = useState([]);
  const [newTitle,setnewTitle] = useState("");
  const [newDescription,setnewDescription] = useState("");

const handleAddTo = ()=>{
  let newTdo = {
    title:newTitle,
    description:newDescription,

  }

  let updatedTodoArr = [...allTodos];
  updatedTodoArr.push(newTdo);
  setTodos(updatedTodoArr);


}

 
  return (
    <div className="App">
        <h1>My ToDos</h1>
        <div className='todo-wrapper'>
          <div className="todo-input">
          <div className='todo-input-item'>
              <div>
                <lable>Title:</lable>
                <input type='text' value={newTitle} onChange={(e)=>setnewTitle(e.target.value)} placeholder='Enter Todo'/>
              </div>
          </div>
          <div className='todo-input-item'>
              <div>
                <lable>Description:</lable>
                <input type='text' value={newDescription} onChange={(e)=>setnewDescription(e.target.value)} placeholder='Enter Description'/>
              </div>
          </div>
          <div className='todo-input-item'>
              <div>
               
                <button type="button" onClick={handleAddTo} className="primaryBtn">Add</button>
              </div>
              </div>
          </div>
          <div className="btn-area">
              <button className={`secondaryBtn ${isComplteScreen === false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
              <button className={`secondaryBtn ${isComplteScreen === true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
          </div>
          

          <div className="todo-list">
             {allTodos.map((item,index)=>{
              return(
                <div className="todo-list-item" key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div>
                  <AiOutlineDelete className='icon'/>
                  <BsCheckLg className='check-icon'/>
                </div>
            </div>
              )
             })}
          </div>

        
        </div>
    </div>
  );
}

export default App;
