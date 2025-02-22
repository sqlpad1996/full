import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://backend-full-mph7.onrender.com/api/your-endpoint") // Replace with actual endpoint
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Frontend</h1>
        <h2>Data from Backend:</h2>
        <p>{data ? JSON.stringify(data, null, 2) : "Loading..."}</p>
      </header>
    </div>
  );
}

export default App;
