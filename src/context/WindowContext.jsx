import { createContext, useEffect, useState } from "react";

const WindowContext = createContext({
  width: window.innerWidth,
  height: window.innerHeight,
  isMobile: window.innerWidth < 991
});

export const WindowContextProvider = ({ children }) => {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 991
  });

  const handleResize = () => {
		setWindowDimension({
			width: window.innerWidth,
			height: window.innerHeight,
      isMobile: window.innerWidth < 991
		});
	}

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return <WindowContext.Provider value={{ 
    ...windowDimension
  }}>
    {children}
  </WindowContext.Provider>
}


export default WindowContext;