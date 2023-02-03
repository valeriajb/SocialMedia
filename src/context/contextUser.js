import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const changeUser = () => {
    setcurrentUser({
      id: 1,
      name: "Valeria",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, changeUser }}>
      {children}
    </UserContext.Provider>
  );
}
