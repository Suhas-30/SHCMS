import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/previous-owner-form">Previous Owner</Link></li>
                <li><Link to="/add-car-form">Add Cars</Link></li>
                <li><Link to="/customer-reg">Customer Registration</Link></li>
            </ul>
        </>
    );
}

export default Navigation;
