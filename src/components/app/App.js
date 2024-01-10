
import Header from "../header/Header";
import Promo from "../promo/Promo";
import Food from "../food/Food";
import Footer from "../footer/Footer";
import Search from "../search/Search";
function App() {
  return (
    <div className="container">
    <Header/>
    <Promo/>
    <Search/>
    <Food/>
    <Footer/>
    </div>
  );
}

export default App;
