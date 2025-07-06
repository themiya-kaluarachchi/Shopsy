import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from './components/Products/Products';
import AOS from "aos"; 
import "aos/dist/aos.css"
import TopProducts from './components/TopProducts/TopProducts';

function App() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
        <Navbar />
        <Hero />
        <Products />
        <TopProducts />
    </div>
  )
}

export default App