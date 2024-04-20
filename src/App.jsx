import { useState } from "react";
function App() {
  const [color, setColor] = useState('olive');
  return (
    <div className="h-screen w-full" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor('black')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2  bg-black">Black</button>
          <button onClick={() => setColor('green')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2  bg-black">Green</button>
          <button onClick={() => setColor('yellow')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2  bg-black">Yellow</button>
          <button onClick={() => setColor('orange')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2  bg-black">Orange</button>
          <button onClick={() => setColor('red')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2  bg-black">Red</button>
          <button onClick={() => setColor('blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2  bg-black">Blue</button>
          <button onClick={() => setColor('white')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2  bg-black">White</button>
          <button onClick={() => setColor('gray')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2  bg-black">Gray</button>
        </div>
      </div>
    </div>
  )
}

export default App;
