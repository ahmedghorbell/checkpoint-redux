import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import Task from "../Task/Task";

const TodoList = () => {
  const list = useSelector((state) => state.listTasks);
  const [status, setStatus] = useState("All");
  return (
    <div style={{textAlign:"center" , marginTop:"10px"}}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {status}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item value="All" onClick={() => setStatus("All")}>
            All
          </Dropdown.Item>
          <Dropdown.Item value="Done" onClick={() => setStatus("Done")}>
            Done
          </Dropdown.Item>
          <Dropdown.Item value="UnDone" onClick={() => setStatus("UnDone")}>
            UnDone
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {status === "Done"
        ? list
            .filter((el) => el.isDone === true)
            .map((el) => <Task task={el} key={el.id} />)
        : 
        status === "UnDone"? 
        list.filter((el) => el.isDone === false)
            .map((el) => <Task task={el} key={el.id} />)
        : list.map((el) => <Task task={el} key={el.id} />)}
    </div>
  );
};

export default TodoList;
