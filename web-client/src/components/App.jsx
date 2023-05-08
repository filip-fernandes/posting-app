import { useEffect, useState } from 'react'
import '../App.css'
import LoginPage from './LoginPage'
import SignupPage from './SignUpPage'
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from './HomePage'
import NavBar from './Navbar'
import React from 'react';


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/sign-up" Component={SignupPage} />
      </Routes>
    </BrowserRouter>
  )
};
