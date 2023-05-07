import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Analytics from './Pages/Analytics';
import CreateTicket from './Pages/CreateTicket';
import Tickets from './Pages/Tickets';
import Profile from './Pages/Profile'; 
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="content-wrapper">
      <Navbar className="nav-content" />
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route exact element={<Analytics />} path="/analytics" />
        <Route exact element={<CreateTicket />} path="/createTickets" />
        <Route exact element={<Tickets />} path="/tickets" />
        <Route exact element={<Profile />} path="/profile" />
      </Routes>
    </div>
  );
}

export default App;
