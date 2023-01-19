import React,{useState, useEffect} from 'react'
import Product from './Product';
import '../styles/main.css';
import {useDispatch, useSelector} from 'react-redux';
import { add } from '../Stores/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Main() {
  const dispatch = useDispatch();
    const checkProductinBucket = useSelector((state)=>state.bucket);
    const [ProductList, setProductList] = useState([]);
    const fetchProducts = ()=>{
    return fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products").then((res)=>res.json())
    .then((response)=>{
      //  console.log(response);
        setProductList(response);
    })
}

    useEffect(() => {
        fetchProducts();
      },[])

      const handleAddToBucket = (products)=>{
        console.log(products)
        let countForProduct=0;
      // dispatch({type:"bucket/add", payload : products})
      checkProductinBucket.map((oldPrdcts)=>{
        if(oldPrdcts.id===products.id){
          countForProduct++;
        }
      })
        if(countForProduct===0){
          dispatch(add(products));
          toast.success('Added to Bucket Successfully', {
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-message-add-bucket'
        });
        }else{
          alert("Already Have in Bucket");
        }
      }
  return (
    <>
    <div className='bodyGrid'>
   { ProductList.map((prdcts, index)=>{
            return <div className='productsData'key={index} > <Product products={prdcts} index={index} handleAddToBucket={handleAddToBucket}/> </div> 
    })}
    
</div>
<ToastContainer />
    </>
  )
}

export default Main