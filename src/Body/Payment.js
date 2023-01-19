import React, { useEffect, useState } from 'react';
import "../styles/payment.css";
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { orderProduct } from '../Stores/placeOrderSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Payment() {
  const navigate = useNavigate();
  const orderbyRedux = useDispatch();
  const CurrentUser = useSelector((state)=>state.saveDataofUser);
  const location = useLocation();
  const { from } = location.state;
//  console.log("Param"+ from);
  const[giftCard, setGiftCard] = useState(0);
  const [cardDetail, setcardDetails] = useState({
       cardNumber: '',
       expiryDate: '',
       cvv: '',
       cardholderName: '',
       upiId:''
  });

  const [addressDetails, setAddressDetails] = useState({
    name: '',
    address_Line: '',
    city: '',
    district: '',
    state:'',
    pincode: ''
});

const [updateAddress, setUpdateAddress] = useState({
  name: 'Parmanand Chared',
  address_Line: '91, Ward Number 10, Village-Borkhedi, Post- Devri',
  city: 'Pipliya Mandi',
  district: 'Mandsaur',
  state:'MP',
  pincode: '458664'
});
  const productBucket = useSelector((state)=> state.bucket);
 
  let sumTotal =0;
  productBucket.map((prdct)=>{
    sumTotal+=prdct.price;
  })
  function notify(e){
         e.preventDefault();
         if(CurrentUser.length>0){
          
          const ordetData={
            dateTime : getDateTime(),
            address : document.getElementById("addDiv").innerText
          }
          orderbyRedux(orderProduct(productBucket));
      //    alert("SuccessFull Order Place");
          toast.success('SuccessFull Order Place', {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'toast-message-order-place'
        });
         }else{
          alert("Please Login First");
          navigate("/signIn");
         }
        
  }

  const changeAddress = (e)=>{
       document.getElementsByClassName("addressForm")[0].style.display="block";
  }
  const handleAddressInput = (e)=>{
    e.preventDefault();
    setUpdateAddress(addressDetails);
    document.getElementsByClassName("addressForm")[0].style.display="none";
}
function getDateTime(){
  let date = new Date()
  let day = `${(date.getDate())}`.padStart(2,'0');
  let month = `${(date.getMonth()+1)}`.padStart(2,'0');
  let year = date.getFullYear();
  let time = date.toLocaleTimeString();
  return `${day}-${month}-${year} : ${time}`;
}
useEffect(()=>{
  // if(document.getElementById("giftCheckBox").checked){
  // setGiftCard(giftCard+20);
  // }
},[])
//     function handleGiftCharge(){ 
//       alert(document.getElementById("giftCheckBox").checked);
//       if(document.getElementById("giftCheckBox").checked){
//       setGiftCard(giftCard+20);
//       }
// }
  return (
    <>
    <div className='headingBox'> Checkout ({productBucket.length} itmes) </div>
    <div id='payBox'>
    <form>
     <div className='addressBox'>
        <div className='boldDiv'>1. Shipping address</div>
        <div id='addDiv'><span>{updateAddress.name}</span> <br /> <span>{updateAddress.address_Line}</span> <br/> <span>{updateAddress.city}</span> <span>{updateAddress.district}</span> <span>{updateAddress.state}</span> <span>{updateAddress.pincode}</span></div>
        <div id='changeDiv' onClick={changeAddress}>change</div>
        <div className='addressForm'>
            <label>Name</label> <br />
            <input type="text" id="addressName" placeholder='Name' value={addressDetails.name}  onChange={(e)=>setAddressDetails({...addressDetails, name: e.target.value})}/> <br /><br />
            <label>Address Line</label> <br />
            <input type="text" id="address_line" placeholder='Address Line' value={addressDetails.address_Line}  onChange={(e)=>setAddressDetails({...addressDetails, address_Line: e.target.value})}/> <br /><br />
            <label>City</label> <br />
            <input type="text" id="city" placeholder='City' value={addressDetails.city}  onChange={(e)=>setAddressDetails({...addressDetails, city: e.target.value})}/> <br /><br />
            <label>District</label> <br />
            <input type="text" id="district" placeholder='District' value={addressDetails.district}  onChange={(e)=>setAddressDetails({...addressDetails, district: e.target.value})}/> <br /><br />
            <label>State</label> <br />
            <input type="text" id="state" placeholder='State' value={addressDetails.state}  onChange={(e)=>setAddressDetails({...addressDetails, state: e.target.value})}/> <br /><br />
            <label>Pincode</label> <br />
            <input type="number" id="pincode" placeholder='' value={addressDetails.pincode}  onChange={(e)=>setAddressDetails({...addressDetails, pincode: e.target.value})}/> <br /><br />
            <button onClick={handleAddressInput}>Save</button>
        </div>
     </div>
      <hr />
     <div className='paymentBox'> <span id="textPaymentHeading">2. Choose a payment method</span>
        <div className='payDiv'>
            <div > Credit or Debit Card Details</div>

            <label>Card Number</label> <br />
            <input type="text" id="cardNumber" placeholder='Card Number' value={cardDetail.cardNumber}  onChange={(e)=>setcardDetails({...cardDetail, cardNumber: e.target.value})}/> <br /><br />
            <label>Expiry Date</label> <br />
            <input type="text" id='expiryDate' placeholder='YY/MM' value={cardDetail.expiryDate}   onChange={(e)=>setcardDetails({...cardDetail, expiryDate: e.target.value})}/> <br /><br />
            <label>CVV</label> <br />
            <input type="number"id='cvv' value={cardDetail.cvv}   onChange={(e)=>setcardDetails({...cardDetail, cvv: e.target.value})}/> <br /><br />
            <label>Cardholder's Name</label> <br />
            <input type="text" id='cardholderName' placeholder='Cardholders Name' value={cardDetail.cardholderName}   onChange={(e)=>setcardDetails({...cardDetail, cardholderName: e.target.value})}/> <br /> <br />
        </div>
        <div className='payDiv'>
            <div>UPI Method</div>
            <label>UPI Id</label> <br />
            <input type="text" id="upiId" placeholder='UPI Id' value={cardDetail.upiId}  onChange={(e)=>setcardDetails({...cardDetail, upiId: e.target.value})}/> <br />
          
        </div>
     </div>
     <div>
      <button className='placeOrderBtn' onClick={(e)=>notify(e)}>Place Your Order</button>
 
     </div>
    </form>
    <div id='orderSummary'>
    <span className='boldDiv'> Order Summary</span> <br /> <br />
    <div>Items ({productBucket.length}): <span className='orderLastTxt'>&#x20B9;{sumTotal}</span></div>
    <div >Gifting Charges: <span className='giftChargeTxt'>&#x20B9;{giftCard}</span></div>
    <div>Shipping & Handling: <span className='orderLastTxt'>&#x20B9;{40}</span></div>
    <div>Delivery Charges : <span className='orderLastTxt'>&#x20B9;{60}</span></div>
    <hr />
    <div>Payment Total: <span className='orderLastTxt'>&#x20B9;{sumTotal+giftCard+100}</span></div>
     
    </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default Payment