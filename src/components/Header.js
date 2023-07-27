import { useState } from "react";
export default function Header(props) {

    const [message, setMessage] = useState("hello user");
    function handler(user) {
        setMessage("hello " + user);
    }
    return (
        <>
            <div>{message}</div>
            <Child handler={handler} ><div>dfdsfds</div></Child>
        </>
    );
}

function Child({ handler, children }) {
    return (
        <>
            <button onClick={() => handler("ddddddd")}>click</button>
            {children}
        </>
    );
}