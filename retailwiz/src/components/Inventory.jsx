import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Inventorylist(){
     
    const[inventory,setinventory]=useState([])

     const inventorydata=async()=>{
        try {
            const response=await axios.get('http://localhost:5000/inventory')
            const data= await response.data
            const data1=data.Result.inventory_repResult
            // console.log(data1)
            const jsondata=JSON.parse(data1)
            console.log(jsondata)
            setinventory(jsondata)
    
        } catch (error) {
            console.log(error)
        }
     }
     useEffect(()=>{
        inventorydata()
     },[])

    return(
        <>
        <div class="table-responsive">
       <table className="table border border-2">
  <thead>
    <tr>
      <th scope="col">Item_desc</th>
      <th scope="col">alu</th>
      <th scope="col">catagory</th>
      <th scope="col">cost</th>
      <th scope="col">item_code</th>
    </tr>
  </thead>
  <tbody className="border border-2">
    {
      inventory.map((x,index)=>{
        
        return(
            <tr className="border border-2" key={index}>
      <th className="border border-2" scope="row">{x.Item_desc}</th>
      <td className="border border-2">{x.alu}</td>
      <td className="border border-2">{x.catagory}</td>
      <td className="border border-2">{x.cost}</td>
      <td className="border border-2">{x.item_code}</td>
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

export default Inventorylist