
import { useState } from "react";
import { createContext } from "react";
 const AppContext=createContext()

 const Appprovider=({children})=>{
    const [invoice,setinvoice]=useState({ Result: { fld_brand: "", address: "", inv_date: "", inv_no: "", customer_nam: "", dept_var: "", time_stamp: "", s_no: "", qty: "", rate: ""}})

    return(
        <>
        <AppContext.Provider value={{invoice,setinvoice}}>{children}</AppContext.Provider>
        </>
    )
 }
 export {AppContext,Appprovider}