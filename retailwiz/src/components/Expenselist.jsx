import axios from "axios"
import { useState } from "react"


function Expenselist(){

    const [expenselist,setexpenselist]=useState([])

    const expensedata=async ()=>{

        const response=await axios.get('http://localhost:5000/expense')
        const data=await response.data

    }
     
    return(
        <>
        asdf
        </>
    )
}
export default Expenselist