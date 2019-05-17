import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span className='counter-value'>{count}</span>
      <button className='incrementBtn' onClick={ () => { setCount(count + 1) } }>+</button>
      <button className='decrementBtn' onClick={() => { setCount(count - 1) }}>-</button>
    </div>
  )
};

export default Counter;