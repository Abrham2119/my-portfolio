import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import { motion } from "framer-motion";


const App = () => {
  const underMaintainance = true
  if(underMaintainance){
    return <div style={{backgroundColor:"white", display:"flex",flexWrap:"wrap",gap:"20px", alignItems:"center",justifyContent:"space-between",padding:"10px"}}> 
    <h1 style={{fontSize:"80px", color:"gray",textAlign:"center",[`@media (max-width:400px)`]:{backgroundColor:"blue"}}}>Under <div style={{color:"#ff3333"}}>Maintainance</div> <div style={{fontSize:"20px"}}>we will be back soon</div></h1>
      <img
        style={{width:"50vw",height:"95vh", objectFit:"cover"}}
        src="/maintainance.jpg"
        alt="maintainace-image"
      />
      </div>
  }
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
