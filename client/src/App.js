import { Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/css/index.css';

import { AuthProvider } from './services/Auth';
import UserRoute from './routes/userRoute';

import Layout from './components/Layout';
import Home from './pages/Home';
import ScrimList from './pages/ScrimList';
import Scrim from './pages/Scrim';
import History from './pages/History';
import CreateScrim from './pages/CreateScrim/CreateScrim';

import BNET_AUTH from './services/bnet_auth';
import Profile from './pages/Profile';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="scrims" element={<ScrimList/>}/>
          <Route path="scrims/:scrim_id" element={<Scrim/>}/>
          
          // USER AUTHENTICATED ROUTES
          <Route element={<UserRoute/>}>
            <Route path="create-scrim" element={<CreateScrim/>}/>
            <Route path="history" element={<History/>}/>
            <Route path="profile" element={<Profile/>}/>
          </Route>
        </Route>


        // BNET ROUTES
        <Route path="/bnet/redirect" element={<BNET_AUTH/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
