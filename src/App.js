import Campaigns from "./components/Campaigns";
import CardSection from "./components/CardSection";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HereSection from "./components/HereSection";


function App() {
  return (
    <div className="App">
      <Header/>
      <HereSection/>
      <Categories/>
      <Campaigns/>
      <CardSection/>
      <Footer/>
    </div>
  );
}

export default App;
