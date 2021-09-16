import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
// import { Button } from "react-bootstrap";

function ListEmployee() {
  const history = useHistory();
  const [employees, setEmployees] = useState([]); 
  const onAddClicked = () => {
   
    history.push("/employee/add");
  };

  return (
    <>
      <div>
        <h2 className="text-center">List Employee</h2>

        <button onClick={onAddClicked}>Add</button>
        {employees.map((e) => {
          return (
            <>
              <img src={employees.image} alt=""></img>

              <button>Edit</button>
              <button>delete</button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ListEmployee;
