import * as Import from './Imports';
import '../Styles/NavBar.scss';

function NavBar() {

    const menuItems = [
        { name: 'Services', link: '/home', subMenu: ['Personal Banking'], order: 1 },
        { name: 'FAQs', link: '/faqs', order: 2 },
        { name: 'Apply for SBI Account', link: '/createAccount', subMenu: ['Savings Bank Account'], order: 3 },
        { name: 'Apply Credit/Debit card E-Mandate', link: '#ApplyForServices', order: 4 },
        { name: 'Apply for Loans', link: '#ApplyForServices', order: 5 },
    ];

    return (
        <div className='headerContainer'>

            {/* SBI LOGO ON THE TOP */}
            <div className="header">
                <img src={Import.sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} />
            </div>

            <br />

            {/* Navbar */}
            <div className='navbarParent'>
                <div className="navbar">
                    {menuItems.map((menuItem, index) => (
                        <div key={index} className="dropdown">
                            {menuItem.name === 'Apply Credit/Debit card E-Mandate' || menuItem.name === 'Apply for Loans' ? (
                                <a className="dropbtn" href={menuItem.link}>{menuItem.name}</a>
                            ) : (
                                <Import.Link to={menuItem.link}>
                                    <button className="dropbtn">{menuItem.name}</button>
                                    {menuItem.subMenu && (
                                        <div className="dropdowncontent">
                                            {menuItem.subMenu.map((subMenuItem, subIndex) => (
                                                <Import.Link key={subIndex} to={menuItem.link}>{subMenuItem}</Import.Link>
                                            ))}
                                        </div>
                                    )}
                                </Import.Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* New User Popup */}
            <div id="NewUser" className="overlay">
                <div className="popup">
                    <br /><br /><br />
                    <p><strong>New User Registration</strong><br /><br />If you have already obtained Pre-Printed Kit from the branch for activating INB facility, please don't proceed with this Import.Link. You can input userid and password given in PPK on normal login screen.

                        <br /><br />    Note: This Import.Link is applicable for Retail customers only.</p>
                    <a className="close" href="#">&times;</a>
                    <br />
                    <Import.Link to="/createAccount" ><button className="loginBTN" >Ok</button></Import.Link>
                </div>
            </div>

            {/* Apply for Services Popup */}
            <div id="ApplyForServices" className="overlay">
                <div className="popup">
                    <br /><br /><br />
                    <h2>To apply you have to login first.</h2>
                    <a className="close" href="/home">&times;</a>
                    <br />
                    <a href='#login'><button className="loginBTN" >Login</button></a>
                </div>
            </div>

        </div>
    )
}

export default NavBar
