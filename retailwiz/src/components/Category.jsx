// import axios from "axios"
// import { useEffect } from "react"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"
// import './category.css'


// function Category() {

//   const [categorydata, setcategorydata] = useState([])

//   const navigat = useNavigate()

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/dashboard/category');
//       const data = await response.data;
//       console.log(data)
//       const jsonString = data.result.cat_listResult;
//       // console.log(jsonString)
//       const jsonData = JSON.parse(jsonString);
//       console.log(jsonData)
//       setcategorydata(jsonData);
//       //const data=await response.data
//       //const data1=data.result.cat_listResult


//     } catch (error) {
//       console.error('Error:', error);

//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, [])

//   // function handleselect() {
//   //   return navigat('/dashboard/category/detail')
//   // }


//   return (
//     <>
//       {/* {categorydata} */}
//       <div className="container">
//         <div className="row">
//           {/* <div className="col-md-12"> */}
//           <div >
//             {
//               categorydata.map((x, index) => {
//                 return (

//                   <div className="col-md-4 mb-4" key={index}>
//                     <div className="card" style={{ width: '18rem' }}>
//                       <img src="..." className="card-img-top" alt="..." />
//                       <div className="card-body">
//                         <h5 className="card-title">Card title</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <Link to={`/dashboard/selectedcategory/` + x.item_desc} className="btn btn-success widthh hovr">{x.item_desc}</Link>
//                       </div>
//                     </div>





//                   </div>
//                 )
//               })
//             }
//           </div>
//           {/* <table className="table border border-3 rounded-3 mt-2 ">
//               <thead className="border border-3" >
//                 <tr>
//                   <th scope="col-4"><h1>Category List</h1></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {categorydata &&
//                   categorydata.map((x, index) => (
//                     <tr key={index}>
//                       {/* <td> <h6>{x.item_desc} </h6></td> */}

//           {/* <td> 
//                         <Link to={`/dashboard/selectedcategory/`+x.item_desc} className="btn btn-success widthh hovr">{x.item_desc}</Link>
//                          {/* <button type="button" className="btn btn-success widthh hovr" onClick={handleselect}>{x.item_desc}</button> */}
//           {/* </td> */}
//           {/* </tr>
//                   ))}
//               </tbody>
//             </table>  */}
//         </div>
//       </div>
//       {/* </div> */}
//     </>
//   )
// }
// export default Category














import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './category.css';
// import imgee from "./imgee"

function Category() {
  const [categorydata, setcategorydata] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/dashboard/category');
      const data = response.data;
      const jsonString = data.result.cat_listResult;
      const jsonData = JSON.parse(jsonString);
      setcategorydata(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="container mt-2">
      <div className="row">
        {categorydata.map((category, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://edenrobe.com/cdn/shop/files/23_M_MenWaistCoatSuit_EMTPCS22-017_2_73b16e10-9884-4720-a65d-8aa546b79915_375x_crop_center.jpg?v=1702120489" className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <h5 className="card-title">{category.item_desc}</h5> */}
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <Link to={`/dashboard/selectedcategory/${category.item_desc}`} className="btn btn-success widthh hovr">{category.item_desc}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
