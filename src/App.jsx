import { RouterProvider } from 'react-router-dom'
import './App.css'
import { rootes } from './rootes/rootes'

function App() {

  return (
    <>
      <RouterProvider router={rootes}></RouterProvider>
    </>
  )
}

export default App
