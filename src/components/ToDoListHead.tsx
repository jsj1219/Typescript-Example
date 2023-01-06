import ToDoListStyles from "@styles/ToDoList.module.css";

import { useToDoState } from "@context/ToDoListContext";

function ToDoListHead() {
  const toDos = useToDoState();
  const undoneTasks = toDos.filter((toDo) => !toDo.checked);

  const today = new Date();
  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });

  return (
    <div className={ToDoListStyles.todolist_inner}>
      <h1 className={ToDoListStyles.today}>{dateString}</h1>
      <div className={ToDoListStyles.day}>{dayName}</div>
      <div className={ToDoListStyles.left_task}>할 일 {undoneTasks.length}개 남음</div>
    </div>
  );
}

export default ToDoListHead;