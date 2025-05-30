// Custom Hooks in React (With API Call Example)
// A custom hook in React is a reusable function that extracts and shares logic between multiple components. It follows the naming convention of starting with use, like useFetchData.

// Why Use Custom Hooks?
// Helps in code reusability (avoids duplication).
// Makes components cleaner by separating logic from UI.
// Allows better organization of side effects (like API calls).


import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching data");
        let result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;


// import useFetch from "./useFetch";

// function DataComponent() {
//   const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {data.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }

// export default DataComponent;



// How This Works?
// useFetch accepts a url as an argument.
// Inside the hook:
// useState manages the API response (data), loading state (loading), and errors (error).
// useEffect fetches data when the component mounts or when the URL changes.
// It returns { data, loading, error }, which can be used in any component.
// In the DataComponent, we call useFetch(url) to get the API data.
// Advantages of Using Custom Hooks
// ✅ Makes components clean and focused only on UI.
// ✅ Reusability: We can use useFetch anywhere without rewriting API logic.
// ✅ Separation of concerns: Keeps API logic outside components, making it easier to maintain.