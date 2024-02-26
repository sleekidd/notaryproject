import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ThreeColumnRow from "./components/ThreeColumnRow";
import TwoColumn from "./components/TwoColumn";

function App() {
  return (
    <div>
      <div className="mx-auto">
        <Hero />
        <ThreeColumnRow />
        <TwoColumn />
        <HowItWorks />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;
