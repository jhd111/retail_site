import { useContext } from "react";
import { AppContext } from "./Appprovider";

function Printinvoice(){
    const{invoice}=useContext(AppContext)

    // console.log('Invoice data:', invoice);

    const handlePrint = () => {
        window.print();
    };
   
    const convertToWords = (number) => {
        const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
        const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
        const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
        const scales = ['', 'Thousand', 'Million', 'Billion'];
    
        const toWords = (num, scaleIndex) => {
            if (num === 0) return '';
            const scale = scales[scaleIndex];
            const hundreds = Math.floor(num / 100);
            const tensUnits = num % 100;
    
            let result = '';
            if (hundreds > 0) {
                result += `${units[hundreds]} Hundred `;
            }
    
            if (tensUnits > 0) {
                if (tensUnits < 10) {
                    result += `${units[tensUnits]} `;
                } else if (tensUnits < 20) {
                    result += `${teens[tensUnits - 10]} `;
                } else {
                    const tensDigit = Math.floor(tensUnits / 10);
                    const unitsDigit = tensUnits % 10;
                    result += `${tens[tensDigit]} ${units[unitsDigit]} `;
                }
            }
    
            return `${result}${scale} `;
        };
    
        if (number === 0) return 'Zero';
    
        let words = '';
        let scaleIndex = 0;
    
        while (number > 0) {
            const numToProcess = number % 1000;
            if (numToProcess > 0) {
                words = toWords(numToProcess, scaleIndex) + words;
            }
    
            scaleIndex++;
            number = Math.floor(number / 1000);
        }
    
        return words.trim();
    };
    
    // Inside Printinvoice component
    const amountInWords = convertToWords(invoice.Result.qty * invoice.Result.rate);


    return (
        < div className="ms-3 me-4">
        
        <div className="container ">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mt-4">
                <h1>{invoice.Result.fld_brand}</h1>
                </div>
                <div className="col-md-12 d-flex justify-content-center mt-4">
                <h6>{invoice.Result. address}</h6>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between ">
                    <div >
                       <h5>Sales</h5>
                    </div>
                    <div>
                        Date:{invoice.Result.inv_date}
                    </div>
                  
                </div>
               <hr /> 
            </div>
            <div className="row">
               < div className="col-md-12 d-flex justify-content-between">
                   <h5>Inv No:{invoice.Result.inv_no}</h5>
                   <h5>Prepaired by :{invoice.Result.sales_man}</h5>
               </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                    <h6>Customer:{invoice.Result.customer_nam}</h6>
                    <div className="d-flex flex-column">
                    <h6>Payment Type::{invoice.Result.customer_nam}</h6>
                    <h6>Wk No:{invoice.Result.dept_var}</h6>
                    <h6>Printing Date & Tim:{invoice.Result.time_stamp}</h6>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12 ">
                    <div className="table-responsive">
            <table className="table ">
  <thead >
    <tr >
        
      <th scope="colSpan">Sno</th>
      <th scope="colSpan">Code</th>
      <th scope="colSpan">Product & Description</th>
     
      <th scope="colSpan">Quantity</th>
      <th scope="colSpan"> Total-Rate</th>
      <th scope="colSpan" >Grand-Amount</th>
        </tr>
  </thead>
  <tbody>
    <tr>
      
      <td >{invoice.Result.s_no}</td>
      <td></td>
      <td></td>
      <td>{invoice.Result.qty}</td>
      <td>{invoice.Result.rate}</td>
      <td>{invoice.Result.qty*invoice.Result.rate}</td>
    </tr>
  </tbody>
</table>
</div>
              <hr />
            </div>
            </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-between mt-2">
                <div className="d-flex flex-column">
                    <h6>Amount in words :{amountInWords}</h6>
                    <h6>Previous Balance :{invoice.Result.prv_bal}</h6>
                    <h6>Current Bill :{invoice.Result.qty*invoice.Result.rate}</h6>
                    <hr />
                    <h6>Transfer to Ledger :{invoice.Result.prv_bal - (invoice.Result.qty*invoice.Result.rate)}</h6>
                </div>
                      <div className="d-flex flex-column">
                        <h6>G.Total:{invoice.Result.qty*invoice.Result.rate}</h6>
                        <h6>Discount:{invoice.Result.discout}</h6>
                        <h6>S.Tax :</h6>
                        <hr />
                        <h6>Net Total:{(invoice.Result.qty*invoice.Result.rate)-invoice.Result.discout}</h6>
                        <span><hr /></span> 
                      <span ><hr /></span>   
                      </div>
            </div>

          </div>

        <div className="row">
            <div className="col-md-12 d-flex justify-content-between">
                <div> <hr /> <h5>Thanx for Shopping</h5> </div>
                <div><h5>Singnature:</h5>  <hr /></div>

            </div>

        </div>






        <div className="row">
                    <div className="col-md-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={handlePrint}>Print</button>
                    </div>
                </div>
        
        
        
        </div>

            
        
        </div>
    )
}
export default Printinvoice