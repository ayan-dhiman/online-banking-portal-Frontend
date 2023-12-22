import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/createAccount.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';


function LoginPage() {

    const mainDiv = {

        width: "80%",
        marginLeft: "10%",
        marginRight: "10%"

    }

    const header = {

        padding: "1.5%"

    }

    const navBar = {
        marginTop: "1.5%"
    }

    const [posts, setPosts] = useState([])

    const locationOBJ = useLocation();

    const phone = locationOBJ.state;

    const [loading, setLoading] = useState(true)

    const getData = () => {

        axios.get(`http://localhost:8084/getUserByPhone/${phone}`)


            .then(res => {

                console.log(res.data)
                setPosts(res.data)
                setLoading(false)
            })

    }

    return (
        <div style={mainDiv} >

            {/* SBI logo */}
            <div style={header} >
                <img src={sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} />
            </div>

            <br />

            {/* Navbar */}
            <div style={navBar} >

                <div className={styles.navbar}>

                    <Link to="/home" >Home</Link>
                    <Link to="/howDoI" >How do I</Link>
                    <Link to="/contactUs" >Contact Us</Link>

                </div>

            </div>

            {/* header box */}
            <div className={styles.alert}>

                <h5>NEVER respond to any popup,email, SMS or phone call, no matter how appealing or official looking, seeking your personal information such as username, password(s), mobile number, ATM Card details, etc. Such communications are sent or created by fraudsters to trick you into parting with your credentials.</h5>

            </div>

            {/* MainBox */}
            <div className={styles.divBox}>

                <h2>Online Account Created</h2>
                <br />

                <button onClick={getData} className={styles.getAccNoBTN}>Get Account Number</button>

                {!loading &&
                    <h2>{posts.accountNumber}</h2>
                }
                <br /><br />
                <Link to="/home" ><button className={styles.loginBTN} >Ok</button></Link>

            </div>

            <div>
                <ul>
                    <li><h5>Account Number will auto generate once the account request is accepted by the bank or you may visit the nearest bank for any update.</h5></li>
                    <li><h5>Your credentials are highly confidential. Never part with them.SBI will never ask for this information.</h5></li>
                </ul>
            </div>

        </div>
    )
}

export default LoginPage
