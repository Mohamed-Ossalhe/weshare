import Home from "./pages/Home"
import 'flowbite/dist/flowbite';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Profile from "./pages/Profile.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import About from "./pages/About.jsx";
import Support from "./pages/Support.jsx";
import Navbar from "./components/navbar.jsx";
import {useState} from "react";

function App() {
  const [isDarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('mode')))
  const [ user, setUser ] = useState(null)
  const handleDarkMode = () => {
    setDarkMode(!isDarkMode)
    localStorage.setItem('mode', JSON.stringify(!isDarkMode))
  }
  return (
      <Router>
        <div className={isDarkMode ? "App h-screen overflow-hidden bg-slate-800 text-white" : "App h-screen overflow-hidden"}>
          <Navbar isDarkMode={isDarkMode} onToggle={handleDarkMode} user={user} setUser={setUser}/>
          <div id="content">
              <Routes>
                <Route exact path="/" element={<Home user={user} isDarkMode={isDarkMode} />} />
                <Route path="/login" element={<LoginPage isDarkMode={isDarkMode} />} />
                <Route path="/sign-up" element={<SignupPage isDarkMode={isDarkMode} />} />
                <Route path="/profile" element={<Profile user={user} />}/>
                <Route path="/post/:title" element={<PostDetails isDarkMode={isDarkMode}/>}/>
                <Route path="/about" element={<About isDarkMode={isDarkMode} />}/>
                <Route path="/support" element={<Support isDarkMode={isDarkMode} />}/>
              </Routes>
          </div>
        </div>
      </Router>
  )
}

export default App
