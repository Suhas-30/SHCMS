import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/shared/Button";
import './Payment.css';
import axios from "axios";

const Payment = () => {
    const navigate = useNavigate(); // Use `useNavigate` for navigation
    const location = useLocation();
    const { car } = location.state || {};
    const [customerID, setCustomerID] = useState("");

    const handlePayment = async (e) => {
        e.preventDefault();
        if (!customerID) {
            alert("Enter a valid Customer ID.");
            return;
        }

        const currentDate = (() => {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${year}-${month}-${day}`;
        })();

        const paymentData = {
            carId: car.CAR_ID,
            customerID: customerID,
            payDate: currentDate,
            price: car.PRICE,
            carName: car.CAR_NAME,
            carModel: car.CAR_MODEL,
            modelYear: car.MODEL_YEAR,
            rn: car.CAR_RN
        };

        try {
            const response = await axios.post("/payment", paymentData);
            console.log("Payment response", response.data);

            // Use `navigate` to programmatically navigate to the purchase details page
            navigate("/purchase-details", { state: { paymentData } });

        } catch (error) {
            console.error("Payment error in sending", error);
            alert("Payment Error");
        }

        console.log("Processing payment with data:", paymentData);
    };

    if (!car) {
        return <p>No car selected.</p>;
    }

    return (
        <div className="payment-container">
            <h1>Payment for {car.CAR_NAME} {car.CAR_MODEL}</h1>
            <p>Year: {car.MODEL_YEAR}</p>
            <p>Price: ${car.PRICE}</p>
            <h2>Enter Your ID</h2>
            <input
                type="text"
                value={customerID}
                onChange={(e) => setCustomerID(e.target.value)}
                placeholder="Customer ID"
                required
            />
            <Button onClick={handlePayment} name="Pay" />
        </div>
    );
};

export default Payment;
