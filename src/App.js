import React, { useState } from "react";
import "./App.css";

export default function MyApp() {
  return (
    <div>
      <App />
    </div>
  );
}

function App() {
  // initialize the counter
  const [count, setCount] = useState(0);
  // Function to increment
  const increment = () => {
    setCount(count + 1);
  };
  // Function to decrement
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-indigo-500 py-4 mt-10">
        Counter App
      </h1>
      <p className="text-2xl font-bold text-indigo-500 text-center p-4">
        Count: {count}
      </p>
      <div className="flex justify-center space-x-4 center text-center p-8">
        <button
          className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
