import '../styles/Hero.css';
import GithubIcon from '../assets/github.png';
import LinkedinIcon from '../assets/linkedin.png';
import gameIcon from '../assets/game.png';
import instagramIcon from '../assets/instagram.png';

export default function Hero() {
  return (
      <section className="hero">
          <div className="hero-content">
              <span>HELLO, I'M </span>
              <h1>Derich <strong>Duku Wani</strong></h1>
              <h3>Full-Stack Developer | Problem Solver | Lifelong Learner</h3>
              <p>
                  I am a passionate full-stack developer with a knack for solving
                  complex problems and a commitment to lifelong learning.
                  I build modern, responsive web applications that provide seamless user experiences using React and
                  other web technologies.
              </p>
              <div className="hero-buttons">
                  <button className="btn">View My Projects</button>
                  <button className="btn">Get In Touch</button>
              </div>
          </div>
          <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img
                      src={LinkedinIcon}
                      alt="LinkedIn Profile"
                  />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <img
                      src={GithubIcon}
                      alt="GitHub Profile"
                  />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img
                      src={instagramIcon}
                      alt="GitHub Profile"
                  />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                  <img
                      src={gameIcon}
                      alt="GitHub Profile"
                  />
              </a>
          </div>
      </section>
  );
}
