import CounterStyles from "@styles/Counter.module.css";
import {useState} from "react";

function Counter() {
  // Generics를 사용하여 해당 상태가 어떤 타입을 가지고 있을지 설정
  // 초기값을 지정해주는 아래와 같은 상황에서는 생략해도 무방
  const [count, setCount] = useState<number>(0);

  const onIncrease = () => {
    setCount(count+1);
  }

  const onDecrease = () => {
    return count > 0 ? setCount(count-1): false;
  }

  return (
    <div className={CounterStyles.wrapper}>
      <div className={CounterStyles.counter_inner}>
        <h1 className={CounterStyles.header}>카운터</h1>
        <h3 className={CounterStyles.count}>{count}</h3>
        <button
          type="button"
          className={`${CounterStyles.increase_btn} ${CounterStyles.btn}`}
          onClick={onIncrease}
        >
          +1
        </button>
        <button
          type="button"
          className={`${CounterStyles.decrease_btn} ${CounterStyles.btn}`}
          onClick={onDecrease}
        >
          -1
        </button>
      </div>
    </div>

  );
}

export default Counter;
