"use client"
//1. Import Area
import { MenuItem, Select } from "@mui/material";
import React from "react";

//2. Define Area
 function Home() {
   //2.1 Hook Area
   const [selectedvalue, setSelectedValue] = React.useState('');
   const [stockPrice, setstockPrice] = React.useState('');
   //2.2 Function defination Area
   const handleChange =(pradeep)=>{
    console.log(pradeep.target.value);
     
    fetch('/api/getstockprice').then((res)=>{
      return res.json()
     }).then((data)=>{
        console.log(data);
        console.log(data.price);
        setstockPrice(data.price);
     }).catch((err)=>{

     }).finally(()=>{})

    //console.log('Hello'+pradeep);
   }
  return (
   
      <main >
        <h1>The currunt price of below stock is {stockPrice} </h1>
        <Select value={selectedvalue}  onChange={handleChange}>
          <MenuItem value="idfc">IDFC</MenuItem>
          <MenuItem value="icici">ICICI</MenuItem>
          <MenuItem value="hdfc">HDFC</MenuItem>
        </Select>
      </main>
  )
} 
//3. Export Area 
export default Home;