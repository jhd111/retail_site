import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Customerlist(){

    const[customerlist,setcustomerlist]=useState([])

    const customerdata=async()=>{

        try {
            const response = await axios.get('http://localhost:5000/customer');
            const data= await response.data
            console.log(data)
            const data1=data.result.customer_listResult
            const data2=JSON.parse(data1)
            console.log(data2)
            setcustomerlist(data2)

           
        } catch (error) {
            console.error('Error fetching customer data:', error);
            
        } 

    }

    useEffect(()=>{
        customerdata()
    },[])
    return(
        <>
        <h1>Customer List</h1>
        <div class="table-responsive">
       <table className="table border border-2">
  <thead>
    <tr>
      <th scope="col">item_code</th>
      <th scope="col">location_id</th>
      <th scope="col">Last_pur_sal_date</th>
      <th scope="col">Last_trans_date</th>
      <th scope="col">cust_name
</th>
    </tr>
  </thead>
  <tbody className="border border-2">
    {
      customerlist.map((x,index)=>{

        function datte(a){
          const originalDate=new Date(a)  
          const day = originalDate.getDate().toString().padStart(2, '0');
          const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
          const year = originalDate.getFullYear().toString().padStart(4, '0');
  
          const formattedDate = `${day}-${month}-${year}`;
          return formattedDate
        }
      
        

        return(
            <tr className="border border-2" key={index}>
      <th className="border border-2" scope="row">{x.item_code}</th>
      <td className="border border-2">{x.location_id}</td>
      <td className="border border-2">{datte(x.Last_pur_sal_date)}</td>
      <td className="border border-2">{datte(x.Last_trans_date)}</td>
      <td className="border border-2">{x.cust_name}</td>
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
export default Customerlist