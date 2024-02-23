import * as Import from './Imports';
import '../Styles/contactUs.scss';

function ContactUs() {

  return (
    <div className='mainDiv'>
            
            <Import.NavBar2/>
            
            <div>

                <div className="detailBox">

                    <h2 align="left" >Contact Us</h2>
                    <h5 align="left" className="info">At State Bank of India, we are committed to provide best internet banking services to our customers. Please feel free to share your Internet Banking experience with us over phone. SBI now provides your Account Balance and Transaction details over phone round the clock. Information on deposits & loan schemes and services also available.</h5>
                    <ul>

                        <li><strong>1800 1234 & 1800 2100</strong> (Toll free and accessible from all landlines and mobile phones of India)</li>
                        <br/>
                        <li><strong>0091 80 26599990</strong> (Accessible from all landlines and mobile phones of India and abroad)</li>

                    </ul>
                </div>
                <ul>

                    <li>Ministry of Home Affairs Cyber Crime National Helpline : <strong>1930</strong></li>
                    <br/>
                    <li>National Cyber Crime Reporting Portal : <a href='https://www.cybercrime.gov.in/'>www.cybercrime.gov.in</a></li>

                </ul>

            </div>
    </div>
  )
}

export default ContactUs