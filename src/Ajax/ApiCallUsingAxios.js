import React, { useState } from 'react';
import axios from 'axios';

const AxiosCall = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://dummyjson.com/products/1');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Hi, Welcome to React Learning</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>Data: {JSON.stringify(data)}</div>
      ) : null}
    </div>
  );
};

export default AxiosCall;
