import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Checkout from "./pages/checkout/checkout";
import Product from "./pages/product/product";
import ForgotPassword from "./pages/login/forgotPassword";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import firebase, { FirebaseContext } from "./firebase";
import useAuth from "./hooks/useAuth";
import useCart from "./hooks/useCart";
import Admin from "./pages/admin/admin";
import useInventory from "./hooks/useInventory";
import InventoryContext from "./data/inventoryContext";
import Home from "./pages/home/home";
import AuthRoute from "./routes/authRoute";
import PageNotFound from "./pages/pageNotFound/pageNotFound";

function App() {
  const user = useAuth();
  const cartObject = useCart(firebase.db);
  const inventoryObject = useInventory(firebase.db);

  return (
    <Router>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <InventoryContext.Provider
          value={{ ...cartObject, ...inventoryObject }}
        >
          <div className="h-screen flex flex-col w-screen">
            <Header />
            <main className="flex-1">
              <Switch>
                <AuthRoute path="/" exact>
                  <Home />
                </AuthRoute>
                <Route path="/login" component={Login} />
                <Route path="/forgot" component={ForgotPassword} />
                <Route path="/checkout" component={Checkout} />
                <AuthRoute path="/cart">
                  <Cart />
                </AuthRoute>
                <AuthRoute path="/products/:retailer?">
                  <Product />
                </AuthRoute>
                <Route path="/admin" component={Admin} />
                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
            </main>
            <Footer />
          </div>
        </InventoryContext.Provider>
      </FirebaseContext.Provider>
    </Router>
  );
}

export default App;
