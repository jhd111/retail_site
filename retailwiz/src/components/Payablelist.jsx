import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Payablelist(){

    const[payablelist,setpayablelist]=useState([])

    const payabledata=async ()=>{
        const response=await axios.get('http://localhost:5000/payaable')
        const data=await response.data
        const data1= data.result.payable_listResult
        const jsondata=JSON.parse(data1)
        console.log(jsondata)

        setpayablelist(jsondata)
    }
    useEffect(()=>{
        payabledata()
    },[])

    return(
        <>
        <h2>Payable list</h2>
        <div class="table-responsive">
        <table className="table  border border-2">
  <thead>
    <tr>
      <th scope="col">cust_bal</th>
      <th scope="col">cust_code</th>
      <th scope="col">cust_name</th>
      <th scope="col">sale_tax_reg</th>
      <th scope="col">discount</th>
    </tr>
  </thead>
  <tbody className="border border-2">
    {
      payablelist.map((x,index)=>{
        
        return(
            <tr className="border border-2" key={index}>
      <th className="border border-2" scope="row">{x.cust_bal}</th>
      <td className="border border-2">{x.cust_code}</td>
      <td className="border border-2">{x.cust_name}</td>
      <td className="border border-2">{x.sale_tax_reg}</td>
      <td className="border border-2">{x.discount}</td>
    </tr>
        )

      })
    
}
  </tbody>
    
</table>
</div>
        </>
    )
}
export default Payablelist