import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router'

import {
    Router,
    Routes,
    Route,
    BrowserRouter,
    Link
  } from 'react-router-dom';

import LoginPage from './LoginPage';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import HowDoIPage from './HowDoIPage';
import ManageCards from './ManageCards';
import ContactUs from './ContactUs';
import CreateAccountPage from './CreateAccountPage'
import Profile from './Profile';
import ChangePassword from './ChangePassword';
import FAQsPage from './FAQsPage';
import Transactions from './Transactions';
import SetTransactionPassword from './SetTransactionPassword';
import SendMoney from './SendMoney';
import LoanForm from './LoanForm';
import Eligibility from './Eligibility';
import ApplyNow from './ApplyNow';
import CardsApply from './CardsApply'
import CreditCard from './CreditCard'
import DebitCard from './DebitCard'
import AdminCredit from './AdminCredit'
import AdminDebit from './AdminDebit'
import AdminLoan from './AdminLoan'
import AdminPage from './AdminPage'
import Applicationstatus from './Applicationstatus'
import ChangePass from './ChangePass'
import AccountNumber from './AccountNumber'
import NavBar from './NavBar';
import NavBar2 from './NavBar2';

import sbilogo from '../Assets/sbilogo.png';
import cntLogo from '../Assets/contactlogo.png';

import banner1 from '../Assets/Images/banner1.jpg';

export{
    React,
    useEffect,
    useState,
    sbilogo,
    cntLogo,
    axios,
    Link,
    useNavigate,
    useLocation,
    BrowserRouter,
    Routes,
    Route,
    Router,
    LoginPage,
    HomePage,
    Dashboard,
    HowDoIPage,
    ManageCards,
    ContactUs,
    CreateAccountPage,
    Profile,
    ChangePassword,
    FAQsPage,
    Transactions,
    SetTransactionPassword,
    SendMoney,
    LoanForm,
    Eligibility,
    ApplyNow,
    CardsApply,
    CreditCard,
    DebitCard,
    AdminCredit,
    AdminDebit,
    AdminLoan,
    AdminPage,
    Applicationstatus,
    ChangePass,
    AccountNumber,
    NavBar,
    NavBar2,
    banner1,
}