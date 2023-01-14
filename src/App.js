import Home from "./home/Home";
import Profile from "./views/Profile/Profile";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Layout from "./views/Layout/Layout";
import PrivateRouter from "./hooks/PrivateRouter";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRouter>
            <Layout />
          </PrivateRouter>
        }>
        <Route path="profile/:id" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
