// import { useState } from "react"
// import axios from 'axios'
// // import soap from 'soap';
// import { useNavigate } from "react-router-dom"

// function Login(){
//     const[username,setusername]=useState('')
//     const[password,setpassword]=useState('')
//     const[auth,setauth]=useState()
//     const[loc,setloc]=useState()
//     const[logionstatus,setlogionstatus]=useState('')
    
//     const navigate=useNavigate()

 
    
//     const handlesubmit = async (event) => {
//         event.preventDefault();
    
//         console.log("Submitting login form with data:", username, password, auth);
    
//         try {
//             const response = await axios.post('http://localhost:5000/login', {
//                 user_id:username,
//                 passwd:password,
//                 auth_code:auth
//             });
//             console.log("Response:", response.data.result);
//             //setlogionstatus(response.data.message);
//             if (password==1 && response.data.message === 'Login Successful'  ) {
//                 setlogionstatus(response.data.message);
//                 navigate('/dashboard');
//             }
//             else{
//                 setlogionstatus('login failed')
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             setlogionstatus('Login Failed');
//         }
//     };
   
   
//     return(
//        <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
//         <div className="p-3 border rounded w-35 max-w-50 bg-dark text-white">
        
//             <h2>Login Page</h2>
//             {logionstatus && <div className="mb-2">{logionstatus}</div>}

//             <form onSubmit={handlesubmit}>
//                 <div className="mb-2">
//                     <label htmlFor="name" className="form-label">Username:</label>
//                     <input type="text" name="name" id="name" autoComplete='off' placeholder="enter username"
//                     onChange={(e)=>{setusername(e.target.value)}}
//                     className="form-control rounded-2"
//                     />
//                 </div>
//                 <div className="mb-2" >
//                   <label htmlFor="passwrd" className="form-label">Password:</label>
//                   <input type="password" name="passwrd" id="passwrd" autoComplete='off' placeholder="enter password"
//                   onChange={(e)=>{setpassword(e.target.value)}}
//                   className="form-control rounded-2"
//                   />
//                 </div>
//                 <div>
//                     <label htmlFor="auth" className="form-label">Auth_code</label>
//                     <input type="text" name="auth" id="auth" autoComplete='off' placeholder="enter Auth_code"
//                     onChange={(e)=>{setauth(e.target.value)}}
//                     className="form-control rounded-2"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="location" className="form-label">Loc</label>
//                     <input type="text" name="location" id="location" autoComplete='off' placeholder="enter location" 
//                     onChange={(e)=>{setloc(e.target.value)}}
//                     className="form-control rounded-2"
//                     />
//                 </div>
//                 <div className="mt-2 ">
//                 <button type="submit"  className="btn btn-success w-100 rounded-2">Login</button>
//                 </div>
//             </form>
//         </div>
//        </div>
//     )
    
// }
// export default Login














import { useState } from "react"
import axios from 'axios'
import "./login.css"
import { useNavigate } from "react-router-dom"
import "./login.css"

function Login(){
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const[auth,setauth]=useState()
    const[loc,setloc]=useState()
    const[logionstatus,setlogionstatus]=useState('')
    
    const navigate=useNavigate()

 
    
    const handlesubmit = async (event) => {
        event.preventDefault();
    
        console.log("Submitting login form with data:", username, password, auth);
    
        try {
            const response = await axios.post('http://localhost:5000/login', {
                user_id:username,
                passwd:password,
                auth_code:auth
            });
            console.log("Response:", response.data.result);
            //setlogionstatus(response.data.message);
            let dat1=await response.data
            const data1=dat1.result.loginResult
            const jsondata=JSON.parse(data1)
            console.log("jsondata",jsondata)
            let d2=jsondata[0].auth_key
             console.log(d2)
            if (password==d2 && response.data.message === 'Login Successful'  ) {
                setlogionstatus(response.data.message);
                navigate('/dashboard');
            }
            else{
                setlogionstatus('login failed')
            }
        } catch (error) {
            console.error("Error:", error);
            setlogionstatus('Login Failed');
        }
    };
   
   
    return(
       <div className="d-flex justify-content-center align-items-center vh-100 bg_s">
         
        <div className="p-4 border rounded wdith_40 bg_w" >
         <div className="p-2 border-bottom rounded mb-4 bg_a childDiv" >
            <h2 className="mb-2 fs-6">Please Sign In</h2>
            </div>
            <div>
            {logionstatus && <div className="mb-2">{logionstatus}</div>}

            <form onSubmit={handlesubmit}>
                <div className="mb-4">
                    {/* <label htmlFor="name" classNameName="form-label">Username:</label> */}
                    <input type="text" name="name" id="name" size="30" autoComplete='off' placeholder="Enter Username"
                    onChange={(e)=>{setusername(e.target.value)}}
                    className="form-control rounded-2"
                    />
                </div>
                <div className="mb-4" >
                  {/* <label htmlFor="passwrd" classNameName="form-label">Password:</label> */}
                  <input type="password" name="passwrd" id="passwrd" autoComplete='off' placeholder="Enter Password"
                  onChange={(e)=>{setpassword(e.target.value)}}
                  className="form-control rounded-2"
                  />
                </div>
                <div className="mb-4">
                    {/* <label htmlFor="auth" classNameName="form-label">Auth_code</label> */}
                    <input type="text" name="auth" id="auth" autoComplete='off' placeholder="Enter Authcode"
                    onChange={(e)=>{setauth(e.target.value)}}
                    className="form-control rounded-2"
                    />
                </div>
                <div className="mb-4">
                    {/* <label htmlFor="location" classNameName="form-label">Loc</label> */}
                    <input type="text" name="location" id="location" autoComplete='off' placeholder="Enter Location" 
                    onChange={(e)=>{setloc(e.target.value)}}
                    className="form-control rounded-2"
                    />
                </div>
                <div className="mt-4 ">
                <button type="submit"  className="btn btn-primary w-100 rounded-2">Login</button>
                </div>
            </form>
        </div>
       </div>
       </div>
       
    )
    
}
export default Login




































































