import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Product from "./components/Product/Product";
import { WindowContextProvider } from "./context/WindowContext";
import CartContext, { CartContextProvider } from "./context/CartContext";


const App = () => {
  return (
    <WindowContextProvider>
      <CartContextProvider>
        <Layout>
          <Header />
          <Product/>
        </Layout>
      </CartContextProvider>
    </WindowContextProvider>
  )
}

export default App
