import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import './App.css'
import Home from './Home'
function App() {


  return (
    <>
      
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
