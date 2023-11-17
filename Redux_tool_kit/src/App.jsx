import './App.css'
import Home from './Home'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Cart_Home_Page from './Cart_Home_Page';



function App() {


  return (
    <>
    <Router>
     <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/Cart-Home' element={<Cart_Home_Page/>}></Route>
     </Routes>
     </Router>
    
    </>
  )
}

export default App
