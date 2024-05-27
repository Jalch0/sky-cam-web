import CardInfo from "./components/CardInfo";
import Carousel  from "./components/Carousel";
import Chooseus from "./components/Chooseus";
import InfoChoose from "./components/InfoChoose";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Review from "./components/Review";

export default function Home() {


  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <Carousel/>
      </div>
        <div className="flex flex-col gap-11 py-24">
          <CardInfo order={1}/>
          <CardInfo order={2}/>
        </div>
        <Chooseus/>
        <InfoChoose />
        <Review />
        <Projects />
        <Products />
    </div>
  );
}
