import '../styles/Hero.css';
// import HeroImage from "../assets/derick.jpeg"

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
                I build modern, responsive web applications that provide seamless user experiences using React and other web technologies. 
            </p>
            <div className="hero-buttons">
                <button className="btn">View My Projects</button>
                <button className="btn">Get In Touch</button>
            </div>
        </div>
        {/* <div className='hero-image'>
            <img
                src={HeroImage}
                alt='profile-image'
                className='profile-img'
            />
        </div> */}
    </section>
  );
}
