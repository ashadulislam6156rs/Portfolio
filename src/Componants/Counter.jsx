import { useEffect, useState } from "react";

const Counter = ({ end, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0); 
      return;
    }

    let current = 0;
    const step = Math.max(1, Math.floor(end / 40));

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [start, end]);

  return <>{count}</>;
};

export default Counter;
