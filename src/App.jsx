import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import CoinPacks from "./Components/Coinpack";
import Bankfee from "./Components/Bankfee";
import Publishfee from "./Components/Publishfee";
import Changepassword from "./Components/Changepassword";
import AdminLogin from "./Pages/login";
import Mainpage from "./Pages/Mainpage";
import Cartitems from "./Components/cartitems";
import ConfirmDetails from "./Components/Confirmdetails";
import ProcessingPayment from "./Components/Processingpayment";
import TransactionFailed from './Components/Transactionfailed'
import TransactionDetails from './Components/Transactiondetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coinpacks" element={<CoinPacks />} />
        <Route path="/bankfee" element={<Bankfee />} />
        <Route path="/publishfee" element={<Publishfee />} />
        <Route path="/changepassword" element={<Changepassword />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/cart" element={<Cartitems />} />
        <Route path="/confirm" element={<ConfirmDetails />} />
        <Route path="/processing" element={<ProcessingPayment />} />
        <Route path="/transaction-failed" element={<TransactionFailed />} />
        <Route path="/transaction-details" element={<TransactionDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
