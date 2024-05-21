import axios from "axios";
import { useState } from "react";

function Profitvoice() {
    const [profitvoice, setProfitvoice] = useState([]);
    const [startdate, setStartdate] = useState("");
    const [enddate, setEnddate] = useState("");
    const [showTable, setShowTable] = useState(false);

    const profitvoicedata = async () => {
        try {
            const response = await axios.post('http://localhost:5000/profitvoice', {
                st_date: startdate,
                ed_date: enddate
            });

            const data = response.data;
            const data1 = data.dataBetweenDates;
            console.log(data1);
           
            setProfitvoice(data1);
            setShowTable(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
        <div className="d-flex justify-content-center align-items-center mt-2">
        <div className="p-3 border rounded w-35 max-w-50 text-white">
        <form action="">
            <label htmlFor="st_date">Start Date</label>
            <input
                type="date"
                name="st_date"
                id="st_date"
                value={startdate}
                onChange={(e) => { setStartdate(e.target.value); }}
                className="form-control rounded-2" />
            <label htmlFor="ed_date">End Date</label>
            <input
                type="date"
                name="ed_date"
                id="ed_date"
                value={enddate}
                onChange={(e) => { setEnddate(e.target.value); }}
                className="form-control rounded-2" />

            <button type="button" onClick={profitvoicedata}>Submit</button>
            </form>
            </div>
            </div>
            
            {/* <table className="table border border-2 mt-2">
  <thead>
    <tr>
      <th scope="col">cogs_value</th>
      <th scope="col">dt_date</th>
      <th scope="col">inv_no</th>
      <th scope="col">item_desc</th>
      <th scope="col">location_id</th>
    </tr>
  </thead>
  <tbody className="border border-2">
    {
      profitvoice.map((x,index)=>{
        
        return(
            <tr className="border border-2" key={index}>
      <th className="border border-2" scope="row">{x.cogs_value}</th>
      <td className="border border-2">{x.dt_date}</td>
      <td className="border border-2">{x.inv_no}</td>
      <td className="border border-2">{x.item_desc}</td>
      <td className="border border-2">{x.location_id}</td>
    </tr>
        )

      })
    
}
  </tbody>
    
</table> */}


{showTable && (
                <div className="table-responsive">
                    <table className="table border border-2 mt-2">
                        <thead>
                            <tr>
                                <th scope="col">cogs_value</th>
                                <th scope="col">dt_date</th>
                                <th scope="col">inv_no</th>
                                <th scope="col">item_desc</th>
                                <th scope="col">location_id</th>
                            </tr>
                        </thead>
                        <tbody className="border border-2">
                            {profitvoice.map((x, index) => (
                                <tr className="border border-2" key={index}>
                                    <th className="border border-2" scope="row">{x.cogs_value}</th>
                                    <td className="border border-2">{x.dt_date}</td>
                                    <td className="border border-2">{x.inv_no}</td>
                                    <td className="border border-2">{x.item_desc}</td>
                                    <td className="border border-2">{x.location_id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

      

export default Profitvoice;
