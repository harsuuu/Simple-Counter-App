import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice';
import './Counter.css'


const Counter = () => {

    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

  return (
    <div className="whole flex justify-center items-center bg-[#e1e7ef] flex-col gap-10">
      <div className="text-center text-[#0398d4] font-medium text-xl ">Increment & Decrement</div>
      <div className="flex flex-row items-center gap-12">
        <button className="button-89" 
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <div>{count}</div>
        
        <button className="button-89" 
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
