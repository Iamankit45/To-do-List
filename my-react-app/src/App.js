import react, { useState } from 'react';

import './App.css';



import ToDoList from './ToDoList';


const App = () => {


  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);

  };


  const listOfItems = () => {

    setItems((olditems) => {


      return [...olditems, inputList];
    });
    setInputList("")
  }


  const deleteItems = (id) => {


    setItems((olditems) => {

      return olditems.filter((arrElem,index)=>{
        return index !==id;
      })
    })
  }

  return (
    <>
      <div className="main_div">

        <div className="center_div">
          <br />

          <h1>To Do List</h1>

          <br />
          <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>

          <ol>

            {
              items.map((itemval,index) => {

                return <ToDoList key={index} id={index} text={itemval}

                  onSelect={deleteItems}
                />
              })
            }
          </ol>

        </div>

 

      </div>


    </>
  )



}


export default App;