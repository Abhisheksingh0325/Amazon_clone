import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./Home"
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase"; 
import Footer from "./Footer";
import Notfound from "./Notfound";

function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
     })
    
     return () => {
      unsubscribe();
     }

  }, []);

  return (
    <BrowserRouter>
    <div className="app">
    <Routes>
    <Route path="/" element={<><Header /><Home /> <Footer/></>} />
    <Route path="/checkout" element={<> <Header/> <Checkout/> <Footer/> </> } />
    <Route path="/login_page" element={ <Login/> } />
    <Route path="/*" element={<Notfound/>} />
    </Routes>
     </div>
     </BrowserRouter>
  );
}

export default App;
