import Button from "../../components/shared/Button";
import { useRef } from "react";
import axios from "axios";
import "./AddCars.css"; // Import the CSS file

const AddCars = () => {
    const carNameRef = useRef(null);
    const carModelRef = useRef(null);
    const modelYearRef = useRef(null);
    const carRNRef = useRef(null);
    const carPriceRef = useRef(null);
    const previousOwnerIDRef = useRef(null);

    const handleAddingCars = async (e) => {
        e.preventDefault();

        const carName = carNameRef.current.value;
        const carModel = carModelRef.current.value;
        const modelYear = modelYearRef.current.value;
        const carRN = carRNRef.current.value;
        const carPrice = carPriceRef.current.value;
        const previousOwnerID = previousOwnerIDRef.current.value;

        // Check for empty fields
        if (!carName || !carModel || !modelYear || !carRN || !carPrice || !previousOwnerID) {
            alert('All fields are required');
            return;
        }

        // Prepare the form data
        const carData = {
            name: carName,
            model: carModel,
            year: modelYear,
            rn: carRN,
            price: carPrice,
            p_id: previousOwnerID
        };

        try {
            const response = await axios.post('http://localhost:3000/add-car-form', carData);
            console.log(response.data);
            alert('Car added successfully');
        } catch (error) {
            console.error("Error in adding car details", error);
            alert('Failed to add car.');
        }
    };

    return (
        <div className="form-container">
            <h1>Add Car</h1>
            <form onSubmit={handleAddingCars} className="form">
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
                    <input type="text" ref={carRNRef} required className="form-input" min="1886" max={new Date().getFullYear()} />
                </label>

                <label className="form-label">Price:
                    <input type="text" ref={carPriceRef} required className="form-input" />
                </label>

                <label className="form-label">Previous Owner ID:
                    <input type="text" ref={previousOwnerIDRef} required className="form-input" />
                </label>

                <Button type="submit" name="Add Car" className="submit-button" />
            </form>
        </div>
    );
};

export default AddCars;
