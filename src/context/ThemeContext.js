import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // const [theme, setTheme] = useState("light");

   // Load the initial theme from localStorage or default to 'light'
   const [theme, setTheme] = useState(localStorage.getItem("selectedTheme") || "dark");

   // Whenever the theme changes, update localStorage and apply the theme
   useEffect(() => {
     localStorage.setItem("selectedTheme", theme);
     document.body.setAttribute("data-theme", theme);
   }, [theme]);
 

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

//custom hook
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
