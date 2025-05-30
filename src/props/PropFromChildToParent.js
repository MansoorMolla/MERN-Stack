import React, { useState } from 'react';

const ParentComponent = () => {
  const [childData, setChildData] = useState('');

  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <ChildComponent onChildDataChange={handleChildData} />
      <p>Received from child: {childData}</p>
    </div>
  );
};

const ChildComponent = ({ onChildDataChange }) => {
  const sendDataToParent = (data) => {
    onChildDataChange(data);
  };

  return (
    <button onClick={() => sendDataToParent('Data from child')}>
      Click to send data to parent
    </button>
  );
};

export default ParentComponent;
