import { ConfigProvider } from "antd";
import Header from "../layout/Header";
import ProductList from "../pages/ProductList";

function App() {
  return (
    <div className="App">
      <ConfigProvider
      // theme={{
      //   token: {
      //     colorPrimary: "",
      //     colorText: "black",
      //   },
      // }}
      >
        <Header />
        <ProductList />
      </ConfigProvider>
    </div>
  );
}

export default App;
