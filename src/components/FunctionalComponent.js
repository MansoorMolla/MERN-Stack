// functional component, classs component
// passing prop, default prop, prop check
// conditional rendering( ternary operator, if, ampercend)
// list and keys
// useState, useReducer, useEffect, useRef, useContext, useCallback, useMemo
// useCallback hook performence optimization technique
// controlled and uncontrolled component
// toggle
// api call axios and useeffect (ajax call)
// lazy loading
// create form and show form data
// custom hook (api calling)
// Todo list



import React, { useState, useEffect } from "react";

const FC = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log("Raw Response:", response); // ✅ log raw response

        if (!response.ok) throw new Error("Error occurred");

        const result = await response.json();
        console.log("Parsed Result:", result); // ✅ log parsed JSON

        setData(result);
      } catch (error) {
        console.log("Error:", error.message); // ✅ log error
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>API Data</h1>
      <ul>
        {data.map((ele) => (
          <li key={ele.id}>{ele.title}</li>
        ))}
      </ul>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* ✅ show error properly */}
    </>
  );
};

export default FC;
