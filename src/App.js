import "./App.css";
import "flowbite";
import Navbar from "./component/navbar";
import Hero from "./component/Hero";
import Content from "./component/Content";
import Partner from "./component/Partner";
import Categories from "./component/Categories";
import Product from "./component/Product";
import Deals from "./component/Deals";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Partner />
      <Categories />
      <Product />
      <Deals />
      <Footer />
      <></>
    </>
  );
}

export default App;