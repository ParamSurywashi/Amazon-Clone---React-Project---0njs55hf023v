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
            </>
           }/> 
        <Route path='/bucket' element={
              <>              
            <HeaderBar />
            <Bucket />
            </>
           }/> 
        <Route path='/payment' element={
              <>              
            <HeaderBar />
            <Payment />
            </>
           }/> 
        <Route path='/signIn' element={
              <>              
            <HeaderBar />
            <SignIn />
            </>
           }/> 
        <Route path='/signUp' element={
              <>              
            <HeaderBar />
            <SignUp />
            </>
           }/> 
        <Route path='/order' element={
              <>              
            <HeaderBar />
            <Order />
            </>
           }/> 
      </Routes>
   </HashRouter>
   </Provider>
  </>
  )
}

export default Header