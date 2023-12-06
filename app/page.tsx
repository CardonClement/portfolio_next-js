import Navbar from "./components/Navbar";
import APropos from "./components/APropos";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import TechnologiesEtOutils from "./components/TechnologiesEtOutils";

export default function Home() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <APropos />
      <Projets />
      <TechnologiesEtOutils />
      <Contact />
    </main>
  );
}