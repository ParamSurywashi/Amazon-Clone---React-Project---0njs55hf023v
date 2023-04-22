import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Product from './Product';

function SearchPage({ProductList}) {

    const location = useLocation();
    const [productSearchList, setProductSearchList] = useState([]);
    let searchText = location.state;
    
    const filterData = ProductList.filter((data)=>{
        return data?.title.toLowerCase().includes(searchText.toLowerCase());
    })
    useEffect(()=>{
        setProductSearchList(filterData);
    },[])
    const handleAddToBucket = (products) => {

    }
  return (
    <div className='bodyGridSearch'>
        {
           productSearchList && productSearchList.map((prdcts, index) => {
                return <div className='productsData' key={index} > <Product products={prdcts} index={index} handleAddToBucket={handleAddToBucket} /> </div>
              })}
    </div>
  )
}

export default SearchPage