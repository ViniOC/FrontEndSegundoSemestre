
import {Outlet} from 'react-router-dom'
import Menu from './routes/Menu'

function App() {


  return (
    <>
      <Outlet/>
      <Menu/>
    </>
  )
}

export default App
