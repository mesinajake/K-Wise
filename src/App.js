import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";
import Order from "./Order";
import Transaction from "./Transac-components"; // Ensure correct path
import PCParts from "./PC-Parts";
import PCBuild from "./PC-Build";
import PCServices from "./PC-Services";
import AssistedService from "./AssistedService";
import ProductPage from "./ProductPage";
import OrderSummary from "./OrderSummary";
import PaymentWindow from "./PaymentWindow";
import QueuingWindow from "./QueuingWindow";
import QueuingDisplay from "./QueuingDisplay";
import OnlineBanking from "./OnlineBanking";
import CreditCard from "./CreditCard";
import PentagonStats from "./PentagonStats";
import PurposeOfUse from "./PurposeOfUse";
import PCBuildCategory from "./PCBuildCategory";
import PriceRange from "./PriceRange";
import ProductList from "./ProductList";
import PCCustomized from "./PCCustomized";
import ProductPageCustom from "./ProductPageCustom"

//Here is the Starting point of a Kiosk System, where we can see the route in every page.
function Home() {
  return (
    <div className="App">
      <header className="Store-name">
        <img src={logo} alt="PC Wise" width={328} height={328} />
        <h1>PC WISE</h1>
        <p>MAXIMIZE PERFORMANCE, MINIMIZE COST.</p>

        <div className="start-up">
          <Link to="/order">
            <button>TAP ANYWHERE TO START</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/pc-parts" element={<PCParts />} />
        <Route path="/pc-build" element={<PCBuild />} />
        <Route path="/pc-services" element={<PCServices />} />
        <Route path="/assisted-service" element={<AssistedService />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/payment-window" element={<PaymentWindow />} />
        <Route path="/queuing-window" element={<QueuingWindow />} />
        <Route path="/queuing-display" element={<QueuingDisplay />} />
        <Route path="/online-banking" element={<OnlineBanking />} />
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="/pentagon-stats" element={<PentagonStats />} />
        <Route path="/pcbuild-purpose" element={<PurposeOfUse />} />
        <Route path="/pcbuild-category" element={<PCBuildCategory />} />
        <Route path="/priceRange" element={<PriceRange />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/pc-customized" element={<PCCustomized />} />
        <Route path="/productpage-custom" element={<ProductPageCustom />} />
      </Routes>
    </Router>
  );
}

export default App;



