import { useEffect } from "react";
import { Link } from "react-router-dom";
import './AdminNav.css'; // Import your CSS file

const AdminNav = () => {
    useEffect(() => {
        // Any side-effects can be placed here
    }, []);

    return (
        <nav id="main-navigation">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/admin" className="nav-link">Admin Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/add-car-form" className="nav-link">Add Cars</Link>
                </li>
                <li className="nav-item">
                    <Link to="/previous-owner-form" className="nav-link">Previous Owner</Link>
                </li>
                <li className="nav-item">
                    <Link to="/sales" className="nav-link">Sales History</Link>
                </li>
            </ul>
        </nav>
    );
}

export default AdminNav;
