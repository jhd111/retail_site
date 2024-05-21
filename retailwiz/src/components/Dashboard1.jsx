// import React from "react";
// import { Link, Outlet, useNavigate,useLocation } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css";

// function Dashboard1(){
//     const location = useLocation();

//     const isDashboardPage = location.pathname === "/dashboard";

//     return (
//         <div className="container-fluid">
//           <div className="row flex-nowrap">
//             <div className="col-auto col-md-2 col-xl-2 px-sm-2 px-0 " style={{backgroundColor:"#f8f8f8"}}>
//               <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
//                 <Link
//                   to="/dashboard"
//                   className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto border-bottom  text-dark text-decoration-none"
//                   style={{ width: "100%" }}
//                 >
//                   <span className="fs-5 fw-bolder d-none d-sm-inline ">
//                     Dashboard
//                   </span>
//                 </Link>
//                 <ul
//                   className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
//                   id="menu"
//                   style={{ width: "100%" }}
//                 >
//                   <li className="w-100 ">
//                     <Link
//                       to="/dashboard" style={{ width: "100%" }}
//                       className="nav-link text-dark px-0 align-middle border-bottom"
//                     >
//                       {/* <i classNameName="fs-4 bi-speedometer2 ms-2"></i> */}
//                       <span className="ms-2 d-none d-sm-inline">Dashboard</span>
//                     </Link>
//                   </li>
//                   <li className="w-100">
//                     <Link
//                       to="/dashboard/inventorylist"
//                       className="nav-link px-0 align-middle text-dark border-bottom"
//                       style={{ width: "100%" }}
//                     >
//                       {/* <i classNameName="fs-4 bi-people ms-2"></i> */}
//                       <span className="ms-2 d-none d-sm-inline">
//                        Sale Management
//                       </span>
//                     </Link>
//                   </li>
//                   <li className="w-100">
//                     <Link
//                       to="/dashboard/category"
//                       className="nav-link px-0 align-middle text-dark border-bottom"
//                       style={{ width: "100%" }}
//                     >
//                       {/* <i classNameName="fs-4 bi-columns ms-2"></i> */}
//                       <span className="ms-2 d-none d-sm-inline">Transactions</span>
//                     </Link>
//                   </li>
//                   <li className="w-100">
//                     <Link
//                       to="/dashboard/profile"
//                       className="nav-link px-0 align-middle text-dark border-bottom"
//                       style={{ width: "100%" }}
//                     >
//                       {/* <i classNameName="fs-4 bi-person ms-2"></i> */}
//                       <span className="ms-2 d-none d-sm-inline">Outstanding</span>
//                     </Link>
//                   </li>
//                   <li className="w-100" >
//                   <Link
//                       className="nav-link px-0 align-middle text-dark border-bottom"
//                       style={{ width: "100%" }}
//                     >
//                       {/* <i classNameName="fs-4 bi-power ms-2"></i> */}
//                       <span className="ms-2 d-none d-sm-inline">Agent Ledger</span>
//                     </Link>
//                   </li>
//                   <li className="w-100" >
//                   <Link
//                       className="nav-link px-0 align-middle text-dark border-bottom"
//                       style={{ width: "100%" }}
//                     >
//                       {/* <i classNameName="fs-4 bi-power ms-2"></i> */}
//                       <span className="ms-2 d-none d-sm-inline">Company Ledger</span>
//                     </Link>
//                   </li>
//                   <li className="w-100" >
//                   <Link
//                       className="nav-link px-0 align-middle text-dark border-bottom"
//                       style={{ width: "100%" }}
//                     >
//                       {/* <i classNameName="fs-4 bi-power ms-2"></i> */}
//                       <span className="ms-2 d-none d-sm-inline">Bank Statement</span>
//                     </Link>
//                   </li>
//                   <li className="w-100" >
//                   <Link
//                       className="nav-link px-0 align-middle text-dark border-bottom"
//                       style={{ width: "100%" }}
//                     >
//                       {/* <i classNameName="fs-4 bi-power ms-2"></i> */}
//                       <span className="ms-2 d-none d-sm-inline">Setting</span>
//                     </Link>
//                   </li>
//                   <li className="w-100" >
//                   <Link
//                       className="nav-link px-0 align-middle text-dark border-bottom"
//                       style={{ width: "100%" }}
//                     >
//                       {/* <i classNameName="fs-4 bi-power ms-2"></i> */}
//                       <span className="ms-2 d-none d-sm-inline">Log Out</span>
//                     </Link>
//                   </li>
                 

