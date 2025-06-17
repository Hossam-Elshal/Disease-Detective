import About from "../../LandingPageModules/components/About/About";
import Blogs from "../../LandingPageModules/components/Blogs/Blogs";
import Contact from "../../LandingPageModules/components/Contact/Contact";
import Footer from "../../LandingPageModules/components/Footer/Footer";
import Header from "../../LandingPageModules/components/Header/Header";
import Services from "../../LandingPageModules/components/Services/Services";
import NavBar from "../NavBar/NavBar";

export default function MasterLayout() {
  return (
    <>
      <NavBar />
      <div className="pt-16 ">
        <Header />
        <About />
        <Services />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
