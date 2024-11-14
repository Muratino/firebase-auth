import Home from "pages/Home";
import { LoginPage } from "pages/Login";
import { RegisterPage } from "pages/Regist";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
export default App;
