import * as Import from './Imports';

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

    const [posts, setPosts] = Import.useState([])

    const locationOBJ = Import.useLocation();

    const phone = locationOBJ.state;

    const [loading, setLoading] = Import.useState(true)

    const getData = () => {

        Import.axios.get(`http://localhost:8084/getUserByPhone/${phone}`)


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
                <img src={Import.sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} />
            </div>

            <br />

            {/* Navbar */}
            <div style={navBar} >

                <div className="navbar">

                    <Import.Link to="/home" >Home</Import.Link>
                    <Import.Link to="/howDoI" >How do I</Import.Link>
                    <Import.Link to="/contactUs" >Contact Us</Import.Link>

                </div>

            </div>

            {/* header box */}
            <div className="alert">

                <h5>NEVER respond to any popup,email, SMS or phone call, no matter how appealing or official looking, seeking your personal information such as username, password(s), mobile number, ATM Card details, etc. Such communications are sent or created by fraudsters to trick you into parting with your credentials.</h5>

            </div>

            {/* MainBox */}
            <div className="divBox">

                <h2>Online Account Created</h2>
                <br />

                <button onClick={getData} className="getAccNoBTN">Get Account Number</button>

                {!loading &&
                    <h2>{posts.accountNumber}</h2>
                }
                <br /><br />
                <Import.Link to="/home" ><button className="loginBTN" >Ok</button></Import.Link>

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
