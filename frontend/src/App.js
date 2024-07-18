import React from "react";
import MyNavbar from "./components/MyNavbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import ChaseLogs from './pages/Logs/ChaseLogs';
import ChimeLogs from './pages/Logs/ChimeLogs';
import Paypal from "./pages/Paypal";
import Cashapp from "./pages/Cashapp";
import Methods from "./pages/Methods";
import Huntington from "./pages/Logs/Huntington";
import Dumps from "./pages/Dumps";
import Suntrustlogs from "./pages/Logs/Suntrustlogs";
import Boalogs from "./pages/Logs/Boalogs";
import Wellsfargo from "./pages/Logs/Wellsfargo";
import Navyfederallogs from "./pages/Logs/Navyfederallogs"; 
import Applelogs from "./pages/Logs/Applelogs";
import Pnclogs from "./pages/Logs/Pnclogs";
import Citilogs from "./pages/Logs/Citilogs";
import Alibabaleads from "./pages/leads/Alibabaleads";
import Canadaleads from "./pages/leads/Canadaleads";
import Chinaleads from "./pages/leads/Chinaleads";
import Hongkongleads from "./pages/leads/Hongkongleads";
import Singaporeleads from "./pages/leads/Singaporeleads";
import Usaleads from "./pages/leads/Usaleads";
import Bankscam from "./pages/Scams/Bankscam";
import Emailscam from "./pages/Scams/Emailscam";
import Cpanel from "./pages/spams/Cpanel";
import Phpmailer from "./pages/spams/Phpmailer";
import Rdp from "./pages/spams/Rdp";
import Smtp from "./pages/spams/Smtp";
import Mastercard from "./pages/CC/Mastercard";
import Visa from "./pages/CC/Visa";
import Canadafullz from "./pages/fullz/Canadafullz";
import Europefullz from "./pages/fullz/Europefullz";
import Ukfullz from "./pages/fullz/Ukfullz";
import Usafullz from "./pages/fullz/Usafullz";
import Softwares from "./pages/Softwares";
import Checkout from "./pages/Checkout";
import SignupScreen from "./pages/SignupScreen";
import SigninScreen from "./pages/SigninScreen";
import MyOrders from "./pages/Myorders";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <div style={{paddingTop: '70px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dumps" element={<Dumps />} />
          <Route path='/chaselogs' element={<ChaseLogs />} />
          <Route path='/chimelogs' element={<ChimeLogs />} />
          <Route path='/paypal' element={<Paypal />} />
          <Route path='/methods' element={<Methods />} />
          <Route path='/cashapp' element={<Cashapp />} />
          <Route path='huntington' element={<Huntington />} />
          <Route path='/citilogs' element={<Citilogs />} />
          <Route path='/navyfederallogs' element={<Navyfederallogs  />} />
          <Route path='/boalogs' element={<Boalogs />} />
          <Route path='/wellsfargo' element={<Wellsfargo />} />
          <Route path='/applelogs' element={<Applelogs />} />
          <Route path='/pnclogs' element={<Pnclogs />} />
          <Route path='/suntrustlogs' element={<Suntrustlogs />} />
          <Route path='/alibabaleads' element={<Alibabaleads />} />
          <Route path='/canadaleads' element={<Canadaleads />} />
          <Route path='/chinaleads' element={<Chinaleads />} />
          <Route path='/hongkongleads' element={<Hongkongleads />} />
          <Route path='/singaporeleads' element={<Singaporeleads />} />
          <Route path='/usaleads' element={<Usaleads />} />
          <Route path='/bankscam' element={<Bankscam />} />
          <Route path='/emailscam' element={<Emailscam />} />
          <Route path='/cpanel' element={<Cpanel />} />
          <Route path='/phpmailer' element={<Phpmailer />} />
          <Route path='/rdp' element={<Rdp />} />
          <Route path='/smtp' element={<Smtp />} />
          <Route path='/mastercard' element={<Mastercard />} />
          <Route path='/visa' element={<Visa />} />
          <Route path='/canadafullz' element={<Canadafullz />} />
          <Route path='/europefullz' element={<Europefullz />} />
          <Route path='/ukfullz' element={<Ukfullz />} />
          <Route path='/usafullz' element={<Usafullz />} />
          <Route path='/softwares' element={<Softwares />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/signin' element={<SigninScreen />} />
          <Route path='/signup' element={<SignupScreen />} />
          <Route path='/myorders' element={<MyOrders />} />
         </Routes>
        </div>
      </BrowserRouter >
    </>
  );
}

export default App
