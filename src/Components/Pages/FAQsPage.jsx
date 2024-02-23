import * as Import from './Imports';
import '../Styles/faqs.scss';

function FAQsPage() {

    const faqList = [
        {
            question: 'What is OnlineSBI?',
            answer: 'OnlineSBI is the Internet banking service provided by State Bank of India, India\'s largest and premier commercial bank.'
        },
        {
            question: 'What is special about Internet banking?',
            answer: 'Internet banking is the most convenient way to bank- anytime, any place, at your convenience.'
        },
        {
            question: 'I do not have a PC?',
            answer: 'You can access OnlineSBI from any computer that has connectivity to the Internet. But make sure your computer is Malware free.'
        },
        {
            question: 'How do I access OnlineSBI?',
            answer: 'You need to have an account at a branch. You also need to register for the Internet banking service with the branch. Branch will provide you a Pre Printed Kit (PPK) containing username and password for first login. If you are not in a position to collect PPK in person, the bank will arrange to send a username through SMS and a mailer containing password to your registered address.'
        },
        {
            question: 'I do not have an account with SBI?',
            answer: 'You are welcome to open it now. It is very easy to open an account with SBI. You can apply online for opening of a savings bank account. A link \'Online SB Account Application\' is available on the home page of www.onlinesbi.sbi or just walk in to any of our branches nearby. Our staff would be pleased to assist you.'
        },
        {
            question: 'Why are the user name and password so cryptic?',
            answer: 'The user name and password are system generated. OnlineSBI has no control over this process. During your first visit to OnlineSBI, you must mandatorily change your user name and password.'
        },
        {
            question: 'Can I change the user name and password that were sent to me by courier?',
            answer: 'Yes. It is mandatory for you to change the system generated user name and password when you first logon to OnlineSBI. Later at any point of time, you can change your password but not the user name.'
        }
    ];

    return (
        <div className="mainDiv" >
            
            <Import.NavBar/>

            <div id="ApplyForServices" className="overlay">
                <div className="popup">
                    <br /><br /><br />
                    <h2>To apply you have to login first.</h2>
                    <a className="close" href="#">&times;</a>
                    <br />
                    <Import.Link to="/"><button className="loginBTN" >Login</button></Import.Link>
                </div>
            </div>

            <div className="alert">

                <h5>NEVER respond to any popup,email, SMS or phone call, no matter how appealing or official looking, seeking your personal information such as username, password(s), mobile number, ATM Card details, etc. Such communications are sent or created by fraudsters to trick you into parting with your credentials.</h5>

            </div>
            
            <div className="faqContainer">
                <div className="headingLink">
                    <h2>Frequently Asked Questions</h2>
                </div>
                {faqList.map((faq, index) => (
                    <div key={index} className="subDiv">
                        <details>
                            <summary><b>{faq.question}</b></summary>
                            <ul>
                                <li>{faq.answer}</li>
                            </ul>
                        </details>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FAQsPage
