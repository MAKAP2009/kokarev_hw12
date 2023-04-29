import React, { useState } from 'react';

function AdditionalComponent() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  console.log('render Counter');

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={tick}>Press count</button>
    </div>
  );
}

export default AdditionalComponent;
