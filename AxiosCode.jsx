import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function AxiosCode() {
  const [userData, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to handle errors

  // API call inside useEffect
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")  // fake API
      .then((response) => {
        setData(response.data); // Set data on successful API response
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((err) => {
        setError("Failed to fetch data"); // Handle errors
        setLoading(false); // Stop loading even if there's an error
        console.error(err);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="axios-container">
      <h1>Axios Tutorial</h1>

      {loading ? (
        <p>Loading...</p> // Display a loading indicator while fetching data
      ) : error ? (
        <p className="error">{error}</p> // Display error message if the API call fails
      ) : (
        userData.map((data) => (
          <div key={data.id} className="user-box">
            {data.name}
          </div>
        ))
      )}
    </div>
  );
}

export default AxiosCode;
