import { useRef, useState, useEffect } from "react";
import Button from "../../components/shared/Button";
import axios from "axios";
import './PreviousOwner.css';

const PreviousOwnerForm = () => {
    const formRef = useRef(null);
    const pNameRef = useRef(null);
    const phRef = useRef(null);
    const emailRef = useRef(null);
    const streetRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const countryRef = useRef(null);

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleAddingOwners = async (e) => {
        e.preventDefault();
        const pname = pNameRef.current.value;
        const phone = phRef.current.value;
        const email = emailRef.current.value;
        const street = streetRef.current.value;
        const city = cityRef.current.value;
        const state = stateRef.current.value;
        const country = countryRef.current.value;

        if (!pname || !phone || !email) {
            setErrorMessage("Name, phone, and email are required.");
            return;
        }

        const ownerData = {
            name: pname,
            phone: phone,
            email: email,
            address: {
                street: street,
                city: city,
                state: state,
                country: country
            }
        };

        try {
            const response = await axios.post('/previous-owner-form', ownerData);
            console.log(response.data);
            setSuccessMessage("Previous owner added successfully.");
            setErrorMessage("");
            setSubmitted(true);
        } catch (error) {
            console.error('Error adding previous owner:', error);
            setErrorMessage("Failed to add previous owner.");
            setSuccessMessage("");
        }
    };

    useEffect(() => {
        if (submitted) {
            formRef.current.reset();
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
            setSubmitted(false);
            window.scrollTo(0, 0); 
        }
    }, [submitted]);

    return (
        <div className="form-container">
            <h1>Previous Owner Registration</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <form ref={formRef} onSubmit={handleAddingOwners} className="form">
                <label className="form-label">Name:
                    <input type="text" ref={pNameRef} required className="form-input" />
                </label>

                <label className="form-label">Phone:
                    <input type="tel" ref={phRef} required className="form-input" />
                </label>

                <label className="form-label">Email:
                    <input type="email" ref={emailRef} required className="form-input" />
                </label>

                <label className="form-label">Street:
                    <input type="text" ref={streetRef} className="form-input" />
                </label>

                <label className="form-label">City:
                    <input type="text" ref={cityRef} className="form-input" />
                </label>

                <label className="form-label">State:
                    <input type="text" ref={stateRef} className="form-input" />
                </label>

                <label className="form-label">Country:
                    <input type="text" ref={countryRef} className="form-input" />
                </label>
                
                <Button type="submit" name="Add Owner" className="submit-button" />
            </form>
        </div>
    );
};

export default PreviousOwnerForm;
