import React, { createContext,useReducer } from 'react'
import "./App.css"
import Navbar from "./components/Navbar"
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'
// import { BrowserRouter as Router, Route} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
// import About from './components/About'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import Logout from './components/Logout'
import {initialState, reducer} from '../src/reducer/UseReducer'

export const UserContext = createContext();

const Routing = () =>{
    return (
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/Contact"><Contact /></Route>   
        {/* <Route path="/About"> <About /></Route>  */}
        <Route path="/Signup"><Signup /></Route> 
        <Route path="/Login"><Login /></Route>  
        <Route path="/Logout"><Logout /></Route>  
        <Route><ErrorPage /></Route>  
        </Switch>
       
    )
}
export const App = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <>
            <UserContext.Provider value={{state,dispatch}}>
                
                <Navbar />
                <Routing />
            </UserContext.Provider>
             
        </>
    )
    }


