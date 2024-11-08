import Button from "../../components/shared/Button";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import "./AddCars.css";

const AddCars = () => {
    const formRef = useRef(null);
    const carNameRef = useRef(null);
    const carModelRef = useRef(null);
    const modelYearRef = useRef(null);
    const carRNRef = useRef(null);
    const carPriceRef = useRef(null);
    const previousOwnerIDRef = useRef(null);
    const [carImage, setCarImage] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleImageChange = (e) => {
        setCarImage(e.target.files[0]);
    };

    const handleAddingCars = async (e) => {
        e.preventDefault();

        const carName = carNameRef.current.value;
        const carModel = carModelRef.current.value;
        const modelYear = modelYearRef.current.value;
        const carRN = carRNRef.current.value;
        const carPrice = carPriceRef.current.value;
        const previousOwnerID = previousOwnerIDRef.current.value;

        if (!carName || !carModel || !modelYear || !carRN || !carPrice || !previousOwnerID || !carImage) {
            setErrorMessage('All fields are required, including the image.');
            return;
        }

        const formData = new FormData();
        formData.append('name', carName);
        formData.append('model', carModel);
        formData.append('year', modelYear);
        formData.append('rn', carRN);
        formData.append('price', carPrice);
        formData.append('p_id', previousOwnerID);
        formData.append('image', carImage);  // Add the image file

        try {
            const response = await axios.post('http://localhost:3000/add-car-form', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log(response.data);
            setSuccessMessage('Car added successfully');
            setErrorMessage('');
            setSubmitted(true);
        } catch (error) {
            console.error("Error in adding car details", error);
            setErrorMessage('Failed to add car.');
            setSuccessMessage('');
        }
    };

    useEffect(() => {
        if (submitted) {
            formRef.current.reset();
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
            setSubmitted(false);
            window.scrollTo(0, 0); 
        }
    }, [submitted]);

    return (
        <div className="form-container">
            <h1>Add Car</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <form ref={formRef} onSubmit={handleAddingCars} className="form">
                <label className="form-label">Car Name:
                    <input type="text" ref={carNameRef} required className="form-input" />
                </label>

                <label className="form-label">Car Model:
                    <input type="text" ref={carModelRef} required className="form-input" />
                </label>

                <label className="form-label">Model Year:
                    <input type="text" ref={modelYearRef} required className="form-input" />
                </label>

                <label className="form-label">Car RN:
                    <input type="text" ref={carRNRef} required className="form-input" />
                </label>

                <label className="form-label">Price:
                    <input type="text" ref={carPriceRef} required className="form-input" />
                </label>

                <label className="form-label">Previous Owner ID:
                    <input type="text" ref={previousOwnerIDRef} required className="form-input" />
                </label>

                <label className="form-label">Car Image:
                    <input type="file" onChange={handleImageChange} required className="form-input" />
                </label>

                <Button type="submit" name="Add Car" className="submit-button" />
            </form>
        </div>
    );
};

export default AddCars;
