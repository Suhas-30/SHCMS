import { useRef, useState } from "react"
import Button from "../shared/Button"
import axios from "axios"
const CustomerRegistration = ()=>{

    const cuNameRef = useRef(null)
    const cuPhRef = useRef(null)
    const cuEmailRef = useRef(null)
    const cuStreetRef = useRef(null)
    const cuCityRef = useRef(null)
    const cuStateRef = useRef(null)
    const cuCountryRef = useRef(null) 
    const cuPasswordRef = useRef(null)

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


    const handleRegistrationCu = async(e) =>{
        e.preventDefault();
        const cuName = cuNameRef.current.value;
        const cuPhone = cuPhRef.current.value;
        const cuEmail = cuEmailRef.current.value;
        const cuStreet = cuStreetRef.current.value;
        const cuCity = cuCityRef.current.value;
        const cuState = cuStateRef.current.value;
        const cuCountry = cuCountryRef.current.value;
        const cuPassword = cuPasswordRef.current.value;

        if(!cuName || !cuPhone || !cuEmail || !cuStreet || !cuState || !cuCountry || !cuPassword)
        {
            alert('All fields are required');
            setErrorMessage("All fileds are required");
            return ;
        }

        const custoData = {
            name: cuName,
            phone: cuPhone,
            email: cuEmail,
            password:cuPassword,
            address: {
                street: cuStreet,
                city: cuCity ,
                state: cuState,
                country: cuCountry
            }

        };

        try{
            const response = await axios.post('/customer-reg', custoData);
            console.log(response.data);
            // alert("Registration is Successful");
            setSuccessMessage(`Registration is successful. Your ID: ${response.data.data.id}`); 
            setErrorMessage("");

        }catch(error){
            console.error('Error in Registration', error);
            // alert('Registration is Failed!');
            setErrorMessage("Registration has Failed!");
            setSuccessMessage("");
        }

    }

    return(
        <>
            <h1> Customer Registration</h1>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

            <form onSubmit={handleRegistrationCu}>
            <label>Name:
                <input type="text" ref={cuNameRef} required />
            </label>

            <label>Phone:
                <input type="tel" ref={cuPhRef} required />
            </label>

            <label>Email:
                <input type="email" ref={cuEmailRef} required />
            </label>

            <label>Street:
                <input type="text" ref={cuStreetRef} />
            </label>

            <label>City:
                <input type="text" ref={cuCityRef} />
            </label>

            <label>State:
                <input type="text" ref={cuStateRef} />
            </label>

            <label>Country:
                <input type="text" ref={cuCountryRef} />
            </label>
            <label>Password:
                <input type="text" ref={cuPasswordRef}/>
            </label>
            <Button type="submit" name="Owner"></Button>

            </form>
        </>
    )
}

export default CustomerRegistration;