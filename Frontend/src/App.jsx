import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
<<<<<<< HEAD
// import './App.css'
import { AuthProvider } from './context/AuthProvider'


=======
import './App.css'
import { AuthProvider } from './context/AuthProvider'

>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
function App() {


  return (
    <>
      <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
<<<<<<< HEAD
      </AuthProvider>      
=======
      </AuthProvider>
      
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
    </>
  )
}

export default App

{/*  */}
