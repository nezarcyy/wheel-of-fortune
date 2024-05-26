import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import Contact from "./components/SubscriptionForm";
import StyledButton from "./components/StartButton";
import Wheel from "./components/Wheel";
import AlyfLogo from './assets/Alyf.svg';

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <Router>
            <div className="App">
                <div className="absolute top-0 left-0 mt-4 ml-6">
                    <img src={AlyfLogo} className="h-10" alt="logo" />
                </div>
                {init && (
                    <Particles
                        options={particlesOptions as ISourceOptions}
                    />
                )}
                <Routes>
                    <Route path="/" element={<StyledButton />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/wheel-of-fortune" element={<Wheel />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
