import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/landing/Navbar.tsx'
import Home from './components/landing/Home.tsx'
import Register from './components/auth/Register.tsx'
import Login from './components/auth/login.tsx'
import Logout from './components/auth/Logout.tsx'
import Error404 from './components/common/404Error.tsx'
import Booking from './components/booking/Booking.tsx'

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/booking" element={<Booking />} />
            {/* <Route path="/products" element={<Products />} />
          <Route path='/cart' element={
            // <ProtectedCart></ProtectedCart>
            <AuthGuard>
              <Cart></Cart>
            </AuthGuard>
          } />
          <Route path='/checkout' element={
            <AuthGuard>
              <Checkout></Checkout>
            </AuthGuard>
          } />
          <Route path='/user' element={
            <AuthGuard>
              <User></User>
            </AuthGuard>
          } />
          <Route path='/add-product' element={
            // <AuthGuard>
            <AddProduct></AddProduct>
            // </AuthGuard>
          } />
          <Route path='/order' element={
            // <AuthGuard>
            <Order></Order>
            // </AuthGuard>
          } /> */}
            <Route path='*' element={<Error404 />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </div>
    </>
  )
}

export default App
