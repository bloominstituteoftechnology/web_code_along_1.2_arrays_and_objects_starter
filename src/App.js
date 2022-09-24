import React, { useState } from "react";
import _uglyData from "./utils/uglify";
import { sortByKey } from "./utils/sorting";
import { cleanDates, cleanUndefinedKeys } from './utils/data-clean';
import User from "./components/User";
import "./styles/App.css";

function App() {
  const [initialData] = useState(_uglyData);
  const [uglyData, setUglyData] = useState(initialData);

  const rtt = () => {
    document.documentElement.scrollTop = 0;
  };

  const resetData = () => {
    setUglyData(initialData);
  };
    
  const sortGeneric = (arr, key) => {
    const newData = sortByKey(arr, key);
    setUglyData(newData);
    return newData;
  };
  
  const cleanData = async (arr) => {
    const newData1 = await cleanUndefinedKeys(arr);
    const newData2 = await cleanDates(newData1);
    setUglyData(newData2);
    return newData2;
  };

  return (
    <div className="container">
      <h1>List of Users</h1>

      <div className="button-container">
        <button onClick={() => cleanData([...uglyData])}>
          Clean Data
        </button>

        <button onClick={() => resetData()}>Reset data</button>
      </div>
      
      <div className="button-container">
        <button onClick={() => sortGeneric([...uglyData], "email")}>
          Sort data by email
        </button>
        <button onClick={() => sortGeneric([...uglyData], "username")}>
          Sort data by username
        </button>
        <button onClick={() => sortGeneric([...uglyData], "lastName")}>
          Sort data by last name
        </button>
        <button onClick={() => sortGeneric([...uglyData], "dob")}>
          Sort data by dob
        </button>
        <button onClick={() => sortGeneric([...uglyData], "state")}>
          Sort data by state
        </button>
      </div>

      <div className="users-container">
        {uglyData.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>

      <p className="rtt" onClick={rtt}>
        Return to Top
      </p>
    </div>
  );
}

export default App;
