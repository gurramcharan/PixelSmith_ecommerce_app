import "./App.css";
import Mockman from 'mockman-js';
import {Routes, Route} from "react-router-dom";
import {LandingPage} from "./pages/landing/LandingPage";
import {ProductPage} from "./pages/products/ProductPage";
import {WishlistPage} from "./pages/wishlist/WishlistPage";
import {CartPage} from "./pages/cart/CartPage";
import {LoginPage} from "./pages/login-signup/LoginPage";
import {SignUpPage} from "./pages/login-signup/signup/SignUpPage";
import { RequiresAuth } from "./components/RequiresAuth";
import { NotLoginPage } from "./pages/login-signup/NotLoginPage";
import { ProductDetail } from "./pages/productDetail/ProductDetail";
import { Navbar } from "./components/navbar/Navbar";


function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={< LandingPage />}/>
                <Route path="/mockman" element={< Mockman />}/>
                <Route path="/products" element={< ProductPage />}/>
                <Route path="/wishlist" element={<RequiresAuth>< WishlistPage /></RequiresAuth>}/>
                <Route path="/cart" element={<RequiresAuth> <CartPage/> </RequiresAuth>} />
                <Route path="/login" element={< LoginPage />}/>
                <Route path="/signup" element={< SignUpPage />}/>
                <Route path="/notlogin" element={< NotLoginPage />}/>
                <Route path="/product/:productId" element={< ProductDetail />}/>
            </Routes>
        </div>
    );
}

export default App;
