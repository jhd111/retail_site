import axios from "axios"
import { useState } from "react"

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AppContext } from "./Appprovider";

function Invoiceview(){
   
     const {setinvoice}=useContext(AppContext)

     const[invoiceno,setinvoiceno]=useState()
     const[deptvar,setdeptvar]=useState()
     const[status,setstatus]=useState()
     const[locid,setlocid]=useState()
     
     const navigate=useNavigate()

     const Invoiceviewdata=async()=>{
        try {
            
            const response=await axios.post('http://localhost:5000/invoiceviewdata',{
                inv_no:invoiceno,
                dept_var:deptvar,
                status:status,
                loc_id:locid
    
            })
            const data=await response.data
             

            console.log(data)
            setinvoice(data)

            navigate('/dashboard/Printinvoice')
        } catch (error) {
            console.log(error)
        }
     }

    
       return(
        <>
        <div className="d-flex justify-content-center align-items-center  mt-2 ms-4">
        <div className="p-3 border border-2 rounded w-35 max-w-50 text-white">
           <form >
            <div>
            <label htmlFor="invoiceno" className="form-label">invoice_no</label>
            <input type="number" name="invoiceno" id="invoiceno"  placeholder="enter invoice_no "
            className="form-control rounded-2"
            onChange={(e)=>{setinvoiceno(e.target.value)}}
            />
            </div>
              <label htmlFor="deptvar" className="form-label">deptvar</label>
            <input type="number" name="deptvar" id="deptvar" placeholder="enter dept_var"
            className="form-control rounded-2"
            onChange={(e)=>{setdeptvar(e.target.value)}}
            />
                <label htmlFor="status" className="form-label">status</label>
            <input type="number" name="status" id="status" placeholder="enter status"
            className="form-control rounded-2"
            onChange={(e)=>{setstatus(e.target.value)}}
            />
                <label htmlFor="locid" className="form-label">status</label>
            <input type="number" name="locid" id="locid" placeholder="enter loc_id"
            className="form-control rounded-2"
            onChange={(e)=>{setlocid(e.target.value)}}
            />
           </form>
           <div className="mt-2">
           <button type="button" className="btn btn-success w-100" onClick={Invoiceviewdata}>Success</button>
           </div>
           

        </div>
        </div>
            
      
      

        </>
    )
}
export default Invoiceview
