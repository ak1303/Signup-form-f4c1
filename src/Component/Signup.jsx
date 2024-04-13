import { useState } from "react"

const Signup = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword]=useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const[emailError,setEmailError]=useState(false);
    const[passError,setPassError]=useState(false);
    const[confirmError,setConfirmError]=useState(false);

    const handleEmail = (e) =>{
        let mail = e.target.value;
        const condition = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(condition.test(mail)){
            console.log("valid")
            setEmailError(false);
        }else{
            setEmailError(true)
        }
        setEmail(mail);
    }

    const handlePassword = (e) =>{
        if((e.target.value).length < 8)setPassError(true);
        else setPassError(false);
        setPassword(e.target.value);
    }

    const confirmHandler = (e) =>{
        if(password===e.target.value)setConfirmError(false);
        else setConfirmError(true);
        setConfirmPassword(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        if(emailError || passError || confirmError)alert("Can’t submit the form")
        else{ 
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            alert('Form submitted successfully');
        }
    }
    console.log("rendered");
    return(
        
        <>
        <div className="container flex justify-center items-center h-screen">
            <form action="" className="w-2/5 flex flex-col gap-y-2">

                <label htmlFor="email">Email:</label>
                <input 
                    className={`${email ?( emailError ? ' border-red-600 outline-red-600' : ' border-2 border-green-600 outline-green-700 '):"border-slate-500 outline-blue-600"} 
                    w-full border rounded-md p-1`}
                    type="email" 
                    name="email" 
                    id="email "
                    value={email}
                    onChange={handleEmail}/> 
                {emailError?<div className=" text-red-700">Invalid email format</div>:""}

                <label htmlFor="password">Password:</label>
                <input 
                    className={`w-full border  rounded-md p-1 
                     ${password ? ( passError ? ' border-red-600 outline-red-600' : ` border-2 border-green-600  outline-green-700`):"border-slate-500 outline-blue-600"} `}
                    type="password" 
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePassword}/>
                {passError ? <div className=" text-red-700">Password must be atleast 8 characters</div>:""}

                <label htmlFor="confirm_password">Confirm Password</label>
                <input 
                    className={`w-full border  rounded-md p-1 
                    ${confirmPassword ? (confirmError ? ' border-red-600 outline-red-600' : ' border-2 border-green-600  outline-green-700'):"border-slate-500 outline-blue-600"}`} 
                    type="password" 
                    name="confirm_password"
                    id="confirm_password"
                    value={confirmPassword}
                    onChange={confirmHandler}/>
                {confirmError ?<div className=" text-red-700">Passwords do not match</div>:""}

                <button onClick={submitHandler} className="bg-blue-700 w-28 text-white p-1 rounded-md my-1 mx-auto block transition-all hover:scale-110 hover:bg-blue-600 " >SignUp</button>
            </form>
        </div>

        </>
    )
}
export default Signup