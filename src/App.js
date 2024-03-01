import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import GalleryComp from "./components/Gallerycomp";
import ServicesComp from "./components/ServicesComp";
import FaqComp from "./components/FaqComp";
import FooterComp from "./components/FooterComp";

function App() {
  return <div>
    <HeroComp />

    {/*content*/}
    <NavbarComp /> 
    <GalleryComp />
    <ServicesComp />
    <FaqComp />

    <FooterComp />
  </div>;
}

export default App;
