import * as Import from './Imports';

function AdminPage() {

  const ButtonStyle = { backgroundColor: "black", width: "100%", height: "100px", color: "white", border: "2px solid white" }

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

          <Import.Link to="/home" >Home</Import.Link>

        </div>
        <div className="mainBox">

          <div>
            <h2 style={{ textAlign: "center" }}> ADMIN PORTAL </h2>

            <Import.Link to="/AdminLoan"><button style={ButtonStyle}> Check Loan Request</button></Import.Link>

            <Import.Link to="/AdminCredit"><button style={ButtonStyle}> Check Credit Card Application</button></Import.Link>

            <Import.Link to="/AdminDebit"><button style={ButtonStyle}> Check Debit Card Application</button></Import.Link>

          </div>
        </div>


      </div>
    </div>



  )
}

export default AdminPage
