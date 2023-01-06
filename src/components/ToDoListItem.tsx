import ToDoListStyles from "@styles/ToDoList.module.css";
import { MdDone, MdDelete } from "react-icons/md";

import { useToDoDispatch, ToDo } from "@context/ToDoListContext";

type ToDoItemProps = {
  toDo: ToDo;
};

function ToDoListItem({ toDo }: ToDoItemProps) {
  const dispatch = useToDoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id: toDo.id });
  const onRemove = () => dispatch({ type: 'REMOVE', id: toDo.id});
  
  return (
    <div className={ToDoListStyles.todoitem_block}>
      <button
        type="button"
        className={`${ToDoListStyles.check_icon} ${
          toDo.checked ? ToDoListStyles.active : ""
        }`}
        onClick={onToggle}
      >
        {toDo.checked && <MdDone />}
      </button>
      <p className={ToDoListStyles.todoitem}>{toDo.text}</p>
      <button
        type="button"
        className={ToDoListStyles.remove_btn}
        onClick={onRemove}
      >
        <MdDelete />
      </button>
    </div>
  );
}

export default ToDoListItem;