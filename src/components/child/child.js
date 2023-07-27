import { useState } from "react"

function Child({sum}) {

    let [name, setName] = useState('piyush');
    const updatename = () => {
        setName('Amit')
    }
  return (
    <>
     <div>child {name}</div>
    <button onClick={updatename}>Amit</button>
    </>
   
  )
}

export default Child