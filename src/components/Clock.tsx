import React from 'react';

function Clock() { 
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  // setInterval(() => {
  //   setTime(new Date().toLocaleTimeString());
  // }, 1000);

  function updateTime() {
    setInterval(() => {
      console.log('Se actualizo el intervalo');
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }

  return (
    <div>
      <h1>Hello,</h1>
      <h2>It is {time}</h2>

      <button onClick={updateTime}>Comenzar tiempo</button>
    </div>
  );
}

export default Clock;