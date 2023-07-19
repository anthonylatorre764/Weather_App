import './App.css'
import Home from "../views/Home/Home"
import SignUp from "../views/SignUp/SignUp"
import SignIn from "../views/SignIn/SignIn"
import { Route, Routes } from 'react-router-dom'
import AppContextProvider from '../context/AppContext'


const App = () => {
  return (
      <AppContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
          </Routes>
      </AppContextProvider>
  )
}

export default App