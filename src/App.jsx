import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Product from "./components/Product/Product";
import { WindowContextProvider } from "./context/WindowContext";

const App = () => {

  return (
    <WindowContextProvider>
      <Layout>
        <Header />
        <Product/>
      </Layout>
    </WindowContextProvider>
  )
}

export default App
