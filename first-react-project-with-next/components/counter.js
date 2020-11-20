import { useCounterActions, useCounterGetters } from '../state/modules/count' 

const Counter = () => {
  const { increment, decrement, reset } = useCounterActions();
  const { count } = useCounterGetters();
  return (
    <div className="border p-3 rounded flex flex-col max-w-xs mx-auto">
      <div className="text-2xl font-bold mb-3 text-center">
        Count: <span className="font-normal">{count}</span>
      </div>
      <div className="flex justify-between">
        <button className="btn mr-3 w-full" onClick={increment}>
          +1
        </button>
        <button className="btn bg-red-500 mr-3 w-full" onClick={decrement}>
          -1
        </button>
        <button className="btn bg-gray-500 w-full" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
