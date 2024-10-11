import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import './App.css'
import { AuthProvider } from './context/AuthProvider'

function App() {


  return (
    <>
      <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
      
    </>
  )
}

export default App

{/*  */}
