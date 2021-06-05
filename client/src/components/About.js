import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import profilepic from './images/profilepic.png'

const About = () => {
    const history = useHistory();
    const [userData, setUserData] = useState({});
    const [toggel, setToggel] = useState(true);

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "applicatin/json",
                    "Content-Type": "application/json"
                }, credentials: "include"
            })
            const data = await res.json();
            console.log(data);
            setUserData(data)
            if (!res.status === 200) {
                throw new Error(res.error);
            }
        } catch (err) {
            console.log(err);
            history.push('/login')
        }
    }

    const Usertoggel = () => {
        setToggel(false)
    }
    const Usertoggel1 = () => {
        setToggel(true)
    }

    useEffect(() => {
        callAboutPage();
        // eslint-disable-next-line
    }, [])
    const ToggleFunction = () => {
        if (toggel === true) {
            return (
                <div >
                    
                        <div className="row_edit">
                        <div className="row">
                        <div className="col-md-6">
                            <label>User ID</label>
                        </div>
                        <div className="col-md-6">
                            <p>{userData._id}</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <label>Name</label>
                        </div>
                        <div className="col-md-6">
                            <p>{userData.name}</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <label>Email</label>
                        </div>
                        <div className="col-md-6">
                            <p>{userData.email}</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <label>Phone</label>
                        </div>
                        <div className="col-md-6">
                            <p>{userData.phone}</p>
                        </div>
                    </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div >
                    <div className="row">
                        <div className="col-md-6">
                            <label>User ID</label>
                        </div>
                        <div className="col-md-6">
                            <p>876867879</p>
                        </div>
                    </div>
                </div>

            )
        }
    }

    return (
        <>
            <div className="container emp-profile  col-md-8">
                <form method="" className="form_content">
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                {<img  className="profile_img" src={profilepic} alt="profile pic" />} {/*lecture no.34 */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile_head">
                                <h5>{userData.name}</h5>
                                <h6>{userData.work}</h6>
                                <p className="profile-rating mt-3 mb-5">RANKING : <span>1/10</span></p>
                                <ul className="nav nav-tabs">
                                    <li className="nav_item">
                                        <button onClick={Usertoggel1}>About</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={Usertoggel}>Timeline</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile_edit_btn" name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile_work">
                                <p>WORK LINK</p>
                                <a href="www.google.com" target="_shoaib" >FaceBook</a><br />
                                <a href="https://www.instagram.com/beingsalmankhan/" target="_shoaib" >Instagram</a><br />
                                <a href="www.google.com" target="_shoaib" >Twitter</a><br />
                                <a href="www.google.com" target="_shoaib" >YouTube</a><br />
                                <a href="www.google.com" target="_shoaib" >Github</a><br />
                            </div>
                        </div>
                        <div className="col-md-8 pt-4 about-info" id="myTabContent">
                            <ToggleFunction />
                        </div>
                        </div>
                
                </form>
            </div>
            



        </>
    )
}

export default About;
