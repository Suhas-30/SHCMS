import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/shared/Button"; 
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    const handleBuy = (car)=>{
        navigate("/payment", {state: {car}});
    }

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('/cars');
                console.log(response.data);

                if (Array.isArray(response.data)) {
                    setCars(response.data);
                } else if (response.data.cars) {
                    setCars(response.data.cars);
                } else {
                    console.error("Expected an array but got:", response.data);
                    setCars([]);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCars();

        
    }, []);

    return (
        <div className="container">
            <h1>Welcome To SHCMS</h1>
            <h2>Car Listings</h2>
            <div className="card-container">
                {cars.map((car) => (
                    <div className="card" key={car.CAR_ID}>
                        <h3>{car.CAR_NAME} {car.CAR_MODEL}</h3>
                        <p>Year: {car.MODEL_YEAR}</p>
                        <p>Price: ${car.PRICE}</p>
                        {/* Using existing Button component, but it does nothing */}
                        <Button type='button' name="Buy" className="buy-button" onClick={() => {handleBuy(car)}} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
