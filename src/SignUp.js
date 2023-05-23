import {useState} from 'react';
import './forms.css';



function SignUp(){

    const [fullName, setFullName]  = useState(null);
    const [email, setEmail] = useState(null);
    // const [number,setNumber] = useSate(null);
    const [password, setPassWord] = useState(null);
    
    
    const handleChange=(e)=>{
        const {id, value} = e.target;
        if(id === "fullName"){
            setFullName(value);
        }
    
        if(id === "Email"){
           setEmail(value);
        } 
    
        // if(id ==="Number"){
        //     setNumber(value);
        // }
        if(id === "PassWord"){
            setPassWord(value);
        }
    }
       
const handleSubmit=()=>{
    console.log(fullName,email,password)
}



    return(
        
        <div className ="form">
           
          
           <div className="form-container">
            <div className="username">
               
            <input type="text" id="firstName" value={fullName} onChange={(e)=>handleChange(e)} placeholder="Full Name"/>
        </div>
       
        <div className="email">
           
            <input type="email" id="email" value={email} onChange={(e)=> handleChange(e)}placeholder="Email"/>
        </div>

        {/* <div className="number">
            <input type="number" id="number"  value={number} onChange={(e)=>handleChange(e)} placeholder="PhoneNumber"></input>
        </div> */}

        <div className="password">
         
          <input type="password" id="pwd" value={password} onChange={(e)=>handleChange(e)} placeholder="Password"/>
        </div>

        <div className ="reg-btn">
            <button onClick={()=>handleSubmit()} type="submit" href=".Forms/Login">Register</button>
        </div>

    <div className="footer-writeup">
    <p className="foot-text">Already have an account?</p>
   
    <p  className="text-sign">Sign in</p>
  
    </div>

        </div>
    
      
        </div>

        
    )
}



   




export default SignUp;