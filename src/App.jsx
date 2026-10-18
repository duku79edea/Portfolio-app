import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import './App.css';
import About from "./components/About";

export default function App(){
    return (
        <>
            <NavBar />

            <main>
                <section id="hero">
                    <Hero />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="projects">
                    
                </section>

                <section id="skills">

                </section>

                <section id="contact">

                </section>
            </main>
        </>
    )
}