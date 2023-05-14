import React, { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import Cart from "./components/Cart";
import { CartContextProvider } from "./store/CartContext";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar setTheme={setTheme} theme={theme} />}>
        <Route index element={<ProductContainer theme={theme} />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <CartContextProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </CartContextProvider>
  );
};

export default App;
