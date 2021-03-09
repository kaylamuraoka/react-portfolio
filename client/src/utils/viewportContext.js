import React, { useState, useEffect, createContext } from "react";

const viewportContext = createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  /* This is a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

// the "useViewport" hook pulls the width and height values
// out of the context instead of calculating them itself */
const useViewportContext = () => {
  const { width, height } = React.useContext(viewportContext);
  // Return the width to be used in our components
  return { width, height };
};

export { ViewportProvider, useViewportContext };
