import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VendorDashboard from './pages/vendor/VendorDashboard';
import CartPage from './pages/vendor/CartPage';
import PartnerDashboard from './pages/partner/PartnerDashboard';
import AppLayout from './layouts/AppLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/vendor" element={<AppLayout mode="vendor" />}>
        <Route index element={<VendorDashboard />} />
        <Route path="cart" element={<CartPage />} />
      </Route>

      <Route path="/partner" element={<AppLayout mode="partner" />}>
        <Route index element={<PartnerDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
