import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Inventorycategory(){
    const{category}=useParams()

    const[data1,setdata1]=useState([])

    const specificdata=async ()=>{
        // let response =
        //  axios.get("http://localhost:5000/specificdata/"+category)
        // .then(res=>{
        //     let dat=res.data.Result
        //     console.log("inventoryData:", dat);
        //     // dat = dat.replace(/'/g, '"');
        //     const parseddata=Object.entries(dat)
        //     console.log("inventoryData:", parseddata);
        //     setdata1(parseddata)
        let response =await  axios.get("http://localhost:5000/specificdata/"+category)
        const dat =await response.data;
        // console.log(data)
        const jsonString = dat.Result.inventory_repResult
        const jsonData = JSON.parse(jsonString)
        console.log(jsonData)
        setdata1(jsonData)

        }
       
       
        
       
    
   
    useEffect(()=>{
        specificdata()
    },[])

    return(
        <>
        <div class="table-responsive">
     <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Item_desc</th>
          <th scope="col">rate</th>
          <th scope="col">cost</th>
          <th scope="col">alu</th>
        </tr>
      </thead>
      <tbody>
       {
        data1.map((x,index)=>{
            return(
                <>
                <tr key={index}>
                    <td>{x.Item_desc}</td>
                    <td>{x.rate}</td>
                    <td>{x.cost}</td>
                    <td>{x.alu}</td>
                </tr>
                </>
            )
        })
       }
      
      </tbody>
    </table>
    </div>
        </>
    )

}
export default Inventorycategory