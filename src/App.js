import "./App.css";

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Description from "./components/Description";
import CollectionCards from "./components/CollectionCards";
import Collections from "./components/Collections";
import { CharacterContent } from "./components/CharacterContent";
import { ProjectContent } from "./components/ProjectContent";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import { Character } from "./components/pages/Character";
import { Collection } from "./components/pages/Collection";
import { CryptoPrices } from "./components/pages/CryptoPrices";

function App() {
  return (
     <Router>
        <Navbar />
    <main className="container">
       <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Description />
                <CollectionCards />
                <Collections />
                <CharacterContent />
                <ProjectContent />
                <Roadmap />
                <Footer />
              </>
            }
          />
          
          {/* Character page route */}
          <Route path="/character" element={<Character />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/cryptoPrices" element={<CryptoPrices/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;