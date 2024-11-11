import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PreviousOwnerDetails.css';

const PreviousOwnerDetails = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchOwners = async () => {
      try {
        const response = await axios.get('/previous-owner-details');
        
        // Ensure response data is an array before setting it to state
        if (Array.isArray(response.data)) {
          setOwners(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setOwners([]); // Set an empty array if response format is incorrect
        }
      } catch (error) {
        console.error('Error fetching previous owners:', error);
        setOwners([]); // Set to empty array in case of error
      }
    };

    fetchOwners();
  }, []);

  return (
    <div className="previous-owner-table-container">
      <h2>Previous Owners</h2>
      <table className="previous-owner-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((owner) => (
            <tr key={owner.P_ID}>
              <td>{owner.P_ID}</td>
              <td>{owner.P_NAME}</td>
              <td>{owner.EMAIL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviousOwnerDetails;
