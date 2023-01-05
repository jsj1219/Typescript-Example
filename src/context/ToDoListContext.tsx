import React, { useReducer, createContext, useContext, Dispatch } from "react";

// 기본값
const initialToDos = [
  { id: 1, text: '할일1', checked: false },
  { id: 2, text: '할일2', checked: true }
];

export type ToDo = {
  id: number;
  text: string;
  checked: boolean;
};

type ToDosState = ToDo[];

// Provider를 사용하지 않았을 때에는 Context의 값이 undefined일 수 있도록
const ToDosStateContext = createContext<ToDosState| undefined>(undefined);

type ToDosDispatch = Dispatch<Action>;
const ToDosDispatchContext = createContext<ToDosDispatch| undefined>(undefined);

type Action =
  | { type: 'CREATE'; text: string; toDo?: ToDo }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };

function toDoReducer(
  state: ToDosState,
  action: Action
  ):ToDosState {
  switch (action.type) {
    case 'CREATE':
      // useRef 사용하지 않고 Math 사용
      const nextId = Math.max(...state.map(toDo => toDo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        checked: false
      });
    case 'TOGGLE':
      return state.map((toDo) =>
        toDo.id === action.id ? { ...toDo, checked: !toDo.checked } : toDo
      );
    case 'REMOVE':
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      throw new Error("Unhandled action");
  }
}

// ToDoProvider는 useReducer를 사용하여 상태를 관리하는 컴포넌트
// children의 타입은 ReactNode와 ReactElement를 주로 사용하며 차이점은 javascript의 원시타입을 허용하느냐 안하느냐
// React.ReactNode는 Type을 기본적으로 return, React.ReactElement는 interface를 return

export function ToDoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(toDoReducer, initialToDos);

  return (
    // context를 분리하여 불필요한 렌더링을 방지
    <ToDosStateContext.Provider value={state}>
      <ToDosDispatchContext.Provider value={dispatch}>
        {children}
      </ToDosDispatchContext.Provider>
    </ToDosStateContext.Provider>
  );
}

export function useToDoState() {
  const state = useContext(ToDosStateContext);
  if (!state) throw new Error('TodosProvider not found');
  return state;
}

export function useToDoDispatch() {
  const dispatch = useContext(ToDosDispatchContext);
  if (!dispatch) throw new Error('TodosProvider not found');
  return dispatch;
}