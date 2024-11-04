<<<<<<< HEAD
import Button from "../../components/shared/Button";
import { useRef } from "react";
import axios from "axios";
import "./AddCars.css"; // Import the CSS file

const AddCars = () => {
=======
import Button from "../../components/shared/Button"
import { useRef  } from "react";
import axios from "axios";
const AddCars = ()=>{

>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
    const carNameRef = useRef(null);
    const carModelRef = useRef(null);
    const modelYearRef = useRef(null);
    const carRNRef = useRef(null);
    const carPriceRef = useRef(null);
    const previousOwnerIDRef = useRef(null);
<<<<<<< HEAD
    
    const handleAddingCars = async (e) => {
=======


    const handleAddingCars = async(e)=>{
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
        e.preventDefault();

        const carName = carNameRef.current.value;
        const carModel = carModelRef.current.value;
<<<<<<< HEAD
        const modelYear = modelYearRef.current.value;
=======
        const modelyear = modelYearRef.current.value;
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
        const carRN = carRNRef.current.value;
        const carPrice = carPriceRef.current.value;
        const previousOwnerID = previousOwnerIDRef.current.value;

<<<<<<< HEAD
        // Check for empty fields
        if (!carName || !carModel || !modelYear || !carRN || !carPrice || !previousOwnerID) {
=======
        if(!carName || !carModel || !modelyear|| !carRN || !carPrice || !previousOwnerID){
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
            alert('All fields are required');
            return;
        }

<<<<<<< HEAD
        // Prepare the form data
        const carData = {
            name: carName,
            model: carModel,
            year: modelYear,
=======
        const carData = {
            name: carName,
            model: carModel,
            year: modelyear,
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
            rn: carRN,
            price: carPrice,
            p_id: previousOwnerID
        };
<<<<<<< HEAD
                
        try {
            const response = await axios.post('http://localhost:3000/add-car-form', carData);

            // const response = await axios.post('/add-car-form', carData, {
            //     headers: { 'Content-Type': 'multipart/form-data' },
            // });
            // console.log(response.data);
            console.log(carData);
            alert('Car added successfully');
        } catch (error) {
            console.error("Error in adding car details", error);
            alert('Failed to add cars.');
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

                <Button type='submit' name="Add Car" className="submit-button" />
            </form>
        </div>
    );
};

export default AddCars;
=======

        try{
            const response = await axios.post('/add-car-form', carData);
            console.log(response.data);
            alert('Car added successfully');

        }catch(error){
            console.error("Error in adding car details");
            alert('Failed to add cars.');
        }

    }
    return(
        <>
        <form onSubmit={handleAddingCars}>

            <label>Car Name:
                <input type="text" ref={carNameRef} required />
            </label>

            <label>Car Model:
                <input type="text" ref={carModelRef} required />
            </label>

            <label>Model Year:
                <input type="text" ref={modelYearRef} required />
            </label>

            <label>Car RN:
                <input type="text" ref={carRNRef} required min="1886" max={new Date().getFullYear()}/>
            </label>

            <label>Price:
                <input type="text" ref={carPriceRef} required />
            </label>

            <label>Previous Owner ID:
                <input type="text" ref={previousOwnerIDRef} required />
            </label>

            <Button type='submit' name = "Car"></Button>
        </form>
        </>
    )
}

export default AddCars;
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