//                 </ul>
//               </div>
//             </div>
//             <div className="col-md-10 p-0 m-0 ">
//                 <div className="p-2 d-flex justify-content-center shadow">
//                     <h4>Dashboard</h4>
//                 </div>
//                 <Outlet />
//                 {isDashboardPage && (
//                     <>
//             <div className="row mt-4 ms-2">
//               <div className="col-md-3">
//                 <div className="p-2 d-flex justify-content-center border">
//                   <h4>Box 1</h4>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="p-2 d-flex justify-content-center border">
//                   <h4>Box 2</h4>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="p-2 d-flex justify-content-center border">
//                   <h4>Box 3</h4>
//                 </div>
//               </div>
//             </div>
//             <div className="row  mt-4 ms-2">
//               <div className="col-md-3">
//                 <div className="p-2 d-flex justify-content-center border">
//                   <h4>Box 1</h4>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="p-2 d-flex justify-content-center border">
//                   <h4>Box 2</h4>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="p-2 d-flex justify-content-center border">
//                   <h4>Box 3</h4>
//                 </div>
//               </div>
//             </div>
//             </>
//           )}
//             </div>
            
//           </div>
//         </div>
//       );
// }
// export default Dashboard1


import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const Dashboard1= () => {
    const location = useLocation();
    const [isDashboard, setIsDashboard] = useState(false);
    const [showMenu, setShowMenu] = useState(false); // State to control menu visibility
  
    useEffect(() => {
      setIsDashboard(location.pathname === "/dashboard");
    }, [location]);

    
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
  
    return (
        <div className="container-fluid">
            <div className="row">
               
                <div className="col-2 d-sm-none">
                    <button className="btn btn-link" onClick={toggleMenu}>
                        <i className="bi bi-list fs-4"></i>
                    </button>
                </div>
                {/* Sidebar */}
                <div className={`col-lg-3 col-xl-2 px-sm-2 px-0 ${showMenu ? "d-block" : "d-none"} d-sm-block`} style={{ backgroundColor: "#f8f8f8" }}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
                        <div className="d-flex justify-content-between align-items-center pb-3 mb-1 mt-3 me-auto text-dark">
                            <Link to="/dashboard" className="text-decoration-none">
                                <span className="fs-5 fw-bolder d-none d-sm-inline">Dashboard</span>
                            </Link>
                        </div>
                        {/* Menu items */}
                        <ul className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start" id="menu">
                            <li>
                                <Link to="/dashboard" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-speedometer2 me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/category" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-people me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Category</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/inventorylist" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-columns me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Inventory list</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/customerlist" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-person me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Customer list</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/supplierlist" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-building me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Supplier list</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/payablelist" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-bank me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Payable list</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/receivablelist" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-gear me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Receivable list</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/profitinvoice" className="nav-link text-dark px-0">
                                <i className="fs-4 bi bi-printer me-2 d-sm-inline"></i>
                                    {/* <i className="fs-4 bi-power me-2 d-sm-inline"></i> */}
                                    <span className="d-sm-inline">Profit voice</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/invoiceview" className="nav-link text-dark px-0">
                                <i className="fs-4 bi bi-printer me-2 d-sm-inline"></i>
                                    {/* <i className="fs-4 bi-power me-2 d-sm-inline"></i> */}
                                    <span className="d-sm-inline">Print invoice</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Dashboard and Boxes */}
                <div className="col-lg-9 col-xl-10">
                    <div className="p-2 d-flex justify-content-center shadow">
                        <h4>Dashboard</h4>
                    </div>
                    {isDashboard && (
                        <div className="row mt-4">
                            <div className="col-md-4 mb-3">
                                <div className="p-2 d-flex justify-content-center shadow">
                                    <h4>Box 1</h4>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="p-2 d-flex justify-content-center shadow">
                                    <h4>Box 2</h4>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="p-2 d-flex justify-content-center shadow">
                                    <h4>Box 3</h4>
                                </div>
                            </div>
                        </div>
                    )}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard1;







