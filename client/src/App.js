import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Login from "./components/Login/login";
import Signup from "./components/Sign-up/Signup";
import PaymentSucess from "./components/paymentSucess/paymentSucess";

function App() {
    const [showHeaderFooter, setShowHeaderFooter] = useState(true);

    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Home/>}
                    />
                    <Route
                        path="/login"
                        element={<Login  />}
                    />
                     <Route
                        path="/sign-up"
                        element={<Signup  />}
                    />
                    <Route
                        path="/category/:id"
                        element={<Category  />}
                    />
                    <Route
                        path="/product/:id"
                        element={<SingleProduct />}
                    />
                    <Route path="/success" element={<PaymentSucess/>}/>
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
