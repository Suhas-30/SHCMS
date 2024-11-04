import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button";
import './KnowDetails.css'; // Import the CSS file
import { useAuth } from "../../context/AuthProvider";


const KnowDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    // const { email } = location.state || {}; 
    const customerId = user?.customerId;
    const email = user?.email; 

    const goToHome = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div className="know-details-container">
            <h1 className="know-details-title">Your ID</h1>
            <p className="know-details-text"><strong>Email:</strong> {email}</p>
            <p className="know-details-text"><strong>Customer ID:</strong> {customerId}</p>
            <Button onClick={goToHome} className="know-details-button" name="Go Home" />
        </div>
    );
}  

export default KnowDetails;
