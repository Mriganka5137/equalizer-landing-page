import "./App.css";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import mobile from "./assets/illustration-app.png";
import Card from "./components/Card";

function App() {
  return (
    <main className="container">
      <Header />
      <Feature />
      <Footer />
      <img src={mobile} alt="mobile" className="mobile" />
      <Card />
    </main>
  );
}

export default App;
