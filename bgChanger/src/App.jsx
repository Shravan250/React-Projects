import { useState } from 'react';
import { darken } from 'polished';

function App() {
  const colors = ['white', 'black', 'blue', 'lightgreen', 'yellow', 'red'];
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const [colorIndex , setColorIndex] = useState(0);

  const changeBackground = () => {
    const next = (colorIndex + 1) % colors.length;
    setBackgroundColor(colors[next]);
    setColorIndex(next);
  }

  const darkerBackgroundColor = darken(0.05, backgroundColor);

  return (
    <div className='p-10 mx-auto w-full h-screen duration-300 flex flex-col justify-center items-center'
      style = {{ backgroundColor }}
    >
      <h1 style={{ backgroundColor : darkerBackgroundColor, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} className='text-3xl font-semibold text-blue-500 w-fit px-10 py-2 mb-5 rounded-md'>Background Changer App via Vite</h1>
      <button className='bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-600' onClick={changeBackground}>Change Background</button>
    </div>
  )
}

export default App
