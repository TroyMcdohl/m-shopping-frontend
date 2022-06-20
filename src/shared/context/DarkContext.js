import React, { useState } from "react";

export const DarkContext = React.createContext();






const DarkModeProvider = (props) => {

  const [toggle,setToggle] = useState(false)

  const toggleHandler =()=>setToggle(prev => !prev)

  return (
    <DarkContext.Provider value={{toggleHandler,toggle}}>{props.children}</DarkContext.Provider>
  );
};

export default DarkModeProvider;
