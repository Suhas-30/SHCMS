import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import "./PurchaseDetails.css";
const PurchaseDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { paymentData } = location.state || {};

    if (!paymentData) {
        return <p>No Purchase details available</p>;
    }

    const goToHome = (e)=>{
        e.preventDefault();
        navigate("/")
    }

    return (
        <>
            <div className="purchase-details-container">
                <h1>Purchase Confirmation</h1>
                <p><strong>Your ID:</strong> {paymentData.customerID}</p>
                <p><strong>Purchase Date:</strong> {paymentData.payDate}</p>
                <p><strong>Car:</strong> {paymentData.carName}</p>
                <p><strong>Model:</strong> {paymentData.carModel}</p>
                <p><strong>Model Year:</strong> {paymentData.modelYear}</p>
                <p><strong>RN:</strong> {paymentData.rn}</p>
                <p><strong>Price:</strong> ${paymentData.price}</p>
                <Button className="custom-button" onClick={goToHome} name="Go Home" />
            </div>
            
        </>
    );
};

export default PurchaseDetails;
