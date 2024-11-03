"use client";

import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setFirstNumber, setSecondNumber, calculateResult } from '../store/features/calc/calculatorSlice';

function Calculator() {
  const dispatch = useAppDispatch();
  const { firstNumber, secondNumber, result } = useAppSelector((state) => state.calculator);

  const handleFirstChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFirstNumber(e.target.value ? Number(e.target.value) : null));
  };

  const handleSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSecondNumber(e.target.value ? Number(e.target.value) : null));
  };

  const handleSumClick = () => {
    dispatch(calculateResult('sum'));
  };

  const handleSubClick = () => {
    dispatch(calculateResult('subtract'));
  };

  const handleMultClick = () => {
    dispatch(calculateResult('multiply'));
  };

  const handleDivClick = () => {
    dispatch(calculateResult('divide'));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-teal-400 to-teal-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-6">Calculator</h1>
        
        <div className="mb-5">
          <label className="block text-lg font-semibold mb-1">First Number</label>
          <input
            type="number"
            value={firstNumber !== null ? firstNumber : ''}
            onChange={handleFirstChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150 ease-in-out"
            placeholder="Enter first number"
          />
        </div>

        <div className="mb-5">
          <label className="block text-lg font-semibold mb-1">Second Number</label>
          <input
            type="number"
            value={secondNumber !== null ? secondNumber : ''}
            onChange={handleSecondChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150 ease-in-out"
            placeholder="Enter second number"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <button onClick={handleSumClick} className="bg-teal-500 text-white p-3 rounded-lg shadow-md hover:bg-teal-600 transition duration-200 ease-in-out">
            Sum
          </button>
          <button onClick={handleSubClick} className="bg-teal-500 text-white p-3 rounded-lg shadow-md hover:bg-teal-600 transition duration-200 ease-in-out">
            Subtract
          </button>
          <button onClick={handleMultClick} className="bg-teal-500 text-white p-3 rounded-lg shadow-md hover:bg-teal-600 transition duration-200 ease-in-out">
            Multiply
          </button>
          <button onClick={handleDivClick} className="bg-teal-500 text-white p-3 rounded-lg shadow-md hover:bg-teal-600 transition duration-200 ease-in-out">
            Divide
          </button>
        </div>

        <hr className="my-4 border-gray-300" />

        <h2 className="text-xl font-bold text-teal-700 text-center">
          {result !== null ? result : 'Result will be displayed here'}
        </h2>
      </div>
    </div>
  );
}

export default Calculator;