import React, { Suspense, lazy, useState } from "react";

// Lazy load the ChildComponent
const LazyComponent = lazy(() => import("./ChildComponent"));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Lazy Loading Example</h1>

      <button onClick={() => setShow(true)}>Load Component</button>

      <Suspense fallback={<p>Loading...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
}

export default App;




// import React from "react";

// function ChildComponent() {
//   return <h2>🚀 This is the Lazy Loaded Component!</h2>;
// }

// export default ChildComponent;




// Initial Load → The ChildComponent is not loaded.
// Click "Load Component" → Only then does the ChildComponent get downloaded and displayed.
// While loading, the Suspense fallback (Loading...) appears.