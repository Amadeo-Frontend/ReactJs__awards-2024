import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
