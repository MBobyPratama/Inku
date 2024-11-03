import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import LoginCard from "../components/LoginCard";
import BenefitCard from "../components/BenefitCard";
import Background from "../assets/background.jpg";
import Footer from "../components/footer";
export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <Banner />
      <LoginCard />
      <BenefitCard />
      <Footer />
      <img src={Background} className="absolute -z-10 top-0 img-cover" />
    </div>
  );
}
