import { useRef } from "react";
import Button from "../../components/shared/Button";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './CustomerLogin.css';

const CustomerLogin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { login } = useAuth();
    const navigate = useNavigate();  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            const response = await axios.post('/customer-login', { email, password });

            if (response.status === 200) {
                const customerId = response.data.customerId; 
                login({ email, customerId });
                navigate('/know-details', { state: { email, customerId } });
            }
        } catch (error) {
            console.error('Login failed', error);
            alert("Invalid Credentials");
        }
    };

    return (
        <div className="login-container" id="customer-login">
            <h2 className="login-title">Customer Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <label className="login-label">Email:
                    <input type="email" ref={emailRef} required className="login-input" />
                </label>

                <label className="login-label">Password:
                    <input type="password" ref={passwordRef} required className="login-input" />
                </label>
                <Button type="submit" name="Login" className="login-button">Login</Button>
            </form>
        </div>
    );
}

export default CustomerLogin;
