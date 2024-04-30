import React, { useState } from 'react';
import { productContext } from '../context/index';
import axios from 'axios';

const ProductContext = ({children}) => {

    const [data,setData] = useState([])

    const API = 'http://localhost:3000/product'


   async function addProduct (newProduct) {
    await axios.post(API,newProduct)
    }

    async function getProduct () {
        const response = await axios.get(API)
        setData(response.data)
    }


    async function deleteProduct (id) {
        await axios.delete(`${API}/${id}`)
        getProduct()
    }


    const values = {
        addProduct,
        getProduct,
        data,
        deleteProduct
    }
    return (
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContext;