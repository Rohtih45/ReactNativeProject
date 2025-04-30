
import { useEffect, useState } from 'react';

function UseStateHook() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState(""); 

  useEffect(() => {
    console.log("Updated");
  });
  

  return (
    <div className="UseStateHook">
     <input type='text' onChange={(e) => setName(e.target.value)}></input>
      <p>{name} Counter : {counter}</p>
      <button onClick={() => setCounter(counter+1)}>Increase</button>

      <input type='text' onChange={(e) => setName(e.target.value)}></input>
      <p>{name} Counter : {counter}</p>
      <button onClick={() => setCounter(counter+1)}>Increase</button>
      
   
    </div>
    
  );
}

export default UseStateHook;
