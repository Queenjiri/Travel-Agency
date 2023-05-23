import {useState} from 'react'

const Login =()=>{
    const [userName, setUserName] = useState(null)
    const [passWord, setPassWord] = useState(null)
  
const handleLogin=(e)=>{
const{id,value}= e.target;
    if(id === "userName"){
     setUserName(value);
      }

    if(id === "passWord"){
    setPassWord(value);
    }

   }


    const handleBtn=()=>{
        console.log(userName, passWord);
    }


  return (


    <div className="login">
          <h1 class="login-h1">Welcome!</h1>
          <h2 class="login-h2">Sign in to continue</h2>

          <div className="login-forms">
            <div>
            <input type="text" value={userName} placeholder="Username"  onChange={(e)=>handleLogin(e)}></input>
          </div>
          <div>
            <input type="password" value={passWord} placeholder="Password" onChange={(e)=>handleLogin(e)}></input>
          </div>

          <div class="btn">
            <button onClick={()=>handleBtn()}>Login</button>
          </div>


          <div className="footer-writeup">
           <p className="foot-text">Don't have an account?</p>
   
            <p  className="text-sign">Sign up</p>
  
    </div>  
          </div>
    </div>
  )
}

export default Login