import NavBar from "../components/Navbar";
import Banner from "../components/Banner";
import BenefitCard from "../components/BenefitCard";
import Background from "../assets/Background.jpg";
import Footer from "../components/footer";
export default function LandingPage() {
  return (
    <div style={{ backgroundImage: `url(${Background})` }}>
      <NavBar />
      <Banner />
      <BenefitCard />
      <Footer />
    </div>
  );
}
