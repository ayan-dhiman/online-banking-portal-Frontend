import * as Import from './Imports';

function SendMoney() {

    const location = Import.useLocation();
    const [amount, setAmount] = Import.useState();
    const [from_acc_no, setFromAccNo] = Import.useState(location.state);
    const [to_acc_no, setToAccNo] = Import.useState();
    const [password, setPassword] = Import.useState("");
    const [transactionPasswd, setTransactionPasswd] = Import.useState("");
    const [balance,setBalance]=Import.useState();


    const navigate = Import.useNavigate();

//To get transaction password
Import.useEffect(() => {
    Import.axios.get
            (`http://localhost:8084/getUserPassword/${from_acc_no}`)
            .then(res => {

                setPassword(res.data);

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
//For getting user balance
    Import.useEffect(() => {
        Import.axios.get
            (`http://localhost:8084/getUserBalance/${from_acc_no}`)
            .then(res => {

                setBalance(res.data);

            })
            .catch(err => {
                console.log(err)
            })
    }, [])


//handle password matching and other transaction details
    const handleSubmit = (e) => {

        e.preventDefault();
        let flag = true;

        if(to_acc_no==from_acc_no)
        {
            flag=false;
            alert("Cannot Send Money to yourself")
        }

        if (password.toString() !== transactionPasswd.toString()) {
            flag = false;
            alert("Transaction Password Incorrect")

        }
//converting json balance field tlocal float variable
        let newBalance=parseFloat(balance);
        let newAmount=parseFloat(amount);
        if((newBalance-newAmount)<0)
        {
            flag=false;
            alert("Insufficient Funds. Available Balance is "+balance);
        }
        console.log(password);
        console.log(transactionPasswd);
        if (flag) {
            Import.axios.post(`http://localhost:8084/saveTransaction`,{
            amount,
            from_acc_no,
            to_acc_no
        }
        )
           

            navigate('/transactions', { state: from_acc_no });
        }
    }
    const labelStyle = { marginLeft: '0em' }

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


    return (
        <div style={mainDiv}>
            <div style={header} ><img src={Import.sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} /></div>
            <br />
            <div style={navBar} >

                <div className="navbar">

                    <Import.Link to="/dashboard" state={from_acc_no} >Dashboard</Import.Link>
                    <Import.Link to="" ></Import.Link>
                    <Import.Link to="" ></Import.Link>

                </div>
                <div className="mainBox">

                    <div id="formDiv">


                        <h2>TRANSFER MONEY</h2>
                        {/* <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Beneficiary Account Number" value={to_acc_no} onChange={(e)=>setToAccNo(e.target.value)}/>
                <input type="text" placeholder="Amount" />
                <input type="submit"></input>

            </form> */}
                        <h3>Account Number : {from_acc_no}</h3>
                        <h3>Transaction Password : {password}</h3>
                        <form onSubmit={handleSubmit}>

                            <input type="text" id="account" name="account" placeholder="Beneficiary Account Number"
                                value={to_acc_no} onChange={(e) => setToAccNo(e.target.value)} />
                            <input type="text" id="amount" name="amount" placeholder="Amount"
                                value={amount} onChange={(e) => setAmount(e.target.value)} />
                            <input type="password" id="password" name="password" placeholder="Transaction Password"
                                value={transactionPasswd} onChange={(e) => setTransactionPasswd(e.target.value)} />
                            <input type="submit" value="Pay" id="Submit_Button" />
                        </form>
                    </div>
                </div>
                <ul>
                    <li><h5>Do not provide your username and password anywhere other than in this page.</h5></li>
                    <li><h5>Your credentials are highly confidential. Never part with them.SBI will never ask for this information.</h5></li>
                </ul>

            </div>
        </div>

    )
}

export default SendMoney
