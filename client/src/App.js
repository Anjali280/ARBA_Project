import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import Register from "./pages/register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
