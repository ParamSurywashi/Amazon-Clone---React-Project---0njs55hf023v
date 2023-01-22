import React, { useEffect, useState } from 'react';
import "../styles/order.css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {AiTwotoneHeart} from "react-icons/ai";

function Order() {
  const [dataOrder, setDataOrder] = useState([]);
    const dispatch = useDispatch();
   const ProductsOrderList = useSelector((state)=> state.orderProduct);
   useEffect(()=>{
    if(ProductsOrderList.length>0){
      setDataOrder(ProductsOrderList[0]);
     }
   })
   
   let arrHeart = [];
   function createHeartOrder(rate){
       arrHeart=[];
     for(let i=1; i<rate; i++){
       arrHeart.push(<AiTwotoneHeart />);
    }
    return (arrHeart.map((heart, index)=>{
     return <span className='heartColor' key={index}>{heart}</span>
}))
   }
   
  return (
    <>
     <div className='orderTxt'>Your Order & Returns </div>
      <div className='orderBox'>
         <div id='orderLengthTxt'>{(dataOrder.length===0) ? "No Order Found" : "Total "+dataOrder.length+ " Order items" }</div>
        <div className='productOrderShows'>
          
        {dataOrder.map((product)=>{
         
          return(
            <div className='orderList' key={product.id}>
              <div><img className='imageOrderList' src={product.image} /></div>
           <div className='divOrderList'>
                   <div className='Order'>{product.title}</div>
                  <div className='rateOrderDiv'>&#x20B9;{product.price}</div>
                 {/* <div>{createHeartOrder(product.rating.rate)}</div> */}
           </div>
        </div>
          )
        })}
        </div>
    </div>
    </>
  )
}

export default Order