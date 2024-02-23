import * as Import from './Imports';

function HomePage() {

    const menuItems = [
        { name: 'Services', link: '/home', subMenu: ['Personal Banking'], order: 1 },
        { name: 'FAQs', link: '/faqs', order: 2 },
        { name: 'Apply for SBI Account', link: '/createAccount', subMenu: ['Savings Bank Account'], order: 3 },
        { name: 'Apply Credit/Debit card E-Mandate', link: '#ApplyForServices', order: 4 },
        { name: 'Apply for Loans', link: '#ApplyForServices', order: 5 },
    ];

    const securityMessages = {
        homepageHeadAlert: [
            'If slowness is observed during Login Page loading, please refresh the page for better experience.',
            'SBI never asks for confidential information such as PIN and OTP from the customers. Any such call can be made only by a fraudster. Please do not share personal info.'
        ],
    };

    const infoMessages = [
        'Mandatory Profile password change after 365 days introduced for added security.',
        'SBI never asks for your Card/PIN/OTP/CVV details on phone, message or email. Please do not click on links received on your email or mobile asking your Bank/Card details.',
        'Customers who have installed “SBI Secure OTP App” on their mobile and completed the registration process will now receive Login OTP for OnlineSBI.com on the app instead of SMS OTP.',
        'Call us toll free on 1800 1234 and 1800 2100 and get a wide range of services through SBI Contact Centre.'
    ];

    const footerLinks = [
        { text: 'RBI Retail Direct portal', link: 'https://rbiretaildirect.org.in' },
        { text: 'Block ATM Card', link: 'https://retail.onlinesbi.sbi/retail/blockatmcardintermediate.htm?bankCode=0' },
        { text: 'Customer Request and Complaint', link: 'https://crcf.sbi.co.in' },
        { text: 'Banking Forms', link: 'https://retail.onlinesbi.sbi/personal/reg_forms.html' },
        { text: 'Linking of PAN with Aadhaar', link: 'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-Import.Link-aadhaar' },
        { text: 'SBI Life Insurance', link: 'https://www.sbilife.co.in' },
        { text: 'SBICAP Trustee Company Ltd', link: 'http://www.sbicaptrustee.com' },
        { text: 'SBI Salary Account', link: 'https://bank.sbi/web/salary-account' },
        { text: 'NRI Services', link: 'https://bank.sbi/web/nri/home' },
        { text: 'Fair Lending Practice Code', link: 'https://www.onlinesbi.sbi/documents/Yono_Business_Fair_Practice_Lending_Code.pdf' },
        { text: 'SBICAP Securities', link: 'https://www.sbisecurities.in/' },
        { text: 'SBI FasTag', link: 'https://fastag.onlinesbi.com' },
        { text: 'SBI Express Remit', link: 'https://remit.onlinesbi.com/' },
        { text: 'SBI Mutual Fund', link: 'https://www.sbimf.com/en-us/quick-invest?arn_code=ARN12195' },
        { text: 'SBI General Insurance Document Download', link: 'https://www.sbigeneral.in/portal/downloads' },
        { text: 'SBI Card', link: 'http://www.sbicard.com/' }
    ];

    return (

        <div className='mainDiv'>

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

            {/* Heading Info Div */}
            <div className="messageBox">

                {securityMessages.homepageHeadAlert.map((alert, index) => (
                    <h5 key={index} className="message">{alert}</h5>
                ))}

            </div>

            {/* Main Login Box */}
            <div className="loginBox">

                <img src={Import.cntLogo} alt="Logo" width={"5%"} height={"3%"} />

                <br />

                <h3 className="bankingName" >Personal Banking</h3>

                <div className="box">
                    <a href="#login"><button className="loginBTN" >Login</button></a>
                </div>

                <br /> <br />

                <div className="inlineLink" ><a href='#NewUser' >New User Registration</a> / <Import.Link to="/howDoI" >How do I ?</Import.Link> / <Import.Link to="/contactUs" >Contact Us</Import.Link> </div>

                <br />

                <p>SBI's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.</p>

            </div>

            {/* Scrolling Info Marquee Tag*/}
            <div className='infoScroll'>

                <marquee width="auto" direction="left" height="50px">
                    {infoMessages.map((message, index) => (
                        <span key={index}>{message} | </span>
                    ))}
                </marquee>

            </div>

            {/* Footer Links */}
            <div className='footer'>
                <table className="footerLink">
                    {footerLinks.map((link, index) => (
                        <tr key={index}>
                            <td>
                                <a href={link.link} target="_blank" rel="noopener noreferrer">&#9830; {link.text}</a>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>

            {/* Login Popup */}
            <div id="login" className="overlay">
                <div className="popup">
                    <br /><br /><br />
                    <p>By clicking on <strong> "Continue to Login" </strong> button, you agree to the Terms of Service (Terms & Conditions) of usage of Internet Banking of SBI.</p>
                    <a className="close" href="#">&times;</a>
                    <br />
                    <Import.Link to="/login" ><button className="loginBTN" >Continue to Login</button></Import.Link>
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

export default HomePage