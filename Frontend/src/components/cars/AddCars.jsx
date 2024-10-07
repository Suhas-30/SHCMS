import Button from "../shared/Button"
import { useRef  } from "react";
import axios from "axios";
const AddCars = ()=>{

    const carNameRef = useRef(null);
    const carModelRef = useRef(null);
    const modelYearRef = useRef(null);
    const carRNRef = useRef(null);
    const carPriceRef = useRef(null);
    const previousOwnerIDRef = useRef(null);


    const handleAddingCars = async(e)=>{
        e.preventDefault();

        const carName = carNameRef.current.value;
        const carModel = carModelRef.current.value;
        const modelyear = modelYearRef.current.value;
        const carRN = carRNRef.current.value;
        const carPrice = carPriceRef.current.value;
        const previousOwnerID = previousOwnerIDRef.current.value;

        if(!carName || !carModel || !modelyear|| !carRN || !carPrice || !previousOwnerID){
            alert('All fields are required');
            return;
        }

        const carData = {
            name: carName,
            model: carModel,
            year: modelyear,
            rn: carRN,
            price: carPrice,
            p_id: previousOwnerID
        };

        try{
            const response = await axios.post('/add-car-form', carData);
            console.log(response.data);
            alert('Previous Owner added successfully');

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