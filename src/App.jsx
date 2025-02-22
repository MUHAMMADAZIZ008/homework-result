import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/main-layout/main-layout"
import Home from "./pages/home/home"
import ProductDetails from "./pages/product-details/product-details"

function App() {

  return <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  </>
}

export default App
