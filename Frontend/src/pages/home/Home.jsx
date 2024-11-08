import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/shared/Button";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    const handleBuy = (car) => {
        navigate("/payment", { state: { car } });
    };

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('/cars');
                if (Array.isArray(response.data)) {
                    setCars(response.data); // If the response data is an array of cars
                } else if (response.data.cars) {
                    setCars(response.data.cars); // If the cars are nested within the response
                } else {
                    setCars([]); // In case of unexpected structure
                }
            } catch (error) {
                console.error('Error fetching cars:', error);
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
                        {car.IMAGE_URL ? (
                            <img
                                src={`http://localhost:3000/uploads/${car.IMAGE_URL}`}
                                alt={`${car.CAR_NAME} image`}
                                className="car-image"
                                onError={(e) => e.target.src = '/path/to/placeholder/image.jpg'} // Fallback image
                            />
                        ) : (
                            <img
                                src='/path/to/placeholder/image.jpg' // Fallback if no image URL
                                alt="Placeholder"
                                className="car-image"
                            />
                        )}
                        <div className="car-details">
                            <h3>{car.CAR_NAME} {car.CAR_MODEL}</h3>
                            <p>Year: {car.MODEL_YEAR}</p>
                            <p>Price: ${car.PRICE}</p>
                            <Button
                                type="button"
                                name="Buy"
                                className="buy-button"
                                onClick={() => handleBuy(car)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
