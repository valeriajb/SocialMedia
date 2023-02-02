import { useContext, useState, useEffect, createContext } from "react";

export const ContextDark = createContext();

export function ContextDarkProvider({ children }) {
    const [currentMode, setCurrentMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false); 

    const changeCurrentMode = () => {
        setCurrentMode(!currentMode); 
    };

    useEffect(() => {
        JSON.stringify(localStorage.setItem("darkMode", currentMode));
    }, [currentMode]);

    return (
        <ContextDark.Provider value={{ currentMode, changeCurrentMode }}>
            {children}
        </ContextDark.Provider>
    )
}
