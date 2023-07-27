import Child from "../child/child";
import { useState } from "react";

function Parent() {
  let [sum, setSum] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  let [number, setNumber] = useState(0);

  const restState = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <button onClick={restState}>reset</button>
      <Child key={number} />
      {console.log(number)}
    </>
  );
}

export default Parent;



// react setup
// components
// props
// data sharing
// State

// Parent to child Props
// child to parent callback
// sibling component callback

// Hooks - useState

// how to initailise state data in useState like number, string, object, Array
// reseting the state using key
// how to prevent resting state by tracking previous state
//
