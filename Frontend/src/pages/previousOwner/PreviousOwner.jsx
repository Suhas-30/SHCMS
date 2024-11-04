<<<<<<< HEAD
import { useRef, useState } from "react";
import Button from "../../components/shared/Button";
import axios from "axios";
import './PreviousOwner.css';
=======
import {useRef} from "react";
import Button from "../../components/shared/Button";
import axios from "axios";
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
const PreviousOwnerForm = () => {
    const pNameRef = useRef(null);
    const phRef = useRef(null);
    const emailRef = useRef(null);
    const streetRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const countryRef = useRef(null);

<<<<<<< HEAD
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleAddingOwners = async (e) => {
        e.preventDefault();
=======
    const handleAddingOwners = async(e) => {
        e.preventDefault(); 
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
        const pname = pNameRef.current.value;
        const phone = phRef.current.value;
        const email = emailRef.current.value;
        const street = streetRef.current.value;
<<<<<<< HEAD
        const city = cityRef.current.value;
        const state = stateRef.current.value;
=======
        const city = cityRef.current.value; 
        const state = stateRef.current.value; 
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
        const country = countryRef.current.value;

        if (!pname || !phone || !email) {
            alert('Name, phone, and email are required.');
<<<<<<< HEAD
            setErrorMessage("Name, phone, and email are required.");
=======
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
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
<<<<<<< HEAD
            setSuccessMessage("Previous owner added successfully.");
            setErrorMessage("");
        } catch (error) {
            console.error('Error adding previous owner:', error);
            setErrorMessage("Failed to add previous owner.");
            setSuccessMessage("");
        }
    };

    return (
        <div className="form-container">
            <h1>Previous Owner Registration</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <form onSubmit={handleAddingOwners} className="form">
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
=======
            alert('Previous owner added successfully');
        }catch(error){
            console.error('Error adding previous owner:', error);
            alert('Failed to add previous owner.');
        }


        

    }

    return (
        <form onSubmit={handleAddingOwners}>
            <label>Name:
                <input type="text" ref={pNameRef} required />
            </label>

            <label>Phone:
                <input type="tel" ref={phRef} required />
            </label>

            <label>Email:
                <input type="email" ref={emailRef} required />
            </label>

            <label>Street:
                <input type="text" ref={streetRef} />
            </label>

            <label>City:
                <input type="text" ref={cityRef} />
            </label>

            <label>State:
                <input type="text" ref={stateRef} />
            </label>

            <label>Country:
                <input type="text" ref={countryRef} />
            </label>
            <Button type="submit" name="Owner"></Button>
        </form>
    );
}
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e

export default PreviousOwnerForm;
