import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import LoginCard from "../components/LoginCard";
import BenefitCard from "../components/BenefitCard";
import Background from "../assets/background.jpg";
import Footer from "../components/footer";
import Signup from "../components/signup";
import { useState } from "react";
export default function LandingPage() {
  const [login, setLogin] = useState(true);
  return (
    <div style={{ backgroundImage: `url(${Background})` }}>
      <NavBar />
      <Banner />
      <BenefitCard />
      <Footer />
    </div>
  );
}
