import Users from './Pages/Users/Users';
import { Navigate, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products';
import Orders from './Pages/Orders/Orders';

function App() {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/" element={<Navigate to="/users"/>} />
    </Routes>
  );
}

export default App;
