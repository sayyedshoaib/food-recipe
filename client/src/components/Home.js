import React,{ useEffect,useState } from 'react'
import Main from './Main'

const Home = () => {

    
    const [userName, setUserName] = useState("");
    const [show, setshow] = useState(false);
    

    const userHomePage = async () => {
        try {
            const res = await fetch('/getData', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
            console.log(data);
            setUserName(data.name)
            setshow(true);
           
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        userHomePage();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {/* <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                        <h1>{userName}</h1>
                        <h2>{ show? 'Happy to see you back' : 'We are the group of developers'}</h2>

                </div>
            </div> */}
            <Main />

        </div>
    )
}

export default Home;
