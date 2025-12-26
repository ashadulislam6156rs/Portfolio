import React, {  useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

 

  return { setTheme, theme };
};

export default useTheme;
