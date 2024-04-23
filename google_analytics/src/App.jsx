import {RouterProvider} from 'react-router-dom';
import { routes } from './routes/routes'
import ReactGa from 'react-ga4';
function App() {

  ReactGa.initialize('')


  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
