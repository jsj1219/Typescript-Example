import ToDoListStyles from "@styles/ToDoList.module.css";

import ToDoListItem from "@components/ToDoListItem";
import { useToDoState } from "@context/ToDoListContext";

function ToDoListBody() {
  const toDos = useToDoState();

  return (
    <div className={ToDoListStyles.todoblock}>
      {toDos.map((toDo) => (
        <ToDoListItem toDo={toDo} key={toDo.id}/>
      ))}
    </div>
  );
}

export default ToDoListBody;