import Content from "./components/Content";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <Hero />
        <Content />
      </Main>
      <Footer />
    </>
  );
}

export default App;
