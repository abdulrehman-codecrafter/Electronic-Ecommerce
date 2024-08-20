import { Button } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster,toast } from "sonner";
import {auth} from "../../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";


const initialState = { email: "", password: "" };
export default function Login() {
  const [state, setState] = useState(initialState);
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()
  const handleChange = (e) => setState((preState) => ({ ...preState, [e.target.name]: e.target.value }));

  const handleSubmit= async ()=>{
    event.preventDefault()
    const {email,password}=state
    if(!email || !password ) return toast.error("Fill all credentials ")
    setIsLoading(true)
    try{
      const userCredential=await signInWithEmailAndPassword(auth,email,password)
      navigate("/")
    } catch (error){
      if(error.code==="auth/invalid-credential") return toast.error("Invalid email or password")
    } finally{
      setIsLoading(false)
    }
  }
  return (
    <>
      <Toaster richColors position="bottom-right" />
      <div className="auth-container">
        <div className="auth-form">
          <h1>Login</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="input-group mb-3 px-1">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=""
                onChange={handleChange}
                value={state.email}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group mb-3 px-1">
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                onChange={handleChange}
                value={state.password}
              />
              <label htmlFor="password">Password</label>
            </div>

            <Button
              loading={isLoading}
              onClick={handleSubmit}
              className="submit-btn"
            >
              Login
            </Button>
          </form>
          <p className=" mt-2 text-center">
            Don't have an account ? <Link className="text-decoration-none" to="/auth/register"> Register</Link>
          </p>
        </div>
      </div>
    </>
  );
}
