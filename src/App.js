import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import mobile from "./assets/illustration-app.png";
import Card from "./components/Card";
import pattern1 from "./assets/bg-pattern-1.svg";

function App() {
  return (
    <main className="container">
      <Header />
      <Feature />
      <Footer />
      <img src={mobile} alt="mobile" className="mobile" />
      <Card />
      <img src={pattern1} alt="pattern" className="pattern1" />
    </main>
  );
}

export default App;
