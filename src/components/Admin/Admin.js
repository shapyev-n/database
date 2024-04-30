import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import "../../styles/Admin.css";
import { Button, TextField } from "@mui/material";
import { productContext } from "../../context";

const Admin = () => {
    const {addProduct} = useContext(productContext)
  const [values, setValues] = useState({
    name: "",
    price: "",
    image: "",
  });
  console.log(values);

  //...spread
  //...rest

  function handleSaveChange () {
    addProduct(values)
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="admin">
          <div className="admin-inputs">
            <TextField
            onChange={(e) => setValues({...values,name:e.target.value})}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
            onChange={(e) => setValues({...values,price:e.target.value})}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Price"
              variant="outlined"
            />
            <TextField
            onChange={(e) => setValues({...values,image:e.target.value})}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="URL"
              variant="outlined"
            />
            <Button onClick={handleSaveChange} sx={{ width: "100%" }} variant="contained">
              Add Product
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
