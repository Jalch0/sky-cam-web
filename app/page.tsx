import CardInfo from "./components/CardInfo";
import Carousel  from "./components/Carousel";
import Chooseus from "./components/Chooseus";
import Contact from "./components/Contact";
import InfoChoose from "./components/InfoChoose";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Review from "./components/Review";

export default function Home() {


  return (
    <div className="w-fullflex flex-col items-center">
       <div className="">
        <Carousel/>
      </div>
        <CardInfo/>
        <Chooseus/>
        <InfoChoose />
        <Review />
        <Projects />
        <Products />
        <Contact />
        
    </div>
  );
}
