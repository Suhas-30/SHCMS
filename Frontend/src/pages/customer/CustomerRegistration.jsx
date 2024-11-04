import { useRef, useState } from "react";
import Button from "../../components/shared/Button";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './CustomerRegistration.css';

const CustomerRegistration = () => {
    const cuNameRef = useRef(null);
    const cuPhRef = useRef(null);
    const cuEmailRef = useRef(null);
    const cuStreetRef = useRef(null);
    const cuCityRef = useRef(null);
    const cuStateRef = useRef(null);
    const cuCountryRef = useRef(null);
    const cuPasswordRef = useRef(null);

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isRegistered, setIsRegistered] = useState(false); // New state to track registration status

    const navigate = useNavigate();

    const handleRegistrationCu = async (e) => {
        e.preventDefault();
        const cuName = cuNameRef.current.value;
        const cuPhone = cuPhRef.current.value;
        const cuEmail = cuEmailRef.current.value;
        const cuStreet = cuStreetRef.current.value;
        const cuCity = cuCityRef.current.value;
        const cuState = cuStateRef.current.value;
        const cuCountry = cuCountryRef.current.value;
        const cuPassword = cuPasswordRef.current.value;

        if (!cuName || !cuPhone || !cuEmail || !cuStreet || !cuState || !cuCountry || !cuPassword) {
            setErrorMessage("All fields are required");
            return;
        }

        const custoData = {
            name: cuName,
            phone: cuPhone,
            email: cuEmail,
            password: cuPassword,
            address: {
                street: cuStreet,
                city: cuCity,
                state: cuState,
                country: cuCountry
            }
        };

        try {
            const response = await axios.post('/customer-reg', custoData);
            setSuccessMessage(`Registration is successful. Your ID: ${response.data.data.id}`);
            setErrorMessage("");
            setIsRegistered(true); // Mark as registered
        } catch (error) {
            setErrorMessage("Registration has Failed!");
            setSuccessMessage("");
        }
    };

    const handleButtonClick = () => {
        // Navigate to login page if registered
        if (isRegistered) {
            navigate('/customer-login'); 
        } else {
            // No action needed, form submission is handled above
        }
    };

    return (
        <div className="registration-container" id="customer-registration">
            <h1 className="registration-title">Customer Registration</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <form onSubmit={handleRegistrationCu} className="registration-form">
                <label className="form-label">Name:
                    <input type="text" ref={cuNameRef} required className="form-input" />
                </label>

                <label className="form-label">Phone:
                    <input type="tel" ref={cuPhRef} required className="form-input" />
                </label>

                <label className="form-label">Email:
                    <input type="email" ref={cuEmailRef} required className="form-input" />
                </label>

                <label className="form-label">Street:
                    <input type="text" ref={cuStreetRef} className="form-input" />
                </label>

                <label className="form-label">City:
                    <input type="text" ref={cuCityRef} className="form-input" />
                </label>

                <label className="form-label">State:
                    <input type="text" ref={cuStateRef} className="form-input" />
                </label>

                <label className="form-label">Country:
                    <input type="text" ref={cuCountryRef} className="form-input" />
                </label>

                <label className="form-label">Password:
                    <input type="password" ref={cuPasswordRef} required className="form-input" />
                </label>

                <Button 
                    type="button" 
                    name={isRegistered ? "Go to Login" : "Register"} 
                    className="register-button" 
                    onClick={isRegistered ? handleButtonClick : handleRegistrationCu} 
                />
            </form>
        </div>
    );
};

export default CustomerRegistration;
