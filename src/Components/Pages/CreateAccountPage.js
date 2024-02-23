import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sbilogo from '../Assets/sbilogo.png';
import styles from '../Styles/createAccount.module.css';
import { Link, useNavigate } from 'react-router-dom';


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

    const [firstName, setFirstName] = useState()

    const [lastName, setLastName] = useState()

    const [email, setEmail] = useState()

    const [phone, setPhone] = useState()

    const [password, setPassword] = useState()

    const [vpassword, setVPassword] = useState()

    const [balance, setBalance] = useState(5000)

    const navigate = useNavigate();

    const navigateToAccountNumber = () => {

        navigate('/AccountNumber', { state: phone });
    };


    const postData = () => {

        axios.get(`http://localhost:8084/getUserByPhone/${phone}`)


            .then(res => {

                console.log(res.data)
                if (res.data.accountNumber != null) {
                    alert("Already a User")

                }
                else {

                    axios.post(`http://localhost:8084/addUser`, {
                        firstName,
                        lastName,
                        phone,
                        email,
                        password,
                        balance
                    })

                    navigateToAccountNumber()

                }
            })



    }

   

    const checkPhone = () => {

        axios.get(`http://localhost:8084/getUserByPhone/${phone}`)


            .then(res => {

                console.log(res.data)
                if (phone >= 1000000000 && phone <= 9999999999) {

                    if (res.data.accountNumber != null) {
                        alert("Already a User")

                    }
                    else {
                        alert("No user Found")

                    }
                }
                else {

                    alert("Invalid Phone Number")

                }
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

                <table align='center'>

                    <tr>

                        <td><label><strong>First Name</strong></label></td>
                        <td><input type="text" name="firstName" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value) }} className={styles.input} /></td>

                    </tr>
                    <tr>

                        <td><label><strong>Last Name</strong></label></td>
                        <td><input type="text" name="lastName" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value) }} className={styles.input} /></td>

                    </tr>
                    <tr>

                        <td><label><strong>Email</strong></label></td>
                        <td><input type="email" name="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} className={styles.input} /></td>

                    </tr>
                    <tr>

                        <td><label><strong>Phone</strong></label></td>
                        <td><input type="number" name="phone" placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }} className={styles.input} /></td>
                        <td className={styles.tdCenter} ><h6><a href='#popup1' className={styles.checkPhone} >Check Registered or Not</a></h6></td>

                    </tr>
                    <tr>

                        <td><label><strong>Create Password</strong></label></td>
                        <td><input type="password" name="password" placeholder="Create Password" onChange={(e) => { setPassword(e.target.value) }} className={styles.input} /></td>
                        <td className={styles.tdCenter} ><h6>(CARE: Password is case sensitive.)</h6></td>

                    </tr>
                    <tr>

                        <td><label><strong>Verfiy Password</strong></label></td>
                        <td><input type="password" placeholder="Verify Password" onChange={(e) => { setVPassword(e.target.value) }} className={styles.input} /></td>

                    </tr>

                </table>

                <button onClick={() => {

                    if (password != null && vpassword != null && lastName != null && firstName != null && phone != null && email != null && firstName != '' && lastName != '' && email != '' && phone != '' && password != '' && vpassword != '') {



                        if (phone >= 1000000000 && phone <= 9999999999) {

                            if (password == vpassword) {

                                postData()

                            }
                            else {
                                alert("Password Dont Match")
                            }
                        }
                        else {

                            alert("Invalid Phone Number")

                        }


                    }
                    else if (firstName == null || lastName == null || email == null || phone == null || password == null || vpassword == null || firstName == '' || lastName === '' || email == '' || phone == '' || password == '' || vpassword == '') {
                        alert("Null Error")
                    }


                }} className={styles.loginBTN} >Submit</button>


            </div>

            <div id="popup1" className={styles.overlay}>
                <div className={styles.popup}>
                    <br /><br /><br />
                    <h2>Check if Phone Number Already Registered</h2>
                    <br />

                    <input type="number" name="phone" placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }} className={styles.input} />

                    <br /><br />

                    <button onClick={checkPhone} className={styles.getAccNoBTN}>Check</button>

                    <a className={styles.close} href="#">&times;</a>
                </div>
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
