import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/estilos/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import ProfilesPages from './pages/ProfilesPages.jsx'
import Course from './pages/courses/[id]/Course.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: '/profiles',
    element: <ProfilesPages />
  },
  {
    path: '/courses/:id',
    element: <Course />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
