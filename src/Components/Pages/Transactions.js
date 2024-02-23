import * as Import from './Imports';

function Transactions() {

    const location = Import.useLocation();
    const [posts, setPosts] = Import.useState([]);
    const id = location.state;

    //login user->transactions 
    Import.useEffect(() => {
        Import.axios.get
            (`http://localhost:8084/getTransactions/${id}`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


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

                    <Import.Link to="/dashboard" state={id} >Dashboard</Import.Link>

                </div>
                <div className="mainBox">

                    <div>

                        <table id='customers'>
                            <tr>
                                <th>DATE AND TIME</th>
                                <th>DESCRIPTION</th>
                                <th>DEBIT</th>
                                <th>CREDIT</th>
                                <th>BALANCE</th>
                            </tr>
                            {posts.map(post => (

                                <tr key={post.transaction_id} >
                                    <td>{post.transactionDate}</td>
                                    <td>{post.description}</td>
                                    <td>{post.debit}</td>
                                    <td>{post.credit}</td>
                                    <td>{post.balance}</td>

                                </tr>


                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Transactions
