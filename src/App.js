
import AllStudent from './component/AllStudent';
import Create from './component/Create';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Main from './component/Main';
import Regiester from './component/Regiester';
import Setting from './component/Setting';
import Type from './component/Type';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <div className="container">
      <Router>
         {/* Pass the user state to the Navbar */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Type" element={<Type />} />
          <Route path="/Regiester" element={<Regiester />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Create" element={<Create/>} />
          <Route path="/Setting" element={<Setting/>} />
          <Route path="/AllStudent" element={<AllStudent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



