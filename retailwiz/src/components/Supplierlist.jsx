
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function  Supplierlist(){

    const[supplierlist,setsupplierlist]=useState([])

    const supplierdata=async()=>{

        try {
            const response = await axios.get('http://localhost:5000/supplier');
            const data= await response.data
            // console.log(data)
            const data1=data.result.supplier_listResult
            const data2=JSON.parse(data1)
            console.log(data2)
            setsupplierlist(data2)

           
        } catch (error) {
            console.error('Error fetching customer data:', error);
            
        } 

    }

    useEffect(()=>{
        supplierdata()
    },[])
    return(
        <>
        <h1>Supplier List</h1>
        <div class="table-responsive">
       <table className="table border border-2">
  <thead>
    <tr>
      <th scope="col">cust_code</th>
      <th scope="col">cust_name</th>
      <th scope="col">cust_bal</th>
      <th scope="col">Last_trans_date</th>
      <th scope="col">contact_person</th>
    </tr>
  </thead>
  <tbody className="border border-2">
    {
      supplierlist.map((x,index)=>{
        
        return(
            <tr className="border border-2" key={index}>
      <th className="border border-2" scope="row">{x.cust_code}</th>
      <td className="border border-2">{x.cust_name}</td>
      <td className="border border-2">{x.cust_bal}</td>
      <td className="border border-2">{x.Last_trans_date}</td>
      <td className="border border-2">{x.contact_person}</td>
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
export default Supplierlist