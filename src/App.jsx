import { Route, Routes } from 'react-router-dom'
import './App.css'
import Rootlayout from './layout/Rootlayout'
import Loader from './component/Loader'


function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Loader/>}/>
        <Route path='layout/*' element={<Rootlayout/>}/>
      </Routes>
   
    </>
  )
}

export default App
