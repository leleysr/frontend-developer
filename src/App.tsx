import "./App.css";
import mainBannerDesktop from "./assets/main-banner-desk.png";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainBanner } from "./components/MainBanner/MainBanner";
import { ProductShelf } from "./components/ProductShelf/ProductShelf";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <Header></Header>
        <MainBanner
          banners={[
            mainBannerDesktop,
            mainBannerDesktop,
            mainBannerDesktop,
            mainBannerDesktop,
          ]}
        ></MainBanner>
        <ProductShelf></ProductShelf>
        <Footer></Footer>
      </CartProvider>
    </div>
  );
}

export default App;
