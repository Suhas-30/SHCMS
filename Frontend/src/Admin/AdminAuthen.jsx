import { useRef } from "react";
import Button from "../components/shared/Button";
import { useNavigate } from "react-router-dom";
import './AdminAuthen.css'; // Import the CSS file

const AdminAuthen = () => {
    const userRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userName = userRef.current.value;
        const password = passwordRef.current.value;
        
        const admin = "admin";
        const pass  = "admin@123";

        if (
            userName === admin &&
            password === pass
        ) {
            navigate("/previous-owner-form");
        } else {
            alert("Invalid admin credentials");
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-heading">Admin Login</h2> {/* Added heading */}
            <form onSubmit={handleSubmit}>
                <label>
                    UserName:
                    <input type="text" ref={userRef} required />
                </label>

                <label>
                    Password:
                    <input type="password" ref={passwordRef} required />
                </label>

                <Button type="submit" name="Submit" />
            </form>
        </div>
    );
};

export default AdminAuthen;
