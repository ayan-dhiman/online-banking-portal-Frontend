import * as Import from '../src/Components/Pages/Imports';

function App() {
  return (
    
      <Import.BrowserRouter>

      <Import.Routes>

        <Import.Route exact path="/" element={<Import.HomePage/>}/>
        
        <Import.Route path="/home" element={<Import.HomePage/>}/>
        
        <Import.Route path="/login" element={<Import.LoginPage/>}/>

        <Import.Route path="/dashboard" element={<Import.Dashboard/>}/>

        <Import.Route path="/howDoI" element={<Import.HowDoIPage/>}/>

        <Import.Route path="/manageCards" element={<Import.ManageCards/>}/>

        <Import.Route path="/contactUs" element={<Import.ContactUs/>}/>

        <Import.Route path="/accountNumber" element={<Import.AccountNumber/>}/>

        <Import.Route path="/createAccount" element={<Import.CreateAccountPage/>}/>

        <Import.Route path="/profile" element={<Import.Profile/>}/>

        <Import.Route path="/changePassword" element={<Import.ChangePassword/>}/>

        <Import.Route path="/changePass" element={<Import.ChangePass/>}/>

        <Import.Route path="/faqs" element={<Import.FAQsPage/>}/>

        <Import.Route path="/pay" element={<Import.SendMoney/>}/>

        <Import.Route path="/setTransactionPassword" element={<Import.SetTransactionPassword/>}/>

        <Import.Route path="/transactions" element={<Import.Transactions/>}/>

        <Import.Route path="/loanForm" element={<Import.LoanForm/>}/>

        <Import.Route path="/eligibility" element={<Import.Eligibility/>}/>

        <Import.Route path="/loanApply" element={<Import.ApplyNow/>}/>

        <Import.Route path="/cardsApply" element={<Import.CardsApply/>}/>

        <Import.Route path="/loanForm" element={<Import.LoanForm/>}/>

        <Import.Route path="/creditCard" element={<Import.CreditCard/>}/>

        <Import.Route path="/debitCard" element={<Import.DebitCard/>}/>

        <Import.Route path="/adminCredit" element={<Import.AdminCredit/>}/>

        <Import.Route path="/adminDebit" element={<Import.AdminDebit/>}/>

        <Import.Route path="/adminLoan" element={<Import.AdminLoan/>}/>

        <Import.Route path="/adminPage" element={<Import.AdminPage/>}/>

        <Import.Route path="/ApplicationStatus" element={<Import.Applicationstatus/>}/>
        
      </Import.Routes>

    </Import.BrowserRouter>


  );
}

export default App;
