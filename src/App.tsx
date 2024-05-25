import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import Contact from "./components/SubscriptionForm";
import StyledButton from "./components/StartButton";

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
                {init && (
                    <Particles
                        options={particlesOptions as ISourceOptions}
                    />
                )}
                <Routes>
                    <Route path="/" element={<StyledButton />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
