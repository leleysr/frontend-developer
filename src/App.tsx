import "./App.css";
import mainBannerDesktop from "./assets/main-banner-desk.png";
import mainBannerMobile from "./assets/main-banner-mobile-2.png";
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
            {
              desktopImage: mainBannerDesktop,
              mobileImage: mainBannerMobile,
            },
            {
              desktopImage: mainBannerDesktop,
              mobileImage: mainBannerMobile,
            },
            {
              desktopImage: mainBannerDesktop,
              mobileImage: mainBannerMobile,
            },
            {
              desktopImage: mainBannerDesktop,
              mobileImage: mainBannerMobile,
            },
            {
              desktopImage: mainBannerDesktop,
              mobileImage: mainBannerMobile,
            },
          ]}
        ></MainBanner>
        <ProductShelf></ProductShelf>
        <Footer></Footer>
      </CartProvider>
    </div>
  );
}

export default App;
