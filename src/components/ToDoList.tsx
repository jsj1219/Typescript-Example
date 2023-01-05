import ToDoListStyles from "@styles/ToDoList.module.css";

import ToDoListHead from "@components/ToDoListHead";
import ToDoListBody from "@components/ToDoListBody";
import ToDoListFooter from "@components/ToDoListFooter";
import { ToDoProvider } from "@context/ToDoListContext";

function ToDoList() {
  return (
    <div className={ToDoListStyles.todolist_wrapper}>
      <ToDoProvider>
        <ToDoListHead />
        <ToDoListBody />
        <ToDoListFooter />
      </ToDoProvider>
    </div>
  );
}

export default ToDoList;