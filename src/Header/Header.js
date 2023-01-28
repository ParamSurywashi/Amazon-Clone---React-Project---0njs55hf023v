import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import Main from '../Body/Main';
import Bucket from '../Body/Bucket';
import { Provider} from "react-redux";
import store from '../Stores/store';
import Payment from '../Body/Payment';
import SignIn from '../Body/SignIn';
import SignUp from '../Body/SignUp';
import Order from '../Body/Order';
import Footer from './Footer';

function Header() {
  return (
  <>
  <Provider store={store}>
   <HashRouter>
      <Routes>
           <Route path='/' element={
            <>
            <HeaderBar />
            <Main />
            <Footer />
            </>
           }/> 
        <Route path='/bucket' element={
              <>              
            <HeaderBar />
            <Bucket />
            <Footer />
            </>
           }/> 
        <Route path='/payment' element={
              <>              
            <HeaderBar />
            <Payment />
            <Footer />
            </>
           }/> 
        <Route path='/signIn' element={
              <>              
            <HeaderBar />
            <SignIn />
            <Footer />
            </>
           }/> 
        <Route path='/signUp' element={
              <>              
            <HeaderBar />
            <SignUp />
            <Footer />
            </>
           }/> 
        <Route path='/order' element={
              <>              
            <HeaderBar />
            <Order />
            <Footer />
            </>
           }/> 
      </Routes>
   </HashRouter>
   </Provider>
  </>
  )
}

export default Header