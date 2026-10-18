import Derick from "../assets/der.jpg";
import "../styles/About.css";
export default function About() {
  return (
        <div className="about-me">
            <p className="about">
                <h3>About Me</h3>
                Hello! I'm a passionate and motivated aspiring software
                developer who enjoys building websites and applications that solve
                real-world problems. I have a strong interest in web development,
                especially creating clean, responsive, and user-friendly interfaces.
                I'm currently developing my skills in HTML, CSS, JavaScript, and
                Node.js, while learning how to build REST APIs and create functional
                web applications. I enjoy exploring new technologies, solving
                programming challenges, and turning ideas into practical digital
                experiences. My goal is to become a skilled full-stack developer,
                build meaningful projects, and continuously improve my technical and
                creative abilities. I believe in learning by doing, staying curious,
                and growing with every project I create. Welcome to my portfolio,
                where I share my journey, projects, skills, and passion for
                technology.
            </p>
            <div className="pic">
                <img 
                    className="image-pic" 
                    src={Derick} 
                    alt="Profile-Picture" 
                 />
             </div>
        </div>
  );
}
