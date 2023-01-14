import React, { useState } from "react";
import { Route, Navigate } from "react-router-dom";

function PrivateRouter({ children }) {
  const [stateUser, setStateUser] = useState(true);

  return stateUser ? children : <Navigate to="/login" />;
}
export default PrivateRouter;
