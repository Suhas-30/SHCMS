import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';
import './Navigation.css';

const Navigation = () => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto:400,700', 'Open Sans']
            }
        });
    }, []);

    return (
        <nav className="navigation" id="main-navigation">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                {/* <li className="nav-item"><Link to="/previous-owner-form" className="nav-link">Previous Owner</Link></li> */}
                {/* <li className="nav-item"><Link to="/add-car-form" className="nav-link">Add Cars</Link></li> */}
                <li className="nav-item"><Link to="/customer-reg" className="nav-link">Customer Registration</Link></li>
                <li className="nav-item"><Link to="/customer-login" className="nav-link">Login</Link></li>
                <li className="nav-item"><Link to="/know-details" className="nav-link">know Your ID</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
