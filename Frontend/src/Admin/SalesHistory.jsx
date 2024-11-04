import axios from "axios";
import { useEffect, useState } from "react";
import "./SalesHistory.css"; // Import the CSS file

const SalesHistory = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await axios.get("/sales");
                setSales(response.data); 
            } catch (error) {
                console.log("Error in fetching the sales", error);
            }
        };

        fetchSales(); 
    }, []);

    // Function to format the date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    };

    return (
        <div className="sales-history" id="salesHistoryContainer"> {/* Container for styling */}
            <h1 className="sales-title" id="salesHistoryTitle">Sales History</h1>
            {sales.length === 0 ? (
                <p className="no-sales-message" id="noSalesMessage">No sales data available.</p>
            ) : (
                <table className="sales-table" id="salesTable">
                    <thead>
                        <tr className="table-header">
                            <th>Date of Sale</th>
                            <th>Car ID</th>
                            <th>Payment ID</th>
                            <th>Customer ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((sale, index) => (
                            <tr className="table-row" key={index}>
                                <td className="table-cell">{formatDate(sale.DATE_OF_SALE)}</td> {/* Format the date */}
                                <td className="table-cell">{sale.CAR_ID}</td>
                                <td className="table-cell">{sale.PAY_ID}</td>
                                <td className="table-cell">{sale.C_ID}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SalesHistory;
