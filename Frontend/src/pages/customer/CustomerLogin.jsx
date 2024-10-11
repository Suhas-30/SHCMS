import { useRef } from "react"
import Button from "../../components/shared/Button";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CoustomerLogin = ()=>{
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        try{
            const response = await axios.post('/customer-login', {email, password});

            if(response.status === 200){
                login();
                navigate('/');
            }
        }catch(error){
            console.error('Login failed', error);
            alert("Invalid Credentials");
        }
    }

    return(


        <>
            <form onSubmit={handleSubmit}>
            <label>Email:
            <input type="text" ref={emailRef} required />
            </label>

            <label>Password:
            <input type="text" ref={passwordRef} />
            </label>
            <Button type="submit" name="click">Login</Button>
            </form>
        </>
    )
}

export default CoustomerLogin;