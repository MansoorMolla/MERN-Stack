import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiCallUsingHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/1');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); // Empty array means this effect runs once on mount

  return (
    <div>
      {data ? (
        <div>{JSON.stringify(data)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ApiCallUsingHook;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState(null);
//   const [isButtonClicked, setIsButtonClicked] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://dummyjson.com/products/1');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     if (isButtonClicked) {
//       fetchData();
//     }
//   }, [isButtonClicked]); // This effect runs when the button is clicked

//   const handleClick = () => {
//     setIsButtonClicked(true);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Load Data</button>
//       {isButtonClicked ? (
//         data ? (
//           <div>{JSON.stringify(data)}</div>
//         ) : (
//           <div>Loading...</div>
//         )
//       ) : null}
//     </div>
//   );
// };

// export default App;

