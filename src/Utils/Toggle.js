import React, { useState } from 'react';

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Component
      </button>
      {isVisible && <ComponentToToggle />}
    </div>
  );
};

const ComponentToToggle = () => {
  return (
    <div>
      This is the component to be toggled.
    </div>
  );
};

export default ToggleComponent;
