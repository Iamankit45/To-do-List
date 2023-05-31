import React from "react";

import DeleteIcon from '@mui/icons-material/Delete';

const ToDoList = (props) => {




    return (
        <>
            <div className="todo_style">

                <DeleteIcon  onClick={()=>{props.onSelect(props.id)}} />
                <li> {props.text} </li>

            </div>
        </>
    )



}

export default ToDoList;