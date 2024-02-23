import * as Import from './Imports';

function ManageCards() {

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
        <div style={mainDiv} >
            <div style={header} ><img src={Import.sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} /></div>
            <br />
            <div style={navBar} >

                <div className="navbar">

                    <Import.Link to="/home" >Home</Import.Link>
                    <Import.Link to="/howDoI" >How do I</Import.Link>
                    <Import.Link to="/manageCards" >Manage Credit/Debit card E-Mandate</Import.Link>
                    <Import.Link to="/contactUs" >Contact Us</Import.Link>
                </div>
            </div>
        </div>
    )
}

export default ManageCards
