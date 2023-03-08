import Home from "./pages/Home"
import 'flowbite/dist/flowbite';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/profile" element={<Profile />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
