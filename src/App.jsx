import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.scss';
import DefaultLayout from './layout/DefaultLayout';
import ProductsAdmin from './pages/admin/ProductsAdmin';
import HomeAdmin from './pages/admin/HomeAdmin';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import AdminLayout from './layout/AdminLayout';
import Login from './pages/Login';
import ProductsCreate from './pages/admin/ProductsCreate';
import ProductsUpdate from './pages/admin/ProductsUpdate';

// Kontrol af login + afvisning til admin-del kan sættes her - eller i AdminLayout

function App () {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- PUBLIC del - med DefaultLayout */ }
        <Route path="/" element={ <DefaultLayout /> }>
          <Route index element={ <Home /> } />
          <Route path="contact" element={ <Contact /> } />
          <Route path="products" element={ <Products /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
        {/* --- ADMIN del - med AdminLayout */ }
        <Route path="/admin" element={ <AdminLayout /> }>
          <Route index element={ <HomeAdmin /> } />
          <Route path="productsadmin" element={ <ProductsAdmin /> } />
          <Route path="productscreate" element={ <ProductsCreate /> } />
          <Route path="productsupdate/:id" element={ <ProductsUpdate /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;