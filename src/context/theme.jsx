import { createContext, useState } from 'react';

export const themeContext = createContext(null);

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light');
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
