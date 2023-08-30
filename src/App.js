import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ECommerceHomePage from "./pages/ECommerceHomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Account from "./pages/Account";
import CheckOut from "./pages/CheckOut";
import Cart from "./pages/Cart";
import Error1 from "./pages/Error1";
import Wishlist from "./pages/Wishlist";
import CategoryDropdown from "./pages/CategoryDropdown";
import AccountDropdownWithAccount from "./pages/AccountDropdownWithAccount";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-details-page":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/account":
        title = "";
        metaDescription = "";
        break;
      case "/checkout":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/404-error":
        title = "";
        metaDescription = "";
        break;
      case "/wishlist":
        title = "";
        metaDescription = "";
        break;
      case "/category-dropdown":
        title = "";
        metaDescription = "";
        break;
      case "/account-dropdown-with-account":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ECommerceHomePage />} />
      <Route path="/product-details-page" element={<ProductDetailsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<Account />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/404-error" element={<Error1 />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/category-dropdown" element={<CategoryDropdown />} />
      <Route
        path="/account-dropdown-with-account"
        element={<AccountDropdownWithAccount />}
      />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default App;
