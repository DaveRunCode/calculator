import React from "react"
import { useState} from "react"
import * as math from 'mathjs';

function App() {

  const [result, setResult] = useState("");


  //Esta funcion concatena el target con el result, pero comprueba si existe algun simbolo de operacion al final para no permitir poner otro mas.
  const handleClick = (e) => {
    setResult(result.concat(e.target.id));
  }

  //Esta funcion borra todo
  const handleClear = () => {
    setResult("");
  }

  //Esta funcion elimina el ultimo caracter
  const handleDel = () => {
    setResult(result.substring(0,result.length-1))
  }

  //Esta funcion opera con la libreria Mathjs
  const handleEqual = () => {
    try {
      setResult(math.evaluate(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <>
      <div className="flex justify-center mt-20">
        <table className="table-auto rounded-lg bg-white ">
          <thead>
            <tr>
              <th
                colSpan={4}
                className="pt-4 pr-4 text-right text-xl font-bold text-gray-400 tracking-wide">
                </th>
            </tr>
            <tr>
              <th
                colSpan={4}
                className="pt-4 pr-4 text-right text-xl font-bold text-gray-400 tracking-wide">
                </th>
            </tr>
            <tr>
              <th 
                colSpan={4} 
                className="pb-4 pr-4 text-right text-2xl font-bold tracking-wide">
                <textarea 
                  autoFocus
                  name="display"
                  rows={2}
                  cols={16}
                  placeholder="0"
                  defaultValue={result}
                  className="text-clip text-right focus:outline-none overflow-hidden"/></th>
            </tr>
          </thead>
          <tbody className="rounded-t-lg">
            <tr className="shadow-[0px_-10px_10px_0px_rgba(0,0,0,0.1)] rounded-t-lg">
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer rounded-tl-lg font-bold text-lg select-none" 
                onClick={handleClear}>AC</th>
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-bold text-lg select-none flex justify-center items-center"
                onClick={handleDel}>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                  </svg>

                </th>
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-bold text-lg select-none" 
                onClick={handleClick}
                id="%">%</th>
              <th 
                className="w-16 h-16 hover:bg-cyan-600 bg-cyan-500 rounded-tr-lg cursor-pointer font-bold text-lg select-none" 
                onClick={handleClick}
                id="/">÷</th>
            </tr>
            <tr>
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-medium select-none" 
                onClick={handleClick}
                id="7">7</th>
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-medium select-none" 
                onClick={handleClick}
                id="8">8</th>
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-medium select-none" 
                onClick={handleClick}
                id="9">9</th>
              <th 
                className="w-16 h-16 hover:bg-cyan-600 bg-cyan-500 cursor-pointer font-bold text-lg select-none" 
                onClick={handleClick}
                id="*">*</th>
            </tr>
            <tr>
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-medium select-none" 
                onClick={handleClick}
                id="4">4</th>
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-medium select-none" 
                onClick={handleClick}
                id="5">5</th>
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-medium select-none" 
                onClick={handleClick}
                id="6">6</th>
              <th 
                className="w-16 h-16 hover:bg-cyan-600 bg-cyan-500 cursor-pointer font-bold text-lg select-none" 
                onClick={handleClick} 
                id="-">-</th>
            </tr>
            <tr>
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-medium select-none" 
                onClick={handleClick} 
                id="1">1</th>
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-medium select-none" 
                onClick={handleClick} 
                id="2">2</th>
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-medium select-none"
                onClick={handleClick}
                id="3">3</th>
              <th 
                className="w-16 h-16 hover:bg-cyan-600 bg-cyan-500 cursor-pointer font-bold text-lg select-none" 
                onClick={handleClick} 
                id="+">+</th>
            </tr>
            <tr>
              <th
                colSpan={2}
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-medium select-none rounded-bl-lg"
                onClick={handleClick}
                id="0">0</th>
              <th 
                className="w-16 h-16 hover:bg-teal-200 cursor-pointer font-medium select-none"
                onClick={handleClick}
                id=".">.</th>
              <th 
                className="w-16 h-16 hover:bg-cyan-600 bg-cyan-500 rounded-br-lg cursor-pointer font-bold text-lg select-none" 
                onClick={handleEqual}
                id="=">=</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App;


 /*  return (
    <div className="calculator">
      <div className="result">
        <p>{result}</p>
      </div>
      <div className="keypad">
        <button className="operator" onClick={handleClear}>Clear</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="-" onClick={handleClick}>-</button>
        <button name="*" onClick={handleClick}>*</button>
        <button name="/" onClick={handleClick}>/</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="0" onClick={handleClick}>0</button>
        <button className="operator" onClick={handleEqual}>=</button>
      </div>
    </div>
  );
}

export default App; */