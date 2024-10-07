import {useRef} from "react";
import Button from "../shared/Button";
import axios from "axios";
const PreviousOwnerForm = () => {
    const pNameRef = useRef(null);
    const phRef = useRef(null);
    const emailRef = useRef(null);
    const streetRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const countryRef = useRef(null);

    const handleAddingOwners = async(e) => {
        e.preventDefault(); 
        const pname = pNameRef.current.value;
        const phone = phRef.current.value;
        const email = emailRef.current.value;
        const street = streetRef.current.value;
        const city = cityRef.current.value; 
        const state = stateRef.current.value; 
        const country = countryRef.current.value;

        if (!pname || !phone || !email) {
            alert('Name, phone, and email are required.');
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

export default PreviousOwnerForm;
