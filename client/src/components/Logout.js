import React,{useEffect,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { UserContext}  from '../App'




const Logout = () => {
    const history = useHistory()
    const {state,dispatch} = useContext(UserContext);
    // this time using promises
   
    useEffect(()=>{
        fetch('/Logout', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },credentials:"include"
        }).then((res) =>{
            dispatch({type:'USER',payload:false})
            history.push("/login",{replace:true})
            if(!res.status !== 200){
                throw new Error(res.error);
            }
        }).catch((err) =>{
            console.log(err);
            console.log(state)

        })
    })

    return (
        <>
            <h1>logout page</h1>
        </>
    )
}

export default Logout;
