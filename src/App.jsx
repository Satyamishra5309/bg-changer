import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white");

  return (
      <div className="w-full h-screen fixed" style={{ backgroundColor: color }}>
      <div className=" flex justify-end">
      <button 
      onClick={() => setColor("white")}
      className="outline-4 rounded-lg text-white p-2 border-black" style={{backgroundColor: "blue"}}>Reset</button>
      </div>
      <div className="fixed flex justify-center flex-wrap bottom-12 inset-x-0">
      <div className="flex justify-center flex-wrap bg-white rounded-lg p-2 inset-x-0">
      <button 
      onClick={() => setColor("red")}
      className="outline-none rounded-lg p-2 py-1 text-white mx-1" style={{backgroundColor: "red"}}>Red</button>
      <button 
      onClick={() => setColor("green")}
      className="outline-none rounded-lg p-2 py-1 text-white mx-1" style={{backgroundColor: "Green"}}>Green</button>
      <button 
      onClick={() => setColor("yellow")}
      className="outline-none rounded-lg p-2 py-1 text-white mx-1" style={{backgroundColor: "Yellow"}}>Yellow</button>
      <button 
      onClick={() => setColor("black")}
      className="outline-none rounded-lg p-2 py-1 text-white mx-1" style={{backgroundColor: "black"}}>Black</button>
      </div>
      </div>
      </div>
  );
}

export default App
