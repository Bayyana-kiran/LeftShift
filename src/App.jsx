import DotAnimation from "./DotAnimation"; // Import the DotAnimation component
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup"

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* DotAnimation canvas */}
      <DotAnimation className="dot-animation-canvas" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<SignupPage />} />
          {/* <Route path="/files" element={<Files />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
