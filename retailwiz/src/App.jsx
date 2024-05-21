
// import './App.css'
import { Appprovider } from './components/Appprovider'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Category from './components/Category'
// import Detail from './components/Detail'
import Inventorylist from './components/Inventory'
import Customerlist from './components/Customerlist'
import Supplierlist from './components/Supplierlist'
import Expenselist from './components/Expenselist'

import Payablelist from './components/Payablelist'

import Receivablelist from './components/Receiablelist'

import Profitvoice from './components/Profitinvoice'
import Invoiceview from './components/Invoiceview'

import Printinvoice from './components/Printinvoice'

import Inventorycategory from "./components/Inventorycategory"
import Dashboard1 from "./components/Dashboard1"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard1/>}>
        
        <Route path='/dashboard/category' element={<Category/>}> </Route>
         
         <Route path='/dashboard/selectedcategory/:category' element={<Inventorycategory/>}></Route>

         <Route path='/dashboard/inventorylist' element={<Inventorylist/>}></Route>

         <Route path='/dashboard/customerlist' element={<Customerlist/>}></Route>
         
         <Route path='/dashboard/supplierlist' element={<Supplierlist/>}></Route>

         <Route path='/dashboard/expenselist' element={<Expenselist/>}></Route>

         <Route path='/dashboard/payablelist' element={<Payablelist/>}></Route>

         <Route path='/dashboard/receivablelist' element={<Receivablelist/>}> </Route>

         <Route path='/dashboard/profitinvoice' element={<Profitvoice/>}></Route> 

        <Route path='/dashboard/invoiceview' element={<Appprovider><Invoiceview/></Appprovider> }></Route>
        <Route path='/dashboard/Printinvoice' element={<Appprovider><Printinvoice/></Appprovider> }></Route>


      </Route>
    </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
