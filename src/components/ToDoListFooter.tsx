import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import ToDoListStyles from "@styles/ToDoList.module.css";

import { useToDoDispatch } from "@context/ToDoListContext";

function ToDoListFooter() {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const dispatch = useToDoDispatch();

  const onToggle = () => setOpen(!open);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault(); //태그의 고유 동작을 중단하고 내 로직대로 실행 -> 새로고침을 막는다
    dispatch({
      type: 'CREATE',
      text: value
    });
    setValue('');
    setOpen(false);
  };

  return (
    <div>
      {open && (
        <div className={ToDoListStyles.insert_positioner}>
          <form className={ToDoListStyles.insert_form} onSubmit={onSubmit}>
            <input
              autoFocus
              className={ToDoListStyles.insert_input}
              placeholder="할 일을 입력하고 Enter를 누르세요."
              value={value}
              onChange={onChange}
            />
          </form>
        </div>
      )}
      <button
        type="button"
        className={`${ToDoListStyles.add_btn} ${
          open ? ToDoListStyles.open : ""
        }`}
        onClick={onToggle}
      >
        <MdAdd />
      </button>
    </div>
  );
}

export default ToDoListFooter;