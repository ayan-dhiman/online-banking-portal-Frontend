import * as Import from './Imports';
import '../Styles/HomePage.scss';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

function HomePage() {

    const securityMessages = {
        homepageHeadAlert: [
            'If slowness is observed during Login Page loading, please refresh the page for better experience.',
            'OBP never asks for confidential information such as PIN and OTP from the customers. Any such call can be made only by a fraudster. Please do not share personal info.'
        ],
    };

    const infoMessages = [
        'Mandatory Profile password change after 365 days introduced for added security.',
        'OBP never asks for your Card/PIN/OTP/CVV details on phone, message or email. Please do not click on links received on your email or mobile asking your Bank/Card details.',
        'Customers who have installed “OBP Secure OTP App” on their mobile and completed the registration process will now receive Login OTP for Online on the app instead of SMS OTP.',
        'Call us toll free on 1800 1234 and 1800 2100 and get a wide range of services through OBP Contact Centre.'
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

            <Import.NavBar/>

            {/* Heading Info Div */}
            <div className="messageBox">

                {securityMessages.homepageHeadAlert.map((alert, index) => (
                    <h5 key={index} className="message">{alert}</h5>
                ))}

            </div>

            {/* Main Login Box */}
            <div className="loginBox">

                {/* <img src={Import.cntLogo} alt="Logo" width={"5%"} height={"3%"} /> */}
                <PersonIcon className='icon'/>

                <h3 className="bankingName" >PERSONAL BANKING</h3>

                <div className="box">
                    {/* <a href="#login"><button className="loginBTN" >LOGIN</button></a> */}
                    <a href="#login"><Button variant="contained" className="loginBTN">LOGIN</Button></a>
                </div>

                <br/>

                <div className="inlineLink" ><a href='#NewUser' ><AccountCircleRoundedIcon className='iconInline' />New User Registration</a> / <Import.Link to="/howDoI" ><HelpRoundedIcon className='iconInline' />How do I ?</Import.Link> / <Import.Link to="/contactUs" ><SupportAgentRoundedIcon className='iconInline' />Contact Us</Import.Link> </div>

                <p>OBP's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.</p>

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
                <br/>
                <table className="footerLink">
                    {footerLinks.map((link, index) => (
                        <tr key={index}>
                            <td>
                                <a href={link.link} target="_blank" rel="noopener noreferrer">&#9830; {link.text}</a>
                            </td>
                        </tr>
                    ))}
                </table>
                <br/>
            </div>

            {/* Footer Images */}
            <div className='footer'>
                <img src={Import.banner5} alt="Logo" width={"100%"} height={"50%"} />
            </div>

            {/* Login Popup */}
            <div id="login" className="overlay">
                <div className="popup">
                    <br /><br /><br />
                    <p>By clicking on <strong> "Continue to Login" </strong> button, you agree to the Terms of Service (Terms & Conditions) of usage of Internet Banking of SBI.</p>
                    <a className="close" href="#">&times;</a>
                    <br />
                    <Import.Link to="/login" ><button className="loginBTN" >CONTINUE TO LOGIN</button></Import.Link>
                </div>
            </div>

        </div>
    )
}

export default HomePage
