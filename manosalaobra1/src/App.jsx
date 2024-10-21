import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='principal'>
        <h1 className='title'>Lista de tareas de cande</h1>

        <div className='form'>
        <input type="text" name="nuevaTarea" placeholder="Nueva tarea..." required />
        <button type="submit" className='buttona'>ADD</button>
        </div>


        <div className='List-tarea'>

          <li className='list-item'><input type="checkbox" className='checkbox' />
            <p className='nombre'>Task 1</p> <button className='basura'>🗑️</button>
          </li>
          <li className='list-item'><input type="checkbox" className='checkbox' />
            <p className='nombre'>Task 2</p> <button className='basura'>🗑️</button>
          </li>
          <li className='list-item'><input type="checkbox" className='checkbox' />
            <p className='nombre'>Task 3</p> <button className='basura'>🗑️</button>
          </li>
          <li className='list-item'><input type="checkbox" checked className='checkbox' />
            <p className='comp'>Completada </p> <button className='basura'>🗑️</button>
          </li>
          <li className='list-item'><input type="checkbox" className='checkbox' />
            <p className='nombre'>Task 4</p> <button className='basura'>🗑️</button>
          </li>
          <li className='list-item'><input type="checkbox" className='checkbox' />
            <p className='nombre'>Task 5</p> <button className='basura'>🗑️</button>
          </li>

        </div>
      </div>
    </>
  )
}

export default App
