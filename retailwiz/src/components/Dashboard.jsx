// import { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';

// function Dashboard() {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleNavToggle = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <div>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light ms-4 me-4 p-4">
//       <Link className="navbar-brand me-auto" to="/">Navbar</Link>
//       <button className="navbar-toggler" type="button" onClick={handleNavToggle} aria-expanded={isNavOpen ? "true" : "false"}>
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} `} id="navbarSupportedContent">
//         <ul className="navbar-nav dms-auto w-100 justify-content-end gap-4">
//           <li className="nav-item ">
//             <Link className="nav-link" to="#">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/dashboard/category">Category</Link>
//           </li>
//           <li className="nav-item dropdown">
//             <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIsNavOpen(!isNavOpen)}>
//               Summer 
//             </Link>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <Link className='nav-link' to='/dashboard/customerlist'>Customer List</Link>
//               <Link className="dropdown-item" to="#">Another action</Link>
//               <div className="dropdown-divider"></div>
//               <Link className="dropdown-item" to="#">Something else here</Link>
//             </div>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link " to="#">Winter</Link>
//           </li>
//           <li className='nav-item'>
//            <Link className='nav-link' to='#'>Kids</Link>
//           </li>
//           <li className='nav-item'>
//            <Link className='nav-link' to='/dashboard/expenselist'>Expense list</Link>
//           </li>
//           <li className='nav-item'>
//            <Link className='nav-link' to='/dashboard/supplierlist'>Supplierlist</Link>
//           </li>
//           <li className='nav-item'>
//            <Link className='nav-link' to='/dashboard/inventorylist'>Inventory List</Link>
//           </li>
//           <li className='nav-item'>
//            <Link className='nav-link' to='/dashboard/customerlist'>Customer List</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//     <Outlet/>
//     </div>
//   );
// }

// export default Dashboard;





import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ms-4 me-4 p-4">
        {/* <Link className="navbar-brand me-auto" to="/">Navbar</Link> */}
        <button className="navbar-toggler" type="button" onClick={handleNavToggle} aria-expanded={isNavOpen ? "true" : "false"}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} `} id="navbarSupportedContent">
          <ul className="navbar-nav dms-auto w-100 justify-content-center gap-4">
            <li className="nav-item ">
              <Link className="nav-link" to="#" onClick={closeNav}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/selectedcategory/:category" onClick={closeNav}>Category</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleNavToggle}>
                Summer 
              </Link>
              <div className={`dropdown-menu ${isNavOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <Link className='nav-link' to='/dashboard/customerlist' onClick={closeNav}>Customer List</Link>
                <Link className="nav-link" to="/dashboard/payablelist" onClick={closeNav}>Payable list</Link>
                <Link className='nav-link' to='/dashboard/receivablelist' onClick={closeNav}>Receivablelist</Link>
                <Link className='nav-link' to='/dashboard/expenselist' onClick={closeNav}>Expense list</Link>
                <Link className='nav-link' to='/dashboard/supplierlist' onClick={closeNav}>Supplierlist</Link>
                <Link className='nav-link' to='/dashboard/inventorylist' onClick={closeNav}>Inventory List</Link>
                <Link className='nav-link' to='/dashboard/profitinvoice' onClick={closeNav} >Profitvoice</Link>
                <Link  className='nav-link' to='/dashboard/invoiceview' onClick={closeNav}>invoiceview</Link>
                <Link  className='nav-link' to='/dashboard/Printinvoice' onClick={closeNav}>Print invoice</Link>

                {/* <Link className="dropdown-item" to="#" onClick={closeNav}>Another action</Link> */}
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#" onClick={closeNav}>Something else here</Link>
              </div>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/dashboard/payablelist" onClick={closeNav}>Payable list</Link>
            </li> */}
            <li className='nav-item'>
              <Link className='nav-link' to='#' onClick={closeNav}>Kids</Link>
            </li>
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/dashboard/expenselist' onClick={closeNav}>Expense list</Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/dashboard/supplierlist' onClick={closeNav}>Supplierlist</Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/dashboard/inventorylist' onClick={closeNav}>Inventory List</Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/dashboard/customerlist' onClick={closeNav}>Customer List</Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/dashboard/receivablelist' onClick={closeNav}>Receivablelist</Link>
            </li> */}
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;
